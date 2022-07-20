import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const thankyouSign = new GestureDescription('Thank_You');

//Thumb
thankyouSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thankyouSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight , 1);
// thankyouSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
thankyouSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
thankyouSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
// thankyouSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
thankyouSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
thankyouSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);
// thankyouSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
thankyouSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
thankyouSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);

//Pinky
thankyouSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
thankyouSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);

