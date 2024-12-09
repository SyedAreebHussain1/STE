import React, { useEffect } from "react"
import '../service_module.css'
import ReportSelect from "./report-select-mobi";

import { Link } from "react-router-dom";



import mobile from '../../../../components/images/singlephone.png'

import productReport from '../../../../components/images/ProductReport.png'
import reportHomeImg from '../../../../components/images/ReportHomeImg.png'
import employeeReport from '../../../../components/images/EmployeeReport.png'
import projectReport from '../../../../components/images/ProjectReport.png'
import comparisonReport from '../../../../components/images/ComparisonReport.png'


// icon
import reportMainIcon from '../../../../components/images/Services-icon/Report/report.png'
import projectIcon from '../../../../components/images/Services-icon/Report/project.png'
import productIcon from '../../../../components/images/Services-icon/Report/product.png'
import employeeIcon from '../../../../components/images/Services-icon/Report/employee.png'
import compareIcon from '../../../../components/images/Services-icon/Report/compare.png'





const ReportServices = (props) => {
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
                                    <img className="iconpng" src={reportMainIcon} alt="logo" />
                                    <p className="text-inven">Report Management</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_2"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={projectIcon} alt="logo" />
                                    <p className="text-inven">Project Report</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_3"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={productIcon} alt="logo" />
                                    <p className="text-inven">Product Report</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_4"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={employeeIcon} alt="logo" />
                                    <p className="text-inven"> Employe Report</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_5"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={compareIcon} alt="logo" />
                                    <p className="text-inven">Comparison Report</p>
                                </div>
                            </a>
                            {/* <a
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
                                        <img className="imgIphoneScreen marginTop-30px" src={reportHomeImg} alt="img" style={{ marginTop: '' }} />
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
                                                        <h1>Report Management</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Get monthly reports on the overall sales of the agency.                                                        </li>
                                                        <li>
                                                            This contains sales for each project, sales by each manager and team member, overall revenue generated and comparison report
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
                        <div className="tab-pane fade" id="liton_tab_3_2">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen  marginTop-30px" src={projectReport} alt="img" />
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
                                                        <h1>Project Report</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Receive monthly reports on the total number of projects sold by the agency.
                                                        </li>
                                                        <li>
                                                            Project reporting features a lot of information, including the number of units sold and the amount of revenue generated.                                                        </li>
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
                        <div className="tab-pane fade" id="liton_tab_3_3">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen  marginTop-30px" src={productReport} alt="img" />
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
                                                        <h1>Product Report</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Get monthly reports on the overall sales of the products.                                                        </li>
                                                        <li>
                                                            Product reporting features a lot of information, including the number of products sold and the amount of revenue generated.
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
                                        <img className="imgIphoneScreen marginTop-30px" src={employeeReport} alt="img" />
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
                                                        <h1>Employe Report</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Get monthly reports on the overall sales by the agency manager & staff.                                                                     </li>
                                                        <li>
                                                            This includes an employee and sales report for each manager and team member, as well as the team's total revenue.                                                        </li>
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
                                        <img className="imgIphoneScreen marginTop-30px" src={comparisonReport} alt="img" />
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
                                                        <h1>Comparison Report</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Get monthly project and agency team member comparison reports.          </li>
                                                        <li>
                                                            Administrators can compare employee and project performance in comparison reports to discover which project and employee is doing the better.           </li>
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
                        <div className="tab-pane fade" id="liton_tab_3_6">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen marginTop-30px" src={mobile} alt="img" />
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
            <ReportSelect />
        </>
    )
}
export default ReportServices