import { useEffect, useMemo } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../common/actions/productActions";
import productsData from "../../data/products.js";
import Search from "./Search";

const Shop = () => {
  const dispatch = useDispatch();
  const { products, searchTerm } = useSelector(state => state.shop);

  useEffect(() => {
    dispatch(fetchProducts(productsData));
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-12">
          <Search />
        </div>
      </div>

      <div className="row align-items-start">
        <div className="col-3"></div>
        <div className="col-9">
          <div className="row align-items-start">
            {filteredProducts.map(product => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
