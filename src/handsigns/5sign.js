import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fiveSign = new GestureDescription('Five');

//Thumb
fiveSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fiveSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

//Index
fiveSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
fiveSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
fiveSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fiveSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
fiveSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fiveSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
fiveSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fiveSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);
