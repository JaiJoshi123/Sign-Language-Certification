import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const eightSign = new GestureDescription('Eight');

//Thumb
eightSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.7);

//Index
eightSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
eightSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
eightSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.7);

//Ring
eightSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
eightSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
eightSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
eightSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
