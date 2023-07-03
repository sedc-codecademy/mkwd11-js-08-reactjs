import CartListItem from "../CartListItem/CartListItem";
import "./CartList.css";
import { useSelector } from "react-redux";

const CartList = () => {
  const products = useSelector(state => {
    return state.products;
  });

  const cartProducts = products.value.filter(product => product.inCart);

  console.log(cartProducts);

  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {products.value
            .filter(product => product.inCart)
            .map(cartProduct => (
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
