import React, { useEffect, useState } from "react";
// import iconss from "../images/iconn.png";
// import "./styleareeb.css";
import { Link } from "react-router-dom";
// import InventoryManagement from "./inventory-management.js";
import Accordion from 'react-bootstrap/Accordion';


// icon
import reportMainIcon from '../../../../components/images/Services-icon/Report/report.png'
import projectIcon from '../../../../components/images/Services-icon/Report/project.png'
import productIcon from '../../../../components/images/Services-icon/Report/product.png'
import employeeIcon from '../../../../components/images/Services-icon/Report/employee.png'
import compareIcon from '../../../../components/images/Services-icon/Report/compare.png'



// img
import productReport from '../../../../components/images/ProductReport.png'
import reportHomeImg from '../../../../components/images/ReportHomeImg.png'
import employeeReport from '../../../../components/images/EmployeeReport.png'
import projectReport from '../../../../components/images/ProjectReport.png'
import comparisonReport from '../../../../components/images/ComparisonReport.png'


const ReportSelect = (props) => {
    const items = [
        {
            key: "1",
            heading: "Report Management",
            title: "Report Management",
            img: reportMainIcon,
            mainImg: reportHomeImg,
            content: <ul><li>
                Get monthly reports on the overall sales of the agency.</li>
                <li>
                    This contains sales for each project, sales by each manager and team member, overall revenue generated and comparison report.           </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.",
        },
        {
            key: "2",
            heading: "Project Report",
            title: "Project Report",
            img: projectIcon,
            mainImg: projectReport,
            content: <ul><li>
                Receive monthly reports on the total number of projects sold by the agency.</li>
                <li>
                    Project reporting features a lot of information, including the number of units sold and the amount of revenue generated.
                </li>
            </ul>
            // "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
        {
            key: "3",
            heading: "Product Report",
            title: "Product Report",
            img: productIcon,
            mainImg: productReport,
            content: <ul><li> Get monthly reports on the overall sales of the products. </li>
                <li> Product reporting features a lot of information, including the number of products sold and the amount of revenue generated.</li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "4",
            heading: "Employe Report",
            title: "Employe Report",
            img: employeeIcon,
            mainImg: employeeReport,
            content: <ul><li>
                Get monthly reports on the overall sales by the agency manager & staff.
            </li>
                <li>
                    This includes an employee and sales report for each manager and team member, as well as the team's total revenue.        </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "5",
            heading: "Comparison Report",
            title: "Comparison Report",
            img: compareIcon,
            mainImg: comparisonReport,
            content: <ul><li>
                Get monthly project and agency team member comparison reports.
            </li>
                <li>
                    Administrators can compare employee and project performance in comparison reports to discover which project and employee is doing the better.
                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "6",
            heading: "Quickest way to calculate commissions!",
            title: "Sales Target",
            content: <ul><li>
                This feature displays which projects or individual properties have been sold. This feature allows you to easily check the sold inventory.
            </li>
                <li>
                    This feature displays which projects or individual properties have been sold. This feature allows you to easily check the sold inventory.             </li>
            </ul>
            // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
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
                                        <div className="text-gray-ad">
                                            {items[0].content}
                                            <div className="btn-wrapper animated">
                                                <a 
                                                // ref="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
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
                                        <div className="text-gray-ad">
                                            {items[3].content}
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
                                        <div className="text-gray-ad">
                                            {items[4].content}
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
                            {/*  */}

                            {/* card */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReportSelect;