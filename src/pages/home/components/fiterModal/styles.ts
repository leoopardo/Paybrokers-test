import styled from "styled-components";

export const FilterModalContainer = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  height: 400px;
  width: 80%;
  background-color: white;
  box-shadow: 0 10px 1000px black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  z-index: 1;
`;

export const DashboardsListSelect = styled.select`
  margin-top: 5%;
  text-align: center;
  width: 70%;
  height: 40px;
  border-radius: 10px;
  background-color: var(--blue700);
  color: white;
  font-size: large;
  font-weight: 600;
  transition: scale 0.5s;

  :focus {
    scale: 1.1;
    box-shadow: 0 3px 10px var(--blue700);
  }
`;

export const FilterModaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 100%;
`;

export const ConfirmModalBtn = styled.button`
  height: 60px;
  width: 100%;
  background-color: var(--blue900);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5px;
  transition: scale 0.3s;

  :active {
    scale: 1.05;
  }
`;
