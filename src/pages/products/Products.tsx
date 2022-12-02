import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Product } from "../../types/Product";
import { Card } from "./components/card/Card";
import { ProductsContainer } from "./styles";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = (await api.get("/products")).data;
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <ProductsContainer>
      {products.map((p: Product) => (
        <Card product={p} />
      ))}
    </ProductsContainer>
  );
};
