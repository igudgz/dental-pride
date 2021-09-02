import styled, { keyframes, css } from 'styled-components';

const openMain = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20px)
    }to{
        opacity: 1;
    }
}
`;

export const Container = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  background-image: url(${(props) => props.url});
  opacity: ${(props) => props.opacity};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${(props) => props.bannerPosition};
  height: 350px;
  display: flex;
  animation: 1s ${openMain};
  flex-direction: ${(props) => props.flexDirection};
  @media (min-width: 1400px) {
    background-position: ${(props) =>
      props.bannerPositionResponsive === 'atendimento'
        ? css`
            background-position: 0%;
            background-position-y: 30%;
            background-position-x: 50%;
          `
        : props.bannerPositionResponsive};
  }
`;
