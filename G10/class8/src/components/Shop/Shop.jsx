import { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../common/actions/productActions";
import productsData from "../../data/products.js";

const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.shop);

  useEffect(() => {
    dispatch(fetchProducts(productsData));
  }, []);

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
