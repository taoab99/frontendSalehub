import React, { Component } from 'react'
import BanerProducts from '../banber/BanerProducts';
import ProductsList from '../products/ProductsList';

export default class Men extends Component {
    render() {
        return (
            <div className="pages">
                <BanerProducts title="MEN" />
                <ProductsList enpont="products?type=men&" />
            </div>
        )
    }
}
