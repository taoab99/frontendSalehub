import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavList from './NavList'
import NavRight from './NavRight'
import MenuButton from './MenuButton'
import '../../style/Menu.css'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "menu",
            istogglemenu: false,
            istoggleSearch: false
        }
        this.handleShowmenu = this.handleShowmenu.bind(this);
        this.handleHidenMenu = this.handleHidenMenu.bind(this);
        this.handleShearch = this.handleShearch.bind(this);
        this.setClass = this.setClass.bind(this);
    }
    setClass() {
        if (window.scrollY > 145) {
            this.setState({
                ...this.state,
                className: "menu menu-scroll"
            })
        }
        else {
            this.setState({
                ...this.state,
                className: "menu"
            })
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.setClass);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.setClass);
    }
    handleShowmenu() {
        this.setState({
            ...this.state,
            istogglemenu: true
        })
    }
    handleHidenMenu() {
        this.setState({
            ...this.state,
            istogglemenu: false
        })
    }
    handleShearch() {
        this.setState({
            ...this.state,
            istoggleSearch: !this.state.istoggleSearch
        })
    }
    render() {

        const { istogglemenu, istoggleSearch, className } = this.state;
        return (
            <div className="menu-box">
                <div className={className}>
                    <NavList
                        handleShowmenu={this.handleShowmenu} />
                    <h2>SaleHub</h2>

                    <NavRight
                        handleUser={this.props.handleUser}
                        handleShearch={this.handleShearch}
                        handleShowmenu={this.handleShowmenu}
                    />
                </div>
                {
                    istogglemenu && <div className="menu-overlay">
                        <ul className="header-respon">
                            <li>
                                <Link to="/" onClick={this.handleHidenMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/pages" onClick={this.handleHidenMenu}>Pages</Link>
                            </li>
                            <li>
                                <Link to="/woment">Woment</Link>
                            </li>
                            <li>
                                <Link to="/">Men</Link>
                            </li>
                            <li>
                                <Link to="/">Blog</Link>
                            </li>
                        </ul>
                    </div>
                }

                {
                    istoggleSearch &&
                    <div className="menu-search">
                        <div className="menu-closeSearch my-5">
                            <i className="fas fa-times" style={{ cursor: 'pointer' }} onClick={this.handleShearch}></i>
                        </div>
                        <div className="input-search border-bottom border-dark mb-5">
                            <div className="form-group mb-0">
                                <input type="text"
                                    className="form-control border-0 " name="searchkey" aria-describedby="helpId" placeholder="What are you looking for ?" />
                                <button className="btn border-0">Search</button>
                            </div>
                        </div>

                        <div className="search-trend">
                            <strong>Search Trend:</strong>

                            <ul className="px-0">
                                <li>
                                    <a href="#">denim</a>
                                </li>
                                <li>
                                    <a href="#">Jacket</a>
                                </li>
                                <li>
                                    <a href="#">T-shirt</a>
                                </li>
                                <li>
                                    <a href="#">Outerwear</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                }

                <MenuButton />
            </div>
        )
    }
}
