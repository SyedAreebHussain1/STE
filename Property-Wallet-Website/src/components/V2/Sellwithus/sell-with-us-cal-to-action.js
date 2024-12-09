import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const CallToActonSellWithUs = () => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    return (
        <div className="ltn__call-to-action-area call-to-action-6 " style={{}}>
            <div className="container" style={{ border: "" }}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg-areeb position-relative " style={{ justifyContent: "center" }}>
                            <div className="coll-to-info text-color-white" style={{ justifyContent: "center" }} >
                                <h1 style={{ color: "#053857" }}>Improved Sales. Faster Growth.</h1>
                                <div
                                    style={{ textAlign: "center"  }}
                                    className="btn-wrapper animated"
                                > <a  className=" theme-btn-1 btn btn-effect-1 learnMoress"
                                    href="https://www.youtube.com/embed/jtpcoNnYxVI?autoplay=1"
                                    allow='autoplay'
                                    data-rel="lightcase"
                                    autoPlay

                                ><i className="icon-play" /> Explore Property Wallet CRM</a>
                                </div>
                                {/* <div style={{color:"#053857"}}>Lorem ipsum Hello world</div> */}
                            </div>
                            <div className="btn-wrapper go-top">
                               
                                <div className="btn-wrapper animated">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CallToActonSellWithUs;
