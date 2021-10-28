import React, { Component } from 'react'
import Callapi from '../Utils/Callapi';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            provinces: null,
            districs: null,
            wards: null,
            city: null,
            quan: null,
            xa: null,
            note: ""
        };
        this.tongtien = this.tongtien.bind(this);
        this.deleteCart = this.deleteCart.bind(this);
        this.total = this.total.bind(this);
        this.OnchangeCode = this.OnchangeCode.bind(this);
        this.districMap = this.districMap.bind(this);
        this.wardsMap = this.wardsMap.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSoluong = this.handleChangeSoluong.bind(this);
    }

    componentDidMount() {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const account = user.email;
                await Callapi(`cart?user=${account}`, 'GET', null)
                    .then((respons) => {
                        this.setState({
                            account: account,
                            cart: respons.data
                        });
                    })
            }
        });

        axios.get("https://provinces.open-api.vn/api/")
            .then((respons) => {
                const data = respons.data;
                this.setState({
                    ...this.state,
                    provinces: data
                })
            })
            .then(
                axios.get("https://provinces.open-api.vn/api/d/")
                    .then((respons) => {
                        const data = respons.data;
                        this.setState({
                            ...this.state,
                            districs: data
                        })
                    })

            )
            .then(
                axios.get("https://provinces.open-api.vn/api/w/")
                    .then((respons) => {
                        const data = respons.data;
                        this.setState({
                            ...this.state,
                            wards: data
                        })
                    })
            )
            .catch(err => {
                console.log(err);
            });
    }
    tongtien(price, soluong) {
        return price * soluong;
    }
    total() {
        const tongtien = this.state.cart.reduce((total, value, index) => {
            return total + (value.price * value.soluong);
        }, 0)
        return tongtien;
    }
    handleChangeSoluong(number, item) {
        const soluong = item.soluong + number;
        if (soluong < 1) {
            item.soluong = 1
        }
        else {
            item.soluong = soluong;
        }

        Callapi(`cart/${item.id}`, 'PUT', item)
            .then(async (respons) => {
                if (respons.status === 200) {
                    await Callapi(`cart?user=${this.state.account}`, 'GET', null)
                        .then((respons) => {
                            this.setState({
                                ...this.state,
                                cart: respons.data
                            });
                        })

                }
            })
    }
    deleteCart(id) {
        Callapi(`cart/${id}`, 'DELETE')
            .then(async (respons) => {
                if (respons.status === 200) {
                    await Callapi(`cart?user=${this.state.account}`, 'GET', null)
                        .then((respons) => {
                            this.setState({
                                ...this.state,
                                cart: respons.data
                            });
                        })
                }
            })

    }
    OnchangeCode(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    districMap() {
        const { city, districs } = this.state;
        if (city) {
            const districList = districs.filter((distric, index) => {
                return distric.province_code == city;
            })
            const districElement = districList.map((distric, index) => {
                return (
                    <option
                        key={distric.code}
                        value={distric.code}
                    >
                        {distric.name}
                    </option>
                )
            })
            return districElement;
        }
    }
    wardsMap() {
        const { quan, wards } = this.state;
        if (quan) {
            const xa = wards.filter((ward, index) => {
                return ward.district_code == quan;
            })
            const xaElement = xa.map((xa, index) => {
                return (
                    <option
                        key={xa.code}
                        value={xa.code}
                    >
                        {xa.name}
                    </option>
                )
            })
            return xaElement;
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const { city, quan, xa, note } = this.state;
        if (city === null || quan === null || xa === null) {
            return
        }
        const build = {
            city,
            quan,
            xa,
            note
        }
        console.log(build);
        this.setState({
            ...this.state,
            city: null,
            quan: null,
            xa: null,
            note: ""
        })
    }
    render() {
        const { cart, provinces } = this.state;
        return (
            <div className="cart">
                {
                    cart.length > 0 ?
                        <div className="row">
                            <div className="col-lg-8">
                                <table className="border mb-5">
                                    <tbody>
                                        <tr className="bg-light">
                                            <th>Products</th>
                                            <th>Price</th>
                                            <th>QTY</th>
                                            <th>Total</th>
                                        </tr>
                                        {cart.map((cart, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td >
                                                        <div className="cart-product">
                                                            <div className="cart-delete">
                                                                <i className="far fa-trash-alt"
                                                                    onClick={() => this.deleteCart(cart.id)}></i>
                                                            </div>
                                                            <div className="cart-img">
                                                                <img src={cart.image} alt={cart.name} />
                                                            </div>
                                                            <div className="cart-name"> {cart.name} </div>
                                                        </div>
                                                    </td>
                                                    <td >
                                                        $ {cart.price}
                                                    </td>
                                                    <td >
                                                        <div className="quatity">
                                                            <span
                                                                onClick={() => this.handleChangeSoluong(-1, cart)}>-</span>
                                                            <span className="px-4 text-dark">{cart.soluong}</span>
                                                            <span
                                                                onClick={() => this.handleChangeSoluong(1, cart)}
                                                            >+</span>
                                                        </div>
                                                    </td>
                                                    <td >
                                                        ${this.tongtien(cart.price, cart.soluong)}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-4">
                                <p className="mb-5 p-4 border text-dark" style={{ fontWeight: 700 }}>THERE ARE {cart.length} ITEMS IN YOUR CART</p>
                                <div className="mb-5 px-4">
                                    <p>TOTAL  <span style={{ float: "right" }}>$ {this.total()}</span></p>
                                </div>
                                <div className="shipping bg-light p-4">
                                    <div className="mb-5 py-4">Shipping address</div>
                                    <div className="form-group">

                                        <select
                                            className="form-control"
                                            name="city" id="tp"
                                            onChange={this.OnchangeCode}
                                        >
                                            <option>City</option>
                                            {
                                                provinces && provinces.map((province, index) => {
                                                    return (
                                                        <option
                                                            value={province.code}
                                                            key={province.code}
                                                        >
                                                            {province.name}
                                                        </option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </div>
                                    <div className="form-group">

                                        <select
                                            className="form-control"
                                            name="quan" id="qh"
                                            onChange={this.OnchangeCode}
                                        >
                                            <option>District</option>
                                            {
                                                this.districMap()
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">

                                        <select
                                            className="form-control"
                                            name="xa" id="xp"
                                            onChange={this.OnchangeCode}
                                        >
                                            <option>Ward</option>
                                            {
                                                this.wardsMap()
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control py-3 text-muted"
                                            name="note"
                                            id="note"
                                            value={this.state.note}
                                            rows="7"
                                            placeholder="detailed address"
                                            onChange={this.OnchangeCode}
                                        >

                                        </textarea>
                                    </div>

                                </div>
                                <button
                                    className="btn bg-dark text-white px-5 py-2 mt-3"
                                    onClick={(event) => this.handleSubmit(event)}
                                >
                                    Send
                                </button>
                            </div>
                        </div> :

                        <div className="py-3">
                            <h2 className="mb-4">Your Cart Is Currently Empty.</h2>
                            <p className="mb-4">Before proceeding to checkout you must add some products to your shopping cart.
                                <br />  You will find a lot of interesting products on our "Shop" page.</p>

                            <Link to="/" className="btn bg-dark rounded-0 text-white p-2" style={{ fontWeight: 700, fontSize: 13 }}>CONTINUE SHOPPING &rarr;</Link>
                        </div>
                }

            </div>
        )
    }
}
