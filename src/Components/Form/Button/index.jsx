import React from 'react';

import styled, { css } from 'styled-components';

export const ButtonGlobal = styled.button`
  width: ${(props) => props.width}; //150px
  height: ${(props) => props.height}; // 30px
  border-radius: 5px;
  align-self: ${(props) => props.alignSelf};
  border: 1px solid #49f2c2;
  ${(props) =>
    props.transparent
      ? css`
          font-size: 16px;
          border-radius: 0px;
          color: white;
          border: 3px solid #49f2c2;
          text-shadow: 2px 2px 2px rgba(14, 41, 64);
        `
      : ''}
  background-color: ${(props) =>
    props.transparent ? 'Transparent' : '#49f2c2'};
  cursor: pointer;
  &:hover {
    ${(props) =>
      props.transparent
        ? css`
            width: 218px;
          `
        : css`
            background: linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);
            background-color: #468ccf;
          `}
  }
  &:active {
    position: relative;
    top: 1px;
  }
  @media (min-width: 1400px) {
    margin: ${(props) => props.marginResponsive};
  }
`;

export default function Button(props) {
  return (
    <>
      <ButtonGlobal
        alignSelf={props.alignSelf}
        transparent={props.transparent}
        marginResponsive={props.marginResponsive}
        width={props.width}
        height={props.height}
        type={props.type}
        onClick={props.onClick}
        className={props.className}
      >
        {props.children}
      </ButtonGlobal>
    </>
  );
}
