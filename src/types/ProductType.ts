export type Product = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  price: number;
  imageUrl: string;
  isInCart: boolean;
};

export type ProductResponse = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  price: number;
  imageUrl: string;
};
