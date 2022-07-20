import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const threeSign = new GestureDescription('Three');

//Thumb
threeSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

//Index
threeSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
threeSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
threeSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
threeSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
threeSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
threeSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
threeSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);

