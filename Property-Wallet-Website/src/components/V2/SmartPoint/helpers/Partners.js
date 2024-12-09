import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import img1 from "../../../images/bankpartner/alfalah.png";
import img2 from "../../../images/bankpartner/mcb.png";
import img3 from "../../../images/bankpartner/meezan.png";
import img4 from "../../../images/bankpartner/silk.png";
import img5 from "../../../images/bankpartner/tcs.png";
import img6 from "../../../images/bankpartner/al-baraka.png";
import img7 from "../../../images/bankpartner/alhabib.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "../helpers/smartPoint.css";

export const Partners = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  const items = [
    <div className="box-shadow partner-child">
      {" "}
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open("https://www.bankalfalah.com/", "_blank");
        }}
        width="100%"
        src={img1}
      />
    </div>,
    <div className="box-shadow partner-child">
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open("https://www.mcb.com.pk/", "_blank");
        }}
        width="100%"
        src={img2}
      />{" "}
    </div>,
    <div className="box-shadow partner-child">
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open("https://www.meezanbank.com/", "_blank");
        }}
        width="100%"
        src={img3}
      />
    </div>,
    // <img
    //   style={{ cursor: "pointer" }}
    //   onClick={() => {
    //     window.open("https://promag.co/", "_blank");
    //   }}
    //   width="100%"
    //   src={img6}
    // />,

    // <img  src={img7} />,
    <div className="box-shadow partner-child">
      {" "}
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open("https://www.silkbank.com.pk/", "_blank");  
        }}
        width="100%"
        src={img4}
      />
    </div>,
    <div className="box-shadow partner-child">
      {" "}
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open("https://www.tcsexpress.com/", "_blank");
        }}
        width="100%"
        src={img5}
      />
    </div>,
    // <img
    //   style={{ cursor: "pointer" }}
    //   onClick={() => {
    //     window.open("https://www.khansaheb.ae/", "_blank");
    //   }}
    //   width="100%"
    //   src={img7}
    // />,
    <div className="box-shadow partner-child">
      {" "}
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open("https://www.albaraka.com.pk/", "_blank");
        }}
        width="100%"
        src={img6}
      />
    </div>,
    <div className="box-shadow partner-child">
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open("https://www.bankalhabib.com/", "_blank");
        }}
        width="100%"
        src={img7}
      />
    </div>,
  ];
  return (
    <div className="Main-cont" data-aos="fade-up">
      <div className="carous">
        <AliceCarousel
          animationDuration={2000}
          items={items}
          responsive={responsive}
          autoPlay={true}
          infinite
          disableButtonsControls={true}
          disableDotsControls
        />
      </div>
    </div>
  );
};
