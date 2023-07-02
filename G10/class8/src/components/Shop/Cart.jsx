import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useSelector(state => state.shop);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  if (!cartItems.length) {
    return <div className="container text-center">No items in your cart</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center">Cart</h1>
      <ul className="list-group list-group-flush">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
          />
        ))}
      </ul>
      <h3 className="text-end">Total: {total}$</h3>
    </div>
  );
};

export default Cart;
