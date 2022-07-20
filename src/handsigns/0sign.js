import {Finger, FingerCurl, GestureDescription} from 'fingerpose';

export const zeroSign = new GestureDescription('Zero');

//Thumb
zeroSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);


//Index
zeroSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);


//Middle
zeroSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);


//Ring
zeroSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);


//Pinky
zeroSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
