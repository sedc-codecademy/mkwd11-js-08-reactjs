import { useDispatch } from "react-redux";
import { removeFromCart } from "../../common/actions/productActions";

const CartItem = ({ id, title, price }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item text-end">
      <span>{title}</span>
      <span> | </span>
      <span>{price}$</span>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(removeFromCart(id))}
      >
        X
      </button>
    </li>
  );
};

export default CartItem;
