import constate from "constate";
import { useEffect, useState } from "react";
import { Product } from "../types/ProductType";
import { useGetProducts } from "../hooks/integration/auth/mutations";
function useGlobal() {
  const [cart, setCart] = useState<Product[]>([]);
  const { data: products } = useGetProducts();
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    if (products) {
      const productsWithCartStatus = products.map((product) => ({
        ...product,
        isInCart: false,
      }));
      setProductsList(productsWithCartStatus);
    }
  }, [products]);

  return { cart, setCart, productsList };
}

export const [GlobalProvider, useGlobalContext] = constate(useGlobal);
