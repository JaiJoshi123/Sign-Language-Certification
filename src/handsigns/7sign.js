import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sevenSign = new GestureDescription('Seven');

//Thumb
sevenSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.7);

//Index
sevenSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sevenSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
sevenSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sevenSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
sevenSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.7);

//Pinky
sevenSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
sevenSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
