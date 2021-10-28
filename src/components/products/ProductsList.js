import React, { Component } from 'react';
import ProductItems from './ProductItems';
import Callapi from '../Utils/Callapi';

export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produclist: [],
            sort: "_sort=price&_order=desc"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(event) {
        const sortValue = event.target.value;
        const { enpont } = this.props;
        const newEnpont = enpont + sortValue;
        Callapi(newEnpont, 'GET', null)
            .then((respons) => {
                this.setState({
                    sort: sortValue,
                    produclist: respons.data
                });
            })
    }
    componentDidMount() {
        const { enpont } = this.props;
        Callapi(enpont + this.state.sort, 'GET', null)
            .then((respons) => {
                this.setState({
                    ...this.state,
                    produclist: respons.data
                });
            })
    }
    render() {
        const { produclist } = this.state;

        return (
            <div className="products">
                <div className="sort-by">
                    <div className="form-group mb-0">
                        <select className="form-control" name="sort"
                            value={this.state.sort}
                            onChange={this.handleSelect}
                        >
                            <option value="_sort=price&_order=asc">Low to high</option>
                            <option value="_sort=price&_order=desc">High to low</option>
                            <option value="_sort=name&_order=asc">A-Z</option>
                            <option value="_sort=name&_order=desc">Z-A</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {
                        produclist.map((product, index) => {
                            return (
                                <div className="col-sm-6 col-lg-3  px-0" key={index}>
                                    <ProductItems productItem={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}
