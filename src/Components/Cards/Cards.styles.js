import styled, { css } from 'styled-components';

export const Card = styled.main`
  border-radius: 20px;
  border: 0.5px solid #5ef2d7;
  background-color: #090922ad;
  display: flex;
  padding: 10px;
  flex-direction: row;
  color: lavender;
  margin: 15px;

  > img {
    width: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const CardHome = styled.div`
  background-color: ${(props) => (props.transparent ? 'none' : '#090922ad')};
  /* border: 1px solid #49f2c2; */
  border-radius: 50%;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: #49f2c2;
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1400px) {
    width: 27%;
    height: 70%;
    ${(props) =>
      props.cardBanner
        ? css`
            height: 80%;

            margin: 20px 60px 0px 0px;
          `
        : ''}
  }
  @media (max-width: 476px) {
    width: 81%;
  }
`;

export const CardEsp = styled.div`
  margin-bottom: 3.5%;
  text-align: center;
  border-radius: 10px;
  color: #49f2c2;
  height: 413px;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
  border-radius: 8px;
  width: 18.2%;
  background-color: #090922ad;
  > img {
    margin-top: 15px;
    width: 40%;
  }
  > p {
    width: 70%;
    line-height: 1.5;
    text-align: center;
    margin-left: 15%;
  }
  @media (min-width: 1400px) {
    > div {
      margin-left: 80px;
    }
  }
  @media (max-width: 476px) {
    width: 70%;
  }
`;
