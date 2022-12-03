import styled from "styled-components";

export const LoginBody = styled.div`
  height: 80vh;
  background-color: var(--blue700);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlutuanteImg = styled.img`
  height: 380px;
  position: absolute;
  right: 0;
  bottom: 80px;
  animation-name: flutuante1;
  animation-duration: 3s;
  z-index: 1;
  filter: drop-shadow(16px 16px 20px black);

  @keyframes flutuante1 {
    0% {
      transform: translateX(200px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 1025px) {
    height: 300px;
    right: 0;
    bottom: 160px;
  }
  @media (max-width: 700px) {
    height: 220px;
    right: 0;
    bottom: 240px;
  }
  @media (max-width: 550px) {
    height: 140px;
    right: 0;
    bottom: 320px;
  }
  @media (max-width: 450px) {
  }
`;
export const FlutuanteImg2 = styled.img`
  height: 400px;
  position: absolute;
  right: -30px;
  bottom: -120px;
  filter: drop-shadow(16px 16px 20px black);
  animation-name: flutuante2;
  animation-duration: 5s;

  @keyframes flutuante2 {
    0% {
      transform: translateX(200px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @media (max-width: 1025px) {
    height: 300px;
    right: 0;
    bottom: 0px;
  }
  @media (max-width: 700px) {
    height: 220px;
    right: 0;
    bottom: 120px;
  }
  @media (max-width: 550px) {
    height: 140px;
    right: 0;
    bottom: 250px;
  }
  @media (max-width: 450px) {
  }
`;

export const FlutuanteImg3 = styled.img`
  height: 150px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  
  @media (max-width: 950px) {
    display: none;
  }

`;

export const LoginContainer = styled.div`
  height: 400px;
  width: 300px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding-top: 15%;
`;

export const LoginBox = styled.div`
  margin-top: 4%;
  width: 80%;
  height: 18%;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: aliceblue;
  padding-left: 8px;
  border: 2px solid var(--blue700);
  transition: scale 0.5s;

  :focus {
    scale: 1.1;
    box-shadow: 0 3px 10px var(--blue700);
  }
`;
export const LoginLabel = styled.label`
  font-size: large;
  color: var(--blue700);
  margin-left: 2%;
`;

export const LoginBtn = styled.button`
  font-size: large;
  background-color: var(--blue700);
  color: white;
  width: 80%;
  border-radius: 5px;
  height: 10%;
  margin-top: 5%;
  transition: transform 0.3s;

  :active {
    transform: scale(1.1);
  }
`;

export const SignUpBtn = styled.button`
  font-size: large;
  color: darkred;
  width: 80%;
  border-radius: 5px;
  font-weight: 600;
  height: 10%;
  margin-top: 5%;
  transition: transform 0.3s, background-color 0.5s, color 0.5s;

  :active {
    transform: scale(1.1);
  }
  :hover {
    background-color: darkred;
    color: white;
  }
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
  width: 100%;
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
  text-align: left;
  font-weight: 400;
  font-size: x-large;
  margin-bottom: 3%;
  margin-top: 5%;
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
  margin-right: 42%;
  text-align: left;
  color: white;
`;

export const SelectFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
`;
