import React, { useState, useEffect } from "react";
import "./Question.css";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillCaretUp,
  AiFillCaretDown,
} from "react-icons/ai";
import {
  IoLocationOutline,
  IoLocationSharp,
  IoLocation,
  AiOutlineUpCircle,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import img1 from "../images/bnkubl.png";
import img2 from "../images/bnkislami.png";
import img3 from "../images/bnkdubai.png";
import img5 from "../images/bnkblinq.png";
import img6 from "../images/promag.png";
import img7 from "../images/khan.png";
import img8 from "../images/jazz.png";
import sfex from "../images/sf (1).png";
import sfex1 from "../images/sf (2).png";
import sfex2 from "../images/sf (3).png";
import sfexur from "../images/urdu1.png";
import sfex1ur from "../images/urdu2.png";
import sfex2ur from "../images/urdu3.png";
import AliceCarousel from "react-alice-carousel";
const responsive = {
  0: { items: 3 },
  568: { items: 4 },
  1024: { items: 5 },
};
const items = [
  <img
    style={{ cursor: "pointer" }}
    onClick={() => {
      window.open("https://www.ubldigital.com/", "_blank");
    }}
    width="100%"
    src={img1}
  />,

  <img
    style={{ cursor: "pointer" }}
    onClick={() => {
      window.open("https://bankislami.com.pk/", "_blank");
    }}
    width="100%"
    src={img3}
  />,
  <img
    style={{ cursor: "pointer" }}
    onClick={() => {
      window.open("https://blinq.pk/", "_blank");
    }}
    width="100%"
    src={img5}
  />,
  // <img
  //   style={{ cursor: "pointer" }}
  //   onClick={() => {
  //     window.open("https://promag.co/", "_blank");
  //   }}
  //   width="100%"
  //   src={img6}
  // />,

  // <img  src={img7} />,
  <img
    style={{ cursor: "pointer" }}
    onClick={() => {
      window.open("https://bankislami.com.pk/", "_blank");
    }}
    width="100%"
    src={img2}
  />,
  <img
    style={{ cursor: "pointer" }}
    onClick={() => {
      window.open("https://jazz.com.pk/", "_blank");
    }}
    width="100%"
    src={img8}
  />,
  // <img
  //   style={{ cursor: "pointer" }}
  //   onClick={() => {
  //     window.open("https://www.khansaheb.ae/", "_blank");
  //   }}
  //   width="100%"
  //   src={img7}
  // />,
];
const Question = ({ title, answer }) => {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  const [showAnswer, setShowAnswer] = useState(true);
  const [showAnswer1, setShowAnswer1] = useState(false);

  const handleClick = () => {
    if (showAnswer == true) {
      setShowAnswer(false);
      setShowAnswer1(true);
    } else {
      setShowAnswer(true);
      setShowAnswer1(false);
    }
  };
  const handleClick2 = () => {
    if (showAnswer1 == true) {
      setShowAnswer1(false);
      setShowAnswer(true);
    } else {
      setShowAnswer1(true);
      setShowAnswer(false);
    }
  };

  return (
    <>
      <div style={{ marginLeft: "-0%" }} className="containerques question">
        <div
          className={
            data == "ur" || data == "ps"
              ? "question-title-ur"
              : "question-title"
          }
        >
          {/* {data == "ur" ? (<h2 style={{marginLeft:'50%'}}></h2>) : null} */}

          <h2
            style={
              data == "ur" || data == "ps"
                ? { fontWeight: "bold", fontSize: 20, marginRight: 14 }
                : { fontWeight: "bold", fontSize: "1.7rem" }
            }
          >
            {t("port4")}
          </h2>
          <button className="question-icons" onClick={handleClick}>
            {showAnswer ? (
              <AiFillCaretUp color="red" />
            ) : (
              <AiFillCaretDown color="#1f93ff" />
            )}
          </button>
        </div>
        <div className="question-answer">
          {showAnswer && (
            <p
              style={
                data == "ur" || data == "ps"
                  ? {
                      textAlign: "right",
                      fontSize: 18,
                      fontWeight: "400",
                      marginTop: "1%",
                      lineHeight: "3.5rem",
                    }
                  : {
                      fontWeight: "400",
                      textAlign: "left",
                      marginTop: "1%",
                      lineHeight: "3.2rem",
                    }
              }
              className="u-text-small"
            >
              {t("port42")} <br />
              {t("port43")} <br />
              {t("port44")} <br />
              {t("port45")} <br />
              {t("port46")} <br />
              {t("port47")}
              <br />
              {t("port48")}
              <br />
              {t("port49")}
            </p>
          )}
        </div>
      </div>
      {/* Q@ */}
      <div style={{ marginLeft: "-0%" }} className="containerques question">
        <div
          className={
            data == "ur" || data == "ps"
              ? "question-title-ur"
              : "question-title"
          }
        >
          <h2
            style={
              data == "ur" || data == "ps"
                ? { fontWeight: "bold", fontSize: 20, marginRight: 14 }
                : { fontWeight: "bold", fontSize: "1.7rem" }
            }
          >
            {" "}
            {t("port5")}
          </h2>
          <button className="question-icons" onClick={handleClick2}>
            {showAnswer1 ? (
              <AiFillCaretUp color="red" />
            ) : (
              <AiFillCaretDown color="#1f93ff" />
            )}
          </button>
        </div>
        <div className="question-answer">
          {showAnswer1 && (
            <>
              <p
                style={
                  data == "ur" || data == "ps"
                    ? {
                        textAlign: "right",
                        fontSize: 18,
                        fontWeight: "400",
                        marginTop: "1%",
                        lineHeight: "3.5rem",
                      }
                    : {
                        fontWeight: "400",
                        textAlign: "left",
                        marginTop: "1%",
                        lineHeight: "3.2rem",
                      }
                }
                className="u-text-small"
              >
                {t("bank")} <br />
              </p>
              <div style={{ padding: "25px" }}>
                <AliceCarousel
                  // style={{margin:20}}
                  animationDuration={1000}
                  items={items}
                  responsive={responsive}
                  autoPlay={true}
                  infinite
                  disableButtonsControls={true}
                  // disableButtonsControls={true}
                  disableDotsControls
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Question;
