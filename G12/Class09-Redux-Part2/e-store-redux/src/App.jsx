import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CartPage from "./Pages/CartPage/CartPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  loadProductsFromLocalStorage,
} from "./state/slices/productsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // If we have products in local storage load them into state

    const productsData = localStorage.getItem("products");

    if (!productsData) {
      dispatch(fetchProducts());
      return;
    }

    const products = JSON.parse(productsData);

    dispatch(loadProductsFromLocalStorage(products));
    // If we don't have fetch them from the backend
  }, []);

  const test = test => {
    console.log(test);
    return testTwo => {
      console.log(test, testTwo);
    };
  };
  test("marlon")("brando");

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
