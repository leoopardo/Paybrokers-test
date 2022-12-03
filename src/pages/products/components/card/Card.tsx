import React, { Dispatch, ReactPropTypes, SetStateAction } from "react";
import { Product } from "../../../../types/Product";
import { CardBtn, CardBtnsContainer, CardContainer, CardImg } from "./styles";
import { InfoCircle } from "@styled-icons/bootstrap/InfoCircle";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { api } from "../../../../services/api";
import toast, { Toaster } from "react-hot-toast";

interface ICard {
  product: Product;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

export const Card = (props: ICard) => {
  async function handleDelete() {
    try {
      await api.delete(`/products/${props.product.id}`);
      toast.success(`${props.product.name} deletado`);
      props.setProducts((await api.get("products")).data);
    } catch (error) {
      toast.error("Alguma coisa deu errada :(");
      console.log(error);
    }
  }
  console.log(props.product.img);
  return (
    <CardContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "5%",
        }}
      >
        <h3>{props.product.name}</h3>
        <p>{props.product.id}</p>
      </div>

      <CardImg src={props.product.img} alt={props.product.name} />
      <p>grupo: {props.product.group}</p>
      <p>R${props.product.value}</p>
      <CardBtnsContainer>
        <CardBtn
          onClick={() => {
            props.setIsModalOpen(true);
            props.setProduct(props.product);
          }}
        >
          <InfoCircle style={{ height: "30px", color: "var(--blue700)" }} />
        </CardBtn>
        <CardBtn onClick={handleDelete}>
          <Delete style={{ height: "30px", color: "Darkred" }} />
        </CardBtn>
      </CardBtnsContainer>
    </CardContainer>
  );
};
