import { useContext } from "react";
import Button from "../Button/Button";
import "./CartListItem.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../state/slices/productsSlice";

const CartListItem = ({ cartProduct }) => {
  const dispatch = useDispatch();

  return (
    <li className="CartListItem">
      <strong>{cartProduct.title}</strong>
      <span>
        ${cartProduct.price}
        <Button
          btnStyle={{ marginLeft: "20px" }}
          btnText="❌"
          onBtnClick={() => {
            dispatch(removeFromCart(cartProduct));
          }}
        />
      </span>
    </li>
  );
};

export default CartListItem;
