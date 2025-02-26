import { Product } from "./ProductType";

export interface CheckoutResponse {
  id: string;
  products: Product[];
}
