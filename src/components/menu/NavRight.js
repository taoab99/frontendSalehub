import React, { Component } from 'react'
import Callapi from '../Utils/Callapi';
import Account from './Account'
import Cart from './Cart'

export default class NavRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem("account")),
            number: 0
        }
    }
    componentDidMount() {
        const user = this.state.user;
        if (user) {
            console.log(this.state.number);
            Callapi(`cart?user=${user}`, "GET", null)
                .then(respons => {
                    const number = respons.data.length;
                    this.setState({
                        ...this.state,
                        number: number
                    })
                })
        }
    }
    render() {

        const { handleShearch, handleShowmenu } = this.props;
        const { number } = this.state;
        return (
            <div className="right-respon">

                <ul className="header-right">
                    <li>
                        <a href="#">
                            <i className="fas fa-search" onClick={handleShearch}></i>
                            <span className="header-none">Search</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-user icon-none"></i>
                            <span className="header-none">Account</span>
                            <Account />
                        </a>
                    </li>
                    <li>
                        <a href="/cart">
                            <i className="fas fa-shopping-bag"></i>
                            <span className="header-none"> My Cart </span>
                            <span className="menu-cartnumber">{number}</span>

                            <Cart number={number} />
                        </a>
                    </li>
                </ul>

                <div className="navright-respon">
                    <div className="form-group mb-0">
                        <input type="text"
                            className="form-control rounded-pill pr-5" name="" id="" aria-describedby="helpId" placeholder="What are you looking for ?" />
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <div className="right-menu">
                    <i className="fas fa-bars" onClick={handleShowmenu}></i>
                </div>

            </div>
        )
    }
}
