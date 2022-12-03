import styled from "styled-components";

export const DetailsModalContainer = styled.div`
  height: 80%;
  width: 65%;
  position: absolute;
  left: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10%;
  background-color: white;
  box-shadow: 0 10px 1000px black;
  z-index: 1;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  padding: 6%;
`;

export const ModalBody = styled.div`
  height: 70%;
  width: 100%;
  padding: 4%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: scroll;

  @media (max-width: 1025px) {
    height: 80%;
    flex-direction: column;
    padding-top: 0%;
  }
`;
export const ProductImg = styled.img`
  height: 100%;
  transition: transform 2s;
  z-index: 1;
  :hover {
    transform: scale(1.4) translateX(20px);
  }

  @media (max-width: 1025px) {
    height: 70%;
    :hover {
      transform: scale(1.4) translateY(30px);
    }
  }

  @media (max-width: 550px) {
    :hover {
      transform: scale(1.4) translateY(25px);
    }
  }
`;
export const DescriptionDiv = styled.div`
  height: 120%;
  width: 50%;
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1025px) {
    height: 12%;
    width: 100%;
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
export const ColorH4 = styled.h4`
  color: var(--cian);
  margin-left: 65%;
`;

export const ColorH3 = styled.h4`
  background-color: var(--blue700);
  width: 100%;
  color: white;
  text-align: center;
  font-size: x-large;
`;
