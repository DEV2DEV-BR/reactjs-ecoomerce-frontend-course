import { useQuery } from "@tanstack/react-query";
import { api } from "../../../api";
import { ProductResponse } from "../../../types/ProductType";
import { AUTH_KEYS } from "./keys";
export const useGetProducts = () => {
  return useQuery<ProductResponse[], Error>({
    queryKey: AUTH_KEYS.useGetProducts(),
    queryFn: () => api.get("/products"),
    retry: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
