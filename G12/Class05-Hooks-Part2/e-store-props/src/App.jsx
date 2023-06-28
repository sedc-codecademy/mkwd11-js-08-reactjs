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

  const getProductsInCart = () => products.filter(product => product.inCart);

  console.log(products);

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
      <Header
        navbarLinkData={navbarLinkData}
        appTitle={appTitle}
        cartCount={getProductsInCart().length}
      />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route
            path="/products"
            element={<ProductsPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetailsPage products={products} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartProducts={getProductsInCart()}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
