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
            ],
            productsInCart: []
        }
    }

    addToCart(id) {
        // console.log(id)
        const product = this.state.products.find(p => p.id === id)
        // console.log(product)
        this.setState((prevState) => ({
            productsInCart: [...prevState.productsInCart, product]
        }))
    }

    removeFromCart(id) {
        this.setState((prevState) => ({
            productsInCart: prevState.productsInCart.filter(p => p.id !== id)
        }))
    }

    render() {
        return (
            <div className="wrapper">
                <ProductList products={this.state.products} addToCart={this.addToCart.bind(this)} />
                <Cart productsInCart={this.state.productsInCart} removeFromCart={this.removeFromCart.bind(this)} />
            </div>
        )
    }
}