import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const oneSign = new GestureDescription('One');

//Thumb
oneSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

//Index
oneSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
oneSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
oneSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);

//Ring
oneSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);

//Pinky
oneSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);

