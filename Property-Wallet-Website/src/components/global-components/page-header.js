import React, { Component,useEffect } from "react";
import { Link } from "react-router-dom";
import downloadImg from "../images/downloadscreenshot.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Page_header = (props) => {

    let HeaderTitle = props.headertitle;
    let content = props.content;

    // let publicUrl = process.env.PUBLIC_URL + "/";
    let Subheader = props.subheader ? props.subheader : HeaderTitle;
    let CustomClass = props.customclass ? props.customclass : "";
    let Img = props.Img ? props.Img : "14.jpg";

    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = props.customClass ? props.customClass : "";
    useEffect(() => {
      AOS.init({
          duration: 1000,
      });
  }, []);
    return (
      <div
        className={"ltn__breadcrumb-area bg-white  bg-image " + customClass} 
        data-aos="fade-up"
        >
        <div
          className={
            "ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " +
            CustomClass
          }

          data-bs-bg={publicUrl + "assets/img/bg/14.jpg"}
        >
          <div className="margin-top-fix container">
            <div style={{ marginLeft: "2%", marginRight: "2%" }} className="row">
              <div className="col-lg-6">
                <div className="ltn__breadcrumb-inner">
                  <h1 className="page-title">{HeaderTitle}</h1>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">
                          <span className="ltn__secondary-color">
                            <i className="fas fa-home" />
                          </span>{" "}
                          Home
                        </Link>
                      </li>
                      <li>{Subheader}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 page-header-para">
                <p style={{ color: "#27A3A3", fontSize: "20px" }}>{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      // //
      // <div
      // className={
      //   "ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " +
      //   CustomClass
      // }

      // data-bs-bg={publicUrl+"assets/img/bg/14.jpg"}
      // >
      //   <div className="margin-top-fix container">
      //     <div style={{ marginLeft: "2%", marginRight: "2%" }} className="row">
      //       <div className="col-lg-6">
      //         <div className="ltn__breadcrumb-inner">
      //           <h1 className="page-title">{HeaderTitle}</h1>
      //           <div className="ltn__breadcrumb-list">
      //             <ul>
      //               <li>
      //                 <Link to="/">
      //                   <span className="ltn__secondary-color">
      //                     <i className="fas fa-home" />
      //                   </span>{" "}
      //                   Home
      //                 </Link>
      //               </li>
      //               <li>{Subheader}</li>
      //             </ul>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="col-lg-6 page-header-para">
      //         <p style={{ color: "#27A3A3", fontSize: "20px" }}>{content}</p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
}

export default Page_header;
