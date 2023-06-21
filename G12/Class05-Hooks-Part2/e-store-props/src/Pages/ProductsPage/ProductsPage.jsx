import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductsPage.css";

const ProductsPage = ({ products, addToCart }) => {
  return (
    <section className="page ProductsPage">
      <div className="page-heading">
        <h2>Products</h2>
      </div>
      <div className="card-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
