import React, { useEffect, useState } from "react";
import "./pscard.scss";
import peshawar1 from "../images/HP1.jpg";
import peshawar2 from "../images/mob2.jpg";
import { AiFillInfoCircle } from "react-icons/ai";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import psimg from "../images/new1.jpg";
import { useSelector, useDispatch } from "react-redux";

const Peshawarcard = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  return (
    <>
      <div className="main-div-ps">
        <div className="blog-card-ps">
          <div className="meta-ps">
            <div
              className="photo-ps"
              style={{
                backgroundImage: "url(" + psimg + ")",
                width: "100%",
                //   objectFit: "inherit",
              }}
              // style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
            ></div>
          </div>
          <div className="description-ps">
            <h1
              style={
                data == "en"
                  ? {}
                  : { textAlign: "right", fontFamily: "JameelNoori" }
              }
            >
              {t("hp6")}
            </h1>
            <h2
              style={
                data == "en"
                  ? {}
                  : { textAlign: "right", fontFamily: "JameelNoori" }
              }
            >
              {t("hp7")}
            </h2>
            <p
              className={data == "en" ? `p-desc-en` : `p-desc-ur`}
              style={data == "en" ? {} : { fontFamily: "JameelNoori" }}
            >
              {t("hp8")}{" "}
              {data == "ps" ? (
                <>
                  <br /> <br />
                </>
              ) : null}
            </p>
            <p className="read-more-ps">
              <a href="#"></a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Peshawarcard;
