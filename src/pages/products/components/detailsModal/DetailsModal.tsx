import React, { Dispatch, SetStateAction } from "react";
import { Product } from "../../../../types/Product";
import {
  ColorH3,
  ColorH4,
  DescriptionDiv,
  DetailsModalContainer,
  ModalBody,
  ModalHeader,
  ProductImg,
} from "./styles";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

interface IDetailsModal {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  product: Product | undefined;
}

export const DetailsModal = (props: IDetailsModal) => {
  return (
    <DetailsModalContainer
      style={{ display: props.isModalOpen ? "flex" : "none" }}
    >
      <ModalHeader>
        <h2>{props.product?.name}</h2>
        <button onClick={() => props.setIsModalOpen(false)}>
          <CloseOutline
            style={{ height: "40px", color: "darkred", cursor: "pointer" }}
          />
        </button>
      </ModalHeader>
      <ColorH4>{props.product?.group}</ColorH4>
      <ModalBody>
        <ProductImg src={props.product?.img} alt={props.product?.name} />
        <DescriptionDiv>
          <p>{props.product?.description}</p>
          <ColorH3>R${props.product?.value}</ColorH3>
        </DescriptionDiv>
      </ModalBody>
    </DetailsModalContainer>
  );
};
