import React, { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../../../../types/Product";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { DetailsModalContainer, ModalHeader } from "../detailsModal/styles";
import { Input, LoginBox, LoginBtn, LoginLabel } from "../../../home/styles";
import { FormBox, FormContainer } from "./styles";
import { api } from "../../../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface IDetailsModal {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const NewProductModal = (props: IDetailsModal) => {
  const [formData, setFormData] = useState<Product>({
    description: "",
    group: "",
    img: "",
    name: "",
    value: 0,
  });
  const navigate = useNavigate();

  function handleChange(e: any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: any) {
    try {
      e.preventDefault();
      if (
        formData.description === "" ||
        formData.group === "" ||
        formData.img === "" ||
        formData.name === "" ||
        formData.value === 0
      ) {
        toast.error("Preencha todos os campos");
        return;
      }
      await api.post("products", formData);
      toast.success("Novo produto adicionado!");
      navigate("/");
      setTimeout(() => {
        navigate("/produtos");
      }, 500);
      props.setIsModalOpen(false);
    } catch (error) {
      toast.error("Alguma coisa deu errada :(");
      console.log(error);
    }
  }
  return (
    <DetailsModalContainer
      style={{ display: props.isModalOpen ? "flex" : "none" }}
    >
      <ModalHeader>
        <h2>New product</h2>
        <button onClick={() => props.setIsModalOpen(false)}>
          <CloseOutline
            style={{ height: "40px", color: "darkred", cursor: "pointer" }}
          />
        </button>
      </ModalHeader>
      <FormBox onSubmit={handleSubmit}>
        <FormContainer>
          <LoginBox>
            <LoginLabel htmlFor="name">Nome</LoginLabel>
            <Input
              type={"text"}
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </LoginBox>
          <LoginBox>
            <LoginLabel htmlFor="group">Grupo</LoginLabel>
            <Input
              type={"text"}
              placeholder="Grupo"
              name="group"
              value={formData.group}
              onChange={handleChange}
            />
          </LoginBox>
          <LoginBox>
            <LoginLabel htmlFor="img">URL da imagem</LoginLabel>
            <Input
              type={"text"}
              placeholder="https://img.png"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
          </LoginBox>
        </FormContainer>
        <FormContainer>
          <LoginBox>
            <LoginLabel htmlFor="value">Preço</LoginLabel>
            <Input
              type={"text"}
              placeholder="R$99"
              name="value"
              value={formData.value}
              onChange={handleChange}
            />
          </LoginBox>
          <LoginBox style={{ height: "150px" }}>
            <LoginLabel htmlFor="description">Descrição do produto</LoginLabel>
            <Input
              type={"text"}
              placeholder="descrição"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </LoginBox>
          <LoginBtn type="submit">Add</LoginBtn>
        </FormContainer>
      </FormBox>
    </DetailsModalContainer>
  );
};
