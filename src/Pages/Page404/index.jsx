import React from 'react'
import styled from 'styled-components'
import Img404 from '../../assets/page404Img.jpg'

const Title = styled.h1`
    color: #49f2c9;
    font-size: 30px;
    text-align: center;
`
const DivPage = styled.div`
    background: url(${Img404}) center;
    background-size: cover;
    grid-area: content;
    height: 100vh;   
    overflow: hidden;
    padding: 0;
    margin: 0; 
`

export default function Page404() {
    return (
        <DivPage>
            <Title>404. Página não encontrada</Title>
        </DivPage>
    )
}
