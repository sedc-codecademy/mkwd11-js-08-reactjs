const CartItem = ({ title, price }) => {
  return (
    <li className="list-group-item text-end">
      <span>{title}</span>
      <span> | </span>
      <span>{price}$</span>
    </li>
  );
};

export default CartItem;
