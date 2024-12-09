import React, { useEffect } from "react"
import '../service_module.css'
import InventorySelectBox from './inventory-select-mobi'
import { Link } from "react-router-dom";

import inventeryImg from '../../../../components/images/inventeryImg.png'
import soldImg from '../../../../components/images/SoldImg.png'
import addImg from '../../../../components/images/addImg.png'
import detailsImg from '../../../../components/images/DetailsImg.png'
import filterImg from '../../../../components/images/FilterImg.png'



// icon
import inventeryMainIcon from '../../../../components/images/Services-icon/inventory/inventory.png'
import addInventeryIcon from '../../../../components/images/Services-icon/inventory/add.png'
import detailsInventeryIcon from '../../../../components/images/Services-icon/inventory/Details.png'
import filterInventeryIcon from '../../../../components/images/Services-icon/inventory/Filter.png'
import soldInventeryIcon from '../../../../components/images/Services-icon/inventory/sold.png'



const InventoryServices = (props) => {
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
                                    <img className="iconpng" src={inventeryMainIcon} alt="logo" />
                                    <p className="text-inven">Inventory Management</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_2"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={addInventeryIcon} alt="logo" />
                                    <p className="text-inven">Add Inventory</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_3"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={detailsInventeryIcon} alt="logo" />
                                    <p className="text-inven">Inventory Details</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_4"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={filterInventeryIcon} alt="logo" />
                                    <p className="text-inven">Inventory Filter</p>
                                </div>
                            </a>
                            <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_5"
                            >
                                <div className="flexs imgandp">
                                    <img className="iconpng" src={soldInventeryIcon} alt="logo" />
                                    <p className="text-inven">Sold Inventories</p>
                                </div>
                            </a>
                            {/* <a
                                className="anchorTag testClass"
                                data-bs-toggle="tab"
                                href="#liton_tab_3_6"
                            >
                                <div className="flexs imgandp">
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
                                        <img className="imgIphoneScreen marginTop-30px" src={inventeryImg} alt="img" style={{}} />
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
                                                        <h1>Inventory Management</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "grey", fontSize: "1rem" }}>
                                                    {/* Stay up-to-date with your available inventory to manage
                                                    your operations in real-time smoother than ever. */}
                                                    <ul className="text-gray-ad">
                                                        <li>Inventory Management is a solution that enables real estate agents to manage multiple projects and individual properties from anywhere using a Property wallet.</li>
                                                        <li>With inventory management, you can take use of the potential of data-driven decision making, which uses data to reveal insights into trends, emerging patterns, and more.  </li>
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
                                                    {/* <a
                                                            className="ltn__video-play-btn-home btn-effect-1"
                                                            href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                                                            data-rel="lightcase"
                                                            style={{ marginTop: "5%" }}
                                                        >
                                                            <i
                                                                className="icon-play icon-home-play"
                                                            // style={{ color: "#27A3A3" }}
                                                            />
                                                        </a> */}
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
                                        <img className="imgIphoneScreen  marginTop-30px" src={addImg} alt="img" />
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
                                                        <h1>Add Inventory</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            Using the add inventory option, add your project or individual properties to your Inventory.
                                                        </li>
                                                        <li>
                                                            Include all project facts, such as project location, facilities, features, and project images. You can also provide the project's NOC if you want.
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
                                                       
                                                        Watch tutorial  <span style={{
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
                                        <img className="imgIphoneScreen  marginTop-30px" src={detailsImg} alt="img" />
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
                                                        <h1>Inventory Details</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>
                                                            You can view the inventory data for projects and individual properties that you have already added.

                                                        </li>
                                                        <li>
                                                            You can discover the project details such as project images, description, feature, and NOC on inventory details, and you can also update all of these sections.
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
                        <div className="tab-pane fade" id="liton_tab_3_4">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen marginTop-30px" src={filterImg} alt="img" />
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
                                                        <h1>Inventory Filter</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>This feature allows you to identify the project or individual properties based on the user's requirements. The filter option will assist you in quickly finding your project.
                                                        </li>
                                                        <li>You may filter the user requirements to find the best project or individual property that meets the user's needs.
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
                        <div className="tab-pane fade" id="liton_tab_3_5">
                            <div className="ltn__product-tab-content-inner">
                                <div
                                    className="flext-text"
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    <div className=" imgDiv">
                                        <img className="imgIphoneScreen marginTop-30px" src={soldImg} alt="img" />
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
                                                        <h1>Sold Inventories</h1>
                                                    </div>
                                                </h3>
                                                <div style={{ color: "", fontSize: "1rem" }}>
                                                    <ul className="text-gray-ad">
                                                        <li>This feature displays which projects or individual properties have been sold. This feature allows you to easily check the sold inventory.
                                                        </li>
                                                        <li>After the deal is completed, the project inventory or individual properties are moved to the sold inventory.

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
                       
                    </div>
                </div>
            </div>
            <InventorySelectBox />
        </>
    )
}
export default InventoryServices