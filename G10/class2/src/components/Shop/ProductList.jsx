import React from "react";
import Product from "./Product";

export default class ProductList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Products</h2>
                <ul>
                    {
                        this.props.products
                            .map(product => <Product 
                                                key={product.id}
                                                {...product}
                                            />)
                                            // id={product.id}
                                            // name={product.name}
                                            // color={product.color}
                                            // inStock={product.inStock}
                                            // price={product.price}
                    }
                </ul>
            </div>
        )
    }
}