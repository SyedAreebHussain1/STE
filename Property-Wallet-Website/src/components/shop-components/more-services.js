import React, { useState, useEffect } from "react";
import BannerService from "../images/Service2.m4v"
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch, Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreServices = (props) => {
  const headingLarge = 'We have the perfect tools to help your property business grow!'
  const pera = 'Property Wallet is pleased to offer you a platform which will contribute to your property business success through fostering collaboration between agents.'

  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";

  let customClass = props.customClass ? props.customClass : "";
  let CustomClass = props.customclass ? props.customclass : "";


  return (
    <>
      <div className={" bg-white " + CustomClass} style={{ border: '', marginLeft: "1%", marginRight: '1%', marginTop: "" }}>
        <div className="row ltn__custom-gutter--- justify-content-center go-top bg-white" style={{ border: '', marginLeft: "1%", marginRight: '1%' }}
          // data-aos="flip-right"
          data-aos="fade-up"
        >
          <div className=" col-lg-6 col-sm-8 col-12"
          // data-aos="flip-right"

          >
            <div className="ltn__feature-item ">
              <div className="ltn__feature-info">
                {/* <img src={downloadImg} style={{ width: "100%" }} /> */}
                <div className='' style={{
                  margin: 0,
                  padding: 0,
                  boxSizing: 'border-box',
                  scrollBehavior: 'smooth',
                  width: '100%',
                }}>
                  <video style={iOS ? { width: '100%' } : { width: '100%' }} className='videoTag' playsInline autoPlay loop muted>
                    <source src={BannerService} type='video/mp4' />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-8 col-12">
            <div className="ltn__feature-item">
              <div className="ltn__feature-info">
                <h3>
                  <div
                    className="text_Quick" style={{ fontSize: "2rem" }}
                  // to="/service-details"
                  >
                    {headingLarge}
                    <div className="curve"></div>
                  </div>
                </h3>
                <p className="text-gray-ad" style={{ fontSize: "17px", marginTop: '5%' }}>
                  {pera}
                </p>
              </div>
              <div
                className="btn-wrapper animated"
              >
                <Link
                  to="/contact"
                  className="theme-btn-1 btn btn-effect-1 learnMore"
                >Contact Us
                </Link>
                <Link
                  // to="/how-to-use"
                  to="#"
                  className="theme-btn-1 btn btn-effect-1 learnMore"
                >How to use
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
 
  );
};

export default MoreServices;
