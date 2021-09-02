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

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 30px;
  background-color: rgba(14, 41, 64);
  > img {
    max-width: 400px;
    max-height: 160px;
    padding: 20px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      flex-wrap: wrap;
      justify-content: center;
      display: flex;
      flex-direction: row;
    }
  }
  animation: 1s ${openMain};
`;

export const Titulo = styled.h1`
  color: #49f2c2;
  font-size: 42px;
  font-weight: bold;
  justify-self: center;
`;

export const Card = styled.div`
  margin: 20px;
  border-radius: 20px;
  border: 0.5px solid #5ef2d7;
  background-color: #081226;
  padding: 20px;
  color: #49f2c2;
  > img {
    max-width: 400px;
    max-height: 180px;
    padding: 20px;
    border-radius: 50%;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px;
  > p {
    margin-left: 5%;
  }
  > img {
    max-width: 30px;
    max-height: 30px;
  }
`;
