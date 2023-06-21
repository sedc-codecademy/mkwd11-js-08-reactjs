import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  // FETCH DETAILS ABOUT THE SINGLE PRODUCT
  const params = useParams();
  const navigate = useNavigate();

  console.log("PRAMS:", params);

  const id = params.id;

  const fetchSingleProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    console.log("Result of single product", result);
    setSingleProduct(result);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <div>
      <h3>Single product component</h3>
      <div
        style={{
          cursor: "pointer",
          backgroundColor: "aliceblue",
          padding: "20px",
          width: "fit-content",
          border: "1px solid grey",
          borderRadius: "5px",
        }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </div>
      {singleProduct ? (
        <div>
          <h2>{singleProduct.title}</h2>
          <img
            src={singleProduct.image}
            width={400}
            alt={singleProduct.title}
          />

          <p>{singleProduct.description}</p>
          <div>
            <p>Price: {singleProduct.price}</p>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
