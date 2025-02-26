import constate from "constate";
import { useEffect, useState } from "react";
import {
  useAddCheckout,
  useGetProducts,
} from "../hooks/integration/auth/mutations";
import { useCustomLocalStorage } from "../hooks/utils/use-custom-local-storage";
import { CheckoutResponse } from "../types/CheckoutType";
import { Product } from "../types/ProductType";

function useGlobal() {
  const { data: products } = useGetProducts();
  const { mutateAsync: addCheckoutMutateAsync, data } = useAddCheckout();

  const [cart, setCart, removeCart] = useCustomLocalStorage<Product[]>(
    "cart",
    []
  );
  const [saleResume, setSaleResume] = useState<CheckoutResponse | null>(null);
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

  const addCheckout = async (products: Product[]) => {
    await addCheckoutMutateAsync(products);
  };

  useEffect(() => {
    if (data) {
      setSaleResume(data);
      removeCart();
    }
  }, [data]);

  return {
    cart,
    productsList,
    addToCart,
    removeFromCart,
    addCheckout,
    saleResume,
  };
}

export const [GlobalProvider, useGlobalContext] = constate(useGlobal);
