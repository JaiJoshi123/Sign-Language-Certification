import {Finger, FingerCurl, GestureDescription} from 'fingerpose';

export const yesSign = new GestureDescription('Yes');

yesSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
yesSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    yesSign.addCurl(finger, FingerCurl.FullCurl, 1.0);
    yesSign.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

