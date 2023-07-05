import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h3>Home Page</h3>
              </div>
            }
          />

          <Route path="/products" element={<Products />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
