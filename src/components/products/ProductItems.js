import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style/ProductItem.css';

export default class ProductItems extends Component {
    constructor(props) {
        super(props);
        this.handleOnmouseOver = this.handleOnmouseOver.bind(this);
    }

    handleOnmouseOver(event, productItem) {
        event.target.src = productItem.imagetitle;
    }

    handleOnmouseOut(event, productItem) {
        event.target.src = productItem.image;
    }
    render() {
        const productItem = this.props.productItem;

        return (
            <div className="card produc-item border-0">
                <div className="card pd-Item">
                    <img className="card-img mb-3"
                        onMouseOver={(event) => this.handleOnmouseOver(event, productItem)}
                        onMouseOut={(event) => this.handleOnmouseOut(event, productItem)}
                        src={productItem.image}
                        alt={productItem.name}
                    />

                    <div className="card-img-overlay">
                        <Link to={{
                            pathname: "/sanpham",
                            state: { productItem }
                        }
                        }
                            className="btn bg-dark text-white border-0 rounded-0">SELECTOPTION</Link>
                    </div>

                    <div className="price">
                        <p>{productItem.name}</p>
                        <p>{productItem.price}</p>
                    </div>
                </div>
            </div >
        )
    }
}
