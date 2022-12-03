import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Product } from "../../types/Product";
import { Card } from "./components/card/Card";
import { DetailsModal } from "./components/detailsModal/DetailsModal";
import { ProductsContainer } from "./styles";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { NewProductModal } from "./components/newProduct/NewProductModal";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | undefined>();
  const [isDetailModalOppen, setIsDetailModalOppen] = useState<boolean>(false);

  const { User } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!User) navigate("/");
    async function fetchProducts() {
      try {
        const response = (await api.get("/products")).data;
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [window.location]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ProductsContainer>
        {products.map((p: Product) => (
          <Card
            key={p.id}
            product={p}
            setProducts={setProducts}
            setIsModalOpen={setIsDetailModalOppen}
            setProduct={setProduct}
          />
        ))}
      </ProductsContainer>
      <DetailsModal
        isModalOpen={isDetailModalOppen}
        setIsModalOpen={setIsDetailModalOppen}
        product={product}
      />
    </>
  );
};
