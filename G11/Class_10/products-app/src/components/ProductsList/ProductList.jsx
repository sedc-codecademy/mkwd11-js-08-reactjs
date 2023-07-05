import { useSelector } from "react-redux";
import { ProductCard } from "../ProductsCard/ProductsCard";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  return (
    <>
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} isAddToCart={true} />
        ))
      )}
    </>
  );
};
