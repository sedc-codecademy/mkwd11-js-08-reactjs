import React from "react";

export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productsCount: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps Cart', props, state)
        if (props.productsInCart.length !== state.productsCount) {
            return {
                productsCount: props.productsInCart.length
            }
        }
        return null
    }

    render() {
        return (
            <div>
                <h2>Cart ({this.state.productsCount})</h2>
                {
                    this.props.productsInCart.map(product => (
                        <li key={`cart-${product.id}`}>
                            <p>{product.name}</p>
                            <button 
                                onClick={() => this.props.removeFromCart(product.id)}
                                type="button"
                            >
                                Remove
                            </button>
                        </li>
                    ))
                }
            </div>
        )
    }
}