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
    /*
      This method is invoked before rendering and is used to update the component's state based on changes in props.
      You can compare the current props and state with the incoming props to determine if the state should be updated.
      If you want to update the state, return an object that represents the new state, otherwise return null.
      Note that getDerivedStateFromProps is a static method, so you can't access instance methods or this inside it.
    */

    if (props.productsInCart.length !== state.productsCount) {
      return {
        productsCount: props.productsInCart.length,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount Cart");

    /*
      This method is called after the component has been rendered and added to the DOM.
      You can perform side effects here, such as making API requests or adding event listeners.
      It's a good place to initialize any asynchronous operations required by the component.
    */

    window.addEventListener("scroll", this.handleScroll);
  }

  // must return boolean value
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate Cart", nextProps, nextState);

    /*
      This method is called before re-rendering the component and determines whether the component should update or not.
      You can implement custom logic to optimize rendering by comparing the current props and state with the next props and state.
      By default, it returns true, indicating that the component should update. If you want to prevent the update, return false.
    */

    if (nextProps.productsInCart !== this.props.productsInCart) {
      return true;
    }

    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate Cart", prevProps, prevState);

    /*
      This method is invoked right before changes from the virtual DOM are applied to the actual DOM.
      It allows you to capture some information from the DOM (e.g., scroll position) before it potentially gets changed.
      You can return a value from this method that will be passed as a third parameter to the componentDidUpdate() method.
    */

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

    /*
      This method is called after the component has been updated and the changes are reflected in the DOM.
      You can perform additional side effects here based on the updated props or state.
      You can also compare the previous props and state with the current ones to trigger additional actions.
    */

    if (snapshot !== null && snapshot === window.pageYOffset) {
      window.scrollTo(0, 0);
    }
  }

  handleScroll(e) {
    console.log("We are scrolling", e);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Cart");
    /*
      This method is called right before the component is unmounted and removed from the DOM.
      You can perform any necessary cleanup operations here, such as canceling network requests or removing event listeners.
    */

    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    /*
      This method is responsible for rendering the component's UI.
      You should return JSX or React elements representing the component's structure and content.
      Avoid performing any side effects or mutations within this method.
    */
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
