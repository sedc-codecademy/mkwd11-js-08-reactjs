import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useSelector(state => state.shop);

  return (
    <div className="container">
      <h1 className="text-center">Cart</h1>
      <ul className="list-group list-group-flush">
        {cartItems.map(item => (
          <CartItem key={item.id} title={item.title} price={item.price} />
        ))}
      </ul>
      <h3 className="text-end">Total: 0</h3>
    </div>
  );
};

export default Cart;
