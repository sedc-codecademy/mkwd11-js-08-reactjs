import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductsPage.css";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const products = useSelector(state => state.products);

  return (
    <section className="page ProductsPage">
      <div className="page-heading">
        <h2>Products</h2>
      </div>
      <div className="card-container">
        {products.value.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
