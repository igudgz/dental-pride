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
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  border: 1px solid #49f2c2;
  border-radius: 10px;
  background: #090922;
  animation: 1s ${openMain};
  margin: 5px 30% 5px 30%;
  @media (max-width: 760px) {
    margin: 0;
  }
`;
export const Title = styled.h1`
  color: #49f2c2;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: #090922ad;
  padding: 10px;
  animation: 1s ${openMain};
  margin-bottom: 20px;
  button {
    margin-top: 10px;
  }
`;
export const SpanMens = styled.span`
  color: red;
  font-size: 12px;
`;
