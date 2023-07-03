import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext({
  products: [],
  addToCart() {},
  removeFromCart() {},
  getProductsInCart() {},
});

export const ProductsProvider = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(value => setProducts(value));
  }, []);

  const addToCart = selectedProduct => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === selectedProduct.id) {
          product.inCart = true;
          return product;
        }
        return product;
      });
    });
  };

  const removeFromCart = selectedProduct => {
    setProducts(prevProducts => {
      return prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, inCart: false }
          : product
      );
    });
  };

  const getProductsInCart = () => products.filter(product => product.inCart);

  return (
    <ProductsContext.Provider
      // We have to add all state/methods in the value of the provider component so that they are available, without this context will not work
      value={{ products, addToCart, removeFromCart, getProductsInCart }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
