import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import {
  DropdownBox,
  MobileLi,
  MobileList,
  MobileListBox,
  UnderlineMobile,
  WhiteMenu,
} from "./styles";

export const Dropdown = (props: any) => {
  return (
    <>
      <DropdownBox
        onClick={() => {
          props.isMenuActive
            ? props.setIsMenuActive(false)
            : props.setIsMenuActive(true);
        }}
      >
        <WhiteMenu />
      </DropdownBox>
    </>
  );
};

export const DropdownContainer = (props: any) => {
  const navigate = useNavigate();
  const { User, Logout } = useAuth();
  return (
    <>
      {props.isMenuActive && (
        <MobileListBox
          style={{
            animationDirection: props.isMenuActive ? "normal" : "reverse",
          }}
        >
          <MobileList>
            {window.location.pathname === "/produtos" && (
              <MobileLi onClick={() => props.setIsNewProductModalOpen(true)}>
                <UnderlineMobile>Novo</UnderlineMobile>
              </MobileLi>
            )}
            {window.location.pathname === "/" && User && (
              <MobileLi onClick={() => navigate("/produtos")}>
                <UnderlineMobile>Produtos</UnderlineMobile>
              </MobileLi>
            )}
            {User && (
              <MobileLi onClick={Logout}>
                <UnderlineMobile>Logout</UnderlineMobile>
              </MobileLi>
            )}
          </MobileList>
        </MobileListBox>
      )}
    </>
  );
};
