import React, { useEffect, useState } from "react"
// import downloadImg from '../../images/downloadscreenshot.png'
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import BannerService from "../../images/crm-header.m4v"
// import CrmMainVideo from "../../images/CrmMainVideo.mp4"
// import CrmMainVideo from "../../images/CrmMainVideo.mp4"
import CrmMainVideo from "../../images/CrmMainVideo2.mp4"

import './sellwithus.css'



const SellWithUsHead = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let CustomClass = props.customClass ? props.customClass : "";
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      {/* <div className={"ltn__breadcrumb-area bg-white  bg-image " + customClass} style={{ border: '2px solid green', backgroundColor: '' }}>
                <div className="container" style={{ border: '1px solid green' }}>
                    <div className="row ltn__custom-gutter--- justify-content-center go-top bg-white" style={{ border: '1px solid black' }}>
                        <div className="col-lg-6 col-sm-8 col-12">
                            <div className="ltn__feature-item">
                                <div className="ltn__feature-info">
                                    <h3>
                                        <div
                                            className="text_Platform sans-serif border"
                                        // style={{fontSize:'2rem'}}
                                        // to="/service-details"
                                        >
                                            The All-in-One Platform Communities,
                                            Mobilize
                                            People & Measure Impact
                                            <div className="curve"></div>
                                        </div>
                                    </h3>
                                    <p style={{ color: "black", fontSize: "1rem" }}>
                                        Meet your customers needs with Flow. stop chum for the team
                                        while saving money on business operation.
                                    </p>
                                </div>
                                <div className="flexs border">
                                    <div
                                        style={{
                                            // display: "flex",
                                            // justifyContent: "center",
                                            // marginTop: '-20px'
                                        }}
                                        className="btn-wrapper animated"
                                    >
                                        <Link
                                            to=""
                                            className="theme-btn-1 btn btn-effect-1 getStartedNow bold">Schedule a call</Link>
                                    </div>
                                    <div
                                        style={{
                                            // display: "flex",
                                            // justifyContent: "center",
                                            // marginTop: '-20px'
                                            marginLeft: '1rem'
                                        }}
                                        className="btn-wrapper animated border"
                                    >
                                        <Link
                                            to=""
                                            className="theme-btn-1 btn btn-effect-1 learnMore"
                                        >
                                            {learnMore.toUpperCase()}
                                            Download PDF
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-12">
                            <div className="ltn__feature-item ">
                                <div className="ltn__feature-info" >
                                    <img src={downloadImg}
                                        // style={{ width: "540px" }}
                                        style={{ borderRadius: '25px', border: '2px solid red', padding: '10px', width: "540px" }} />
                                </div>
                            </div>
                        </div>

                     
                    </div>
                </div>
            </div> */}







      <div
        data-aos="fade-up" className={" bg-white " + CustomClass} style={{ marginLeft: "0%", marginRight: '0%'}}>
        <div className="row ltn__custom-gutter--- justify-content-center go-top bg-white" style={{ marginLeft: "0%", marginRight: '0%' }}
        >
          <div className=" col-lg-6 col-sm-12 col-12">
            <div className="ltn__feature-item ">
              <div className="ltn__feature-info">
                <div className='' style={{
                  margin: 0,
                  padding: 0,
                  boxSizing: 'border-box',
                  scrollBehavior: 'smooth',
                  width: '100%',
                }}>
                  <video style={iOS || isAndroid ? { width: '100%',outline: 'none' ,clipPath: 'inset(10px 10px)', padding:"5px" } : { width: '100%',outline: 'none' ,clipPath: 'inset(10px 10px)', padding:"5px"}} className='videoTag' playsInline autoPlay loop muted>
                    <source src={CrmMainVideo} type='video/mp4' />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 col-12">
            {/* col-lg-6 col-sm-10 col-12 */}
            <div className="ltn__feature-item">
              <div className="ltn__feature-info">
                {/* <h3> */}
                <h1
                  className="text_Quick"
                  style={{ color: "#053857", fontSize: "2rem" }}
                >
                  {props.heading}
                </h1>
                <p className="" style={{ fontSize: "1rem", marginTop: '5%', color: "black" }}>
                  {props.content}
                </p>
              </div>
              <div className="btn-wrapper animated"
              >
                <Link
                  to="#"
                  className="theme-btn-1 btn btn-effect-1 learnMores"
                >
                  Try It
                </Link>
                <Link
                  // to="/how-to-use"
                  to="#"
                  className="theme-btn-1 btn btn-effect-1 learnMores"
                >Watch Demo
                </Link>
              </div>
              {/* <div
                className="btn-wrapper animated"
              >
                <Link
                  to="/contact"
                  className="theme-btn-1-areeb btn btn-effect-1 learnMore"
                >Try It
                </Link>
                <Link
                  to="/how-to-use"
                  className="theme-btn-1-areeb btn btn-effect-1 learnMore"
                >Watch Demo
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SellWithUsHead