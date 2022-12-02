import React, { ReactPropTypes } from "react";
import { Product } from "../../../../types/Product";
import { CardBtnsContainer, CardContainer } from "./styles";
import { InfoCircle } from "@styled-icons/bootstrap/InfoCircle";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";

interface ICard {
  product: Product;
}

export const Card = (props: ICard) => {
  return (
    <CardContainer>
      <p>id: {props.product.id}</p>
      <h3>{props.product.name}</h3>

      <p>grupo: {props.product.group}</p>
      <p>R${props.product.value}</p>
      <CardBtnsContainer>
        <button>
          <InfoCircle style={{ height: "30px", color: "var(--blue700)" }} />
        </button>
        <button>
          <Delete style={{ height: "30px", color: "Darkred" }} />
        </button>
      </CardBtnsContainer>
    </CardContainer>
  );
};
