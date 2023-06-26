import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CartPage from "./Pages/CartPage/CartPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";

function App() {
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

  const appTitle = "E-STORE";

  const navbarLinkData = [
    {
      text: "Products",
      link: "/products",
    },
    {
      text: "Cart",
      link: "/cart",
    },
  ];

  return (
    <div className="App">
      <Header navbarLinkData={navbarLinkData} appTitle={appTitle} />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer>
        <strong>This app was built using the context api</strong>
      </Footer>
    </div>
  );
}

export default App;
