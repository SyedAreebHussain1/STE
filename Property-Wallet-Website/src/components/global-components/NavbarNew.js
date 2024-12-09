// import { colorToRgba } from "@react-spring/shared";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Social from "../section-components/social";
import AOS from 'aos'
import { useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import smartpoint from '../../components/images/smart-point/smartpoint-end.png'
import virtual from '../../components/images/smart-point/virtual-end.png'

const NavbarNew = (props) => {
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
                    style={{ border: "" }}
                >
                    {/* ltn__header-middle-area start */}
                    <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
                        <div
                            style={{
                                paddingLeft: "30px",
                                paddingRight: "30px",
                            }} className=""
                        >
                            <div className="row ">
                                <div className="col " style={{ marginLeft: '3%', marginRight: "3%" }}>
                                    <div className="main-navbar" style={{}}>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                                                <div></div> <div className="ltn__main-menu">
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
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                                <div
                                                    style={{ display: "flex", width: "100%" }}
                                                >
                                                    <Link to="/" >
                                                        {icon ? (
                                                            <img
                                                                className="nav-logo"
                                                                // style={{ width: "150px", height: "" }}
                                                                src={publicUrl + "assets/img/mianlogocrm3.png"}
                                                                alt="Logo"
                                                            />
                                                        ) : (
                                                            <img
                                                                className="nav-logo"
                                                                // style={{ width: "150px", height: "" }}
                                                                src={publicUrl + "assets/img/mainlogoov3.png"}
                                                                alt="Logo"
                                                            />
                                                        )}
                                                    </Link>
                                                    <div className="ltn__main-menu">
                                                        <ul style={{ display: "flex", marginLeft: "40px" }} className="menu-icon ">
                                                            <li>
                                                                <Link to='/'>Home</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/about'>About</Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/pricing'>Pricing</Link>
                                                            </li>
                                                            <li className="menu-icon" >
                                                                <Link to="">Our Products <span style={{ position: "absolute", top: '15px' }}><DownOutlined style={{ fontSize: '12px', marginTop: "-5px" }} /></span></Link>
                                                                <ul style={{ display: "flex", height: "55px", marginLeft: "" }}>
                                                                    <li style={{ marginTop: "-9px" }}>
                                                                        <Link to="/verification-app" className='canvas-btn flex' style={{ padding: "5px" }}>
                                                                            <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                                                                <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Customer Verification App</button>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li style={{ marginTop: "-9px" }}>
                                                                        <Link to="/crm" className='canvas-btn flex' style={{ padding: "5px" }}>
                                                                            <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                                                                <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Property Wallet CRM</button>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li style={{ marginTop: "-9px" }}>
                                                                        <Link to="/service" className='canvas-btn flex' style={{ padding: "5px" }}>
                                                                            <div className='canvas-upper-link' style={{ fontSize: "18px", }}>
                                                                                <button className='canvas-link-btn' style={{ fontWeight: '400' }}>Property Wallet App</button>
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li
                                                                className="special-link menu-icon" style={{ marginLeft: "20px" }}
                                                            >
                                                                <Link to="/service" className="theme-btn-1 btn btn-effect-1"><span style={{ marginLeft: "" }}>
                                                                    {/* <img src={virtual} width="20px" /> */}
                                                                    Property Wallet App </span> </Link>
                                                                <ul>
                                                                    <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>

                                                                        <span onClick={() => handleNavigate('/about')}>Silver Agency</span>

                                                                    </li>
                                                                    <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>
                                                                        <span onClick={() => handleNavigate('/about')}>Gold Agency</span>

                                                                    </li>
                                                                    <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>
                                                                        <span onClick={() => handleNavigate('/about')}>Platinum Agency</span>

                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li
                                                                className="special-link  menu-icon"
                                                            >
                                                                <Link
                                                                    to="/smart-point"
                                                                    className="theme-btn-1 btn btn-effect-1"
                                                                >
                                                                    <span style={{ marginLeft: "" }}>
                                                                        {/* <img src={smartpoint} width="20px" />  */}
                                                                        Smart Point</span>
                                                                </Link>
                                                                <ul>
                                                                    <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>

                                                                        <span onClick={() => handleNavigate('/about')}>Smart Point Plus</span>

                                                                    </li>
                                                                    <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>
                                                                        <span onClick={() => handleNavigate('/about')}>Smart Point Lounge</span>

                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="ltn__main-menu">
                                                    <ul style={{ display: "flex", border: "", marginTop: "9px" }} className="menu-icon ">
                                                        <li
                                                            className="special-link menu-icon"
                                                        >
                                                            <Link to="/service" className="theme-btn-1 btn btn-effect-1"><span style={{ marginLeft: "-9px" }}> Become a Property Wallet Partner  </span> </Link>
                                                            {/* <ul>
                                                                <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>

                                                                    <span onClick={() => handleNavigate('/about')}>Silver Agency</span>

                                                                </li>
                                                                <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>
                                                                    <span onClick={() => handleNavigate('/about')}>Gold Agency</span>

                                                                </li>
                                                                <li className="cursor-pointer" style={{ fontWeight: '600', color: "#071c1f", fontSize: "18px", whiteSpace: 'nowrap' }}>
                                                                    <span onClick={() => handleNavigate('/about')}>Platinum Agency</span>

                                                                </li>
                                                            </ul> */}
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
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
                                            color: "black"
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

                                    {icon ? (
                                        <img src={publicUrl + "assets/img/1a.png"} alt="Logo" />
                                    ) : (
                                        <img src={publicUrl + "assets/img/1b.png"} alt="Logo" />
                                    )}
                                </Link>
                            </div>
                            <button className="ltn__utilize-close"></button>
                        </div>

                        <div className="ltn__utilize-menu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>

                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/about">Our Product</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/verification-app">Customer Verification App</Link>
                                        </li>
                                        <li>
                                            <Link to="/crm">Property Wallet CRM</Link>
                                        </li>
                                        <li>
                                            <Link to="/service">Property Wallet App</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/service">Property Wallet App</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/inventory-management">Silver Agency</Link>
                                        </li>
                                        <li>
                                            <Link to="/staff-management">Gold Agency</Link>
                                        </li>
                                        <li>
                                            <Link to="/commission-management">Platinum Agency</Link>
                                        </li>
                                        {/* <li>
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
                                        </li> */}
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/smart-point">Smart Point</Link>

                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">Smart Point Lounge</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Smart Point Plus</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/smart-point">Document</Link>

                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/pwform">Pw Form</Link>
                                        </li>
                                        <li>
                                            <Link to="/invoice">Invoice Checker</Link>
                                        </li>
                                        <li>
                                            <Link to="/login">Partner Login</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/about">Become a PW Partner</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NavbarNew;
