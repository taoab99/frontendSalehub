import React, { Component } from 'react'

export default class BanerProducts extends Component {
    render() {
        return (
            <div className="bannerproducts">
                <div className="bannerproducts-box">
                    <div className="container">
                        <h1>{this.props.title}</h1>
                    </div>
                </div>

            </div>
        )
    }
}
