import React, { useEffect, useState } from "react";
import "./amenititesCards.css";
import { useSelector, useDispatch } from "react-redux";
const AmenCards = (props) => {
  const data = useSelector((state) => state.language.lang);
  return (
    <div
      style={
        data == "en"
          ? { backgroundImage: `url(${props.img})`, fontFamily: "Poppins" }
          : { backgroundImage: `url(${props.img})`, fontFamily: "JameelNoori" }
      }
      className="amencard"
    >
      <div className="amencard-content">
        <h2 className="amencard-title">{props.name}</h2>
        <p
          style={data == "en" ? {} : { textAlign: "right" }}
          className="amencard-body"
        >
          {props.desc}{" "}
          {props.desc.includes("modern amenities") ||
          props.desc.includes("island resort") ||
          props.desc.includes("ready-made") ||
          props.desc.includes("franchise") ? (
            <span
              // unselectable="on"
              style={{
                color: "transparent",
                cursor: "context-menu",
                userSelect: "none",
              }}
            >
              fsdfdfdfsd
            </span>
          ) : null}
        </p>
        <a
          onClick={props.click}
          className={data == "ur" ? "amen-button-ur" : "amen-button"}
        >
          {props.btn}
        </a>
      </div>
    </div>
  );
};
export default AmenCards;
