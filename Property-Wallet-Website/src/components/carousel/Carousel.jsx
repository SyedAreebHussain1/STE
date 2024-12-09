import React from "react";
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import img from "../images/transparent.png";
// 
import imgV2 from "../images/transparentV2.png"
// 

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    // console.log("INDEX", index);
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);

  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);
  const MINUTE_MS = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide(goToSlide + 1);
    }, MINUTE_MS);

    return () => {
      // setGoToSlide(goToSlide);
      clearInterval(interval);
    }; // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [goToSlide]);
  const handleNext = () => {
    setGoToSlide(goToSlide + 1);
  };
  const handlePrev = () => {
    setGoToSlide(goToSlide - 1);
  };
  return (
    // zaman
    <div
      className="bottom_carousel"
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        position: "relative",
        marginTop: "10%",
        // backgroundColor: "blue",
      }}
    >
      {" "}
      <div
        className="mobile-transparent"
        style={{
          width: "auto",
          marginLeft: "16.8%",
          // display: "block",
          //   height: "400px",
          //   backgroundColor: "red",
          position: "absolute",
          zIndex: 999,
          //   borderColor: "black",
          // overflow: "hidden",
          // margin: "auto",
          //   borderStyle: "solid",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <img src={img} style={{ width: "auto", height: "32rem" }} />
      </div>
      <div
        className="icon_left"
        style={{
          position: "absolute",
          display: "none",
          // backgroundColor: "red",
          // width: "auto",
          zIndex: 999,
          top: "40%",
          bottom: 0,
          left: -110,
          right: 0,
        }}
      >
        <i
          onClick={() => {
            handlePrev();
          }}
          className="fa-solid fa-arrow-left"
        />
      </div>
      <div
        className="icon_right"
        style={{
          position: "absolute",
          // width: "auto",
          display: "none",
          top: "40%",
          zIndex: 999,
          bottom: 0,
          left: 195,
          right: 0,
        }}
      >
        <i
          onClick={() => {
            handleNext();
          }}
          className="fa-solid fa-arrow-right"
        />
      </div>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
    // zamanend


    // areeb
    // <div
    //   className="bottom_carousel"
    //   style={{
    //     width: props.width,
    //     height: props.height,
    //     margin: props.margin,
    //     position: "relative",
    //     marginTop: "10%",
    //     // border:'2px solid green',
    //     // backgroundColor: "blue",
    //   }}
    // >
    //   {" "}
    //   <div
    //     className="mobile-transparent"
    //     style={{
    //       width: "auto",
    //       marginLeft: "16.8%",
    //       // display: "block",
    //       //   height: "400px",
    //       //   backgroundColor: "red",
    //       position: "absolute",
    //       zIndex: 999,
    //       //   borderColor: "black",
    //       // overflow: "hidden",
    //       // margin: "auto",
    //       //   borderStyle: "solid",
    //       top: 0,
    //       bottom: 0,
    //       left: 0,
    //       right: 0,
    //       // border:'2px solid red'
    //     }}
    //   >
    //     <img src={imgV2} style={{
    //       // width: "auto", height: "36.9rem",
    //       width: "auto", height: "36.6rem",
    //       // marginLeft:'-6%',marginTop:'-12%'
    //     }} />
    //   </div>
    //   <div
    //     className="icon_left"
    //     style={{
    //       position: "absolute",
    //       // display: "none",
    //       // backgroundColor: "red",
    //       // width: "auto",
    //       zIndex: 999,
    //       top: "40%",
    //       bottom: 0,
    //       // left: -95,
    //       left: -235,
    //       right: 0,
    //     }}
    //   >
    //     <i
    //       onClick={() => {
    //         handlePrev();
    //       }}
    //       className="fa-solid fa-arrow-left"
    //       />
    //   </div>
    //   <div
    //     className="icon_right"
    //     style={{
    //       position: "absolute",
    //       // width: "auto",
    //       // display: "none",
    //       top: "40%",
    //       zIndex: 999,
    //       bottom: 0,
    //       // left: 190,
    //       left: 700,
    //       right: 0,
    //     }}
    //   >
    //     <i
    //       onClick={() => {
    //         handleNext();
    //       }}
    //       className="fa-solid fa-arrow-right"
    //     />
    //   </div>
    //   <Carousel
    //     slides={cards}
    //     goToSlide={goToSlide}
    //     offsetRadius={offsetRadius}
    //     showNavigation={showArrows}
    //     animationConfig={config.gentle}
    //   />
    // </div>
    // areebend
  );
}
