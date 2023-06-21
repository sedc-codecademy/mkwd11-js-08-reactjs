import CartList from "../../Components/CartList/CartList";

const CartPage = ({ cartProducts, removeFromCart }) => {
  return (
    <section className="page">
      <div className="page-heading">
        <h2>Shopping Cart</h2>
      </div>
      <div className="page-content">
        <CartList cartProducts={cartProducts} removeFromCart={removeFromCart} />
      </div>
    </section>
  );
};

export default CartPage;
