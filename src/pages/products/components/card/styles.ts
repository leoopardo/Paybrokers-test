import styled from "styled-components";

export const CardContainer = styled.div`
  height: 300px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  align-items: center;
  width: 200px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 1%;
  transition: transform 1s, z-index 1s;

  :hover {
    transform: scale(1.3) translateY(21px);
    z-index: 1;
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

export const CardBtn = styled.button`
  cursor: pointer;
  transition: transform 0.5s;

  :hover {
    transform: scale(1.5) rotate(360deg);
  }
`;

export const CardImg = styled.img`
  height: 150px;
`;
