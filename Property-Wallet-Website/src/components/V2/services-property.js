import React, { useState, useEffect } from "react";

import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Switch, Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesPropertyWal = ({ content, customClass, heading, title, type }) => {

    let publicUrl = process.env.PUBLIC_URL + "/";

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <div
                className="para-service container"
                style={{ marginTop: "7%" }}
            >
                <div className="text-align-center margin-bottom-60px go-top" >
                    <div className={type === 'crm' ? 'bold text-Align-center' : "text-skyblue bold font-size-L"} style={type === 'crm' ? { color: "#053857", fontSize: "2rem" } : {}}>
                        {heading}
                    </div>
                    <div className="font-size-1_8rem fastImpossiblysimple bold text-black">{title}</div>
                </div>
                <div className="row ltn__custom-gutter--- justify-content-center">
                    {content.map((itemv, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-sm-6 col-12 go-top"
                                data-aos="flip-right"
                            >
                                <div className="ltn__feature-item text-align-center">
                                    <Link to={itemv.path}><img src={itemv.img} className="width-300px" /></Link>
                                    <div
                                        className="ltn__feature-info marginTop-15px"
                                    >
                                        <Link to={itemv.path}> <h5>{itemv.heading}</h5></Link>
                                        <p className="font-15px text-gray-ad">
                                            {itemv.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ServicesPropertyWal;
