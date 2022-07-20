import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const nineSign = new GestureDescription('Nine');

//Thumb
nineSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.7);

//Index
nineSign.addCurl(Finger.Index, FingerCurl.FullCurl, 0.7);

//Middle
nineSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
nineSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
nineSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
nineSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
nineSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
nineSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
