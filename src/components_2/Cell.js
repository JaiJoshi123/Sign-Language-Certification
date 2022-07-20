import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid; 
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
    position: relative;
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    color: white;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 35px;
    background-repeat: no-repeat;
    background-position: center;
    z-index:2;
`

const CellBackground = styled.div`
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #3672F8 0%, #9B51E0 100%);
    border-radius: 10px;
    background-size: 60px;
    position: absolute;

`

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 30px 0;
    
`

const Cell = props => (
    <CellGroup>
        <CellBackground image={props.image}></CellBackground>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell