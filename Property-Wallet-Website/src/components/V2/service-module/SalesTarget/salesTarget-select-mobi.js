import React, { useEffect, useState } from "react";
// import iconss from "../images/iconn.png";
// import "./styleareeb.css";
import { Link } from "react-router-dom";
// import InventoryManagement from "./inventory-management.js";


// import reportMainIcon from '../../../../components/images/Services-icon/Report/report.png'
// import projectIcon from '../../../../components/images/Services-icon/Report/project.png'
// import productIcon from '../../../../components/images/Services-icon/Report/product.png'
// import employeeIcon from '../../../../components/images/Services-icon/Report/employee.png'

import compareIcon from '../../../../components/images/Services-icon/Report/compare.png'


// img
import salesTargetImg from '../../../../components/images/SalesTargetImg.png'
import salesTargetManager from '../../../../components/images/SalesTargetManager.png'
import salesTargetTeam from '../../../../components/images/SalesTargetTeam.png'
import saleTargetSet from '../../../../components/images/SaleTargetSet.png'



// icon
import targetMainIcon from '../../../../components/images/Services-icon/Target/target.png'
import managerIcon from '../../../../components/images/Services-icon/Target/Manager.png'
import setIcon from '../../../../components/images/Services-icon/Target/set.png'
import teamIcon from '../../../../components/images/Services-icon/Target/team.png'

const SalesSelect = (props) => {
    const items = [
        {
            key: "1",
            heading: "Target Sales Manegement",
            title: "Target Sales Manegement",
            img: targetMainIcon,
            mainImg: salesTargetImg,

            content: <ul><li>
               Achieve your sales goals with Target Sales Management. Property Wallet helps you to increase efficiency, track results and maximize profits.           </li>
                <li>
                Discover how Target Sales Management can help you better manage your sales team and reach your goals faster.
          </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.",
        },
        {
            key: "2",
            heading: "Manager Target",
            title: "Manager Target",
            img: managerIcon,
            mainImg: salesTargetManager,
            

            content: <ul><li>
                Manager Target makes it easy to create and monitor team goals that are tied directly to your business objectives.</li>
                <li>
                Our goal setting software helps managers track progress, review results, and ensure that everyone is working towards the same goals. 

                </li>
            </ul>
            // "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
        {
            key: "3",
            heading: "Agency Target",
            title: "Agency Target",
            img: setIcon,
            mainImg: saleTargetSet,
            content: <ul><li>
                Agency Target helps businesses reach their goals faster. Jump on board right now and get closer to your goals faster.

            </li>
                <li>
                No matter how much you set the goals to achieve, you can now monitor your agency progress and measure success with thorough reporting.

                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "4",
            heading: "Team Target",
            title: "Team Target",
            img: teamIcon,
            mainImg: salesTargetTeam,


            content: <ul><li>
                You can set the team Target that helps you bring your team to its fullest potential. Get your team on the fast track to success with Team.
            </li>
                <li>
                Our comprehensive suite of features allows you to track progress, and measure performance - all in one place.      </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "5",
            heading: "Comparison Report",
            title: "Comparison Report",
            img: compareIcon,


            content: <ul><li>
                Get monthly project and agency team member comparison reports.
            </li>
                <li>
                    Administrators can compare employee and project performance in comparison reports to discover which project and employee is doing the better.
                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        }
    ];

    let publicUrl = process.env.PUBLIC_URL + "/";

    let CustomClass = props.customClass ? props.customClass : "";

    return (
        <div className="container ltn__faq-area mb-100 faq-mobile-show" style={{display:'none'}}>
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
                                                    Watch tutorial  <span style={{
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
                                                    Watch tutorial  <span style={{
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
                                                    Watch tutorial  <span style={{
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
                                                    Watch tutorial  <span style={{
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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SalesSelect;

