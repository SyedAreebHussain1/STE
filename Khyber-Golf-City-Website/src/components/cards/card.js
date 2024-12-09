import React, { useEffect, useState } from "react";
import "./card.scss";
import peshawar1 from "../images/HP1.jpg";
import peshawar2 from "../images/mob2.jpg";
import { AiFillInfoCircle } from "react-icons/ai";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
const Card = () => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  return (
    <>
      <div
        style={{
          marginTop: "2%",
          marginBottom: "2%",
          marginLeft: "2%",
          marginRight: "2%",
        }}
        className="pesharwarow"
      >
        <div className="aboutacolumn">
          <div>
            <div className="">
              <div style={{ width: "100%" }} className="">
                <article className="blog-card">
                  <div className="blog-card__background">
                    <div className="card__background--wrapper">
                      <div
                        className="card__background--main"
                        style={{
                          //   backgroundImage: "url(" + peshawar1 + ")",
                          width: "100%",
                          //   objectFit: "inherit",
                        }}
                        // style="background-image: url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg');"
                      >
                        <div className="card__background--layer"></div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-card__head">
                    <span className="date__box">
                      <h1
                        className={
                          data == "en" ? `heading-card-en` : `heading-card-ur`
                        }
                      >
                        <span
                          style={
                            data == "ur" || data == "ps"
                              ? {
                                  fontSize: "3.3vh",
                                  color: "#d69929",
                                  fontFamily: "JameelNoori",
                                }
                              : { fontSize: "3.3vh", color: "#d69929" }
                          }
                        >
                          {data == "ps" ? "د " : null}
                          {data == "ur"
                            ? t("hpp2")
                            : data == "ps"
                            ? t("hp2")
                            : t("hp1")}{" "}
                          <span
                            style={
                              data == "ur" || data == "ps"
                                ? {
                                    fontSize: "3.3vh",
                                    color: "#d69929",
                                    fontFamily: "JameelNoori",
                                  }
                                : { fontSize: "3.3vh", color: "#d69929" }
                            }
                          >
                            {/* {data == "ps" ? "د" : null}{" "} */}
                            {data == "ur" || data == "ps" ? t("hp1") : t("hp2")}
                          </span>{" "}
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
                            ? `u-text-small-card`
                            : `u-text-small-card-ur`
                        }
                      >
                        {t("hp3")}
                      </p>
                    </span>
                  </div>
                  <div className="blog-card__info">
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
                      {data == "ps" ? "د " : null}
                      {data == "ur"
                        ? t("hpp2")
                        : data == "ps"
                        ? t("hp2")
                        : t("hp1")}{" "}
                      {data == "ur" || data == "ps" ? t("hp1") : t("hp2")}
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
                    {/* <p className={data == "en" ? `subtext-en` : `subtext-ur`}>
                      {t("cardsubtext1")}
                    </p> */}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutacolumn">
          <div>
            <div className="">
              <div style={{ width: "100%" }} className="">
                <article className="blog-card">
                  <div className="blog-card__background">
                    <div className="card__background--wrapper">
                      <div
                        className="card__background--main2"
                        style={{
                          //   backgroundImage: "url(" + peshawar1 + ")",
                          width: "100%",
                          //   objectFit: "inherit",
                        }}
                        // style="background-image: url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg');"
                      >
                        <div className="card__background--layer"></div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-card__head">
                    <span className="date__box">
                      <h1
                        className={
                          data == "en" ? `heading-card-en` : `heading-card-ur`
                        }
                      >
                        <span
                          style={
                            data == "ur" || data == "ps"
                              ? {
                                  fontSize: "3.3vh",
                                  color: "#d69929",
                                  fontFamily: "JameelNoori",
                                }
                              : { fontSize: "3.3vh", color: "#d69929" }
                          }
                        >
                          {data == "ur" || data == "ps" ? t("hp4") : t("hp2")}{" "}
                          <span
                            style={
                              data == "ur" || data == "ps"
                                ? {
                                    fontSize: "3.3vh",
                                    color: "#d69929",
                                    fontFamily: "JameelNoori",
                                  }
                                : { fontSize: "3.3vh", color: "#d69929" }
                            }
                          >
                            {data == "ur" || data == "ps" ? t("hp2") : t("hp4")}
                          </span>{" "}
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
                            ? `u-text-small-card`
                            : `u-text-small-card-ur`
                        }
                      >
                        {t("hp5")}
                      </p>
                    </span>
                  </div>
                  <div className="blog-card__info">
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
                      {data == "ur" || data == "ps" ? t("hp4") : t("hp2")}{" "}
                      {data == "ur" || data == "ps" ? t("hp2") : t("hp4")}
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
                    {/* <p className={data == "en" ? `subtext-en` : `subtext-ur`}>
                      {t("cardsubtext2")}{" "}
                      {data == "en" ? (
                        <p style={{ color: "white" }}>fsdfdfsdfsdfsdfsdf</p>
                      ) : null}
                    </p> */}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
