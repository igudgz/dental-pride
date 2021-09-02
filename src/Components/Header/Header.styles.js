import styled, { css } from 'styled-components';

export const Header = styled.header`
  background-color: #2e8c7b;
  width: 100%;
  height: 100px;
  font-family: 'Work Sans', sans-serif;
  color: whitesmoke;
  font-size: 1.2em;
  @media (max-width: 476px) {
    height: 300px;
  }
  > div {
    display: flex;
    align-items: center;

    @media (max-width: 476px) {
      flex-direction: column;
    }

    > h1 {
      margin: 0;
    }
  }
`;
export const Img = styled.img`
  margin-right: 10px !important;
  height: 20px !important;
  width: ${(props) =>
    props.logo
      ? css`
          width: 80px !important;
          height: 80px !important;
        `
      : css`
          width: 20px !important;
        `};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 476px) {
    flex-direction: column;
  }

  > div {
    display: flex;
    cursor: pointer;
    align-items: center;

    margin-top: 5px;
    > img {
      margin-top: 10px;
    }
  }
`;
export const Link = styled.p`
  padding: 0 10px;
  cursor: pointer;
  margin: 0;
  display: flex;
  align-items: center;
  > img {
    justify-content: center;
  }
  @media (max-width: 476px) {
    margin: 5px 0;
  }
`;
