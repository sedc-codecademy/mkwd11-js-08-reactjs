import { useEffect, useMemo } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setCategories,
} from "../../common/actions/productActions";
import productsData from "../../data/products.js";
import Search from "./Search";
import Sidebar from "../Layout/Sidebar";

const Shop = () => {
  const dispatch = useDispatch();
  const { products, searchTerm, selectedCategories } = useSelector(
    state => state.shop
  );

  useEffect(() => {
    dispatch(fetchProducts(productsData));
    dispatch(setCategories(productsData));
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    // 1. If we don't have selected categories nor search term = WE ARE NOT FILTERING
    if (!selectedCategories?.length && !searchTerm) return products;

    // 2. We have search term but no selected categories
    if (searchTerm && !selectedCategories?.length)
      return products.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // 3. We have selected categories but no search term
    if (!searchTerm && selectedCategories.length)
      return products.filter(p => selectedCategories.includes(p.category));

    // 4. We have both selected categories and search term
    return products.filter(
      p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        selectedCategories.includes(p.category)
    );
  }, [products, searchTerm, selectedCategories]);

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-12">
          <Search />
        </div>
      </div>

      <div className="row align-items-start">
        <div className="col-3">
          <Sidebar />
        </div>
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
