import { createContext, useContext, useState } from "react";
import { productList } from "../constant";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState(productList);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
