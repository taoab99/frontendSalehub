import React, { Component } from 'react';
import BanerProducts from '../banber/BanerProducts';
import ProductsList from '../products/ProductsList';

export default class Pages extends Component {

    render() {
        return (
            <div className="pages">
                <BanerProducts title="COLECTIONS" />
                <ProductsList enpont="produclist?" />
            </div>
        )
    }
}
