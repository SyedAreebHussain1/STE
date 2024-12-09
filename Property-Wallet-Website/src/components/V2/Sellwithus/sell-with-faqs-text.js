import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
// import BannerService from "../../images/Service2.m4v"
import { Link } from "react-router-dom";
import "./sellwithus.css"
import MobileShow from "./mobile-show-faq";

const FaqsOrText = (props) => {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let CustomClass = props.customClass ? props.customClass : "";
    const headingLarge = 'Got Questions?'
    const pera = 'Learn everything about Property Wallet and the most frequently asked questions. '

    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <>
            <div className={"container  bg-white computer-show" + CustomClass} style={{ border: '', marginLeft: "", marginRight: '', marginTop: "" }}>
                <div className="row ltn__custom-gutter--- justify-content-center " style={{ border: '', marginLeft: "", marginRight: '' }}
                    data-aos="fade-up"
                >
                    <div className=" col-lg-6 col-sm-8 col-12">
                        <div className="ltn__feature-item ">
                            <div className="ltn__feature-info">
                                <div className="ltn__faq-area mb-100">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="ltn__faq-inner ltn__faq-inner-2">
                                                <div id="accordion_2">
                                                    {/* card */}

                                                    {/* card */}
                                                    <div className="card">
                                                        <div
                                                            className="ltn__card-title bold"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#faq-item-2-11"
                                                            aria-expanded="true" style={{ color: "#053857" }}
                                                        >
                                                            What is a Property Wallet CRM?
                                                        </div>
                                                        <div
                                                            id="faq-item-2-11"
                                                            className="collapse show"
                                                            data-bs-parent="#accordion_2"
                                                        >
                                                            <div className="card-body">
                                                                <p>
                                                                    A Property Wallet CRM, or customer relationship management system, is a software tool designed to help real estate professionals manage and organize their interactions with clients, leads, and prospects. It typically includes features such as contact management, property management, lead management, and marketing automation.
                                                                    {/* <a
                                                                        style={{
                                                                            color: "#27A3A3",
                                                                            //   fontSize: "20px",
                                                                            cursor: "pointer",
                                                                            fontWeight: "bold",
                                                                        }}
                                                                    >
                                                                        {" "}
                                                                        click here{" "}
                                                                    </a>{" "}
                                                                    to watch the tutorial. */}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* card */}
                                                    <div className="card">
                                                        <div
                                                            className="collapsed ltn__card-title bold"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#faq-item-2-12"
                                                            aria-expanded="false"
                                                            style={{ color: "#053857" }}
                                                        >
                                                            What are the benefits of using a Property Wallet CRM?
                                                        </div>
                                                        <div
                                                            id="faq-item-2-12"
                                                            className="collapse"
                                                            data-bs-parent="#accordion_2"
                                                        >
                                                            <div className="card-body">
                                                                <p>
                                                                    A property wallet CRM can help real estate professionals to streamline their workflow, automate repetitive tasks, and manage their leads and clients more effectively. It can also provide insights and analytics to help them identify new sales opportunities and improve their marketing and sales strategies.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* card */}
                                                    <div className="card">
                                                        <div
                                                            className="collapsed ltn__card-title bold"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#faq-item-2-13"
                                                            aria-expanded="false" style={{ color: "#053857" }}
                                                        >
                                                            How can a property wallet CRM help me to increase sales?
                                                        </div>
                                                        <div
                                                            id="faq-item-2-13"
                                                            className="collapse"
                                                            data-bs-parent="#accordion_2"
                                                        >
                                                            <div className="card-body">
                                                                <p>
                                                                    A property wallet CRM can help to increase sales by automating repetitive tasks such as tracking leads and client interactions, and providing insights and analytics on sales trends and opportunities. It can also help to identify potential sales opportunities, and help real estate professionals to target the right clients and prospects with personalized marketing campaigns.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* card */}
                                                    <div className="card">
                                                        <div
                                                            className="collapsed ltn__card-title bold"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#faq-item-2-14"
                                                            aria-expanded="false" style={{ color: "#053857" }}
                                                        >
                                                            Is there a difference between a property wallet CRM and a general CRM?
                                                        </div>
                                                        <div
                                                            id="faq-item-2-14"
                                                            className="collapse"
                                                            data-bs-parent="#accordion_2"
                                                        >
                                                            <div className="card-body">
                                                                <p>
                                                                    A property wallet CRM is specifically designed for the real estate industry and typically includes features such as property management and real estate-specific analytics. A general CRM, on the other hand, is designed for a wide range of businesses and industries and may not include these specific features.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* card */}
                                                    <div className="card">
                                                        <div
                                                            className="collapsed ltn__card-title bold"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#faq-item-2-15"
                                                            aria-expanded="false" style={{ color: "#053857" }}
                                                        >
                                                            How does a property wallet CRM help in managing property listings?
                                                        </div>
                                                        <div
                                                            id="faq-item-2-15"
                                                            className="collapse"
                                                            data-bs-parent="#accordion_2"
                                                        >
                                                            <div className="card-body">
                                                                <p>
                                                                    A property wallet CRM allows real estate professionals to store and manage information on properties, including listings, showings, and transactions. It can also provide a centralized location for all property-related data and documents, making it easy for agents to access and share property information with clients and other agents.

                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* card */}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-8 col-12" style={{}}>
                        <div className="ltn__feature-item" style={{}}>
                            <div className="" style={{}}>
                                <h1
                                    className="text_Quick"
                                    style={{ color: "#053857", fontSize: "3rem" }}
                                // to="/service-details"
                                >
                                    {props.heading}
                                    {/* <div className="curve"></div> */}
                                </h1>
                                <p className="" style={{ fontSize: "1rem", marginTop: '', color: "black" }}>
                                    {props.content}
                                </p>
                                <div className="">
                                    <h6 style={{ color: "#053857" }}> Drop us email at:</h6>  info@propertywallet.pk
                                </div>
                            </div>
                            {/* <div
                                style={{
                                    // display: "flex",
                                    // justifyContent: "center",
                                    // marginTop: '-20px'
                                    // marginLeft: '0.6rem'
                                }}
                                className="btn-wrapper animated"
                            >
                                <Link
                                    to="/contact"
                                    className="theme-btn-1 btn btn-effect-1 learnMore"
                                >Try It
                                </Link>
                                <Link
                                    to="/how-to-use"
                                    className="theme-btn-1 btn btn-effect-1 learnMore"
                                >Watch Demo
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* mobile */}

            <MobileShow />

        </>
    )
}
export default FaqsOrText