import "./ProductCard.css";

export const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width={180} />

      <div>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating.rate}</p>
      </div>
    </div>
  );
};
