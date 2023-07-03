import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/reducers/productsReducer";
import store from "../../store";
import { ProductsList } from "../../components/ProductsList/ProductList";
import { Container } from "@mui/material";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(() => fetchProducts(dispatch, store.getState));

    // same as above, when providing reference
    dispatch(fetchProducts);
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: "20px",
      }}
    >
      <ProductsList />
    </Container>
  );
};
