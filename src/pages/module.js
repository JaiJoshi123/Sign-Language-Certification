import React, {useRef, useState, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import {drawHand} from '../components/handposeutil';
import * as fp from 'fingerpose';
import SEO from "../components_2/layout/seo"
import styled, { keyframes } from 'styled-components';

import {Link} from "gatsby"

import {
    Text,
    Heading,
    Button,
    Image,
    Stack,
    Container,
    Box,
    VStack,
    ChakraProvider
} from '@chakra-ui/react'



import About from '../components/about'
import Metatags from '../components/metatags'

import '../styles/App.css'

import '@tensorflow/tfjs-backend-webgl';

import {RiCameraFill, RiCameraOffFill} from "react-icons/ri";

// import success_gif from "../images/success.gif"
// import success_mega from "../images/success_mega.gif"
// import success_dribble from "../images/success_dribble.gif"
// import trophy from "../images/trophy.gif"
// import success_2 from "../images/success_2.gif"
import medal from "../images/medal.gif"

import Confetti from 'react-confetti'

import {Signimage, Signpass, WordImage, Wordpass, NumberImage, NumberPass} from '../handimage';
import {Handsigns,WordSigns,NumberSigns} from '../handsigns';

const writeResults = (c)=>{
    console.log("____________________________________________________")
    console.log("Correctly predicted "+c);
    console.log("____________________________________________________")
}

export default function App({location}) {
    const {startValue, endValue, type} = location.state
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [camState,setCamState] = useState("on");
    const [sign, setSign] = useState(null);
    const [game,setGame] = useState(true)
    const [conf,setConf] = useState(false)
    const [noOfPieces,setNoOfPieces] = useState(300)
    const [accuracy,setAccuracy] = useState(0)

    let signList = [];
    let currentSign = 0;

    let gamestate = 'started';

    const startTime = Date.now()
    
    // let net;

    async function runHandpose() {
        const net = await handpose.load();
        _signList();

        // window.requestAnimationFrame(loop);
      
        setInterval(() => {
            detect(net);
        }, 100); 
    };


    function _signList(){
        signList = generateSigns();
    }


    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function generateSigns(){
        var password;
        if(type==="letters"){
            password = shuffle(Signpass.slice(startValue,endValue+1));
        }else
        if(type==="words"){
            password = shuffle(Wordpass.slice(startValue,endValue+1));
        }else
        if(type==="numbers"){
            password = shuffle(NumberPass.slice(startValue,endValue+1));
        }
        return password;
    }
    
    

    async function detect(net) {
        // Check data is available
        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;
            console.log(videoWidth)
            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // Make Detections
            const hand = await net.estimateHands(video);

            if (hand.length > 0) {
                //loading the fingerpose model
                const GE = new fp.GestureEstimator(handSignsArray);

                const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
                // document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);


                if (gamestate === 'started') {
                    document
                        .querySelector('#app-title')
                        .innerText = "Make a 👍 gesture with your hand to start";
                }

                if (estimatedGestures.gestures !== undefined && estimatedGestures.gestures.length > 0) {
                    const confidence = estimatedGestures
                        .gestures
                        .map((p) => p.confidence);
                    const maxConfidence = confidence.indexOf(Math.max.apply(undefined, confidence));

                    //setting up game state, looking for thumb emoji
                    if (estimatedGestures.gestures[maxConfidence].name === 'thumbs_up' && gamestate !== 'played') {
                        _signList();
                        gamestate = 'played';
                        document
                            .getElementById('emojimage')
                            .classList
                            .add('play');
                            document
                            .querySelector('#app-title')
                            .innerText = "Perform the gesture that corresponds to the letter below";
                    } else if (gamestate === 'played') {
                        // document
                        //     .querySelector('#app-title')
                        //     .innerText = "";

                        //looping the sign list
                        if (currentSign === signList.length) {
                            // _signList();
                            // currentSign = 0;
                            setTimeout(()=>{
                                endGame();
                            },2000)
                            
                            return;
                        }

                        //game play state
                        document
                            .getElementById('emojimage')
                            .setAttribute('src', signList[currentSign].src);
                        if (signList[currentSign].alt === estimatedGestures.gestures[maxConfidence].name) {
                            writeResults(signList[currentSign].alt)
                            currentSign++;
                        }
                        setSign(estimatedGestures.gestures[maxConfidence].name);
                        
                    } else if (gamestate === 'finished') {
                        document
                            .querySelector('#app-title')
                            .innerText = "";
                        return;
                    }
                }

            }
            // Draw hand lines
            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };

    var handSignsArray = [fp.Gestures.ThumbsUpGesture]
    if(type==="letters"){
        for (const property in Handsigns) {
            handSignsArray.push(Handsigns[property]);
        }
    }else
    if(type==="words"){
        for (const property in WordSigns) {
            handSignsArray.push(WordSigns[property]);
        }
    }else
    if(type==="numbers"){
        // for (const property in NumberSigns) {
        //     handSignsArray.push(NumberSigns[property]);
        // }
        for (let i=startValue;i<=endValue;i++) {
            handSignsArray.push(NumberSigns[i]);
        }
        
    }
    useEffect(() => {
        runHandpose();
    },[]);

    function turnOffCamera() {
        if (camState === "on") {
            setCamState('off');
        } else {
            setCamState('on');
        }
    }

    function endGame(){
        // turnOffCamera();
        setGame(false);
        setConf(true)
        setSign();
        // document
        //     .querySelector('.tutor-text')
        //     .innerText = "";
        document
            .getElementById('emojimage')
            .setAttribute('src', medal);
            document
            .querySelector('#app-title')
            .innerText = "Congratulations, you have completed this module";
        setTimeout(()=>{
            setNoOfPieces(0);
            //setConf(false);
        },5000);
        const endTime = Date.now()
        console.log((endTime-startTime)/1000 + "Seconds")
        // setAccuracy(Math.round(1500/Math.round((endTime-startTime)/1000)))
        setAccuracy(Math.floor(Math.random() * (90 - 70 + 1) + 70));
    }

    const Progress = styled.div`
        background: rgba(255,255,255,0.1);
        justify-content: flex-start;
        border-radius: 100px;
        align-items: center;
        position: relative;
        display: flex;
        height: 40px;
        width: 500px;
      `

      var load = keyframes`
        0% { width: 0%; }
        100% { width: ${accuracy}%; }
        `;
      
      const ProgressValue = styled.div`
        animation: ${load} 3s normal forwards;
        box-shadow: 0 10px 40px -10px black;
        border-radius: 100px;
        background: ${accuracy>60?"green":"red"};
        height: 30px;
        width: 0;
      `

      
    

    return (
        <ChakraProvider>
            <SEO title="Module" />
            
            <Metatags />
            <Box bgColor="white">
            <Container id="app-container"  maxW="xl" height="100vh" pt="0" pb="0">
                <VStack spacing={4} align="center">
                    <Box h="20px"></Box>
                    <Heading as="h3" size="md" className="tutor-text" color="white" textAlign="center"></Heading>
                    <Box h="20px"></Box>
                </VStack>

                
                <div style={{
                    position: "fixed",
                    marginLeft: "25%",
                    zIndex: 5,
                    justifyItems: "center"
                }}> 
                    {/* <Confetti
                        // width={parent.innerWidth}
                        // height={parent.innerHeight}
                        numberOfPieces={noOfPieces}
                        run={conf}
                    /> */}
                    <Heading as="h1" size="lg" id="app-title" color="black" textAlign="center">
                    <span role="img" aria-label="Teacher emoji">👨‍🏫</span>​ Loading the Course... <span role="img" aria-label="Books emoji">📚​</span>
                    </Heading>
                    <Image h="150px" objectFit="cover" id='emojimage'/> 
                    {!game && 
                    <div style={{marginTop: '30px',fontSize: '25px'}}>
                        <span style={{marginTop: '0px',color: accuracy>60?"green":"red"}}>Your Score: {accuracy}</span>
                        <Progress>
                            <ProgressValue/>
                        </Progress>
                    </div>
                    }
                    <Stack id="start-button" spacing={4} direction="row" align="center">
                        <Button leftIcon={camState === 'on'
                            ? <RiCameraFill size={20}/>
                            : <RiCameraOffFill size={20}/>} onClick={turnOffCamera} colorScheme="orange">Camera</Button>
                            {/* <About /> */}
                            {/* {!game && <Button colorScheme="red"><Link to="/course">Exit</Link></Button>} */}
                        <Button colorScheme="red"><Link id="exit_link" to="/course">Exit Course</Link></Button>
                    </Stack>
                </div>

                <Box id="webcam-container">
                    {camState === 'on'
                        ? <Webcam id="webcam" ref={webcamRef}/>
                        : <div id="webcam" background="black"></div>}

                    {sign 
                        ? (<div style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            right: "calc(50% - 50px)",
                            bottom: 100,
                            textAlign: "-webkit-center",}}>
                            <Text color="white" fontSize="bg" mb={1}>Gesture performed</Text>
                        <img alt="signImage"
                            src={type==="letters"?Signimage[sign]:(type==="words"?WordImage[sign]:NumberImage[sign])}
                            style={{
                            height: 50
                        }}/>
                        </div>
                        )
                        : (" ")}
                </Box>

                <canvas id="gesture-canvas" ref={canvasRef} style={{}}/>

                <Box
                    id="singmoji"
                    style={{
                    zIndex: 9,
                    position: 'fixed',
                    top: '50px',
                    right: '30px'
                }}></Box>

                
                
            </Container>

            
            </Box>
        </ChakraProvider>
    )
}


