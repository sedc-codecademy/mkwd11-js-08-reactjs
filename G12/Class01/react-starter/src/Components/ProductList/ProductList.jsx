import classes from "./ProductList.module.css";
import { Fragment } from "react";

function ProductList() {
  console.log(classes);

  // Jsx can be stored in variables within the function
  const productListJsx = (
    <ul className={classes.list}>
      <li>Product One</li>
      <li>Product Two</li>
      <li>Product Three</li>
    </ul>
  );

  const itemListJsx = (
    <ul className={classes.list}>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  );

  const areProductsShown = true;

  return (
    // If you don't need a wrapper or it can break the layout than you can use <Fragment> or the <> empty tag to wrap sibling html elements in jsx
    <Fragment>
      {areProductsShown ? (
        <h3>Products Are Shown</h3>
      ) : (
        <h3>Items Are Shown</h3>
      )}
      {areProductsShown ? productListJsx : itemListJsx}
    </Fragment>
  );
}

export default ProductList;
