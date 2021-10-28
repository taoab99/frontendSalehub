import React, { Component } from 'react'
import BanerProducts from '../banber/BanerProducts';
import ProductsList from '../products/ProductsList';

export default class Woment extends Component {
    render() {
        return (
            <div className="pages">
                <BanerProducts title="WOMENT" />
                <ProductsList enpont="products?type=woment&" />
            </div>
        )
    }
}
