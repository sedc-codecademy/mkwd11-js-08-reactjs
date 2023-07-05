import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/productsSlice";
import { ProductsList } from "../../components/ProductsList/ProductList";
import { Title, MyCostumContainer } from "./Products.styles";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
  }, []);

  return (
    <MyCostumContainer>
      <Title>Products List:</Title>
      <ProductsList />
    </MyCostumContainer>
  );
};
