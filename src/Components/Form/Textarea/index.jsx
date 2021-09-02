import React from 'react';
import { LabelForm } from '../Input';

import styled from 'styled-components';

const TextareaForm = styled.textarea`
  margin-top: 10px;
  background-color: #090922ad;
  color: white;
  border-radius: 10px;
  border: 1px solid #49f2c2;
  display: flex;
  width: ${(props) => props.width};
  height: 100px;
  @media (min-width: 1400px) {
    width: 800px;
    height: 150px;
  }
`;
export default function Textarea(props) {
  return (
    <>
      <LabelForm htmlFor={props.htmlFor}>
        {props.children}

        <TextareaForm
          width={props.width}
          placeholder={props.placeholder}
          name={props.name}
          type={props.type}
        />
      </LabelForm>
    </>
  );
}
