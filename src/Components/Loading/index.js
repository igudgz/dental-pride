import React from 'react'
import styled from 'styled-components'
import imgLoadPage from '../../assets/LoadingDente.gif'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    background: #0e2940;
    text-align: center;
`
const Imagem = styled.img`
    width: 200px;
`
const ImgDiv = styled.div`
    background:  #49f2c2;
    border-radius: 60%;
    padding: 10px 40px 10px 40px;
    margin: 10px 0;
`

export default function Loading() {
    return (
        <Main>
            <ImgDiv>
                <h1>Carregando...</h1>
                <Imagem alt="LoadImg" src={imgLoadPage}/>
            </ImgDiv>
        </Main>
    )
}
