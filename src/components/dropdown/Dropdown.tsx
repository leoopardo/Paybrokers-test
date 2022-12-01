import React, { useState } from "react";
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
  return (
    <>
      {props.isMenuActive && (
        <MobileListBox
          style={{
            animationDirection: props.isMenuActive ? "normal" : "reverse",
          }}
        >
          <MobileList>
            {props.list.map((item: string) => (
              <MobileLi><UnderlineMobile>{item}</UnderlineMobile></MobileLi>
            ))}
          </MobileList>
        </MobileListBox>
      )}
    </>
  );
};
