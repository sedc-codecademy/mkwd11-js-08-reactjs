import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";
import ProductsContext from "../../Contexts/ProductsContext";

const ProductDetailsPage = () => {
  const { products } = useContext(ProductsContext);

  const { id: productId } = useParams();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const foundProduct = products.find(
      product => product.id === Number(productId)
    );

    console.log(foundProduct);

    if (!foundProduct) {
      navigate("/not-found");
      return;
    }

    setSelectedProduct(foundProduct);
  }, [productId, products]);

  return (
    <section className="page">
      <div className="page-heading">
        <h2>Product Details</h2>
      </div>
      <div className="page-content">
        {selectedProduct && <ProductDetailsPanel product={selectedProduct} />}
      </div>
    </section>
  );
};

export default ProductDetailsPage;
