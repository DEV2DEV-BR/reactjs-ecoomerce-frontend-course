import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../../../api";
import { useNotifications } from "../../../hooks/utils/use-notifications";
import { Product, ProductResponse } from "../../../types/ProductType";
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

export const useAddCheckout = () => {
  const { showError, showSuccess } = useNotifications();

  return useMutation<void, Error, Product[]>({
    mutationFn: (products: Product[]) => api.post("/checkout", { products }),
    mutationKey: [AUTH_KEYS.useAddCheckout],
    onError: () => showError({ message: "Falha ao realizar pagamento" }),
    onSuccess: () => {
      showSuccess({ message: "Pagamento realizado com sucesso" });
    },
  });
};
