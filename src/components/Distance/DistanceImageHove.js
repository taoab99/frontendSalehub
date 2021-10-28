import React, { Component } from 'react';

export default class DistanceImageHove extends Component {
    render() {
        const { distanimg } = this.props;
        return (
            <div className="distance-box">
                <img src={distanimg.img} alt={distanimg.title} />
                <div className="distance-btn-overlay">
                    <button className="btn bg-white border-0 rounded-0" >SHOP NOW</button>
                </div>
            </div>
        )
    }
}
