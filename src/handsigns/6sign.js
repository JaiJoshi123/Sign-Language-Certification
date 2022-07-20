import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sixSign = new GestureDescription('Six');

//Thumb
sixSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
sixSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1);

//Index
sixSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);


//Middle
sixSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);


//Ring
sixSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);

//Pinky
sixSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);

