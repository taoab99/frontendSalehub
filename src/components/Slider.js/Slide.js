import React, { Component } from 'react';
import '../../style/Slide.css';
import Slider from 'infinite-react-carousel';

export default class Slide extends Component {
    render() {
        const sliderImage = [
            {
                backgroundeImage: 'https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2Fslideshow-1_f9506a0f-cd22-46e1-89e6-dfb216eda48b_1920x950.jpg?alt=media&token=26934384-ba32-4d15-af7c-246321e17567',
                title: 'NEW COLECTION',
                caption2: 'FIND YOUR',
                caption3: 'PERFECT',
                captionText: 'Uncompromising in style, quality and performance',
                animation: 'slideanimate'
            },
            {
                backgroundeImage: 'https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2Fslideshow-2_776428d6-b3e7-4a7f-9fe5-d18ba9b28a8f_1920x950.jpg?alt=media&token=ab346f4c-3e8d-4d8f-803c-f316a5d31eea',
                title: 'NEW COLECTION',
                caption2: 'THE HOTLIST OF',
                caption3: 'SUMMER',
                captionText: 'The 12 Biggest Spring/Summer 2021 Trends',
                animation: 'slideanimate1'
            },
            {
                backgroundeImage: 'https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2Fslideshow-3_8d153831-1053-4b01-9846-85b389bc650a_1920x950.jpg?alt=media&token=743eade0-132e-4513-a6dc-50f1f7ccf0d5',
                title: 'NEW COLECTION',
                caption2: 'FASHION',
                caption3: 'GLASSES',
                captionText: 'Best eyeglasses for women to channel your inner Clark Kent',
                animation: 'slideanimate2'
            }
        ];
        const settings = {
            autoplay: false,
            dots: true,
            duration: 200,
            pauseOnHover: false,
            arrows: false
        };
        return (
            <div className="slider">
                <Slider {...settings}>
                    {
                        sliderImage.map((item, index) => {
                            return (

                                <div className="slider-items" key={index}>
                                    <img src={item.backgroundeImage} alt={item.title} />
                                    <div className="slider-title">
                                        <div className={`slider-caption ${item.animation}`}>
                                            <h3>{item.title}</h3>
                                            <p className="caption2">{item.caption2}</p>
                                            <h2 className="caption3">{item.caption3}</h2>
                                            <p className="caption-text">{item.captionText}</p>

                                            <button className="btn border-0 rounded-0">
                                                <span className="btn-hover">
                                                    SHOP THE COLECTION
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider >

            </div >
        )
    }
}
