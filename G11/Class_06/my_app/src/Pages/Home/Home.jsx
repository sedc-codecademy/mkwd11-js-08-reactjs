import { useState, useEffect } from "react";
import "./Home.css";
import { ProductCard } from "../../Components/ProductsCard/ProductCard";

export const Home = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const URL = "https://fakestoreapi.com/products/category/";

  const [categorySelected, setCategorySelected] = useState("electronics");
  const [productsByCategory, setProductsByCategory] = useState([]);

  const handleSelectCategory = (category) => {
    setCategorySelected(category);
  };

  const getProductsByCategory = async (category) => {
    const response = await fetch(URL + category);
    // const response = await fetch(`${URL}${category}`);
    const result = await response.json();
    console.log("RESULTS ARE: ", result);

    setProductsByCategory(result);
  };

  useEffect(() => {
    getProductsByCategory(categorySelected);
  }, [categorySelected]);

  return (
    <div>
      <h1>Home page</h1>
      <hr />
      <br />

      <h2>Selected category: {categorySelected}</h2>
      <hr />
      <br />

      <div className="categories">
        {categories.map((category) => (
          <div
            onClick={() => handleSelectCategory(category)}
            className={`${
              category === categorySelected ? "active-category" : ""
            } ${`category`}`}
            key={category}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="productsContainer">
        {" "}
        {productsByCategory.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
