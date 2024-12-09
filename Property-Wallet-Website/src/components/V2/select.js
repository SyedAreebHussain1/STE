import React, { useEffect, useState } from "react";
import iconss from "../images/iconn.png";
import "./styleareeb.css";
import { Link } from "react-router-dom";

import Accordion from 'react-bootstrap/Accordion';

// import commissionIcon from '../images/commission.png'
// import finalizeSaleIcon from '../images/finalize sale.png'
// import inventoryIcon from '../images/inventory.png'
// import reportIcon from '../images/report.png'
// import targetIcon from '../images/target.png'


import inventoryIcon from '../images/inventory.png'
import commissionIcon from '../images/commission.png'
import finalizeSaleIcon from '../images/finalize sale.png'
import stafficon from '../images/stafficon.png'
import reportIcon from '../images/report.png'
import targetIcon from '../images/target.png'
// import paymentplan from '../images/calculator.png'
import digitalToolsIcon from '../images/DigitalToolsIcon.png'




import inventoryImg from "../images/inventeryImg.png";
import staffImg from "../images/StaffHomeImg.png";
import commissionImg from "../images/CommissionHomeImg.png";
import reportHomeImg from "../images/ReportHomeImg.png";
import digitalTools from "../images/DigitalTools.png";
import SaleTargetImg from "../images/SaleTargetImg.png";

const SelectBox = (props) => {

  const items = [
    {
      key: "1",
      path: '/inventory-management',
      heading: "Leave no stone unturned!",
      title: "Inventory Managment",
      img: inventoryIcon,
      mainImg: inventoryImg,
      content:
        "Inventory management is an essential part of any business.Take control of your inventory with our inventory management system. Get real-time insights into your business and make data-driven decisions with our powerful inventory management system. Realtors are now able to manage their inventories more efficiently.",
    },
    {
      key: "2",
      path: '/staff-management',
      heading: "Oversee your team of agents on-the go!",
      title: "Staff Managment",
      img: stafficon,
      mainImg: staffImg,
      content:
        "With the property wallet staff management system, real estate agencies can effectively manage their staff and ensure that they are working efficiently and productively. It allows them to track staff performance, assign tasks, and schedule meetings. Our Staff management system is simple to use.",
    },
    {
      key: "3",
      path: '/commission-management',
      heading: "Quickest way to calculate commissions!",
      title: "Commision Management",
      img: commissionIcon,
      mainImg: commissionImg,
      content:
        "The process of tracking, calculating, and distributing commissions is known as commission management. Our commission management systems provide a full platform for handling commission payments from start to finish, including payment tracking, proper commission calculation, and timely payment distribution.",
    },
    {
      key: "4",
      path: '/report-management',
      heading: "Quickest way to calculate commissions!",
      title: "Report Management",
      img: reportIcon,
      mainImg: reportHomeImg,
      content:
        "Say goodbye to tedious report management - make the switch today with property wallet for your hassle-free solution! We understand how important accurate and timely reports are to help you succeed, so our intuitive system will help you create, organize, and distribute reports with ease in no time!",
    },
    {
      key: "5",
      path: '/digital-tools',
      heading: "Quickest way to calculate commissions!",
      title: "Digital Tools",
      img: digitalToolsIcon,
      mainImg: digitalTools,
      content:
        "Say goodbye to manual processes, streamline operations and achieve greater outcomes faster and easier. Digital tools are the way to take your business on the road to success! ⁣⁣ Technology advances, but it's up to us how we use it. Property wallet equips you with the digital tools you need for success.",
    },
    {
      key: "6",
      path: '/sales-target',
      heading: "Quickest way to calculate commissions!",
      title: "Target Sales Management",
      img: targetIcon,
      mainImg: SaleTargetImg,
      content:
        "Taking your business to the next level requires more than just effort, Change the way you manage business the smarter way. Property wallet makes it easy for you to plan out strategies for achieving success. Plus, you’ll always have access to real-time analytics and insights to follow up on your progress.",
    },
  ];

  return (
    <div className="ltn__faq-area faq-mobile-show" style={{display:"none"}}>
      <div style={{ marginLeft: "0%", marginRight: "0%", marginBottom: '4%',marginTop:'20%' }} className="row">
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
                    {/* <div className="ltn__video-img alignleft">
                          <img
                            src={publicUrl + "assets/img/bg/17.jpg"}
                            alt="video popup bg image"
                          />
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----"
                            href="https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play" />
                          </a>
                        </div> */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img style={{ width: '50%' }} src={items[0].mainImg} />
                    </div>
                    <div className="" style={{fontSize:"1rem",margin:'10px auto'}}>

                      {items[0].content}
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
                    </div>
                    <div
                      style={{
                        display: "flex",
                        // justifyContent: "center",
                      }}
                      className="btn-wrapper animated go-top"
                    >
                      <Link
                        to={items[0].path}
                        className="theme-btn-1 btn btnLearnmore btn-effect-1"
                      >
                        Learn more
                      </Link>
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
                      <div className="" style={{fontSize:"1rem",margin:'10px auto'}}>
                        {items[1].content}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to={items[1].path}
                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
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
                      <div className="" style={{fontSize:"1rem",margin:'10px auto'}}>
                        {items[2].content}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to={items[2].path}

                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
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
                      <div className="" style={{fontSize:"1rem",margin:'10px auto'}}>
                        {items[3].content}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to={items[3].path}

                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
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
                      <div className="" style={{fontSize:"1rem",margin:'10px auto'}}>
                        {items[4].content}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to={items[4].path}
                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card */}
                <div className="card">
                  <div
                    className="collapsed ltn__card-title text-gray-ad bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-7"
                    aria-expanded="false"
                  >
                    <img src={items[5].img} />&nbsp;

                    {items[5].title}

                  </div>
                  <div
                    id="faq-item-2-7"
                    className="collapse"
                    data-bs-parent="#accordion_2"
                  >
                    <div className="card-body">
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <img style={{ width: '50%' }} src={items[5].mainImg} />
                      </div>
                      <div className="" style={{fontSize:"1rem",margin:'10px auto'}}>
                        {items[5].content}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "center",
                        }}
                        className="btn-wrapper animated go-top"
                      >
                        <Link
                          to={items[5].path}

                          className="theme-btn-1 btn btnLearnmore btn-effect-1"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="need-support text-center mt-70">
                <h2>
                  Please go through our{" "}
                  <Link
                    style={{
                      color: "#27A3A3",
                      //   fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Privacy Policy{" "}
                  </Link>{" "}
                  and{" "}
                  <Link
                    style={{
                      color: "#27A3A3",
                      //   fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Terms of Service{" "}
                  </Link>
                  for more information about the Property Wallet app. You can
                  also{" "}
                  <Link
                    style={{
                      color: "#27A3A3",
                      //   fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    contact us{" "}
                  </Link>{" "}
                  for more questions.{" "}
                </h2>
                <div className="btn-wrapper mt-5 mb-30 go-top">
                  <Link to="/contact" className="theme-btn-1 btn">
                    Contact Us
                  </Link>
                </div>
                <h3>
                  <i className="fas fa-phone" /> 021-111-818-111
                </h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};
export default SelectBox;