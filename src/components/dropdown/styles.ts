import styled from "styled-components";
import { Menu } from "@styled-icons/entypo/Menu";

export const DropdownBox = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 5px;
  background-color: white;
  margin-right: 18px;
  margin-top: 6px;
  transition: background-color 1s ease-in-out;

  :hover {
    background-color: var(--blue700);
    border: 1px solid var(--blue700);
    cursor: pointer;
  }
  @media (min-width: 650px) {
    display: none;
  }
`;

export const WhiteMenu = styled(Menu)`
  color: --blue700;
  transition: color 1s ease-in-out;
  :hover {
    color: white;
  }
`;

export const MobileListBox = styled.div`
  width: 100%;
  background-color: white;
  animation-name: showListBox;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 650px) {
    display: none;
  }

  @keyframes showListBox {
    0% {
      height: 0;
      color: transparent;
    }
    100% {
      height: 100px;
      color: black;
    }
  }
`;

export const MobileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const MobileLi = styled.li`
  width: 450%;
  font-size: x-large;
  list-style: none;
  text-align: center;
  font-weight: 600;
  color: var(--blue700);
  margin-bottom: 10px;
`;
export const UnderlineMobile = styled.div`
  width: 100%;
  transition: border-bottom 1s ease-in-out;
  border-bottom: 4px solid transparent;

  :hover {
    border-bottom: 4px solid var(--cian);
    cursor: pointer;
  }
`;
