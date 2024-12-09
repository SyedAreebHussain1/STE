import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import parse from "html-react-parser";
// import icon1 from "../images/icon1.png";
// import icon2 from "../images/icon2.png";
// import icon3 from "../images/icon3.png";
import { useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const SellWithUsFeature = (props) => {
    // const [title, setTitle] = useState("Default Title");
    let publicUrl = process.env.PUBLIC_URL + "/";
    let customClass = props.customClass ? props.customClass : "";
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
    return (
        <div className={customClass}>
            <div className="container"
                data-aos="fade-up"
            >
                <div className="row ltn__custom-gutter--- justify-content-center go-top">
                    {props.statment.map((val, i) => {
                        return <div key={i} className="col-lg-6 col-sm-8 col-12">
                            <div
                                className="ltn__feature-item  ltn__feature-item-6-areeb  bg-white  box-shadow-1  features_v1_height" style={{ maxHeight: "300px", height: "300px" }}
                            >

                                <div className="ltn__feature-info">
                                    <h3>
                                        <div
                                            className="freature-link-hover"
                                            style={{ color: "#053857" }}
                                        // to="/service-details"
                                        >

                                            {val.title}
                                        </div>
                                    </h3>
                                    <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                        {/* You can easily navigate through our app without being a tech specialist. */}
                                        {val.content}
                                    </p>

                                </div>
                            </div>
                        </div>
                    })
                    }

                    {/* <div className="col-lg-4 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active features_v1_height" style={{ border: "", height: "190px" }}  >

                            <div className="ltn__feature-info">
                                <h3>
                                    <div
                                        className="freature-link-hover"
                                        style={{ color: "black" }}
                                    // to="/service-details"
                                    >

                                        Free
                                    </div>
                                </h3>
                                <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                    Avail all our services free of charge and manage your property business with the utmost ease.
                                </p>

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default SellWithUsFeature











