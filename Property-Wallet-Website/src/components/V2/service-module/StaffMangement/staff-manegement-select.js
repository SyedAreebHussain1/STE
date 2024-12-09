import React, { useEffect, useState } from "react";
// import iconss from "../images/iconn.png";
// import "./styleareeb.css";
import { Link } from "react-router-dom";
// import InventoryManagement from "./inventory-management.js";
import Accordion from 'react-bootstrap/Accordion';


// icon
import staffMainIcon from '../../../../components/images/Services-icon/staff/staff.png'
import inviteStaffIcon from '../../../../components/images/Services-icon/staff/invite.png'
import addStaffIcon from '../../../../components/images/Services-icon/staff/addstaff.png'
import requestStaffIcon from '../../../../components/images/Services-icon/staff/request.png'



// image
import addStaffImg from '../../../../components/images/AddStaffImg.png'
import inviteStaffImg from '../../../../components/images/InviteStaffImg.png'
import staffHomeImg from '../../../../components/images/StaffHomeImg.png'
import staffRequestImg from '../../../../components/images/StaffRequestImg.png'


const StaffSelect = (props) => {
    const items = [
        {
            key: "1",
            heading: "Staff Managment",
            title: "Satff Managment",
            img: staffMainIcon,
            mainImg: staffHomeImg,
            content: <ul><li>
                There are three types of access to the staff management tool. Everything will be accessible to the agency owner (super admin).
            </li>
                <li>
                    Agency owner will be able to add, delete, or update personnel, connect with their team, and track any commission and revenue generated, including any leads.
                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.",
        },
        {
            key: "2",
            heading: "Invite Staff",
            title: "Invite Staff",
            img: inviteStaffIcon,
            mainImg: inviteStaffImg,
            content:
                <ul><li>
                    An agency invitation code is a code that is used to invite employees or managers.
                </li>
                    <li>
                        It is generated when the owner invites employees using an agency code.                    </li>
                </ul>
            // "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
        {
            key: "3",
            heading: "Add Staff",
            title: "Add Staff",
            img: addStaffIcon,
            mainImg: addStaffImg,

            content: <ul><li>
                The new employees can be added directly in the agency by the agency owner or manager.            </li>
                <li>
                New employees can be added by entering their names, phone numbers, CNIC, experience, and position title. They can also be removed if required.
                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "4",
            heading: "Staff Request",
            title: "Staff Request",
            img: requestStaffIcon,
            mainImg: staffRequestImg,

            content: <ul><li>
                Admin can accept the staff request by validating the staff's information.            </li>
                <li>
                    When the request is accepted, the admin will assign the employee's role, such as manager or staff.                </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
        },
        {
            key: "5",
            heading: "Sold Inventories",
            title: "Sold Inventories",
            content: <ul><li>
                This feature displays which projects or individual properties have been sold. This feature allows you to easily check the sold inventory.
            </li>
                <li>
                    This feature displays which projects or individual properties have been sold. This feature allows you to easily check the sold inventory.             </li>
            </ul>
            // "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
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
                                                // href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                                                 className="theme-btn-Home btn btn-effect-1 "
                                                    data-rel="lightcase"
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
                                                    data-rel="lightcase"
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
                                                    data-rel="lightcase"
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
                                                    data-rel="lightcase"
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

                            {/*  */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StaffSelect;

