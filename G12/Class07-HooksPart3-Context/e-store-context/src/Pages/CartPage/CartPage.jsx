import CartList from "../../Components/CartList/CartList";

const CartPage = () => {
  return (
    <section className="page">
      <div className="page-heading">
        <h2>Shopping Cart</h2>
      </div>
      <div className="page-content">
        <CartList />
      </div>
    </section>
  );
};

export default CartPage;
