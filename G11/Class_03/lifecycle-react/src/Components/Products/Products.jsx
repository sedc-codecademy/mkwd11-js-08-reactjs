import { Component } from "react";
import "./Products.css";
import { ProductCard } from "../ProductCard/ProductCard";

class Products extends Component {
  URL = "https://fakestoreapi.com/products?limit=5";

  products = [
    {
      id: 1,
      title: "Product One",
      description: "Product one description",
      price: 100,
      rating: 4,
      image:
        "https://www.coca-cola.com/content/dam/onexp/in/en/home-page-test-img/brands/fanta/Fanta-544x544.jpg",
    },
    {
      id: 2,
      title: "Product Two",
      description: "Product Two description",
      price: 99,
      rating: 3.5,
      image:
        "https://www.coca-cola.com/content/dam/onexp/in/en/home-page-test-img/brands/fanta/Fanta-544x544.jpg",
    },
  ];

  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  handleFetchProducts = async () => {
    //USING FETCH
    // const response = await fetch(this.URL);
    // const result = await response.json();

    // console.log("RESULT: ", result);

    // this.setState({
    //   products: result,
    // });

    //USING OUR HARDCODE LIST BECAUSE OF CORS
    this.setState({
      products: this.products,
    });
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  //WHEN WE HAVE TWO lifecycle methods
  //the second one in the hierarchy will overwrite the previous one
  //componentDidMount() {
  //  console.log("SECOND COMPONENT DID MOUNT");
  //}
  render() {
    return (
      <>
        <h1>Products Store</h1>

        {this.state.products.length === 0 ? (
          // Loading animation
          <h3>Loading...</h3>
        ) : (
          <div className="products">
            {this.state.products.map((product) => (
              // Render the whole card
              <ProductCard key={product.id} productProps={product} />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default Products;
