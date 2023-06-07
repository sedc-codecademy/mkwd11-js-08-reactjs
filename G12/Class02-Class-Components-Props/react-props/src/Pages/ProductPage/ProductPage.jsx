import Button from "../../Components/Button/Button";
import { CounterClass } from "../../Components/CounterClass/CounterClass";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductPage.css";

function ProductPage() {
  const productsMockData = [
    {
      title: "TV",
      description: "A very nice LED TV",
      price: 599.98,
    },
    {
      title: "Dishwasher",
      description: "Freedom from the kitchen sink guaranteed",
      price: 299.99,
    },
    {
      title: "Fridge",
      description: "You will not resist the urge to open me all the time",
      price: 999.99,
    },
  ];

  const printFullName = () => {
    console.log("Borche Borisovski");
  };

  return (
    <section className="ProductPage">
      <h2>Available Products</h2>
      <div className="products-container">
        {productsMockData.map((product, i) => (
          <ProductCard key={product.title + i} product={product} />
        ))}
      </div>
      <Button btnText="Print Full Name" onBtnClick={printFullName} />
      <Button
        btnText="Btn Component"
        onBtnClick={() => {
          console.log("clicked from the child");
        }}
      />
      <CounterClass title="Class Counter" />
    </section>
  );
}

export default ProductPage;
