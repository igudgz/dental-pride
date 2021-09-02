import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #2e8c7b;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 250px;
  font-family: 'Work Sans', sans-serif;
  color: whitesmoke;
  font-size: 1.2em;
  @media (max-width: 476px) {
    flex-direction: column;
    height: 580px;
    nav {
      display: none;
      :last-child {
        display: flex;
        width: 95%;
      }
    }
  }
`;

export const Nav = styled.nav`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  align-items: flex-start;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  img {
    cursor: pointer;
  }
  @media (max-width: 476px) {
    ::first-child {
      display: none;
    }
    span {
      margin-bottom: 10px;
      margin-top: 0;
      align-self: center;
    }
    div {
      align-items: center;
      align-self: center;
      flex-direction: row;
      img {
        justify-content: center;
      }
    }
  }
`;
export const Descricao = styled.div`
  display: flex;
  height: 220px;
  font-size: 1;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
  margin-left: 42px;
  justify-content: space-around;
  p {
    width: 70%;
    text-align: start;
  }
  @media (max-width: 476px) {
    align-items: center;

    margin: 0;

    p {
      text-align: center;
    }

    > img {
    }
  }
`;
export const Link = styled.p`
  height: 3px;
  cursor: pointer;
`;

export const Span = styled.span`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 12px;
`;
