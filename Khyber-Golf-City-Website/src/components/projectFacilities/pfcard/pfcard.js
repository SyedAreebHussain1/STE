import React, { useEffect, useState } from "react";
import "./pfcard.scss";

import { AiFillInfoCircle } from "react-icons/ai";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
const Pfcard = (props) => {
  const { heading, description, bgcardclass } = props;
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  return (
    <>
      <div className="">
        <div style={{ width: "100%" }} className="">
          <article className="pfblog-card">
            <div className="pfblog-card__background">
              <div className="pfcard__background--wrapper">
                <div
                  className={bgcardclass}
                  style={{
                    //   backgroundImage: "url(" + peshawar1 + ")",
                    width: "100%",
                    //   objectFit: "inherit",
                  }}
                  // style="background-image: url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg');"
                >
                  <div className="pfcard__background--layer"></div>
                </div>
              </div>
            </div>
            <div className="pfblog-card__head">
              <span className="pfdate__box">
                <h1
                  className={
                    data == "en" ? `pfheading-card-en` : `pfheading-card-ur`
                  }
                >
                  <span
                    style={
                      data == "ur" || data == "ps"
                        ? {
                            fontSize: "3.5vh",
                            color: "#d69929",
                            fontFamily: "JameelNoori",
                            // alignItems:'center'
                          }
                        : { fontSize: "3.4vh", color: "#d69929" }
                    }
                  >
                    {heading}
                  </span>
                </h1>
                {/* hr */}

                <p
                  style={
                    data == "ps" || data == "ur"
                      ? { fontFamily: "JameelNoori" }
                      : {}
                  }
                  className={
                    data == "en"
                      ? `pfu-text-small-card`
                      : `pfu-text-small-card-ur`
                  }
                >
                  {description}
                </p>
              </span>
            </div>
            <div className="pfblog-card__info">
              <h2
                style={
                  data == "ps" || data == "ur"
                    ? {
                        justifyContent: "center",
                        textAlign: "center",
                        fontFamily: "JameelNoori",
                        // color: "#2D3748",
                      }
                    : { justifyContent: "center", textAlign: "center" }
                }
              >
                {heading}
              </h2>
              <hr
                style={{
                  maxWidth: "100%",
                  marginLeft: "28%",
                  marginRight: "30%",
                  marginTop: "1%",
                  fontWeight: "bold",
                  // color: "white",
                  backgroundColor: "black",
                  height: 0,
                }}
              />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default Pfcard;
