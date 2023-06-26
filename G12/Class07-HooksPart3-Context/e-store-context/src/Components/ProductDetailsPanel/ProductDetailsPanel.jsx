import { useContext } from "react";
import Button from "../Button/Button";
import "./ProductDetailsPanel.css";
import ProductsContext from "../../Contexts/ProductsContext";

const ProductDetailsPanel = ({ product }) => {
  const { addToCart } = useContext(ProductsContext);

  return (
    <div className="ProductDetailsPanel">
      <h3>{product.title}</h3>
      <div className="panel-content">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="panel-details">
          <p>{product.description}</p>
          <div className="panel-controls">
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
      </div>
    </div>
  );
};

export default ProductDetailsPanel;
