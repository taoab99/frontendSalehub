import React, { Component } from 'react';
import BanerImage from '../banber/BanerImage';
import Slide from '../Slider.js/Slide';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductItems from '../products/ProductItems';
import Distance from '../Distance/Distance';
import Title from '../Title';

export default class Home extends Component {
    render() {
        const banner1 = [
            {
                image: "https://cdn.shopify.com/s/files/1/0256/4594/0810/files/banner_1_900x.png?v=1615515282",
                title: "DENIN-JACKET",
                caption: "14 Denim-Jacket Outfits to Live in Now That It Is Fall",
            }
        ]
        const banner = [
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2Fbn-2_676a7adf-ea7b-4fa1-8848-8517abdc2793_540x.jpg?alt=media&token=19d5c724-9963-4fc7-9bbd-32520e100b5e",
                title: "Denim mini skirt",
                caption: ""
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2Fbanner_3_540x.png?alt=media&token=1ab75bb3-ef9d-46d5-9b83-553caecb2bc8",
                title: "HOODED DENIM",
                caption: "Subtitle from happy customers"
            }
        ];

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 5,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };

        const produclist = [
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_0ae182fa-8c71-468e-850b-23fc81cb3bf4_360x.jpg?alt=media&token=073c3e3c-a40a-4b8e-817b-f07839378800",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 3900,
                name: "organic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_1cbcba2f-41b2-436f-a804-ea85cffd26fb_360x.jpg?alt=media&token=4f3b97ca-92d7-40ce-8b4b-e0752a6883ec",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_d2bbf1c3-1d1a-4a26-974d-fff1c821a01b_360x.jpg?alt=media&token=3218d268-aee3-4c09-9c53-d0c7141c473f",
                price: 200,
                name: "organic",
                description: "Oversized jacket with denim panels"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_34ccf0b4-eca9-4653-9154-f1d88213386f_360x.jpg?alt=media&token=68a93ef1-81b3-4422-8969-21092ce21f35",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 300,
                name: "ganic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_34ccf0b4-eca9-4653-9154-f1d88213386f_360x.jpg?alt=media&token=68a93ef1-81b3-4422-8969-21092ce21f35",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_35a3e44f-9243-4924-9132-e1f98599b443_360x.jpg?alt=media&token=529bb1de-67bf-4d47-9a6a-dfc6764f49d0",
                price: 3900,
                name: "listenorganic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_360x.jpg?alt=media&token=a2fb0cfe-d90c-4c1a-8470-a73282b0e67f",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 390,
                name: "Aware organic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_423afc51-89a7-412d-b94e-1905f35af736_360x.jpg?alt=media&token=9ab7bdf3-b859-4b38-907c-b964161f9f97",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 900,
                name: "Eco organic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_5cb5d1e1-2c31-499b-9010-ccac2fecf49e_600x.jpg?alt=media&token=6a760b69-fb33-419c-83a3-244bff36c652",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 120,
                name: "co organic cotton",
                description: "Faux suede biker jacket"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_8624266d-ffc8-44db-b030-5f62c62138d5_360x.jpg?alt=media&token=54db0110-d739-4dc5-9d42-1548949702b2",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 30,
                name: "cotton",
                description: "Pocketed denim jacket"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_9bf4a17f-966d-4386-a7f4-424ce07c310d_360x.jpg?alt=media&token=0f4c637c-f60d-4a9a-86fc-6d1295edc88a",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 100,
                name: "Eco cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_a5f6af0e-b13e-47bb-883f-bd586149cbad_360x.jpg?alt=media&token=d14fa2d9-7d11-4711-b4d9-53a3b8137f63",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 320,
                name: "top organic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_afb70b63-ea30-4380-b7d3-8e5e765569aa_360x.jpg?alt=media&token=e4a8532f-ac1e-47d5-8e93-8f8c8f607c44",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 3900,
                name: "stop organic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_34ccf0b4-eca9-4653-9154-f1d88213386f_360x.jpg?alt=media&token=68a93ef1-81b3-4422-8969-21092ce21f35",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 540,
                name: "nic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_34ccf0b4-eca9-4653-9154-f1d88213386f_360x.jpg?alt=media&token=68a93ef1-81b3-4422-8969-21092ce21f35",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 700,
                name: "topic organic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_34ccf0b4-eca9-4653-9154-f1d88213386f_360x.jpg?alt=media&token=68a93ef1-81b3-4422-8969-21092ce21f35",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 3900,
                name: "top organic cotton",
                description: "Eco Aware organic cotton top"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F1_34ccf0b4-eca9-4653-9154-f1d88213386f_360x.jpg?alt=media&token=68a93ef1-81b3-4422-8969-21092ce21f35",
                imagetitle: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/reacjsimg%2F2_b1817527-273c-42e7-8e7f-0f0debf56e50_360x.jpg?alt=media&token=74672c35-83bc-407a-85ae-5fa428c17da4",
                price: 100,
                name: "organic cotton",
                description: "Eco Aware organic cotton top"
            }
        ];

        const blogs = [
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Fblog-1_386x386_crop_top.png?alt=media&token=6355b398-2b8c-4014-8d29-dfe871f0efa1",
                title: "5 Sweet Outfit Ideas You’ll Wear Well Beyond Valentine’s Day",
                info: " Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember...."

            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Fblog-2_386x302_crop_top.png?alt=media&token=93257d51-53e3-4d9e-ae0b-54a85e5e303f",
                title: "How To Be “Good With Money” According To 4 Female Financial Experts",
                info: " Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember...."
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Fblog-3_386x386_crop_top.png?alt=media&token=294e877b-226f-4256-ac2a-9aa82c9bbb5a",
                title: "This Scandi Influencer’s Shoe Collaboration Is The Gift That Keeps On Giving",
                info: " Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember...."
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/Distane%2Fblog-4_386x302_crop_top.png?alt=media&token=e0be396f-cea6-45c5-a819-c062a891c008",
                title: "5 Sweet Outfit Ideas You’ll Wear Well Beyond Valentine’s Day",
                info: " Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember...."
            }
        ]
        return (
            <div className="home">
                <Slide />
                <div className="banner" >
                    <Title render={() => (
                        <div className="title-box text-center">
                            <h2 className="mb-3 font-title">DENIM COLLECTION</h2>
                            <p>Explore the best trends for girls and women at SaleHub! Clothes, shoes and cool accessories for a new season are available now at SaleHub online.</p>
                        </div>
                    )} />

                    <div className="row">
                        <div className="col-lg-8">
                            <BanerImage banner={banner1[0]} />
                        </div>
                        <div className="col-lg-4">
                            {
                                banner.map((banner, index) => {
                                    return (
                                        <BanerImage key={index} banner={banner} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="produclist">
                    <Title render={() => (
                        <div className="title-box text-center">
                            <h2 className="mb-3 font-title">WE LOVE
                                <span className="d-inline pl-4"><i className="fas fa-heart"></i></span></h2>
                        </div>
                    )} />

                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        arrows={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">

                        {
                            produclist.map((items, index) => {
                                return (
                                    <ProductItems productItem={items} key={index} />
                                )
                            })
                        }
                    </Carousel>
                </div>
                <Distance />

                <div className="distance px-3">
                    <div className="title">
                        <div className="title-box text-center">
                            <h2 className="mb-3 font-title">FROM OUR BLOG</h2>
                        </div>
                    </div>
                    <div className="row px-2">
                        {
                            blogs.map((items, index) => {
                                return (
                                    <div className="col-sm-6 col-md-6 col-lg-3 px-4" key={index}>
                                        <div className="distance-box">
                                            <img src={items.image} alt={items.title} />
                                        </div>
                                        <div className="distance-abright">
                                            <a href="#" >
                                                {items.title}
                                            </a>
                                            <div className="pb-3 mb-3">
                                                <p>
                                                    {items.info}
                                                </p>
                                            </div>
                                            <div className="article-date">
                                                <span>
                                                    <i className="far fa-user"></i>
                                                    BY VINOVA THEME
                                                </span>
                                                <span>
                                                    <i className="far fa-calendar-alt"></i>
                                                    03 Mar 2021
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
            </div>
        )
    }
}
