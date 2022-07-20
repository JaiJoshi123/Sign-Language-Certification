import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const twoSign = new GestureDescription('Two');

//Thumb
twoSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

//Index
twoSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
twoSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
twoSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
twoSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
twoSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);

//Pinky
twoSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);

