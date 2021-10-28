import React, { Component } from 'react'

export default class MenuButton extends Component {
    render() {
        return (
            <div className="menu-buton-show">                   
                        <div className="menu-button">
                            <div className="text-center">
                                <i className="fas fa-home"></i>
                                <a href="#">HOME</a>
                            </div>
                            <div className="text-center">
                            <i className="fas fa-heart"></i>
                                <a href="#">WISHLIST</a>
                            </div>
                            <div className="text-center" style = {{position: 'relative'}}>
                            <i className="fas fa-shopping-cart">                            
                            </i>
                            <span className="cart-number">0</span>
                                <a href="#">CART</a>
                            </div>
                            <div className="text-center">
                            <i className="fas fa-cog"></i>
                                <a href="#">SETTING</a>
                            </div>
                            <div className="text-center">
                                <i className="far fa-arrow-alt-circle-up"></i>
                                <a href="#">ON TOP</a>
                            </div>
                        </div>
                     </div>
        )
    }
}
