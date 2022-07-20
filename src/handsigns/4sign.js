import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fourSign = new GestureDescription('Four');

//Thumb
fourSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

//Index
fourSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
fourSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
fourSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
fourSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
