import styled from 'styled-components';

export const Main = styled.div`
  border-radius: 50px;
  border: 2px solid #5ef2d7;
  background-color: #0e2940;
  margin: 35px;
  font-size: 1em;
  max-width: 30%;
  padding: 20px;
  color: #5ef2d7;
  font-size: 1em;
  font-family: 'Varela Round', sans-serif;
  > img {
    width: 30%;
  }

  @media (max-width: 476px) {
    max-width: 80%;

    > form {
      margin-left: -16px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  > img {
    width: 30%;
    height: 10%;
    padding: 10px;

    > section {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 476px) {
    max-width: 80%;
    > img {
      padding: 0px;
    }
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: space-around;
`;
