import React, { useState } from "react";
import {
  FlutuanteImg,
  FlutuanteImg2,
  FlutuanteImg3,
  Input,
  LoginBody,
  LoginBox,
  LoginBtn,
  LoginContainer,
  LoginLabel,
} from "../home/styles";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
const flutuante = require("../../images/flutuante4.png");
const flutuante2 = require("../../images/flutuante5.png");
const flutuante3 = require("../../images/flutuante1.png");

export const Signup = () => {
  const navigate = useNavigate();
  const [signUpData, setSignupData] = useState({
    userFirstName: "",
    userLastName: "",
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setSignupData({ ...signUpData, [e.target.name]: e.target.value });
  }

  async function handleSignup(e: any) {
    try {
      e.preventDefault();
      if (
        signUpData.email === "" ||
        signUpData.userFirstName === "" ||
        signUpData.userLastName === "" ||
        signUpData.password === ""
      ) {
        toast.error("Por favor, preencha todos os campos");
        return;
      }
      await api.post("users", signUpData);
      toast.error("Conta criada");
      navigate("/");
    } catch (error) {
      toast.error("Alguma coisa deu errado :(");
      console.log(error);
    }
  }

  return (
    <LoginBody>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSignup}>
        <LoginContainer style={{ paddingTop: "4%", paddingBottom: "4%" }}>
          <LoginLabel style={{ fontWeight: 700 }}>Crie sua Conta</LoginLabel>
          <LoginBox>
            <LoginLabel htmlFor="userFirstName">Primeiro nome</LoginLabel>
            <Input
              type={"text"}
              placeholder="John"
              name="userFirstName"
              value={signUpData.userFirstName}
              onChange={handleChange}
            />
          </LoginBox>
          <LoginBox>
            <LoginLabel htmlFor="userLastName">Último name</LoginLabel>
            <Input
              type={"text"}
              placeholder="Doe"
              name="userLastName"
              value={signUpData.userLastName}
              onChange={handleChange}
            />
          </LoginBox>
          <LoginBox>
            <LoginLabel htmlFor="email">Email</LoginLabel>
            <Input
              type={"email"}
              placeholder="Johndoe@gmail.com"
              name="email"
              value={signUpData.email}
              onChange={handleChange}
            />
          </LoginBox>
          <LoginBox>
            <LoginLabel htmlFor="Password">Senha</LoginLabel>
            <Input
              placeholder="Senha@123"
              type={"password"}
              name="password"
              value={signUpData.password}
              onChange={handleChange}
            />
          </LoginBox>

          <LoginBtn type="submit">
            Criar
            {/* <LogIn style={{ height: "30px", color: "white" }} /> */}
          </LoginBtn>
        </LoginContainer>
      </form>
      <FlutuanteImg src={flutuante} alt="flutuante" />
      <FlutuanteImg2 src={flutuante2} alt="flutuante" />
      <FlutuanteImg3 src={flutuante3} alt="flutuante" />
    </LoginBody>
  );
};
