import styled from "styled-components";

export const CardContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 1%;
  transition: scale 1s, z-index 1s;

  :hover {
    scale: 1.3;
    z-index: 2;
  }
`;

export const CardBtnsContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
