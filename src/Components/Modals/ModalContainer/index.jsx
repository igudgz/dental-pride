import React from 'react';
import styled, { css } from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1; /* Sente-se no topo */
  padding-top: 50px; /* Localização da caixa */
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%; /* Largura completa */
  height: 100%; /* Altura */
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalContainer = styled.div`
  margin: auto;
  padding: 20px;
  width: 95%;
  border-radius: 10px;
`;
const Button = styled.button`
  color: #49f2c2;
  font-size: 28px;
  border-radius: 50%;
  background: #090922;
  left: 67%;
  z-index: 1;
  position: absolute;
  ${(props) =>
    props.cadastro
      ? css`
          left: 96%;
        `
      : ''}
  &:hover,
  :focus {
    color: #49f2c2;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default function Modal(props) {
  return (
    <ModalBackground>
      <ModalContainer>
        <Button
          cadastro={props.cadastro}
          onClick={() => {
            props.setOpenModal(false);
          }}
        >
          {' '}
          X{' '}
        </Button>
        {props.page}
      </ModalContainer>
    </ModalBackground>
  );
}
