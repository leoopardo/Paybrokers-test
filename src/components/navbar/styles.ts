import styled from "styled-components";

export const BlueBar = styled.div`
  background-color: var(--cian);
  height: 23%;
  border-radius: 1px;
  width: 0;
  animation: cian;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  @keyframes cian {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @media (max-width: 1025px) {
    height: 20%;
  }
  @media (max-width: 700px) {
    height: 18%;
  }
  @media (max-width: 550px) {
    height: 16%;
  }
  @media (max-width: 450px) {
    height: 12%;
  }
`;

export const ColumnContainer = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  z-index: 1;
`;

export const LogoImage = styled.img`
  margin-left: 3%;
  cursor: pointer;
  @media (max-width: 1025px) {
    width: 200px;
  }
  @media (max-width: 700px) {
    width: 180px;
  }
  @media (max-width: 550px) {
    width: 160px;
  }
  @media (max-width: 450px) {
    width: 180px;
  }
`;
export const NavBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 3%;
`;
export const NavList = styled.ul`
  color: var(--blue700);
  font-size: x-large;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50vh;
  margin-left: 10%;

  @media (max-width: 1025px) {
    font-size: x-large;
    font-weight: 600;
    width: 50vh;
  }
  @media (max-width: 700px) {
    font-size: large;
    font-weight: 700;
    width: 45vh;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

export const LiComponent = styled.li`
  margin-top: 8%;
  width: 100%;
`;

export const Underline = styled.div`
  width: 0.1px;
  background-color: transparent;
  height: 5px;
  display: flex;
  align-items: flex-start;
  margin-top: 2px;
  flex-direction: column-reverse;
  transition: width 1s;

  :hover {
    width: 100px;
    background-color: var(--cian);
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: xx-large;
  background-color: var(--blue500);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
