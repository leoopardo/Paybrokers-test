import { logRoles } from "@testing-library/react";
import React, { useState } from "react";
import { useAuth } from "../../contexts/Auth";
import { Input, LoginBody, LoginContainer, LoginLabel } from "./styles";

export const Home = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const { Login } = useAuth();

  Login({
    email: "leonardo@hotmail.com",
    password: "123456789",
  });

  return (
    <LoginBody>
      <LoginContainer>
        <LoginLabel htmlFor="email">Email</LoginLabel>
        <Input
          placeholder="JohnDoe@gmail.com"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <LoginLabel htmlFor="Password">Password</LoginLabel>
        <Input
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </LoginContainer>
    </LoginBody>
  );
};
