import React, { useEffect } from "react"
import '../service_module.css'

import StaffSelect from "./staff-manegement-select";
import { Link } from "react-router-dom";

import mobile from '../../../../components/images/singlephone.png'


import addStaffImg from '../../../../components/images/AddStaffImg.png'
import inviteStaffImg from '../../../../components/images/InviteStaffImg.png'
import staffHomeImg from '../../../../components/images/StaffHomeImg.png'
import staffRequestImg from '../../../../components/images/StaffRequestImg.png'
// import staffRequestImg from '../../../../components/images/StaffRequestImg.png'



// icon
import staffMainIcon from '../../../../components/images/Services-icon/staff/staff.png'
import inviteStaffIcon from '../../../../components/images/Services-icon/staff/invite.png'
import addStaffIcon from '../../../../components/images/Services-icon/staff/addstaff.png'
import requestStaffIcon from '../../../../components/images/Services-icon/staff/request.png'



const StaffServices = (props) => {
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
                                    <img className="iconpng" src={staffMainIcon} alt="logo" />
                                    <p className="text-inven">Staff Management</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_2"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={inviteStaffIcon} alt="logo" />
                                    <p className="text-inven">Invite Staff</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_3"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={addStaffIcon} alt="logo" />
                                    <p className="text-inven">Add Staff</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_4"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={requestStaffIcon} alt="logo" />
                                    <p className="text-inven">Staff Request</p>
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
                                        <img className="imgIphoneScreen marginTop-30px" src={staffHomeImg} alt="img" style={{ marginTop: '' }} />
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
                                                        <h1>Staff Management</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            There are three types of access to the staff management tool. Everything will be accessible to the agency owner (super admin).
                                                        </li>
                                                        <li>
                                                            Agency owner will be able to add, delete, or update personnel, connect with their team, and track any commission and revenue generated, including any leads.
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
                                                        Watch tutorial<span style={{
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
                                        <img className="imgIphoneScreen  marginTop-30px" src={inviteStaffImg} alt="img" />
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
                                                        <h1>Invite Staff</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            An agency invitation code is a code that is used to invite employees or managers.
                                                        </li>
                                                        <li>
                                                            It is generated when the owner invites employees using an agency code.
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
                                                        Watch tutorial<span style={{
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
                                        <img className="imgIphoneScreen  marginTop-30px" src={addStaffImg} alt="img" />
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
                                                        <h1>Add Staff</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            The new employees can be added directly in the agency by the agency owner or manager.
                                                        </li>
                                                        <li>
                                                            New employees can be added by entering their names, phone numbers, CNIC, experience, and position title. They can also be removed if required.

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
                                        <img className="imgIphoneScreen marginTop-30px" src={staffRequestImg} alt="img" />
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
                                                        <h1>Staff Request</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Admin can accept the staff request by validating the staff's information
                                                        </li>
                                                        <li>
                                                            When the request is accepted, the admin will assign the employee's role, such as manager or staff.
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <div
                                                    style={{
                                                        display: "flex",
                                                        // justifyContent: "center",
                                                    }}
                                                    className="btn-wrapper animated"
                                                >
                                                    <Link
                                                        to="/reportmanagement"
                                                        className="theme-btn-1 btn btnLearnmore btn-effect-1"
                                                    >
                                                        Learn more
                                                    </Link>
                                                </div> */}
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
                                                <p className="text-gray-ad" style={{ color: "", fontSize: "1rem" }}>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the
                                                    industry's standard dummy text ever since the 1500s,
                                                </p>
                                                {/* <div
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
                                                </div> */}
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
                                                <div className="btn-wrapper animated">
                                                    <a href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" className="theme-btn-Home btn btn-effect-1 "
                                                        data-rel="lightcase"
                                                        style={{ marginTop: "5%" }}>
                                                        {/* <i
                                                            className="icon-play icon-home-play"
                                                        // style={{ color: "#27A3A3" }}
                                                        /> */}
                                                        Watch tutorial
                                                    </a>
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
            <StaffSelect />
        </>
    )
}
export default StaffServices