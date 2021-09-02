import React from 'react';

import * as S from './styles';

export default function Banner(props) {
  return (
    <S.Container
      bannerPositionResponsive={props.bannerPositionResponsive}
      flexDirection={props.flexDirection}
      bannerPosition={props.bannerPosition}
      url={props.url}
    >
      {props.children}
    </S.Container>
  );
}
