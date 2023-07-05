import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

export const ProductCard = ({ product, isAddToCart = false }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (productToAdd) => {
    dispatch(addToCart(productToAdd));
  };

  const handleRemoveFromCart = (cartId) => {
    dispatch(removeFromCart(cartId));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150, backgroundSize: "contain" }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        {isAddToCart && (
          <Button onClick={() => handleAddToCart(product)} size="small">
            Add to Cart
          </Button>
        )}

        <Button onClick={() => handleRemoveFromCart(product.id)} size="small">
          Remove from Cart
        </Button>
      </CardActions>
    </Card>
  );
};
