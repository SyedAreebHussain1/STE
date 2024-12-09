import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../about-v2-a/aboutV2.css";

const SmartPointAbout = (props) => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let customClass = props.customClass ? props.customClass : "";
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <div className="ltn__about-us-area  go-top areeb-show" style={{ marginTop: "-8%" }}>
                <div
                    className="flex justify-content-space-around"
                    style={{ marginBottom: "5%", padding: "70px" }}
                >
                    <div id="hideMe" style={{ width: "43%" }}>
                        <div style={{ marginTop: "22%" }}>
                            <div className="card-mobilize" data-aos="zoom-out-left">
                                <div className="freature-link-hover text-black">
                                    <h3>Exclusive Inventory</h3>
                                </div>

                                <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                    Access to exclusive and high-demand properties sets us apart from traditional real estate channels.
                                </p>
                            </div>
                        </div>

                        <br />

                        <div className="" style={{ textAlign: "" }}>
                            <div className="card-mobilize" data-aos="zoom-out-left">
                                <div className="freature-link-hover text-black">
                                    <h3>High Commissions</h3>
                                </div>

                                <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                    Merchandisers have the chance to earn attractive commissions by leveraging our platform's extensive network and exclusive property listings.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div
                        id="hideMe"
                        style={{ width: "43%" }}
                    >
                        <div className="" style={{ textAlign: "", marginTop: "22%" }}>
                            <div className="card-mobilize" data-aos="zoom-out-right">
                                <div className="freature-link-hover text-black">
                                    <h3>Marketing Support</h3>
                                </div>

                                <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                    Our marketing support empowers sellers to reach a broader audience and attract potential buyers effectively.
                                </p>
                            </div>
                        </div>

                        <br />

                        <div style={{ textAlign: "" }}>
                            <div className="card-mobilize" data-aos="zoom-out-right">
                                <div className="freature-link-hover text-black">
                                    <h3>Training & Support</h3>
                                </div>

                                <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                    We provide comprehensive training and ongoing support to ensure our partners' success and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE COMPONENT */}

            <div className={customClass}>
                <div
                    className="container areeb-block"
                    style={{ display: "none", width: "" }}
                >
                    <div className="row ltn__custom-gutter--- justify-content-center go-top" >
                        <div className="col-lg-4 col-sm-6 col-12" data-aos="flip-right">
                            <div className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active features_v1_height">
                                <div className="ltn__feature-icon">
                                    <img
                                        style={{ height: "50px" }}
                                        src={publicUrl + "assets/img/iconAbout/Reliable.png"}
                                        alt="#"
                                    />
                                </div>

                                <div className="ltn__feature-info">
                                    <h3>
                                        <div
                                            className="freature-link-hover"
                                            style={{ color: "black" }}

                                        // to="/service-details"
                                        >
                                            Exclusive Inventory
                                        </div>
                                    </h3>

                                    <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                        Access to exclusive and high-demand properties sets us apart from traditional real estate channels.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12" data-aos="flip-right">
                            <div className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active features_v1_height">
                                <div className="ltn__feature-icon">
                                    <img
                                        style={{ height: "50px" }}
                                        src={publicUrl + "assets/img/iconAbout/Teamwork.png"}
                                        alt="#"
                                    />
                                </div>

                                <div className="ltn__feature-info">
                                    <h3>
                                        <div
                                            className="freature-link-hover"
                                            style={{ color: "black" }}

                                        >
                                            High Commissions
                                        </div>
                                    </h3>

                                    <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                        Merchandisers have the chance to earn attractive commissions by leveraging our platform's extensive network and exclusive property listings.

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12" data-aos="flip-right">
                            <div className="ltn__feature-item ltn__feature-item-6 bg-white box-shadow-1 features_v1_height">
                                <div className="ltn__feature-icon">
                                    <img
                                        style={{ height: "50px" }}
                                        src={publicUrl + "assets/img/iconAbout/Transparency.png"}
                                        alt="#"
                                    />
                                </div>

                                <div className="ltn__feature-info">
                                    <h3>
                                        <div
                                            className="freature-link-hover"
                                            style={{ color: "black" }}
                                        >
                                            Marketing Support
                                        </div>
                                    </h3>

                                    <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                    Our marketing support empowers sellers to reach a broader audience and attract potential buyers effectively.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12" data-aos="flip-right">
                            <div className="ltn__feature-item ltn__feature-item-6 bg-white box-shadow-1 features_v1_height">
                                <div className="ltn__feature-icon">
                                    <img
                                        style={{ height: "50px" }}
                                        src={publicUrl + "assets/img/iconAbout/Secure.png"}
                                        alt="#"
                                    />
                                </div>

                                <div className="ltn__feature-info">
                                    <h3>
                                        <div
                                            className="freature-link-hover"
                                            style={{ color: "black" }}

                                        // to="/service-details"
                                        >
                                        </div>
                                    </h3>

                                    <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                                        We priorities user safety and security. Property wallet
                                        protects sensitive data and user information with encryption
                                        and other security methods.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmartPointAbout;