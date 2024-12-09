import React, { useEffect, useState } from "react";
// import iconss from "../images/iconn.png";
// import "./styleareeb.css";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import '../../styleareeb.css'

// icon
import commissionMainIcon from '../../../../components/images/Services-icon/Commission/commission.png'
import cashIcon from '../../../../components/images/Services-icon/Commission/cash.png'
import editIcon from '../../../../components/images/Services-icon/Commission/edit.png'
import receiptIcon from '../../../../components/images/Services-icon/Commission/Receipt.png'
import installmentIcon from '../../../../components/images/Services-icon/Commission/installment.png'



// img
import commissionHomeImg from '../../../../components/images/CommissionHomeImg.png'
import commissionOnCash from '../../../../components/images/CommissionOnCash.png'
import commissionOnInstallment from '../../../../components/images/CommissionOnInstallment.png'
import commissionReceipts from '../../../../components/images/CommissionReceipts.png'
import commissionEdit from '../../../../components/images/CommissionEdit.png'


const CommissionSelect = (props) => {
    const items = [
        {
            key: "1",
            heading: "Commision Management",
            title: "Commision Management",
            img: commissionMainIcon,
            mainImg: commissionHomeImg,
            content: <ul><li>
                Keep records of the commissions paid to the agents as well as the property they sold. This can also let you know the amount of money each employee brings in.            </li>
                <li>
                    Set manager's and staff's commission rates according to each category's sales                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.",
        },
        {
            key: "2",
            heading: "Commision on Cash",
            title: "Commision on Cash",
            img: cashIcon,
            mainImg: commissionOnCash,
            content:
                <ul><li>
                    Our app's cash commision option allows you to establish agency, manager, and employee commision on a one-time payment basis.                </li>
                    <li>
                        Using the property wallet app, you can keep track of the cash commision for every project or individual property.                    </li>
                </ul>
            // "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
        {
            key: "3",
            heading: "Commision on Installment",
            title: "Commision on Installment",
            img: installmentIcon,
            mainImg: commissionOnInstallment,
            content: <ul><li>
                Our app's cash commission option allows you to establish agency, manager, and employee commissions on a one-time payment basis.            </li>
                <li>
                    Using the property wallet app, you can keep track of the cash commissions for every project or individual property.                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "4",
            heading: "Commision Receipt",
            title: "Commision Receipt",
            img: receiptIcon,
            mainImg: commissionReceipts,
            content: <ul><li>
                When a deal is finalized in Property Wallet, the system will generate a commission receipt automatically.</li>
                <li>
                    The commission receipt contains commission information such as the project name that was sold, the commission amount, and the payment status.
                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "5",
            heading: "Edit Commission",
            title: "Edit Commission",
            img: editIcon,
            mainImg: commissionEdit,
            content: <ul><li>
                In Commission management agency owners can change the commission for every project or individual property. </li>
                <li>
                    Admins have the right to edit commissions for their staff and managers. </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        // {
        //     key: "6",
        //     heading: "Quickest way to calculate commissions!",
        //     title: "Sales Target",
        //     content:
        //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        // },
    ];


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
                                    <img src={items[0].img} />&nbsp;
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
                                        <div className="text-gray-ad">
                                            {items[0].content}
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
                                        <div className="text-gray-ad">
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
                                        <div className="text-gray-ad">
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
                                                    Watch tutorial<span style={{
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
                                        <div className="text-gray-ad">
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
                                    // style={{fontWeight:"bold"}}
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
                                        <div className="text-gray-ad">
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
    );
};
export default CommissionSelect;
