import React from "react";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCount: 0,
    };

    console.log("constructor Cart");

    /*
      The constructor is responsible for initializing the component's state and binding event handlers.
      You can set the initial state of the component using this.state.
      It's recommended to call super(props) at the beginning to ensure the correct behavior of the component.
    */
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Cart", props, state);
    if (props.productsInCart.length !== state.productsCount) {
      return {
        productsCount: props.productsInCart.length,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount Cart");

    window.addEventListener("scroll", this.handleScroll);
  }

  // must return boolean value
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate Cart", nextProps, nextState);

    if (nextProps.productsInCart !== this.props.productsInCart) {
      return true;
    }

    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate Cart", prevProps, prevState);

    return window.pageYOffset;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "componentDidUpdate Cart",
      prevProps,
      prevState,
      snapshot,
      window.pageYOffset
    );

    if (snapshot !== null && snapshot === window.pageYOffset) {
      window.scrollTo(0, 0);
    }
  }

  handleScroll(e) {
    console.log("We are scrolling", e);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Cart");

    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    console.log("render Cart");
    return (
      <div>
        <h2>Cart ({this.state.productsCount})</h2>
        {this.props.productsInCart.map(product => (
          <li key={`cart-${product.id}`}>
            <p>{product.name}</p>
            <button
              onClick={() => this.props.removeFromCart(product.id)}
              type="button"
            >
              Remove
            </button>
          </li>
        ))}
      </div>
    );
  }
}
