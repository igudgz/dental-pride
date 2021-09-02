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
  border: 1px solid #49f2c2;
  display: grid;
  grid-template-areas:
    'title title'
    'img form';
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  justify-content: center;
  background: #0e2940;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 20px;
  @media (max-width: 1125px) {
    img {
      display: none;
    }
  }
`;
export const Forms = styled.form`
  grid-area: form;
  border: 1px solid #141414;
  border-radius: 5%;
  display: flex;

  background: #090922ad;
  padding: 10px;
  margin-bottom: 20px;
  animation: 1s ${openMain};
`;
export const Title = styled.h1`
  color: #49f2c2;
  grid-area: title;
`;

export const ImgCadastro = styled.img`
  grid-area: img;
  height: 480px !important;
  width: 565px !important;
  border: 1px solid #141414;
  border-radius: 10%;
  animation: 1.7s ${openMain};
`;

export const SpanMens = styled.span`
  color: red;
  font-size: 12px;
`;
