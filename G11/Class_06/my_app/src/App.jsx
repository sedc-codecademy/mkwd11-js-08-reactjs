import Header from "./Components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Products } from "./Pages/Products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Between ROUTES we put all the routes we gonna have */}
        <Routes>
          {/* DEFAULT ROUTE localhost:5173*/}
          <Route path="/" element={<Home />} />
          {/*  ROUTE localhost:5173/about*/}
          <Route path="/about" element={<About />} />
          {/*  ROUTE localhost:5173/products*/}
          <Route path="/products" element={<Products />} />

          {/* When we use the wildcard it must be at the bottom */}
          <Route
            path="*"
            element={
              <div>
                <h1 style={{ color: "red" }}>Page not found 404</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
