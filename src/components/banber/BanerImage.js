import React, { Component } from 'react'

export default class BanerImage extends Component {
    render() {
        const banner = this.props.banner;

        return (
            <div className="banner-image">
                <img src={banner.image} alt={banner.title} />
                <div className="gallery-image_caption">
                    <h3>
                        {banner.title}
                    </h3>
                    <p>
                        {banner.caption}
                    </p>
                    <a href="#">SHOP THE COLECTION</a>
                </div>
            </div>
        )
    }
}
