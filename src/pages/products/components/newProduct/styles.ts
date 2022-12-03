import styled from "styled-components";

export const FormBox = styled.form`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;
