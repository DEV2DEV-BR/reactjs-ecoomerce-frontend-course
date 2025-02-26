import constate from "constate";
import { useEffect, useState } from "react";
import { Product } from "../types/ProductType";
import { useGetProducts } from "../hooks/integration/auth/mutations";
import { useCustomLocalStorage } from "../hooks/utils/use-custom-local-storage";

function useGlobal() {
  const [cart, setCart] = useCustomLocalStorage<Product[]>("cart", []);
  const { data: products } = useGetProducts();
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    if (products) {
      const productsWithCartStatus = products.map((product) => ({
        ...product,
        isInCart: cart.some(
          (cartItem: { id: string }) => cartItem.id === product.id
        ),
      }));
      setProductsList(productsWithCartStatus);
    }
  }, [products, cart]);

  const addToCart = (productId: string) => {
    const product = productsList.find((p) => p.id === productId);
    if (product) {
      setCart([...cart, product]);
      setProductsList(
        productsList.map((p) =>
          p.id === productId ? { ...p, isInCart: true } : p
        )
      );
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((p: { id: string }) => p.id !== productId));
    setProductsList(
      productsList.map((p) =>
        p.id === productId ? { ...p, isInCart: false } : p
      )
    );
  };

  return { cart, productsList, addToCart, removeFromCart };
}

export const [GlobalProvider, useGlobalContext] = constate(useGlobal);
