import React from 'react';

import styled from 'styled-components';

const Form1 = styled.form`
  font-family: 'Lato', sans-serif;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: column;
  /* border-left: 1px solid #49f2c2; */
  width: ${(props) => props.width};
  height: 100%;
  color: #49f2c2;
`;
export default function Form(props) {
  return (
    <Form1 width={props.width} {...props}>
      {props.children}
    </Form1>
  );
}
