import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { Dropdown, DropdownContainer } from "../dropdown/Dropdown";
import {
  BlueBar,
  ColumnContainer,
  Icon,
  LiComponent,
  LogoImage,
  NavBox,
  NavList,
  RowContainer,
  Underline,
} from "./styles";
const logo = require("../../images/logo.png");

export const Navbar = () => {
  const { User, Logout } = useAuth();
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const navigate = useNavigate();
  return (
    <>
      <ColumnContainer>
        <BlueBar />
        <RowContainer>
          <LogoImage src={logo} alt="logo" onClick={() => navigate("/")} />
          <NavBox>
            <NavList>
              {window.location.pathname === "/produtos" && (
                <LiComponent onClick={() => navigate("/produtos")}>
                  <Underline>New</Underline>
                </LiComponent>
              )}
              {window.location.pathname === "/" && User && (
                <LiComponent onClick={() => navigate("/produtos")}>
                  <Underline>Produtos</Underline>
                </LiComponent>
              )}
              {User && (
                <LiComponent onClick={Logout}>
                  <Underline>Logout</Underline>
                </LiComponent>
              )}
            </NavList>
            {User && (
              <Dropdown
                setIsMenuActive={setIsMenuActive}
                isMenuActive={isMenuActive}
              />
            )}

            {User?.userFirstName && User?.userLastName && (
              <Icon>
                {`${User.userFirstName[0].toUpperCase()}${User.userLastName[0].toUpperCase()}`}
              </Icon>
            )}
          </NavBox>
        </RowContainer>
      </ColumnContainer>
      <DropdownContainer
        isMenuActive={isMenuActive}
        list={["Produtos", "Logout"]}
      />
    </>
  );
};
