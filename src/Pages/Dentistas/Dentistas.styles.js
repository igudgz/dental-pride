import styled, { keyframes } from 'styled-components';

const openMain = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20px)
    }to{
        opacity: 1;
    }
}
`;
export const Main = styled.main`
  background-color: #0e2940;
  color: #49f2c2;
  min-height: 269px;
  > label {
    align-items: center;
    font-size: 1.5em;
    padding: 10px;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  background-color: #0e2940;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  animation: 1s ${openMain};
`;
export const Div = styled.div`
  align-items: center;
  background: ${(props) => props.background};
  display: flex;
  flex-direction: row;
  height: ${(props) => props.height};
  justify-content: center;
  margin: ${(props) => props.margin};
  padding: 30px 0;
  width: 100%;
  animation: 1s ${openMain};
  @media (max-width: 476px) {
    flex-direction: column;
    height: auto;
  }
`;
export const Titulo = styled.h1`
  color: #49f2c2;
  font-size: 42px;
  font-weight: bold;
  justify-self: center;
`;

export const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  display: grid;
  grid-column: 2;
  align-self: center;
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
