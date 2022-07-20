import React from 'react';
import { Link } from "gatsby"
import {
    Button,
} from '@chakra-ui/react'

const NotFoundPage = () => {
    // var list=[]
    // var s=9,i;
    // for(i=0;i<26-s;i+=s+1){
    //     list.push(<Button key={i}><Link to="/" state={{ startValue: i, endValue: i+s }}>Button {i} to {i+s}</Link></Button>)
    // }
    // list.push(<Button key={i}><Link to="/" state={{ startValue: i, endValue: 26 }}>Button {i} to 26</Link></Button>)
    return(
    <div>
        <h1>Random</h1>
        <Link to="/404">404 route</Link>
        <Button><Link to="/" state={{ startValue: 0, endValue: 4 }}>Alphabet Set 1</Link></Button>
        <Button><Link to="/" state={{ startValue: 5, endValue: 9 }}>Alphabet Set 2</Link></Button>
        <Button><Link to="/" state={{ startValue: 10, endValue: 14 }}>Alphabet Set 3</Link></Button>
        <Button><Link to="/" state={{ startValue: 15, endValue: 19 }}>Alphabet Set 4</Link></Button>
        <Button><Link to="/" state={{ startValue: 20, endValue: 25 }}>Alphabet Set 5</Link></Button>
        <Button><Link to="/" state={{ startValue: 26, endValue: 27 }}>Words Set 1</Link></Button>
    </div>
    )
}

export default NotFoundPage
