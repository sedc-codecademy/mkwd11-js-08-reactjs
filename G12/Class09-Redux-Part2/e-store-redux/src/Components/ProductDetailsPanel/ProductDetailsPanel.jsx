import Button from "../Button/Button";
import "./ProductDetailsPanel.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/slices/productsSlice";

const ProductDetailsPanel = ({ product }) => {
  const dispatch = useDispatch();

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
                dispatch(addToCart(product));
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
