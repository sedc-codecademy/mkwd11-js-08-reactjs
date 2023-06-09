import React from "react";
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <li>
                <h3>{this.props.name}</h3>
                <p style={{ 
                        backgroundColor: this.props.color
                    }}>
                        {this.props.color}
                </p>
                <p>{this.props.price}</p>
                <button
                    disabled={!this.props.inStock}
                    type="button"
                    onClick={() => this.props.addToCart(this.props.id)}
                >
                        Add to cart
                </button>
            </li>
        )
    }
}

Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.number,
    inStock: PropTypes.bool,
    addToCart: PropTypes.func
}