import { useState } from "react";
import { createContext } from "react";

const defaultValues = {
  products: [],
  handleAddProducts: () => {},
};

export const ProductsContext = createContext(defaultValues);

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const handleAddProducts = (productsResult) => {
    setProducts(productsResult);
  };

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        handleAddProducts: handleAddProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
