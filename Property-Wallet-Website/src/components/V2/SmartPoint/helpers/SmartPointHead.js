import React, { useState, useEffect } from "react";
import BannerService from "../../../images/Service2.m4v"
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Switch, Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SmartPointHead = (props) => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    let CustomClass = props.customclass ? props.customclass : "";


    return (
        <>
            <div className={" bg-white " + CustomClass} style={{ marginLeft: "1%", marginRight: '1%' }}>
                <div className="row ltn__custom-gutter--- justify-content-center go-top bg-white" style={{ border: '', marginLeft: "1%", marginRight: '1%' }}
                    data-aos="fade-up"
                >
                    <div className=" col-lg-6 col-sm-8 col-12"
                    >
                        <div className="ltn__feature-item ">
                            <div className="ltn__feature-info">
                                <div className='' style={{
                                    margin: 0,
                                    padding: 0,
                                    boxSizing: 'border-box',
                                    scrollBehavior: 'smooth',
                                    width: '100%',
                                }}>
                                    <video style={iOS ? { width: '100%' } : { width: '100%' }} className='videoTag' playsInline autoPlay loop muted>
                                        <source src={BannerService} type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-12" style={{ marginTop: "7%" }}>
                        <div className="ltn__feature-item">
                            <div className="ltn__feature-info">
                                <h3>
                                    <div
                                        className="text_Quick" style={{ fontSize: "2rem" }}>
                                        {props.heading}
                                        <div className="curve"></div>
                                    </div>
                                </h3>
                                <p className="text-gray-ad" style={{ fontSize: "17px", marginTop: '5%' }}>
                                    {props.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default SmartPointHead;
