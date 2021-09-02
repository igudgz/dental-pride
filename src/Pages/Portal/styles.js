import styled, { css, keyframes } from 'styled-components';

const openMain = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20px)
    }to{
        opacity: 1;
    }
}
`;
export const GridContainer = styled.main`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: 100px 1900px 250px;
  > header {
    grid-area: header;
  }
  > main {
    grid-area: content;
  }
  > footer {
    grid-area: footer;
  }
`;
export const Container = styled.main`
  background-color: rgba(14, 41, 64);
  animation: 1s ${openMain};
`;
export const Section = styled.section`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  @media (max-width: 476px) {
    flex-direction: column;

    height: 900px;
    :last-child {
      height: 1200px;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  background: ${(props) => props.background};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  align-self: ${(props) => props.alignSelf};
  ${(props) =>
    props.scroll === 'active'
      ? css`
          overflow-y: scroll;
          &::-webkit-scrollbar {
            width: 10px;
            border-radius: 5px;
            background-color: #49f2c2;
          }
        `
      : ''};

  @media (max-width: 476px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    ${(props) =>
      props.beneficios
        ? css`
            flex-direction: column-reverse;
          `
        : ''};
  }
`;

export const Lista = styled.ul`
  padding: 0;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  flex-wrap: wrap;
  color: #49f2c2;
  align-items: flex-start;
  justify-content: center;
  li {
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: ${(props) => (props.pCentro ? 'center' : '')};
    background-color: #090922ad;
    width: 100%;
    width: ${(props) => props.widthItem};
    border: 1px solid #49f2c2;
    border-radius: 10px;
    text-align: ${(props) => (props.pCentro ? 'center' : '')};
    font-weight: bold;
    list-style: none;

    > p {
      margin-left: 10px;
    }
  }
`;

export const Titulo = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  display: flex;
  text-align: center;
  border-radius: 50%;

  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
  align-self: center;
  margin-bottom: 15px;
  color: #49f2c2;
  @media (min-width: 1400px) {
    width: ${(props) => props.widthResponsive};
  }

  p {
    padding: ${(props) => props.padding};
    border-bottom: 3px solid #49f2c2;
    ${(props) =>
      props.aConsulta
        ? css`
            border: none;
            padding: 15px;
            line-height: 1.5;
          `
        : ''}
    margin-top: 10px;

    font-weight: bold;
  }
  font-size: ${(props) => props.fontSize};
`;

export const ModalGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  animation: 1s ${openMain};
`;
