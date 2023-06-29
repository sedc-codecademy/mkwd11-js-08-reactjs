import products from "../../data/products.js";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-3"></div>
        <div className="col-9">
          <div className="row align-items-start">
            {products.map(product => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
