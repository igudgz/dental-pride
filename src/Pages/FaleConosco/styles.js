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
  grid-template-rows: 100px 1180px 250px;
  @media (max-width: 476px) {
    grid-template-rows: 300px 1800px 250px;
  }
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
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: 1s ${openMain};
`;

export const Lista = styled.ul`
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;

  li {
    align-self: center;
    background-color: #090922ad;
    border: 1px solid #49f2c2;
    border-radius: 10px;
    font-weight: bold;
    list-style: none;
    margin-right: 20px;
    margin-bottom: 10px;
    width: 100%;
  }
`;
export const Titulo = styled.h1`
  color: #49f2c2;
  font-size: 42px;
  font-weight: bold;
  justify-self: center;
`;

export const Div = styled.div`
  align-items: center;
  background: ${(props) => props.background};
  display: flex;
  flex-direction: row;
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: 30px 0;
  width: 100%;
  @media (max-width: 476px) {
    flex-direction: column;
    height: auto;
  }
  ${(props) =>
    props.scroll === 'active'
      ? css`
          overflow-y: scroll;
          &::-webkit-scrollbar {
            background-color: #49f2c2;
            border: 1px solid #49f2c2;
            border-radius: 5px;
            width: 10px;
          }
        `
      : ''}

  div {
    @media (max-width: 1024px) {
      label {
        width: 300px !important;
      }
      input {
        width: 300px !important;
      }
      select {
        width: 300px !important;
      }
      textarea {
        width: 300px !important;
      }
    }
    @media (max-width: 476px) {
      label {
        width: 300px !important;
      }
      input {
        width: 300px !important;
      }
      select {
        width: 300px !important;
      }
      textarea {
        width: 300px !important;
      }
    }
  }

  div + div {
    border-left: 1px solid #49f2c2;
    margin-left: 40px;
    height: 100%;
    @media (max-width: 476px) {
      height: auto;
      border: none;
    }
  }
`;
export const Error = styled.span`
  align-self: flex-start;
  color: red;
  font-size: 14px;
  font-weight: bold;
  line-height: 1rem;
  margin-left: 50px;
  text-shadow: 1px 1px black;
`;

export const GroupForm = styled.div`
  > form {
    @media (max-width: 476px) {
    }
  }
`;

export const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @media (max-width: 476px) {
    width: 50px;
    height: 50px;
  }
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
