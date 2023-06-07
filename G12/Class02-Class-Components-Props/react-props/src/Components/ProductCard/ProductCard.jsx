import classes from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={classes.ProductCard}>
      <div className={classes.heading}>{product.title}</div>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </div>
  );
}

export default ProductCard;
