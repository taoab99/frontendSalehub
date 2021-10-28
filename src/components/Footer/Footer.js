import React, { Component } from 'react'
import FooterLisst from './FooterLisst'

export default class Footer extends Component {
    render() {
        const list = [
            {
                title: "About Us",
                list: [
                    "About Us", "Contact us", "Factories", "Careers", "Help and advice", "Shipping & Returns", "Terms and conditions", "Refund Policy"
                ]
            },
            {
                title: "Our Shop",
                list: [
                    "New Arrivals", "Top Trending", "Autumn Collection", "Back in Stock", "Bikini Tops", "Bikini Bottoms", "Swimwear", "Denim Collection"
                ]
            }
        ]
        return (
            <div className="footer distance-bg distance">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-4 text-left">
                        <h2 className="mb-5"> Salehub</h2>
                        <div className="footer-tel mb-4">
                            <p>
                                We’re available by phone +123-456-789     <br />
                                info @example.com     <br />
                                Monday till Friday 10 to 6 EST
                            </p>
                        </div>
                        <div>
                            <img className="mb-3" src="https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Fpaypal_240x.png?alt=media&token=f4bb5299-675e-4e41-ab45-b79aa1167fac" alt="ảnh payal" />
                        </div>
                    </div>
                    {
                        list.map((list, index) => {
                            return (
                                <div
                                    className="col-xl-3 col-lg-3 col-md-4 text-left"
                                    key={index}>
                                    <FooterLisst list={list} />
                                </div>
                            )
                        })
                    }
                    <div className="col-xl-3 col-lg-6 col-md-8 text-left">
                        <h3 className="mb-5">Newsletter</h3>
                        <div className="footer-tel mb-4">
                            <p>
                                Receive our weekly newsletter. <br />
                                For dietary content, fashion insider and the best offers.
                            </p>
                        </div>
                        <div className="footer-form mb-4">
                            <div className="form-group h-100">
                                <input type="text"
                                    className="form-control border-dark rounded-0 py-4" name="" aria-describedby="helpId" placeholder="Email address" />
                            </div>
                            <div className="footer-btn h-100">
                                <button className="btn bg-dark text-white h-100 rounded-0">Join</button>
                            </div>
                        </div>
                        <div className="footer-social">
                            <span>
                                <i className="fab fa-facebook-f"></i>
                            </span>
                            <span>
                                <i className="fab fa-twitter"></i>
                            </span>
                            <span>
                                <i className="fab fa-pinterest"></i>
                            </span>
                            <span>
                                <i className="fab fa-vimeo-v"></i>
                            </span>
                            <span>
                                <i className="fab fa-instagram"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

