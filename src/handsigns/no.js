import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const noSign = new GestureDescription('No');

//Thumb
noSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.7);
noSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.70);
// noSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
noSign.addCurl(Finger.Index, FingerCurl.NoCurl, 0.7);
noSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);
// noSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
noSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.7);
noSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);
// noSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
noSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.7);

//Pinky
noSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.7);

