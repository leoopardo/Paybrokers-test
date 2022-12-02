import styled from "styled-components";

export const LoginBody = styled.div`
  height: 80vh;
  background-color: var(--blue700);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  height: 400px;
  width: 300px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 80%;
  height: 10%;
  border-radius: 15px;
  background-color: aliceblue;
  padding-left: 8px;
  border: 2px solid var(--blue700);
`;
export const LoginLabel = styled.label`
  font-size: large;
  color: var(--blue700);
  height: 10%;
  margin-bottom: -10px;
  margin-left: -20px;
`;

export const DashboardsPage = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ErrorDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15%;
`;

export const DashboardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 85%;
  width: 70%;
  @media (max-width: 650px) {
    width: 130%;
  }
`;

export const DashBoardBox = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  animation-name: show;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  z-index: -1;
  margin-left: 4%;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 650px) {
    margin-left: -10%;
  }
`;

export const DashboardsOptions = styled.div`
  height: 80%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background-color: var(--blue900);
  right: 0;
  z-index: 1;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const DashboardsList = styled.select`
  margin-top: 5%;
  width: 70%;
  height: 40px;
  border-radius: 10px;
  background-color: aliceblue;
  font-size: large;
  font-weight: 600;
  transition: scale 0.5s, box-shadow 1s;

  :focus {
    scale: 1.1;
    box-shadow: 0 5px 15px var(--cian);
  }
`;

export const FilterPannelH1 = styled.h1`
  color: white;
  font-weight: 400;
  margin-top: 2%;
`;

export const MobileBottomBar = styled.div`
  width: 100%;
  height: 80px;
  bottom: 0;
  position: absolute;
  background-color: var(--blue700);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (min-width: 650px) {
    display: none;
  }
`;

export const DashboardsListLabel = styled.label`
  margin-top: 4%;
  margin-bottom: -10px;
`;
