import React, { useEffect } from "react"
import '../service_module.css'
// import InventorySelectBox from './inventory-select-mobi'
import CommissionSelect from './commission-select-mobi'
import { Link } from "react-router-dom";


import mobile from '../../../../components/images/singlephone.png'

import commissionHomeImg from '../../../../components/images/CommissionHomeImg.png'
import commissionOnCash from '../../../../components/images/CommissionOnCash.png'
import commissionOnInstallment from '../../../../components/images/CommissionOnInstallment.png'
import commissionReceipts from '../../../../components/images/CommissionReceipts.png'
import commissionEdit from '../../../../components/images/CommissionEdit.png'


// icon
import commissionMainIcon from '../../../../components/images/Services-icon/Commission/commission.png'
import cashIcon from '../../../../components/images/Services-icon/Commission/cash.png'
import editIcon from '../../../../components/images/Services-icon/Commission/edit.png'
import receiptIcon from '../../../../components/images/Services-icon/Commission/Receipt.png'
import installmentIcon from '../../../../components/images/Services-icon/Commission/installment.png'



const CommissionServices = (props) => {
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

            <div className={"ltn__apartments-plan-area pt-115--- pb-70 marginTop-12" + CustomClass}  data-aos="fade-up">
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
                                    <img className="iconpng" src={commissionMainIcon} alt="logo" />
                                    <p className="text-inven">Commission Management</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_2"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={cashIcon} alt="logo" />
                                    <p className="text-inven">Commission on Cash</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_3"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={installmentIcon} alt="logo" />
                                    <p className="text-inven">Commission on Installment</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_4"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={receiptIcon} alt="logo" />
                                    <p className="text-inven">Commission Receipt </p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_5"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={editIcon} alt="logo" />
                                    <p className="text-inven">Edit Commission</p>
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
                                        <img className="imgIphoneScreen marginTop-30px" src={commissionHomeImg} alt="img" style={{ marginTop: '' }} />
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
                                                        <h1>Commission Management</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Keep records of the commissions paid to the agents as well as the property they sold. This can also let you know the amount of money each employee brings in.
                                                        </li>
                                                        <li>
                                                            Set manager's and staff's commission rates according to each category's sales.
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
                                        <img className="imgIphoneScreen  marginTop-30px" src={commissionOnCash} alt="img" />
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
                                                        <h1>Commission on Cash</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Our app's cash commision option allows you to establish agency, manager, and employee commision on a one-time payment basis.
                                                        </li>
                                                        <li>
                                                            Using the property wallet app, you can keep track of the cash commision for every project or individual property.
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
                        <div className="tab-pane fade" id="liton_tab_3_3">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen  marginTop-30px" src={commissionOnInstallment} alt="img" />
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
                                                        <h1>Commission on Installment</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Our app's cash commission option allows you to establish agency, manager, and employee commissions on a one-time payment basis.
                                                        </li>
                                                        <li>
                                                            Using the property wallet app, you can keep track of the cash commissions for every project or individual property.

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
                                        <img className="imgIphoneScreen marginTop-30px" src={commissionReceipts} alt="img" />
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
                                                        <h1>Commission Receipt</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            When a deal is finalized in Property Wallet, the system will generate a commission receipt automatically.
                                                        </li>
                                                        <li>
                                                            The commission receipt contains commission information such as the project name that was sold, the commission amount, and the payment status.
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
                                        <img className="imgIphoneScreen marginTop-30px" src={commissionEdit} alt="img" />
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
                                                        <h1>Edit Commission </h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            In Commission management agency owners can change the commission for every project or individual property.                                                        </li>
                                                        <li>
                                                            Admins have the right to edit commissions for their staff and managers.                                                        </li>
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
                                                    {/* <Link
                                                        to="/salestarget"
                                                        className="theme-btn-1 btn btnLearnmore btn-effect-1"
                                                    >
                                                        Learn more
                                                    </Link> */}
                                                    <div className="btn-wrapper animated">
                                                        <a to="#" className="theme-btn-Home btn">
                                                            Watch tutorial
                                                        </a>
                                                        <a
                                                            className="ltn__video-play-btn-home btn-effect-1"
                                                            // href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                                                            data-rel="lightcase"
                                                            style={{ marginTop: "5%" }}
                                                        >
                                                            <i
                                                                className="icon-play icon-home-play"
                                                            // style={{ color: "#27A3A3" }}
                                                            />
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
            </div>
            <CommissionSelect />
        </>
    )
}
export default CommissionServices