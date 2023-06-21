import Button from "../Button/Button";
import "./CartListItem.css";

const CartListItem = ({ cartProduct, removeFromCart }) => {
  return (
    <li className="CartListItem">
      <strong>{cartProduct.title}</strong>
      <span>
        ${cartProduct.price}
        <Button
          btnStyle={{ marginLeft: "20px" }}
          btnText="❌"
          onBtnClick={() => {
            removeFromCart(cartProduct);
          }}
        />
      </span>
    </li>
  );
};

export default CartListItem;
