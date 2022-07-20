import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const loveSign = new GestureDescription('Love');

//Thumb
loveSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);
// loveSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
loveSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
loveSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
// loveSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
loveSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);

//Ring
loveSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);

//Pinky
loveSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
loveSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

