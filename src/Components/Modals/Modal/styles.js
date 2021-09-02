import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 50px;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContainer = styled.div`
  margin: auto;
  padding: 20px;
  width: 95%;
`;

export const Section = styled.section`
  width: 486px;
  height: 286px;
  background-color: #090922;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  border: 1px solid #49f2c2;
  @media (max-width: 476px) {
    width: 90%;
    margin: 0;
  }
`;

export const Close = styled.button`
  color: #49f2c2;
  font-size: 1.5rem;
  border-radius: 50%;
  background: #090922;
  z-index: 1;
  position: absolute;
  right: -20px;
  top: -15px;
  height: 50px;
  width: 50px;
  &:hover,
  :focus {
    color: #49f2c2;
    text-decoration: none;
    cursor: pointer;
  }
`;
