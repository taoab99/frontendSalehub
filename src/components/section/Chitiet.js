import React, { Component } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { Redirect } from 'react-router';
import Callapi from '../Utils/Callapi';

export default class Chitiet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "green",
            size: "S",
            isRedirect: false
        }
        this.handeChangeColor = this.handeChangeColor.bind(this);
        this.handleChangeSize = this.handleChangeSize.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handeChangeColor(color) {
        this.setState({
            ...this.state,
            color: color
        });
    }
    handleChangeSize(size) {
        this.setState({
            ...this.state,
            size: size
        })
    }
    handleSubmit(event, product) {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem("account"));
        if (user) {
            let cartProduct = {
                ...product
            }
            cartProduct.size = this.state.size;
            cartProduct.color = this.state.color;
            cartProduct.soluong = 1;
            cartProduct.user = user;
            console.log(cartProduct);
            Callapi("cart", 'POST', cartProduct)
                .then((respons) => {
                    console.log(respons);
                })

        }
        else {
            this.setState({
                ...this.state,
                isRedirect: true
            })
        }

        // this.setState({
        //     color: "green",
        //     size: "S",
        //     isRedirect: false
        // });

    }
    render() {
        const { location } = this.props;
        const { state } = location;
        const { isRedirect } = this.state;
        if (isRedirect) {
            return <Redirect push to="/singgin" />
        }
        return (
            <div className="hover-image">
                <div className="row">

                    <div className="col-md-6">
                        <InnerImageZoom
                            width={640}
                            height={800}
                            zoomPreload={true}
                            hasSpacer={true}
                            zoomScale={3}
                            src={location.state.productItem.image}
                            zoomSrc={location.state.productItem.image}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="hover-image-title">
                            <h3 className="mb-4">{state.productItem.description}</h3>
                            <p>${state.productItem.price}</p>
                        </div>
                        <p>COLOR : DARKOLIVERGREEN</p>

                        <div className="custom-color mb-5">
                            <div className=
                                {
                                    this.state.color === "green" ? ("color actived") : "color"
                                }
                                onClick={() => this.handeChangeColor("green")}
                            >
                                <div className="color-item" style={{ backgroundColor: "green" }}>

                                </div>
                            </div>
                            <div className=
                                {
                                    this.state.color === "red" ? ("color actived") : "color"
                                }
                                onClick={() => this.handeChangeColor("red")}>
                                <div className="color-item" style={{ backgroundColor: "red" }}>

                                </div>
                            </div>
                        </div>
                        <div className="size mb-5">
                            <div className=
                                {this.state.size === "S" ? ("size-item actived") : "size-item"}
                                onClick={() => this.handleChangeSize("S")}
                            >
                                S
                            </div>
                            <div className=
                                {this.state.size === "M" ? ("size-item actived") : "size-item"}
                                onClick={() => this.handleChangeSize("M")}
                            >
                                M
                            </div>
                            <div className=
                                {this.state.size === "L" ? ("size-item actived") : "size-item"}
                                onClick={() => this.handleChangeSize("L")}
                            >
                                L
                            </div>
                        </div>

                        <div className="addtocart mb-5">
                            <button className="btn bg-seconddary rounded-0 d-block mb-3 py-3"
                                onClick={(event) => this.handleSubmit(event, state.productItem)}
                            >ADD TO BAG</button>
                            <button className="btn bg-dark text-white rounded-0 py-3">BY IT NOW</button>
                        </div>
                        <div className="addinfo">
                            <p className="mb-5 text-muted">Steele's Lena Dress features a smocked bust, off the shoulder sleeves with eyelet design, and mini cut skirt with raw hem.</p>

                            <ul className="px-4">
                                <li>MACHINE WASH AT MAX.TEMP. 30° C - NORMAL PROCESS</li>
                                <li>DO NOT BLEACH</li>
                                <li>DO NOT TUMBLE DRY</li>
                                <li>IRON AT MAX. TEMP. OF 110° C WITHOUT STEAM</li>
                                <li>DO NOT DRY CLEAN</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
