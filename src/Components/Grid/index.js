import styled from "styled-components"

export const Grid = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5,1fr);
  align-items: center;
  row-gap: 14px;
  column-gap: 8px;
  button{
    margin-left: 27vh;
  }
  @media(max-width: 868px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Row = styled.div`
  grid-row:${(props) => props.row};
  display: flex;
  flex-direction: column;
`

export const Column = styled.div`
  grid-column:${(props) => props.column};
  justify-self: start;
  display: flex;
  flex-direction: column;
  align-items: center;
`