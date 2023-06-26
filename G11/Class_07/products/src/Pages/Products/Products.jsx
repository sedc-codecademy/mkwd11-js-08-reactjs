import { ProductCard } from "../../Components/ProductsCard/ProductCard";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { useEffect } from "react";
import { makeApiCall } from "../../utils/fetchProducts";

export const Products = () => {
  const URL = "https://fakestoreapi.com/products?limit=10";

  const { products, handleAddProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (products.length > 0) return;

    makeApiCall(URL)
      .then((results) => {
        handleAddProducts(results);
      })
      .catch((error) => {
        console.log(error);
      });
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
