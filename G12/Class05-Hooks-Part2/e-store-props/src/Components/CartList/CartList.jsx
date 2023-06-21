import CartListItem from "../CartListItem/CartListItem";
import "./CartList.css";

const CartList = ({ cartProducts, removeFromCart }) => {
  console.log(cartProducts);

  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {cartProducts.map(cartProduct => (
            <CartListItem
              key={cartProduct.id}
              removeFromCart={removeFromCart}
              cartProduct={cartProduct}
            />
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
