import { useState, useEffect } from "react";
import { ProductCard } from "../../Components/ProductsCard/ProductCard";

export const Products = () => {
  const URL = "https://fakestoreapi.com/products?limit=10";

  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      console.log("RESULT:", result);
      setProducts(result);
    } catch (error) {
      setErrorMessage(error.message);
      throw new Error(error);
    }
  };

  // EXECUTES ON FIRST RENDER
  useEffect(() => {
    /**
     * DO NOT MAKE API CALL IF WE HAVE ELEMENTS
     * HERE JUST TO PREVENT CORS BLOCK FROM FAKE-STORE-API
     */
    if (products.length > 0) return;
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products page</h1>

      <hr />
      <br />

      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
