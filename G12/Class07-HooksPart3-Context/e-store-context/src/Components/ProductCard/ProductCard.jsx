import { Link } from "react-router-dom";
import "./ProductCard.css";
import Button from "../Button/Button";
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ProductsContext);

  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-details">
        <p>${product.price}</p>
        <Button
          btnText={product.inCart ? "ADDED" : "🛒"}
          onBtnClick={() => {
            addToCart(product);
          }}
          disabled={product.inCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
