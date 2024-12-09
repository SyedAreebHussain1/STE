import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import smartpointbannervideo from "../images/smartpointbannervideo.mp4"
import propertywalletvedio from "../images/propertywalletvedio.mp4"
import MainJ from "../images/MainGif.gif"
import AOS from "aos";
import googlePlayBtn from "../images/playstore-banner-btn.png"
import appStoreApple from "../images/apple-banner-btn.png"
import "./videobanner.css"


const VideoBanner2 = () => {
    let [ww, setW] = useState(true)
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");


    useEffect(() => {
        setW(true)
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <>
            {/* BannerTwo */}
            {iOS ? <div className='block-flex' >
                <div style={{ width: '100%' }}>
                    <div>
                        <img src={MainJ} />
                    </div>
                    <div style={{ display: "flex", marginTop: "-6%", justifyContent: "center" }}>
                        <div style={{ zIndex: "", border: "", width: "7rem" }} className="btn-android">
                            <a
                                target="_blank"
                                href="http://bit.ly/400UobD"
                            >
                                <img src={appStoreApple} />
                            </a>
                        </div>
                        <div className="btn-android" style={{ width: "7rem", cursor: "pointer", zIndex: '' }}>
                            <a
                                target="_blank"
                                href="http://bit.ly/40cIpYz"
                            >
                                <img src={googlePlayBtn} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                : <div className='block-flex'>
                    <div className='container-left-video' style={{ width: '100%', }}>
                        <video style={iOS || isAndroid ? { width: '100%', outline: 'none', clipPath: 'inset(10px 10px)', zIndex: "999999" } : { width: '100%', outline: 'none', clipPath: 'inset(10px 10px)', zIndex: "999999" }} className='videoTag left-video' playsInline autoPlay  muted>
                            <source src={propertywalletvedio} type='video/mp4' />
                        </video>
                        <div className="middle-video bounce" style={{ border: "", width: "70%" }}>
                            <div className="col-lg-12 col-sm-12 col-12" style={{ width: "100%" }}>
                                <div
                                    className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1  features_v1_height">
                                    <div className="ltn__feature-info">
                                        <div style={{ textAlign: "start" }}>
                                            <p className="text-gray-ad" style={{ fontSize: "18px" }}>
                                                Inventory management is an essential part of any business.Take control of your inventory with our inventory management system. Get real-time insights into your business and make data-driven decisions with our powerful inventory management system. Realtors are now able to manage their inventories more efficiently.
                                            </p>
                                            <br />

                                            <div style={{ textAlign: "center" }}>
                                                <Link
                                                    to="/inventory-management"
                                                    className="theme-btn-1 btn btnLearnmore btn-effect-1"
                                                >
                                                    Learn more
                                                </Link>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-left-video' style={{ width: '100%', }}>
                        <video style={iOS || isAndroid ? { width: '100%', outline: 'none', clipPath: 'inset(10px 10px)', zIndex: "999999" } : { width: '100%', outline: 'none', clipPath: 'inset(10px 10px)', zIndex: "999999" }} className='videoTag left-video' playsInline autoPlay  muted>
                            <source src={smartpointbannervideo} type='video/mp4' />
                        </video>
                        <div className="middle-video bounce" style={{ border: "", width: "70%" }}>
                            <div className="col-lg-12 col-sm-12 col-12" style={{ width: "100%" }}>
                                <div
                                    className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1  features_v1_height">
                                    <div className="ltn__feature-info">
                                        <div style={{ textAlign: "start" }}>
                                            <p className="text-gray-ad" style={{ fontSize: "18px" }}>
                                                Inventory management is an essential part of any business.Take control of your inventory with our inventory management system. Get real-time insights into your business and make data-driven decisions with our powerful inventory management system. Realtors are now able to manage their inventories more efficiently.
                                            </p>
                                            <br />

                                            <div style={{ textAlign: "center" }}>
                                                <Link
                                                    to="/inventory-management"
                                                    className="theme-btn-1 btn btnLearnmore btn-effect-1"
                                                >
                                                    Learn more
                                                </Link>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}


export default VideoBanner2