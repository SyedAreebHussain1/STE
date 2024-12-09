// import React from 'react'
import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
const PricingFaqs = () => {
    return (
        <div className="ltn__faq-area mb-100" style={{ marginTop: "5%", marginBottom: "5%" }} >
            <div className="container" style={{  }}>
                <div className="row">
                    <div className="col-lg-12" style={{}}>
                        <div className="ltn__faq-inner ltn__faq-inner-2" style={{}}>
                            <div className="flex-block" style={{}}>

                                <div id="accordion_2" style={{ padding: "5px" }}>
                                    <div className="card">
                                        <h6
                                            className="ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-2"
                                            aria-expanded="true"
                                        >
                                            How to use this app?
                                        </h6>
                                        <div
                                            id="faq-item-2-2"
                                            className="collapse show"
                                            data-bs-parent="#accordion_2"
                                        >
                                            <div className="card-body">

                                                <p>
                                                    If you are a beginner and need more instructions on
                                                    using the Property Wallet app,
                                                    <a
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
                                                    to watch the tutorial.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6
                                            className="collapsed ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-3"
                                            aria-expanded="false"
                                        >
                                            Are there any chances of a scam?
                                        </h6>
                                        <div
                                            id="faq-item-2-3"
                                            className="collapse"
                                            data-bs-parent="#accordion_2"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    You can trust our app with any data and information
                                                    you provide on our app. Property Wallet guarantees to
                                                    protect you from scammers and maintain the
                                                    confidentiality of your data.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6
                                            className="collapsed ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-4"
                                            aria-expanded="false"
                                        >
                                            For how long can I enjoy the free services?
                                        </h6>
                                        <div
                                            id="faq-item-2-4"
                                            className="collapse"
                                            data-bs-parent="#accordion_2"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    The Property Wallet app will be offering services free
                                                    of cost for as long as it is needed by you.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6
                                            className="collapsed ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-5"
                                            aria-expanded="false"
                                        >
                                            Why should we use Property Wallet for Business Management?
                                        </h6>
                                        <div
                                            id="faq-item-2-5"
                                            className="collapse"
                                            data-bs-parent="#accordion_2"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Property Wallet offers you the services that you would
                                                    need to manage your business operations from home.
                                                    Here, you will be able to overlook your staff, assign
                                                    them tasks, manage their commissions, calculate their
                                                    contribution to your sales and much more. Property
                                                    Wallet is the easiest and most reliable application to
                                                    use for all your business tasks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6
                                            className="collapsed ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-6"
                                            aria-expanded="false"
                                        >
                                            What steps do I need to take to register on the Property
                                            Wallet app and use its services?
                                        </h6>
                                        <div
                                            id="faq-item-2-6"
                                            className="collapse"
                                            data-bs-parent="#accordion_2"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    You may register to use the services of the Property
                                                    Wallet app by providing the needed details about you
                                                    and your business.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="accordion_3" style={{ padding: "5px" }}>
                                    <div className="card">
                                        <h6
                                            className="ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-7"
                                            aria-expanded="true"
                                        >
                                            How to use this app?
                                        </h6>
                                        <div
                                            id="faq-item-2-7"
                                            className="collapse show"
                                            data-bs-parent="#accordion_3"
                                        >
                                            <div className="card-body">

                                                <p>
                                                    If you are a beginner and need more instructions on
                                                    using the Property Wallet app,
                                                    <a
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
                                                    to watch the tutorial.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6
                                            className="collapsed ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-8"
                                            aria-expanded="false"
                                        >
                                            Are there any chances of a scam?
                                        </h6>
                                        <div
                                            id="faq-item-2-8"
                                            className="collapse"
                                            data-bs-parent="#accordion_3"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    You can trust our app with any data and information
                                                    you provide on our app. Property Wallet guarantees to
                                                    protect you from scammers and maintain the
                                                    confidentiality of your data.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6
                                            className="collapsed ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-9"
                                            aria-expanded="false"
                                        >
                                            For how long can I enjoy the free services?
                                        </h6>
                                        <div
                                            id="faq-item-2-9"
                                            className="collapse"
                                            data-bs-parent="#accordion_3"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    The Property Wallet app will be offering services free
                                                    of cost for as long as it is needed by you.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6
                                            className="collapsed ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-10"
                                            aria-expanded="false"
                                        >
                                            Why should we use Property Wallet for Business Management?
                                        </h6>
                                        <div
                                            id="faq-item-2-10"
                                            className="collapse"
                                            data-bs-parent="#accordion_3"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    Property Wallet offers you the services that you would
                                                    need to manage your business operations from home.
                                                    Here, you will be able to overlook your staff, assign
                                                    them tasks, manage their commissions, calculate their
                                                    contribution to your sales and much more. Property
                                                    Wallet is the easiest and most reliable application to
                                                    use for all your business tasks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h6
                                            className="collapsed ltn__card-title"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq-item-2-11"
                                            aria-expanded="false"
                                        >
                                            What steps do I need to take to register on the Property
                                            Wallet app and use its services?
                                        </h6>
                                        <div
                                            id="faq-item-2-11"
                                            className="collapse"
                                            data-bs-parent="#accordion_3"
                                        >
                                            <div className="card-body">
                                                <p>
                                                    You may register to use the services of the Property
                                                    Wallet app by providing the needed details about you
                                                    and your business.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingFaqs