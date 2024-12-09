import React, { useEffect, useState } from "react";
// import iconss from "../images/iconn.png";
// import "./styleareeb.css";
import { Link } from "react-router-dom";
// import InventoryManagement from "./inventory-management.js";
import Accordion from 'react-bootstrap/Accordion';

// icon
import digitalMainIcon from '../../../../components/images/Services-icon/tool/DigitalToolsIcon.png'
import pCalculateIcon from '../../../../components/images/Services-icon/tool/P-calculator.png'
import pdfGeneratorIcon from '../../../../components/images/Services-icon/tool/Pdf-Generator.png'
import broucherIcon from '../../../../components/images/Services-icon/tool/Broucher.png'
import scaleAndQuotationIcon from '../../../../components/images/Services-icon/tool/Scaleandquotation.png'



// img
// import DigitalToolsmMinScreen from '../../../../components/images/DigitalTools.png'
// import paymentScreen from '../../../../components/images/paymentImg1.png'

import DigitalToolsmMinScreen from '../../../../components/images/TOOLS.png'
import paymentScreen from '../../../../components/images/paymentImg1.png'
import salesQuotation from '../../../../components/images/SaleQuotation.png'
import Broucher from '../../../../components/images/BroucherImg.png'
import PostGenerator from '../../../../components/images/PostGenertor.png'

const PaymentPlanSelect = (props) => {
    const items = [
        {
            key: "1",
            heading: "Digital Tools",
            title: "Digital Tools",
            img: digitalMainIcon,
            mainImg: DigitalToolsmMinScreen,
            content: <ul>
                <li>
                    Digitize all of your real estate calculations, papers, and other necessities using the free digital tools offered by Property Wallet.
                </li>
                <li>
                    Make your real estate company digital. Anyone may need a payment plan, any quotation, or any additional property document related to property.
                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.",
        },
        {
            key: "2",
            heading: "Payment Plan Calculator",
            title: "Payment Plan Calculator",
            img: pCalculateIcon,
            mainImg: paymentScreen,
            content: <ul>
                <li>
                    Make a payment plan with Property Wallet's free payment plan creator to make it easier to remember when to pay.</li>
                <li>
                    A free payment calculator can be utilized to calculate the monthly and quarterly amount or the time period required to pay off a specific payment.                                                        </li>
            </ul>
            // "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
        {
            key: "3",
            heading: "Sale & Quotation Maker",
            title: "Sale & Quotation Maker",
            img: scaleAndQuotationIcon,
            mainImg: salesQuotation,

            content: <ul>
                <li>
                    Create a quotation for any project or individual property and send it to the buyer with a price and cost estimates.                                                        </li>
                <li>
                    Our online quotation generator is a useful tool designed for real estate agents who want to make client property quotations quickly and easily.
                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "4",
            heading: "Brochure Generator",
            title: "Brochure Generator",
            img: broucherIcon,
            mainImg: Broucher,

            content: <ul>
                <li>
                    Using the property wallet brochure generator, you can generate a brochure of your inventory.
                </li>
                <li>
                    Create stunning, engaging brochures of your inventory in minutes with the best design with our free Brochure Maker.                                                        </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "5",
            heading: "Post Generator",
            title: "Post Generator",
            img: pdfGeneratorIcon,
            mainImg: PostGenerator,

            content: <ul>
                <li>
                Post generator is a free tool for real estate agency that allows them to create post of their assets. </li>
                <li>
                With a property wallet, you can generate your inventory post with a single click.  </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
    ];
    // const [foo, setFoo] = useState(0);
    // var acc = document.getElementsByClassName("accordion");
    // useEffect(() => {
    //     for (var i = 0; i < acc.length; i++) {
    //         acc[i].addEventListener("click", function () {
    //             this.classList.toggle("active12");
    //             var panel = this.nextElementSibling;
    //             if (panel.style.display === "block") {
    //                 // console.log("panel.style.display=>", panel.style.display);
    //                 panel.style.display = "none";
    //             } else {
    //                 // console.log("else=>", panel.style.display);
    //                 panel.style.display = "block";
    //             }
    //         });
    //     }
    // }, [acc]);

    let publicUrl = process.env.PUBLIC_URL + "/";

    let CustomClass = props.customClass ? props.customClass : "";

    return (
        <div className="container ltn__faq-area mb-100 faq-mobile-show" style={{display:'none'}} data-aos="fade-up">

            <div style={{ marginLeft: "", marginRight: "" }} className="row">
                <div className="col-lg-12">
                    <div className="ltn__faq-inner ltn__faq-inner-2">
                        <div id="accordion_2">
                            <div className="card">
                                <div
                                    className="ltn__card-title text-gray-ad bold"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-item-2-2"
                                    aria-expanded="true"
                                >
                                    <img src={items[0].img} /> &nbsp;
                                    {items[0].title}
                                </div>
                                <div
                                    id="faq-item-2-2"
                                    className="collapse show"
                                    data-bs-parent="#accordion_2"
                                >
                                    <div className="card-body">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                            <img style={{ width: '50%' }} src={items[0].mainImg} />
                                        </div>
                                        <div className="text-gray-ad ">
                                            {items[0].content}
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
                                                            left: '30%',
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
                                {/* card */}
                                <div className="card">
                                    <div
                                        className="collapsed ltn__card-title text-gray-ad bold"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-item-2-3"
                                        aria-expanded="false"
                                    >
                                        <img src={items[1].img} />&nbsp;

                                        {items[1].title}

                                    </div>
                                    <div
                                        id="faq-item-2-3"
                                        className="collapse"
                                        data-bs-parent="#accordion_2"
                                    >
                                        <div className="card-body">
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <img style={{ width: '50%' }} src={items[1].mainImg} />
                                        </div>
                                            <div className="text-gray-ad ">
                                                {items[1].content}
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
                                                            left: '30%',
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
                                {/* card */}
                                <div className="card">
                                    <div
                                        className="collapsed ltn__card-title text-gray-ad bold"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-item-2-4"
                                        aria-expanded="false"
                                    >
                                        <img src={items[2].img} />&nbsp;

                                        {items[2].title}
                                    </div>
                                    <div
                                        id="faq-item-2-4"
                                        className="collapse"
                                        data-bs-parent="#accordion_2"
                                    >
                                        <div className="card-body">
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <img style={{ width: '50%' }} src={items[2].mainImg} />
                                        </div>
                                            <div className="text-gray-ad ">
                                                {items[2].content}
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
                                                            left: '30%',
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
                                {/*  */}
                                <div className="card">
                                    <div
                                        className="collapsed ltn__card-title text-gray-ad bold"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-item-2-5"
                                        aria-expanded="false"
                                    >
                                        <img src={items[3].img} />&nbsp;

                                        {items[3].title}
                                    </div>
                                    <div
                                        id="faq-item-2-5"
                                        className="collapse"
                                        data-bs-parent="#accordion_2"
                                    >
                                        <div className="card-body">
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <img style={{ width: '50%' }} src={items[3].mainImg} />
                                        </div>
                                            <div className="text-gray-ad ">
                                                {items[3].content}
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
                                                            left: '30%',
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
                                {/* card */}
                                {/* card */}
                                <div className="card">
                                    <div
                                        className="collapsed ltn__card-title text-gray-ad bold"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-item-2-6"
                                        aria-expanded="false"
                                    >
                                        <img src={items[4].img} />&nbsp;

                                        {items[4].title}
                                    </div>
                                    <div
                                        id="faq-item-2-6"
                                        className="collapse"
                                        data-bs-parent="#accordion_2"
                                    >
                                        <div className="card-body">
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <img style={{ width: '50%' }} src={items[4].mainImg} />
                                        </div>
                                            <div className="text-gray-ad ">
                                                {items[4].content}
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
                                                            left: '30%',
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
                                {/*  */}
                                {/* card */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PaymentPlanSelect;

