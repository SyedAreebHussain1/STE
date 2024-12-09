import React, { useEffect } from "react"
import '../service_module.css'
import PaymentPlanSelect from "./paymentplan-select-mobi";


// import mobile from '../../../../components/images/DigitalTools.png'
import DigitalToolsmMinScreen from '../../../../components/images/TOOLS.png'
import paymentScreen from '../../../../components/images/paymentImg1.png'
import salesQuotation from '../../../../components/images/SaleQuotation.png'
import Broucher from '../../../../components/images/BroucherImg.png'
import PostGenerator from '../../../../components/images/PostGenertor.png'

// icon
import digitalMainIcon from '../../../../components/images/Services-icon/tool/DigitalToolsIcon.png'
import pCalculateIcon from '../../../../components/images/Services-icon/tool/P-calculator.png'
import pdfGeneratorIcon from '../../../../components/images/Services-icon/tool/Pdf-Generator.png'
import broucherIcon from '../../../../components/images/Services-icon/tool/Broucher.png'
import scaleAndQuotationIcon from '../../../../components/images/Services-icon/tool/Scaleandquotation.png'



import { Link } from "react-router-dom";

const PaymentPlanServices = (props) => {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let CustomClass = props.customClass ? props.customClass : "";

    var testClassvar = document.getElementsByClassName("testClass");
    useEffect(() => {
        for (var i = 0; i < testClassvar.length; i++) {
            testClassvar[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("activeTest");
                current[0].className = current[0].className.replace(" activeTest", "");
                this.className += " activeTest";
            });
        }
    }, [testClassvar]);
    return (
        <>
            {/*  */}

            <div className={"ltn__apartments-plan-area pt-115--- pb-70 marginTop-12" + CustomClass} data-aos="fade-up">
                <div className="container services-aprt-none" style={{ display: "flex" }}>
                    <div className="ltn__tab-menu">
                        <div
                            className="nav anchorTagNav"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                // justifyContent: "space-between",
                                // height: "500px",
                            }}
                        >
                            <a
                                className="testClass activeTest show anchorTag"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_1"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={digitalMainIcon} alt="logo" />
                                    <p className="text-inven">Digital Tools</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_2"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={pCalculateIcon} alt="logo" />
                                    <p className="text-inven">Payment Plan Calculator</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_3"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={scaleAndQuotationIcon} alt="logo" />
                                    <p className="text-inven">Sale & Quotation Maker</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_4"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={broucherIcon} alt="logo" />
                                    <p className="text-inven">Brochure Generator</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_5"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={pdfGeneratorIcon} alt="logo" />
                                    <p className="text-inven">Post Generator</p>
                                </div>
                            </a>
                            {/* <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_6"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={iconsss} alt="logo" />
                                    <p className="text-inven saleText">Sales Target</p>
                                </div>
                            </a> */}
                        </div>
                    </div>

                    <div className="tab-content" >
                        <div className="tab-pane fade  active show" id="liton_tab_3_1">
                            <div>
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className="imgDiv">
                                        <img className="imgIphoneScreen marginTop-30px" src={DigitalToolsmMinScreen} alt="img" style={{ marginTop: '' }} />
                                    </div>
                                    <div className="marginleft-350px" style={{
                                        width: "100%",
                                        // marginLeft: "-350px",
                                    }}>
                                        <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                                            <div className="ltn__feature-info">
                                                <h3>
                                                    <div
                                                        className="freature-link-hover"
                                                        style={{ color: "black" }}
                                                    // to="/service-details"
                                                    >
                                                        <h1>Digital Tools</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Digitize all of your real estate calculations, papers, and other necessities using the free digital tools offered by Property Wallet.
                                                        </li>
                                                        <li>
                                                            Make your real estate company digital. Anyone may need a payment plan, any quotation, or any additional property document related to property.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="btn-wrapper animated">
                                                    <a
                                                    //  href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" 
                                                    className="theme-btn-Home btn btn-effect-1 "
                                                        // data-rel="lightcase"
                                                        style={{ marginTop: "5%" }}>
                                                        {/* <i
                                                            className="icon-play icon-home-play"
                                                        // style={{ color: "#27A3A3" }}
                                                        /> */}
                                                        Watch tutorial <span style={{
                                                            position: 'absolute',
                                                            bottom: '60%',
                                                            /* right: 20; */
                                                            left: '20%',
                                                            color: 'white',
                                                            fontSize: '10px'
                                                        }}>
                                                            Coming soon
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_2">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen  marginTop-30px" src={paymentScreen} alt="img" />
                                    </div>
                                    <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                                        <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                                            <div className="ltn__feature-info">
                                                <h3>
                                                    <div
                                                        className="freature-link-hover"
                                                        style={{ color: "black" }}
                                                    // to="/staffmanagement"
                                                    >
                                                        <h1>Payment Plan Calculator</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Make a payment plan with Property Wallet's free payment plan creator to make it easier to remember when to pay.</li>
                                                        <li>
                                                            A free payment calculator can be utilized to calculate the monthly and quarterly amount or the time period required to pay off a specific payment.                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="btn-wrapper animated">
                                                    <a
                                                    //  href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" 
                                                     className="theme-btn-Home btn btn-effect-1 "
                                                        // data-rel="lightcase"
                                                        style={{ marginTop: "5%" }}>
                                                        {/* <i
                                                            className="icon-play icon-home-play"
                                                        // style={{ color: "#27A3A3" }}
                                                        /> */}
                                                        Watch tutorial <span style={{
                                                            position: 'absolute',
                                                            bottom: '60%',
                                                            /* right: 20; */
                                                            left: '20%',
                                                            color: 'white',
                                                            fontSize: '10px'
                                                        }}>
                                                            Coming soon
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_3">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen  marginTop-30px" src={salesQuotation} alt="img" />
                                    </div>
                                    <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                                        <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                                            <div className="ltn__feature-info">
                                                <h3>
                                                    <div
                                                        className="freature-link-hover"
                                                        style={{ color: "black" }}
                                                    // to="/service-details"
                                                    >
                                                        <h1>Sale & Quotation Maker</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Create a quotation for any project or individual property and send it to the buyer with a price and cost estimates.                                                        </li>
                                                        <li>
                                                            Our online quotation generator is a useful tool designed for real estate agents who want to make client property quotations quickly and easily.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="btn-wrapper animated">
                                                    <a
                                                    //  href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                                                      className="theme-btn-Home btn btn-effect-1 "
                                                        // data-rel="lightcase"
                                                        style={{ marginTop: "5%" }}>
                                                        {/* <i
                                                            className="icon-play icon-home-play"
                                                        // style={{ color: "#27A3A3" }}
                                                        /> */}
                                                        Watch tutorial <span style={{
                                                            position: 'absolute',
                                                            bottom: '60%',
                                                            /* right: 20; */
                                                            left: '20%',
                                                            color: 'white',
                                                            fontSize: '10px'
                                                        }}>
                                                            Coming soon
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_4">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen marginTop-30px" src={Broucher} alt="img" />
                                    </div>
                                    <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                                        <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                                            <div className="ltn__feature-info">
                                                <h3>
                                                    <div
                                                        className="freature-link-hover"
                                                        style={{ color: "black" }}
                                                    // to="/service-details"
                                                    >
                                                        <h1>Brochure Generator</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Using the property wallet brochure generator, you can generate a brochure of your inventory.
                                                        </li>
                                                        <li>
                                                            Create stunning, engaging brochures of your inventory in minutes with the best design with our free Brochure Maker.                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="btn-wrapper animated">
                                                    <a 
                                                    // href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" 
                                                    className="theme-btn-Home btn btn-effect-1 "
                                                        // data-rel="lightcase"
                                                        style={{ marginTop: "5%" }}>
                                                        {/* <i
                                                            className="icon-play icon-home-play"
                                                        // style={{ color: "#27A3A3" }}
                                                        /> */}
                                                        Watch tutorial <span style={{
                                                            position: 'absolute',
                                                            bottom: '60%',
                                                            /* right: 20; */
                                                            left: '20%',
                                                            color: 'white',
                                                            fontSize: '10px'
                                                        }}>
                                                            Coming soon
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_5">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen marginTop-30px" src={PostGenerator} alt="img" />
                                    </div>
                                    <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                                        <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                                            <div className="ltn__feature-info">
                                                <h3>
                                                    <div
                                                        className="freature-link-hover"
                                                        style={{ color: "black" }}
                                                        to="/service-details"
                                                    >
                                                        <h1>Post Generator</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li> With a property wallet, you can generate your inventory post with a single click.</li>
                                                        <li>  Post generator is a free tool for real estate agency that allows them to create post of their assets.</li>
                                                    </ul>
                                                </div>
                                                <div className="btn-wrapper animated">
                                                    <a 
                                                    // href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                                                     className="theme-btn-Home btn btn-effect-1 "
                                                        // data-rel="lightcase"
                                                        style={{ marginTop: "5%" }}>
                                                        {/* <i
                                                            className="icon-play icon-home-play"
                                                        // style={{ color: "#27A3A3" }}
                                                        /> */}
                                                        Watch tutorial <span style={{
                                                            position: 'absolute',
                                                            bottom: '60%',
                                                            /* right: 20; */
                                                            left: '20%',
                                                            color: 'white',
                                                            fontSize: '10px'
                                                        }}>
                                                            Coming soon
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_3_6">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        {/* <img className="imgIphoneScreen marginTop-30px" src={mobile} alt="img" /> */}
                                    </div>
                                    <div className="marginleft-350px" style={{ width: "100%", marginLeft: "" }}>
                                        <div className="ltn__feature-item ltn__feature-item-8 bg-white  box-shadow-1 active">
                                            <div className="ltn__feature-info">
                                                <h3>
                                                    <div
                                                        className="freature-link-hover"
                                                        style={{ color: "black" }}
                                                        to="/service-details"
                                                    >
                                                        {/* <h1>Quickest way to calculate commissions!</h1> */}
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            {/* Inventory Management is a tool that allows real estate agents to manage many projects and individual projects with a Property wallet from anywhere. */}
                                                        </li>
                                                        <li>
                                                            {/* With inventory management, you can use the power of data-driven decision making, in which data is effectively gathered and used to give insights into trends, developing patterns, and more. */}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        // justifyContent: "center",
                                                    }}
                                                    className="btn-wrapper animated"
                                                >
                                                    <Link
                                                        to="/salestarget"
                                                        className="theme-btn-1 btn btnLearnmore btn-effect-1"
                                                    >
                                                        Learn more
                                                    </Link>
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
            <PaymentPlanSelect />
        </>
    )
}
export default PaymentPlanServices