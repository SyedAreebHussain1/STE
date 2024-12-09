import React, { useEffect, useState } from "react";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./Slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./img/Banner1.jpg";
import img2 from "./img/Banner2.jpg";
import img5 from "./img/Banner3.jpg";
import img3 from "./img/kgc.jpg";
import img4 from "./img/mobile.jpg";

const Slider = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);
  return (
    <>
      <AwesomeSlider
        activityColor="white"
        play={true}
        interval={1000}
        bullets={false}
        fillParent={true}
        animation="openAnimation"
      >
        <div style={{ width: "100%" }}>
          <div className="carousel-item-container">
            <img
              className="imgeop"
              // style={{ width: "100%" }}
              src={img1}
              alt="car"
            />
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="carousel-sub-item"
            >
              <h1
                className="main-heading"
                style={{
                  color: "white",
                  // fontSize: "60px",
                  textAlign: "center",
                  fontFamily: "Georgia",
                }}
              >
                GATEWAY TO A NEW FUTURE
              </h1>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="btn-main-box"
            >
              <a className="default-btn">Forms will be available soon</a>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="carousel-item-container">
            <img
              className="imgeop"
              // style={{ width: "100%" }}
              src={img2}
              alt="car"
            />
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="carousel-sub-item"
            >
              <h1
                className="main-heading"
                style={{
                  color: "white",
                  // fontSize: "60px",
                  textAlign: "center",
                  fontFamily: "Georgia",
                }}
              >
                GATEWAY TO A NEW FUTURE
              </h1>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="btn-main-box"
            >
              <a className="default-btn">Forms will be available soon</a>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="carousel-item-container">
            <img
              className="imgeop"
              // style={{ width: "100%" }}
              src={img5}
              alt="car"
            />
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="carousel-sub-item"
            >
              <h1
                className="main-heading"
                style={{
                  color: "white",
                  // fontSize: "60px",
                  textAlign: "center",
                  fontFamily: "Georgia",
                }}
              >
                GATEWAY TO A NEW FUTURE
              </h1>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="btn-main-box"
            >
              <a className="default-btn">Forms will be available soon</a>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </>
  );
};
export default Slider;
