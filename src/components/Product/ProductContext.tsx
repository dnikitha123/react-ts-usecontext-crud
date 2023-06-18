import { createContext } from "react";

export interface Product {
  id: number;
  name: string;
  price: number | string;
  img: string;
  desc: string;
  link: string;
}

export interface ProductContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: number, updatedProduct: Product) => void;
  deleteProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextProps>({
  products: [],
  addProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
});

export default ProductContext;
