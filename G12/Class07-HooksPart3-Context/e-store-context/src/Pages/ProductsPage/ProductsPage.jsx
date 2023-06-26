import { useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductsPage.css";
import ProductsContext from "../../Contexts/ProductsContext";

const ProductsPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className="page ProductsPage">
      <div className="page-heading">
        <h2>Products</h2>
      </div>
      <div className="card-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
