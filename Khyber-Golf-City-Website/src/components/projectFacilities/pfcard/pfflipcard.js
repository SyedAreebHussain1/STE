import React, { useEffect, useState } from "react";
import "./pfflipcard.css";

import { AiFillInfoCircle } from "react-icons/ai";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

const Pfflipcard = (props) => {
  const { heading, description, bgcardclass, img } = props;
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);

  return (
    <>
      <div className="pfflipcard">
        <div className="pfflipimage">
          <img src={img} />
          <div style={{ display: "block" }} className="pfflipcard-heading">
            <span style={{ fontSize: "16px" }}>{heading}</span>
          </div>
        </div>
        <div className="pfflipdetails">
          <div className="pfflipcenter">
            <h1 style={{ color: "black" }}>{heading}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pfflipcard;
