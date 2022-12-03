import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 15%;
  height: 70%;
  width: 70%;
  overflow-y: scroll;
  @media (max-width: 1025px) {
    width: 67%;
  }
  @media (max-width: 700px) {
    width: 65%;
  }
  @media (max-width: 550px) {
    width: 65%;
  }
  
`;
