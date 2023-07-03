import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductCard } from "../../components/ProductsCard/ProductsCard";

export const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartItems);
  return (
    <Container>
      {cartList.length ? (
        cartList.map((cartItem) => (
          <ProductCard key={cartItem.id} product={cartItem} />
        ))
      ) : (
        <div>No items yet</div>
      )}
    </Container>
  );
};
