import React from 'react';
import * as S from './styles';

export default function Modal(props) {
  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <S.Section>
          <S.Close
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            x
          </S.Close>
          {props.page}
        </S.Section>
      </S.ModalContainer>
    </S.ModalBackground>
  );
}
