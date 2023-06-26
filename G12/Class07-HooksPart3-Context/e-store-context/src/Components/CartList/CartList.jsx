import { useContext } from "react";
import CartListItem from "../CartListItem/CartListItem";
import "./CartList.css";
import ProductsContext from "../../Contexts/ProductsContext";

const CartList = () => {
  const { getProductsInCart } = useContext(ProductsContext);

  const cartProducts = getProductsInCart();

  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {cartProducts.map(cartProduct => (
            <CartListItem key={cartProduct.id} cartProduct={cartProduct} />
          ))}
        </ol>
      ) : (
        <h3 className="CartList-heading">
          No products in cart... don't be so stingy
        </h3>
      )}
    </>
  );
};

export default CartList;
