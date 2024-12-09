// import { colorToRgba } from "@react-spring/shared";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Social from "../section-components/social";
import AOS from 'aos'
import { useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import smartpoint from '../../components/images/smart-point/smartpoint-end.png'
import virtual from '../../components/images/smart-point/virtual-end.png'

const NavbarV2 = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let CustomClass = props.CustomClass ? props.CustomClass : "";
  const [istrue, setistrue] = useState(false);
  const history = useHistory();
  const [icon, setIcon] = useState(false);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (props?.location?.pathname === "/crm") {
      setIcon(true);
    } else {
      setIcon(false);
    }
    // console.log(props)
  }, []);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [localStorage]);
  function handleNavigate(path) {
    history.push(path);
  }
  return (
    <>
      <div >
        <header
          className={
            "ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- " +
            CustomClass
          }
        >
          {/* ltn__header-top-area start */}

          <div className="ltn__header-top-area d-none">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                          <i className="icon-mail" /> info@webmail.com
                        </a>
                      </li>
                      <li>
                        <a href="locations.html">
                          <i className="icon-placeholder" /> 15/A, Nest Tower, NYC
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="top-bar-right text-end">
                    <div className="ltn__top-bar-menu">
                      <ul>
                        <li>
                          {/* ltn__language-menu */}
                          <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                            <ul>
                              <li>
                                <a href="#" className="dropdown-toggle">
                                  <span className="active-currency">English</span>
                                </a>
                                <ul>
                                  <li>
                                    <Link to="#">Arabic</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Bengali</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Chinese</Link>
                                  </li>
                                  <li>
                                    <Link to="#">English</Link>
                                  </li>
                                  <li>
                                    <Link to="#">French</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Hindi</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Social />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__header-top-area end */}
          {/* ltn__header-middle-area start */}
          <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
            <div
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <div className="row">
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo go-top">
                      <Link to="/">
                        {icon ? (
                          <img
                            className="logo-mobile"
                            style={{ width: "22%", height: "" }}
                            src={publicUrl + "assets/img/mianlogocrm3.png"}
                            alt="Logo"
                          />
                        ) : (
                          <img
                            className="logo-mobile"
                            style={{ width: "22%", height: "" }}
                            src={publicUrl + "assets/img/mainlogoov3.png"}
                            alt="Logo"
                          />
                        )}
                      </Link>
                    </div>
                    <div className="get-support clearfix d-none">
                      <div className="get-support-icon">
                        <i className="icon-call" />
                      </div>
                      <div className="get-support-info">
                        <h6>Get Support</h6>
                        <h4>
                          <a href="tel:+123456789">123-456-789-10</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col header-menu-column">
                  <div className="header-menu d-none d-xl-block go-top">
                    <nav>
                      <div className="ltn__main-menu">
                        <div className="head-nav01 "
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          <li>
                            <Link
                              to="/pwform"
                            >Pw form

                            </Link>
                          </li> |
                          <li>
                            <Link
                              to="/invoice"
                            >
                              Invoice Checker
                            </Link>
                          </li> |
                          {isUser ? (
                            <li style={{ fontWeight: "18pxs" }}
                            >
                              <Link
                                to="/dashboard/order"
                              >
                                Dashboard
                              </Link>
                            </li>
                          ) : (
                            <li
                              style={{ fontWeight: "18pxs" }}
                            >
                              <Link
                                to="/login"
                              >
                                Partner Login
                              </Link>
                            </li>
                          )}

                        </div>
                        <ul>
                          <li className="menu-icon">
                            <Link to="/">Home</Link>
                            {/* <ul className="sub-menu menu-pages-img-show">

                                    <li>
                                        <Link to="/">Home Style 01</Link>
                                        <img src={publicUrl+"assets/img/home-demos/home-1.jpg"} alt="#" />
                                    </li>
                                    <li>
                                        <Link to="/home-v2">Home Style 02</Link>
                                        <img src={publicUrl+"assets/img/home-demos/home-2.jpg"} alt="#" />
                                    </li>
                                    <li>
                                        <Link to="/home-v3">Home Style 03</Link>
                                        <img src={publicUrl+"assets/img/home-demos/home-3.jpg"} alt="#" />
                                    </li>
                                    <li>
                                    <Link to="/home-v4">Home Style 04</Link>
                                    <img src={publicUrl+"assets/img/home-demos/home-4.jpg" } alt="#" /> 
                                    </li>
                                    <li>
                                        <Link to="/home-v5">Home Style 05 <span className="menu-item-badge">video</span></Link>
                                        <img src={publicUrl+"assets/img/home-demos/home-5.jpg" } alt="#" /> 
                                    </li>
                                    <li>
                                        <Link to="/home-v6">Home Style 06</Link>
                                        <img src={publicUrl+"assets/img/home-demos/home-6.jpg" } alt="#" /> 
                                    </li>
                                    <li>
                                        <Link to="/home-v7">Home Style 07</Link>
                                        <img src={publicUrl+"assets/img/home-demos/home-7.jpg" } alt="#" /> 
                                    </li>
                                    <li>
                                        <Link to="/home-v8">Home Style 08</Link>
                                        <img src={publicUrl+"assets/img/home-demos/home-8.jpg" } alt="#" /> 
                                    </li>
                                    <li>
                                        <Link to="/home-v9">Home Style 09</Link>
                                        <img src={publicUrl+"assets/img/home-demos/home-9.jpg" } alt="#" /> 
                                    </li>
                                    <li>
                                        <Link to="/home-v10">Home Style 10</Link>
                                        <img src={publicUrl+"assets/img/home-demos/home-11.jpg"}  alt="#" />
                                    </li>
                                    
                                    </ul> */}
                          </li>
                          <li className="menu-icon">
                            <Link to="/about">About</Link>
                            {/* <ul>
                              <li>
                                <Link to="/about">About</Link>
                              </li>
                              <li>
                                <Link to="/service">Services</Link>
                              </li>
                              <li>
                                <Link to="/service-details">
                                  Service Details
                                </Link>
                              </li>
                              <li>
                                <Link to="/portfolio">Portfolio</Link>
                              </li>
                              <li>
                                <Link to="/portfolio-v2">Portfolio - 02</Link>
                              </li>
                              <li>
                                <Link to="/portfolio-details">
                                  Portfolio Details
                                </Link>
                              </li>
                              <li>
                                <Link to="/team">Team</Link>
                              </li>
                              <li>
                                <Link to="/team-details">Team Details</Link>
                              </li>
                              <li>
                                <Link to="/faq">FAQ</Link>
                              </li>
                              <li>
                                <Link to="/location">Google Map Locations</Link>
                              </li>
                            </ul> */}
                          </li>
                          {/* <li >
                            <div onClick={() => [setActiveMenu(!activeMenu), setData('solution')]} onMouseEnter={() => [setActiveMenu(!activeMenu), setData('solution')]} className="" >
                              Solution
                            </div>

                          </li> */}

                          {/* <li className="menu-icon">
                            <Link to="">Solution For <span style={{ position: "absolute", top: '15px', marginLeft: "2px" }}> <DownOutlined style={{ fontSize: '12px' }} /></span></Link>
                            <ul style={{ display: "flex", height: "55px", marginLeft: "-100px" }}>
                              <li style={{ marginTop: "-9px" }}>
                                <Link to="/" className='canvas-btn flex' style={{ padding: "5px" }}>
                            
                                  <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                    <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Real Estate Agents</button>
                                  </div>
                                </Link>
                              </li>
                              <li style={{ marginTop: "-9px" }}>
                                <Link to="/" className='canvas-btn flex' style={{ padding: "5px" }}>
              
                                  <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                    <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Builders</button>
                                  </div>
                                </Link>
                              </li>
                              <li style={{ marginTop: "-9px" }}>
                                <Link to="/" className='canvas-btn flex' style={{ padding: "5px" }}>
                             
                                  <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                    <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Freelancers</button>
                                  </div>
                                </Link>
                              </li>
            
                            </ul>
                          </li> */}
                          <li className="menu-icon" >
                            <Link to="">Our Products <span style={{ position: "absolute", top: '15px' }}><DownOutlined style={{ fontSize: '12px', marginTop: "-5px" }} /></span></Link>
                            <ul style={{ display: "flex", height: "55px", marginLeft: "-180px" }}>
                              <li style={{ marginTop: "-9px" }}>
                                {/* <Link to="/pw-form">Pw Form</Link> */}
                                <Link to="/verification-app" className='canvas-btn flex' style={{ padding: "5px" }}>
                                  {/* <div style={{ height: "25px", width: "25px" }}>
                                    <img src={icondummy} />
                                  </div> */}
                                  <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                    <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Customer Verification App</button>
                                  </div>
                                </Link>
                              </li>
                              <li style={{ marginTop: "-9px" }}>
                                <Link to="/crm" className='canvas-btn flex' style={{ padding: "5px" }}>
                                  {/* <div style={{ height: "25px", width: "25px" }}>
                                    <img src={icondummy} />
                                  </div> */}
                                  <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                    <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Property Wallet CRM</button>
                                  </div>
                                </Link>
                              </li>
                              <li style={{ marginTop: "-9px" }}>
                                <Link to="/service" className='canvas-btn flex' style={{ padding: "5px" }}>
                                  {/* <div style={{ height: "25px", width: "25px" }}>
                                    <img src={icondummy} />
                                  </div> */}
                                  <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                    <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Property Wallet App</button>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          {/* <li className="menu-icon">
                          <Link to="/service">Services</Link>
                          <ul>
                            <li>
                              <Link to="/inventory-management">Inventory</Link>
                            </li>
                            <li>
                              <Link to="/staff-management">Staff</Link>
                            </li>
                            <li>
                              <Link to="/commission-management">
                                Commission
                              </Link>
                            </li>
                            <li>
                              <Link to="/report-management">Report</Link>
                            </li>
                            <li>
                              <Link to="/digital-tools">Digital Tools</Link>
                            </li>
                            <li>
                              <Link to="/sales-target">Sales Target</Link>
                            </li>
                          </ul>
                        </li> */}
                          {/* <li className="menu-icon">
                            <Link to="/shop">Shop</Link>
                            <ul>
                              <li>
                                <Link to="/shop">Shop</Link>
                              </li>
                              <li>
                                <Link to="/shop-grid">Shop Grid</Link>
                              </li>
                              <li>
                                <Link to="/shop-left-sidebar">
                                  Shop Left sidebar
                                </Link>
                              </li>
                              <li>
                                <Link to="/shop-right-sidebar">
                                  Shop Right sidebar
                                </Link>
                              </li>
                              <li>
                                <Link to="/product-details">Shop Details</Link>
                              </li>
                              <li>
                                <Link to="/cart">Cart</Link>
                              </li>
                              <li>
                                <Link to="/checkout">Checkout</Link>
                              </li>
                              <li>
                                <Link to="/my-account">My Account</Link>
                              </li>
                              <li>
                                <Link to="/login">Sign in</Link>
                              </li>
                              <li>
                                <Link to="/register">Register</Link>
                              </li>
                            </ul>
                          </li> */}

                          {/* <li className="menu-icon">
                            <Link to="/service">Virtual Egency</Link>
                            <ul>
                              <li>
                                <Link to="/">Virtual</Link>
                              </li>
                              <li>
                                <Link to="/">Virtual</Link>
                              </li>
                              <li>
                                <Link to="/">
                                  Virtual
                                </Link>
                              </li>

                            </ul>
                          </li> */}

                          {/* <li className="menu-icon">
                            <Link to="/blog-grid">News</Link>
                            <ul>
                              <li>
                                <Link to="/blog">News</Link>
                              </li>
                              <li>
                                <Link to="/blog-grid">News Grid</Link>
                              </li>
                              <li>
                                <Link to="/blog-left-sidebar">
                                  News Left sidebar
                                </Link>
                              </li>
                              <li>
                                <Link to="/blog-right-sidebar">
                                  News Right sidebar
                                </Link>
                              </li>
                              <li>
                                <Link to="/blog-details">News details</Link>
                              </li>
                            </ul>
                          </li> */}
                          {/* <li className="menu-icon">
                            <a href="#">Pages</a>
                            <ul className="mega-menu">
                              <li>
                                <a href="#">Inner Pages</a>
                                <ul>
                                  <li>
                                    <Link to="/portfolio">Portfolio</Link>
                                  </li>
                                  <li>
                                    <Link to="/portfolio-v2">
                                      Portfolio - 02
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/portfolio-details">
                                      Portfolio Details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/team">Team</Link>
                                  </li>
                                  <li>
                                    <Link to="/team-details">Team Details</Link>
                                  </li>
                                  <li>
                                    <Link to="/faq">FAQ</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Inner Pages</a>
                                <ul>
                                  <li>
                                    <Link to="/history">History</Link>
                                  </li>
                                  <li>
                                    <Link to="/add-listing">Add Listing</Link>
                                  </li>
                                  <li>
                                    <Link to="/location">
                                      Google Map Locations
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/404">404</Link>
                                  </li>
                                  <li>
                                    <Link to="/contact">Contact</Link>
                                  </li>
                                  <li>
                                    <Link to="/coming-soon">Coming Soon</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="#">Shop Pages</Link>
                                <ul>
                                  <li>
                                    <Link to="/shop">Shop</Link>
                                  </li>
                                  <li>
                                    <Link to="/shop-left-sidebar">
                                      Shop Left sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/shop-right-sidebar">
                                      Shop right sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/shop-grid">Shop Grid</Link>
                                  </li>
                                  <li>
                                    <Link to="/product-details">
                                      Shop details{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/cart">Cart</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="/shop">
                                  <img
                                    src={
                                      publicUrl +
                                      "assets/img/banner/menu-banner-1.jpg"
                                    }
                                    alt="#"
                                  />
                                </Link>
                              </li>
                            </ul>
                          </li> */}
                          {/* <li>
                            <Link
                              // to="/how-to-use"
                              to="/contact"
                            >
                              Contact
                              <span style={{
                              position: 'absolute',
                              bottom: '60%',
                              
                              right: '-10%',
                              color: '#27a3a3',
                              fontSize: '12px'
                            }}>
                              Coming soon
                            </span>
                            </Link>
                          </li> */}
                          {/* crm */}
                          {/* <li
                          // style={{
                          //   backgroundColor: "#27A3A3",
                          //   borderRadius: "80px",
                          //   width: "40%",
                          //   color: "white",
                          //   //   padding: "-30px",
                          // }}
                          className="special-link"
                        >
                          <Link
                            // to="/#"
                            to="/crm"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            Property Wallet CRM
                          </Link>
                        </li> */}

                          {/* <li>
                          <Link to="/crm" >
                            Property Wallet CRM
                          </Link>
                        </li> */}
                          {/* <li>
                            <Link to="/pwform">Document</Link>
                            <div onClick={() => [setActiveMenu(!activeMenu), setData('document')]} onMouseEnter={() => [setActiveMenu(!activeMenu), setData('document')]} className="" >
                              Document <span><DownOutlined style={{ fontSize: '12px',marginTop:"-5px" }} /></span>
                            </div>
                            

                          </li> */}
                          {/* <li className="menu-icon">
                            <Link to="">Document <span style={{ position: "absolute", top: '15px', marginLeft: "2px" }}><DownOutlined style={{ fontSize: '12px', marginTop: "-10px" }} /></span></Link>
                            <ul style={{ display: "flex", height: "55px" }}>
                              <li style={{ marginTop: "-9px" }}>
                                <Link to="/pw-form">Pw Form</Link>
                                <Link to="/pwform" className='canvas-btn flex' style={{ padding: "5px" }}>
                                  <div style={{ height: "25px", width: "25px" }}>
                                    <img src={icondummy} />
                                  </div>
                                  <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                    <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Pw Form</button>
                                  </div>
                                </Link>
                              </li>
                              <li style={{ marginTop: "-9px" }}>
                                <Link to="/invoice" className='canvas-btn flex' style={{ padding: "5px" }}>
                                  <div style={{ height: "25px", width: "25px" }}>
                                    <img src={icondummy} />
                                  </div>
                                  <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                    <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Invoice Checker</button>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </li> */}
                          {/* <li>
                            <Link to="/invoice">Invoice checker</Link>
                          </li> */}


                        <li
                        // style={{
                        //   backgroundColor: "#27A3A3",
                        //   borderRadius: "80px",
                        //   width: "40%",
                        //   color: "white",
                        //   //   padding: "-30px",
                        // }}
                        // className="special-link"
                        >
                          <Link
                            // to="/#"
                            to="/crm"
                            // className="theme-btn-1 btn btn-effect-1"
                          >
                            Property Wallet CRM
                          </Link>
                        </li>
                        <li>
                          <Link to="/pwform">Pw-Form</Link>
                        </li>
                        <li>
                          <Link to="/invoice">Invoice checker</Link>
                        </li>
                        {isUser ? (
                          <li
                          // style={{
                          //   backgroundColor: "#27A3A3",
                          //   borderRadius: "80px",
                          //   width: "40%",
                          //   color: "white",
                          //   //   padding: "-30px",
                          // }}
                          // className="special-link"
                          >
                            <Link
                              // to="/#"
                              to="/dashboard/order"
                              // className="theme-btn-1 btn btn-effect-1"
                              >
                                Dashboard
                              </Link>
                            </li>
                          ) : (
                            <li
                              // style={{
                              //   backgroundColor: "#27A3A3",
                              //   borderRadius: "80px",
                              //   width: "40%",
                              //   color: "white",
                              //   //   padding: "-30px",
                              // }}
                              className="special-link"
                            >
                              <Link
                                to="/login"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                Partner Login
                              </Link>
                            </li>
                          )} 
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col--- ltn__header-options ltn__header-options-2 ">
                  {/* Mobile Menu Button */}
                  <div
                    className={`mobile-menu-toggle d-xl-none ${istrue && "d-none"
                      }`}
                  >
                    <a
                      href="#ltn__utilize-mobile-menu"
                      className="ltn__utilize-toggle"
                      onClick={() => setistrue(true)}
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        />
                      </svg>
                    </a>
                  </div>
                  <button
                    className={`ltn__utilize-close ${!istrue && "d-none"}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "white",
                      boxShadow: "0px 16px 32px 0px rgba(7, 28, 31, 0.1)",
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                    onClick={() => setistrue(false)}
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__header-middle-area end */}
        </header>
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/">
                  {/* <img
                  src={publicUrl + "assets/img/mainlogoov2.png"}
                  alt="Logo"
                /> */}
                  {icon ? (
                    <img src={publicUrl + "assets/img/1a.png"} alt="Logo" />
                  ) : (
                    <img src={publicUrl + "assets/img/1b.png"} alt="Logo" />
                  )}
                </Link>
              </div>
              <button className="ltn__utilize-close"></button>
            </div>
            {/* <div className="ltn__utilize-menu-search-form">
              <form action={"#"}>
                <input type="text" placeholder="Search..." />
                <button>
                  <i className="fas fa-search" />
                </button>
              </form>
            </div> */}
            <div className="ltn__utilize-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/">Home Style 01</Link>
                    </li>
                    <li>
                      <Link to="/home-v2">Home Style 02</Link>
                    </li>
                    <li>
                      <Link to="/home-v3">Home Style 03</Link>
                    </li>
                    <li>
                      <Link to="/home-v4">Home Style 04</Link>
                    </li>
                    <li>
                      <Link to="/home-v5">
                        Home Style 05{" "}
                        <span className="menu-item-badge">video</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/home-v6">Home Style 06</Link>
                    </li>
                    <li>
                      <Link to="/home-v7">Home Style 07</Link>
                    </li>
                    <li>
                      <Link to="/home-v8">Home Style 08</Link>
                    </li>
                    <li>
                      <Link to="/home-v9">Home Style 09</Link>
                    </li>
                    <li>
                      <Link to="/home-v10">Home Style 10</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link to="/about">About</Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/service">Services</Link>
                    </li>
                    <li>
                      <Link to="/service-details">Service Details</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-v2">Portfolio - 02</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details">Portfolio Details</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/team-details">Team Details</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/location">Google Map Locations</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link to="/service">Services</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/inventory-management">Inventory</Link>
                    </li>
                    <li>
                      <Link to="/staff-management">Staff</Link>
                    </li>
                    <li>
                      <Link to="/commission-management">Commission</Link>
                    </li>
                    <li>
                      <Link to="/report-management">Report</Link>
                    </li>
                    <li>
                      <Link to="/digital-tools">Digital Tools</Link>
                    </li>
                    <li>
                      <Link to="/sales-target">Sales Target</Link>
                    </li>
                  </ul>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/shop-grid">Shop Grid</Link>
                    </li>
                    <li>
                      <Link to="/shop-left-sidebar">Shop Left sidebar</Link>
                    </li>
                    <li>
                      <Link to="/shop-right-sidebar">Shop Right sidebar</Link>
                    </li>
                    <li>
                      <Link to="/product-details">Shop Details</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/my-account">My Account</Link>
                    </li>
                    <li>
                      <Link to="/login">Sign in</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/blog">News</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid">News Grid</Link>
                    </li>
                    <li>
                      <Link to="/blog-left-sidebar">News Left sidebar</Link>
                    </li>
                    <li>
                      <Link to="/blog-right-sidebar">News Right sidebar</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">News details</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link
                    // to="/how-to-use"
                    to="/how-to-use"
                  >
                    How to use
                    {/* <span style={{
                  position: 'absolute',
                  bottom: '60%',
                  left: '10%',
                  color: '#27a3a3',
                  fontSize: '12px'
                }}>
                    Coming soon
                  </span> */}
                  </Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/service">Services</Link>
                    </li>
                    <li>
                      <Link to="/service-details">Service Details</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-2">Portfolio - 02</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details">Portfolio Details</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/team-details">Team Details</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/history">History</Link>
                    </li>
                    <li>
                      <Link to="/add-listing">Add Listing</Link>
                    </li>
                    <li>
                      <Link to="/locations">Google Map Locations</Link>
                    </li>
                    <li>
                      <Link to="/404">404</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/coming-soon">Coming Soon</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link to="/crm">Property Wallet CRM</Link>
                </li>
                {/* <li>
                <Link to="/#">Login / Signup</Link>
              </li> */}
                {/* <li>
                  <Link to="/contact">Contact</Link>
                </li> */}
              </ul>
            </div>
            {/* <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
              <ul>
                <li>
                  <Link to="/my-account" title="My Account">
                    <span className="utilize-btn-icon">
                      <i className="far fa-user" />
                    </span>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="far fa-heart" />
                      <sup>3</sup>
                    </span>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart" title="Shoping Cart">
                    <span className="utilize-btn-icon">
                      <i className="fas fa-shopping-cart" />
                      <sup>5</sup>
                    </span>
                    Shoping Cart
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="ltn__social-media-2">
              <ul>
                <li>
                  <a href="#" title="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Linkedin">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* <OffCanvas key={1} placement={'top'} data1={data1} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/> */}

      </div>
    </>
  );
};

export default NavbarV2;
