import React, { useEffect, useState } from "react";
import "./luxurycars.scss";
import { useSelector, useDispatch } from "react-redux";
import lx1 from "../images/lx1.jpg";
import lx2 from "../images/lx2.jpg";

import { useTranslation } from "react-i18next";
const LuxuryCard = (props) => {
  const data = useSelector((state) => state.language.lang);
  // const data = "en";
  const { i18n, t } = useTranslation();
  return (
    <>
      <div style={{ marginTop: "3%" }} className="luxury-main-div-ps">
        <div className="luxury-blog-card-ps">
          <div className="luxury-meta-ps">
            <div
              className="luxury-photo-ps"
              style={{
                backgroundImage: "url(" + lx1 + ")",
                width: "100%",
                //   objectFit: "inherit",
              }}
              // style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
            ></div>
          </div>
          <div className="luxury-description-ps">
            <p
              className={data == "en" ? `luxury-p-desc-en` : `luxury-p-desc-ur`}
              style={data == "en" ? {} : { fontFamily: "JameelNoori" }}
            >
              {t("lux3")}{" "}
              {data == "ps" ? (
                <>
                  <br /> <br />
                </>
              ) : null}
            </p>
            <p className="luxury-read-more-ps">
              <a href="#"></a>
            </p>
          </div>
        </div>
      </div>

      {/* <div style={{ marginTop: "3%" }} className="luxury-main-div-ps">
        <div className="luxury-blog-card-ps">
          <div className="luxury-description-ps">
            <p
              className={data == "en" ? `luxury-p-desc-en` : `luxury-p-desc-ur`}
              style={
                data == "en"
                  ? {}
                  : { fontFamily: "JameelNoori", direction: "rtl" }
              }
            >
              {t("lux4")}{" "}
              {data == "ps" ? (
                <>
                  <br /> <br />
                </>
              ) : null}
            </p>
            <p className="luxury-read-more-ps">
              <a href="#"></a>
            </p>
          </div>
          <div className="luxury-meta-ps">
            <div
              className="luxury-photo-ps"
              style={{
                backgroundImage: "url(" + lx2 + ")",
                width: "100%",
                //   objectFit: "inherit",
              }}
              // style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"
            ></div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default LuxuryCard;
