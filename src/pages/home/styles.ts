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
  margin-left: -20px  ;
`;
