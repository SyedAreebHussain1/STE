import React, { useEffect } from "react";
import "./OtherHeader.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/2.png";
import mobilebanner from "../../assets/mobilebanner.png";
import { BsMouse } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineHome } from "react-icons/ai";
const OtherHeader = (props) => {
  const data = useSelector((state) => state.language.lang);
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <>
      <div
        className="otherheadtext"
        data-aos={data === "en" ? "fade-right" : "fade-left"}
        style={
          data == "en"
            ? {
                display: "flex",
                justifyContent: "flex-start",
                alignSelf: "flex-start",
                marginTop: isAndroid || iOS ? "25%" : "11%",
                marginLeft: "5%",
              }
            : {
                display: "flex",
                justifyContent: "flex-start",
                alignSelf: "flex-start",
                marginTop: isAndroid || iOS ? "25%" : "11%",
                marginRight: "5%",
                fontFamily: "JameelNoori",
                direction: "rtl",
              }
        }
      >
        <h1>
          {/* <span className="prjtxt">
          {props.name1} <span className="promotxt">{props.name2}</span>{" "}
        </span> */}
          {/* <span className="promotxt">PROMO</span> */}
          <span style={{ fontSize: "40px", color: "#022e31" }}>
            {props.name1} <span>{props.name2}</span>{" "}
          </span>
        </h1>
      </div>
      {data === "en" ? (
        <>
          <div
            data-aos="fade-right"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              marginLeft: "5%",
              marginBottom: "5%",
              // marginTop: "10%",
            }}
          >
            <AiOutlineHome style={{ fontSize: "25px", color: "#d69929" }} />{" "}
            <span style={{ fontSize: "18px", color: "grey" }}>
              &nbsp;{props.breadcumb1}
            </span>
            <span style={{ fontSize: "18px" }}>
              &nbsp;&nbsp;{props.breadcumb2}
            </span>
            <span style={{ fontSize: "18px" }}>
              &nbsp;&nbsp;{props.breadcumb3}
            </span>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default OtherHeader;
