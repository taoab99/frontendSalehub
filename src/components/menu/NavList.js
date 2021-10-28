import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavList extends Component {
    render() {
        const handleShowmenu = this.props.handleShowmenu;
        return (
            <div className="w25">
                <i className="fas fa-bars icon-none" onClick={handleShowmenu}></i>

                <ul className="header-none">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pages">Pages</Link>
                    </li>
                    <li>
                        <Link to="/woment">Woment</Link>
                    </li>
                    <li>
                        <Link to="/men">Men</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
