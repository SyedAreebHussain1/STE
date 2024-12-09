import React, { useEffect } from "react"
import '../service_module.css'
import SalesSelect from "./salesTarget-select-mobi";

import mobile from '../../../../components/images/singlephone.png'
import { Link } from "react-router-dom";




import salesTargetImg from '../../../../components/images/SalesTargetImg.png'
import salesTargetManager from '../../../../components/images/SalesTargetManager.png'
import salesTargetTeam from '../../../../components/images/SalesTargetTeam.png'
import saleTargetSet from '../../../../components/images/SaleTargetSet.png'



// import staffRequestImg from '../../../../components/images/StaffRequestImg.png'


// icon
import targetMainIcon from '../../../../components/images/Services-icon/Target/target.png'
import managerIcon from '../../../../components/images/Services-icon/Target/Manager.png'
import setIcon from '../../../../components/images/Services-icon/Target/set.png'
import teamIcon from '../../../../components/images/Services-icon/Target/team.png'



const SalesTargetServices = (props) => {
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
                                    <img className="iconpng" src={targetMainIcon} alt="logo" />
                                    <p className="text-inven">Target Sales Manegement</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_2"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={managerIcon} alt="logo" />
                                    <p className="text-inven">Manager Target</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_3"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={setIcon} alt="logo" />
                                    <p className="text-inven">Agency Target</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_4"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={teamIcon} alt="logo" />
                                    <p className="text-inven">Team Target</p>
                                </div>
                            </a>
                            {/* <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_5"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={iconsss} alt="logo" />
                                    <p className="text-inven">Payment Plan Calculator</p>
                                </div>
                            </a>
                            <a
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
                                        <img className="imgIphoneScreen marginTop-30px" src={salesTargetImg} alt="img" style={{ marginTop: '' }} />
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
                                                        <h1>Target Sales Management</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Achieve your sales goals with Target Sales Management. Property Wallet helps you to increase efficiency, track results and maximize profits.                                                       </li>
                                                        <li>
                                                            Discover how Target Sales Management can help you better manage your sales team and reach your goals faster.                                                        </li>
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
                        <div className="tab-pane fade" id="liton_tab_3_2">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen  marginTop-30px" src={salesTargetManager} alt="img" />
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
                                                        <h1>Manager Target</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Manager Target makes it easy to create and monitor team goals that are tied directly to your business objectives.                        </li>
                                                        <li>
                                                            Our goal setting software helps managers track progress, review results, and ensure that everyone is working towards the same goals.
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
                        <div className="tab-pane fade" id="liton_tab_3_3">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen  marginTop-30px" src={saleTargetSet} alt="img" />
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
                                                        <h1>Agency Target</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad"> 
                                                        <li>
                                                            Agency Target helps businesses reach their goals faster. Jump on board right now and get closer to your goals faster.                          </li>
                                                        <li>
                                                            No matter how much you set the goals to achieve, you can now monitor your agency progress and measure success with thorough reporting.
                                                        </li>
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
                        <div className="tab-pane fade" id="liton_tab_3_4">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen marginTop-30px" src={salesTargetTeam} alt="img" />
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
                                                        <h1>Team Target</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            You can set the team Target that helps you bring your team to its fullest potential. Get your team on the fast track to success with Team.                       </li>
                                                        <li>
                                                            Our comprehensive suite of features allows you to track progress, and measure performance - all in one place.
                                                        </li>
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
                                                        <h1>Quickest way to calculate commissions!</h1>
                                                    </div>
                                                </h3>
                                                <p style={{ color: "grey", fontSize: "1rem" }}>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the
                                                    industry's standard dummy text ever since the 1500s,
                                                </p>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        // justifyContent: "center",
                                                    }}
                                                    className="btn-wrapper animated"
                                                >
                                                    <Link
                                                        to="/paymentplan"
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
                                                        <h1>Quickest way to calculate commissions!</h1>
                                                    </div>
                                                </h3>
                                                <p style={{ color: "grey", fontSize: "1rem" }}>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the
                                                    industry's standard dummy text ever since the 1500s,
                                                </p>
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
            <SalesSelect />
        </>
    )
}
export default SalesTargetServices