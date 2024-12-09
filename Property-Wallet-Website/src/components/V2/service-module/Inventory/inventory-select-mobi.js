import React, { useEffect, useState } from "react";
// import iconss from "../images/iconn.png";
// import "./styleareeb.css";
import { Link } from "react-router-dom";
import InventoryManagement from "./inventory-management.js";
import Accordion from 'react-bootstrap/Accordion';


// icon
import inventeryMainIcon from '../../../../components/images/Services-icon/inventory/inventory.png'
import addInventeryIcon from '../../../../components/images/Services-icon/inventory/add.png'
import detailsInventeryIcon from '../../../../components/images/Services-icon/inventory/Details.png'
import filterInventeryIcon from '../../../../components/images/Services-icon/inventory/Filter.png'
import soldInventeryIcon from '../../../../components/images/Services-icon/inventory/sold.png'

// img
import inventeryImg from '../../../../components/images/inventeryImg.png'
import addImg from '../../../../components/images/addImg.png'
import soldImg from '../../../../components/images/SoldImg.png'
import detailsImg from '../../../../components/images/DetailsImg.png'
import filterImg from '../../../../components/images/FilterImg.png'

const InventorySelectBox = (props) => {
    const items = [
        {
            key: "1",
            heading: "Inventory Managment",
            title: "Inventory Managment",
            img: inventeryMainIcon,
            mainImg: inventeryImg,
            content: <ul><li>
               Inventory Management is a solution that enables real estate agents to manage multiple projects and individual properties from anywhere using a Property wallet.
            </li>
                <li>
                With inventory management, you can take use of the potential of data-driven decision making, which uses data to reveal insights into trends, emerging patterns, and more.
                </li>
            </ul>
        },
        {
            key: "2",
            heading: "Add Inventory",
            title: "Add Inventory",
            img: addInventeryIcon,
            mainImg: addImg,
            content:
                <ul><li>
                    Using the add inventory option, add your project or individual properties to your Inventory.
                </li>
                    <li>
                    Include all project facts, such as project location, facilities, features, and project images. You can also provide the project's NOC if you want.
                    </li>
                </ul>
        },
        {
            key: "3",
            heading: "Inventory Details",
            title: "Inventory Details",
            img: detailsInventeryIcon,
            mainImg: detailsImg,
            content: <ul><li>
                You can view the inventory data for projects and individual properties that you have already added.
            </li>
                <li>
                    You can discover the project details such as project images, description, feature, and NOC on inventory details, and you can also update all of these sections.
                </li>
            </ul>
        },
        {
            key: "4",
            heading: "Inventory Filter",
            title: "Inventory Filter",
            img: filterInventeryIcon,
            mainImg: filterImg,
            content: <ul><li>
                This feature allows you to identify the project or individual properties based on the user's requirements. The filter option will assist you in quickly finding your project.
            </li>
                <li>
                You may filter the user requirements to find the best project or individual property that meets the user's needs.
                </li>
            </ul>
        },
        {
            key: "5",
            heading: "Sold Inventories",
            title: "Sold Inventories",
            img: soldInventeryIcon,
            mainImg: soldImg,
            content: <ul><li>
                This feature displays which projects or individual properties have been sold. This feature allows you to easily check the sold inventory.
            </li>
                <li>
                After the deal is completed, the project inventory or individual properties are moved to the sold inventory.
           </li>
            </ul>
        },

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InventorySelectBox;
