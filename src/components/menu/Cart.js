import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className="menu-cart menu-show ">
                <p className="text-center text-muted mb-4">
                    your cart is currently
                    {this.props.number ? this.props.number : " empty"}
                </p>
                <button className="btn rounded-0">FOR HER</button>
                <button className="btn rounded-0">FOR HIM</button>
                <button className="btn rounded-0">BEST SALLERS</button>
                <button className="btn rounded-0">NEW ARRIVELS</button>
            </div>
        )
    }
}
