import React  from "react";
import ProductList from "./ProductList";
import './ProductsContainer.css'
import Cart from "./Cart";

export default class ProductsContainer extends React.Component {

    constructor() {
        super()

        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Umbrella',
                    color: 'blue',
                    price: 12,
                    inStock: true
                },
                {
                    id: 2,
                    name: 'Ball',
                    color: 'white',
                    price: 3,
                    inStock: true
                },
                {
                    id: 3,
                    name: 'Socks',
                    color: 'yellow',
                    price: 2,
                    inStock: false
                },
                {
                    id: 4,
                    name: 'Chair',
                    color: 'brown',
                    price: 20,
                    inStock: true
                }
            ]
        }
    }

    render() {
        return (
            <div className="wrapper">
                <ProductList products={this.state.products} />
                <Cart />
            </div>
        )
    }
}