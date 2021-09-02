import React from 'react';
import styled from 'styled-components';
import imgDadosConfirmados from '../../assets/imgDadosConfirmados.gif';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  background: #0e2940;
  text-align: center;
  padding: 10px 0;
  border-radius: 20px;
`;
const ConfirmaDados = styled.div`
  background: rgba(154, 231, 252);
  border-radius: 10%;
`;
const ImgConfirmaDados = styled.img`
  width: 600px;
  border-radius: 20%;
`;

export default function DadosEnviados() {
  return (
    <Main>
      <ConfirmaDados>
        <h1 style={{ color: '#0e2940' }}>Cadastro Confirmado! Bem-vindo(a)!</h1>
        <ImgConfirmaDados alt="Tudo certo" src={imgDadosConfirmados} />
      </ConfirmaDados>
    </Main>
  );
}
