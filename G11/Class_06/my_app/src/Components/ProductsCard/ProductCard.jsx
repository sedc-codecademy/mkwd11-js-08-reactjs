import "./ProductCard.css";
import { useNavigate } from "react-router";

export const ProductCard = (props) => {
  const { product } = props;

  const navigate = useNavigate();

  return (
    // product.id
    <div className="card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width={180} />

      <div>
        <button onClick={() => navigate("/product/" + product.id)}>
          View Details
        </button>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
