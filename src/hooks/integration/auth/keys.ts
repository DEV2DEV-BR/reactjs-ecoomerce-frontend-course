import { Product } from "../../../types/ProductType";

export const AUTH_KEYS = {
  useGetProducts: () => ["useGetProducts"],
  useAddCheckout: (value: Product[]) => ["useAddCheckout", value],
} as const;
