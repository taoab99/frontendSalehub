import React, { Component } from 'react'
import Title from '../Title'
import DistanceImageHove from './DistanceImageHove';


export default class Distance extends Component {
    render() {
        const img = [
            {
                img: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Flb-1_88ecbdcc-c1c6-47af-9cb5-1f21ebae7c4c_360x.png?alt=media&token=2fc7cef5-89d3-4798-9b9e-bb8a6324d85d",
                title: "ảnh"
            },
            {
                img: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Flb-2_1e482937-4f64-4d3d-9e9f-feb36a836c0c_360x.png?alt=media&token=ba58ab81-4364-4d55-a9c4-0411f3955f84",
                title: "ảnh"
            },
            {
                img: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Flb-3_243a2a47-8869-47c2-a1b7-ea9163d96e52_360x.png?alt=media&token=cbd7c3f2-aef3-4980-b901-99b281160a11",
                title: "ảnh"
            },
            {
                img: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Flb-4_d1d516ae-775a-453a-a97b-84c9e80f69cd_360x.png?alt=media&token=f26c0e4a-cf68-4bf9-a09d-cddffd6ff1a9",
                title: "ảnh"
            },
            {
                img: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Flb-5_fbd8fa3f-d8a8-4ef1-a023-c348c802ad38_360x.png?alt=media&token=3f678040-940b-4180-aecb-9b2ca0f8e052",
                title: "ảnh"
            },
            {
                img: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Flb-6_a88c6dc9-2f7b-4020-96b1-f01cd6593323_360x.png?alt=media&token=83fb3f3a-ca65-4699-94ca-431740e411b5",
                title: "ảnh"
            },
            {
                img: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Flb-7_177acd91-0dbb-4e63-8fe7-2311d1c193e8_360x.png?alt=media&token=931679b4-f5b1-4779-88f6-37a138d6feae",
                title: "ảnh"
            },
            {
                img: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Flb-8_561008c8-c850-49d3-904c-f30189a60d38_360x.png?alt=media&token=37b5534e-9805-4f16-bcfb-f78c46129ed1",
                title: "ảnh"
            }
        ]
        return (
            <div className="distance distance-bg px-3">
                <Title
                    render={() => (
                        <div className="title-box text-center">
                            <h2 className="mb-3 font-title">SHOP THE LOOKS</h2>
                            <p>Our latest endeavour features designs from around the world with materials so comfortable you won't want to wear anything else every again.</p>
                        </div>
                    )}
                />

                <div className="row px-3">
                    {
                        img.map((items, index) => {
                            return (
                                <div className="col-sm-6 col-md-3 mb-4" key={index}>
                                    <DistanceImageHove distanimg={items} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

