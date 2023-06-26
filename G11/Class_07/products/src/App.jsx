import Header from "./Components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Products } from "./Pages/Products/Products";
import { SingleProduct } from "./Pages/SingleProduct/SingleProduct";
import { ProductsContextProvider } from "./context/ProductsContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductsContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />

            {/* PATH PARAM ROUTE */}
            <Route path="/product/:id" element={<SingleProduct />} />

            <Route
              path="*"
              element={
                <div>
                  <h1 style={{ color: "red" }}>Page not found 404</h1>
                </div>
              }
            />
          </Routes>
        </ProductsContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
