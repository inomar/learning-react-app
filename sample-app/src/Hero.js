import React from 'react'
import styled from 'styled-components'
import { colors } from './styleHelper'

const Base = styled.div`
    padding: 140px 0 120px;
    background-color: #1b1d28;
    color: white;
    text-align: center;
    font-family: "Poppins", sans-serif;
`

const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.4;
`


const Hero = () => {
    return (
        <Base>
            <Title>inomar</Title>
            <p>webエンジニアです。将来は農業をやりたいです。</p>
        </Base>
    )
}

export default Hero