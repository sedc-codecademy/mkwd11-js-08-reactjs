import { useContext } from "react";
import Button from "../Button/Button";
import "./CartListItem.css";
import ProductsContext from "../../Contexts/ProductsContext";

const CartListItem = ({ cartProduct }) => {
  const { removeFromCart } = useContext(ProductsContext);

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
