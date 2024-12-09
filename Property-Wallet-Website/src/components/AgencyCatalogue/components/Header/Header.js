import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Button from "../Buttons/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useHistory, useParams } from "react-router-dom";
import BookAppointment from "../BookAppointment/BookAppointment";
import { useModal } from "./../../hooks/useModal";
import { scrollToTop } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { analyticClickApi } from "../../redux/api/Analytic";

const Header = ({ primaryColor, data, fontColor }) => {
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const refTextWeb = useRef(null);
  const refTextMb = useRef(null);
  const [visible, toggle] = useModal();
  let styleElement = document.styleSheets[0];

  useEffect(() => {
    if (getAgencyDetails?.data) {
      // Change favicon
      const faviconLink =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      faviconLink.type = "image/x-icon";
      faviconLink.rel = "shortcut icon";
      faviconLink.href = getAgencyDetails?.data?.data?.logo_Url;
      document.getElementsByTagName("head")[0].appendChild(faviconLink);
    }
  }, [getAgencyDetails?.data]);

  function onLinksOver(e) {
    if (fontColor === "000000") {
      e.target.style.backgroundColor = "#fff";
    } else {
      e.target.style.backgroundColor = "#000";
    }
  }
  function onLinksLeave(e) {
    e.target.style.backgroundColor = "transparent";
  }
  var newKeyframes = `
  @keyframes dynamicStroke {
    0% {
      fill: rgba(255, 0, 0, 0);
      stroke: #${data?.agencyDigitalCatalogue?.fontColor};
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 2;
    }
    70% {
      fill: rgba(255, 0, 0, 0);
      stroke: #${data?.agencyDigitalCatalogue?.fontColor};
    }
    80% {
      fill: rgba(255, 0, 0, 0);
      stroke: #${data?.agencyDigitalCatalogue?.fontColor};
      stroke-width: 3;
    }
    100% {
      fill: #${data?.agencyDigitalCatalogue?.fontColor};
      stroke: rgba(255, 0, 0, 0);
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
  }
`;

  useEffect(() => {
    styleElement.insertRule(newKeyframes, styleElement?.cssRules?.length);
    let textElement = document.querySelector(".text-name");
    let textElement1 = document.querySelector(".text-name1");
    textElement.style.animationName = "dynamicStroke";
    textElement1.style.animationName = "dynamicStroke";
  }, []);
  return (
    <>
      {visible && <BookAppointment visible={visible} toggle={toggle} />}
      <div
        className="h-[91px] "
        style={{
          backgroundColor: primaryColor ? `#${primaryColor}` : "#7C47FF",
        }}
      >
        <Container>
          <div className="hidden justify-between items-center h-full flex-wrap lg:flex cursor-pointer">
            <div
              onClick={() => {
                history.push(`/${params?.name}/${params.id}`);
                scrollToTop();
                analyticClickApi(dispatch, params?.id);
              }}
            >
              <svg className="svg-header" viewBox="0 0 1320 300">
                <text
                  ref={refTextWeb}
                  style={{
                    stroke: `#${data?.agencyDigitalCatalogue?.fontColor}`,
                  }}
                  className="text-name"
                  x="50%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                >
                  {data?.agencyName && data?.agencyName?.toUpperCase()}
                </text>
              </svg>
            </div>
            <div>
              <ul
                className="flex items-center gap-[30px] flex-wrap"
                style={{ color: "black" }}
              >
                <li
                  className="mt-0 font-semibold text-base transition-all hover:bg-white hover:text-[black] cursor-pointer p-3 rounded-lg"
                  onClick={() => {
                    history.push(`/${params?.name}/${params?.id}/inventories`);
                    analyticClickApi(dispatch, params?.id);
                  }}
                  style={fontColor ? { color: `#${fontColor}` } : {}}
                  onMouseOver={onLinksOver}
                  onMouseLeave={onLinksLeave}
                >
                  Inventories
                </li>
                <li
                  onClick={() => {
                    history.push(
                      `/${params?.name}/${params?.id}/meet-our-team`
                    );
                    analyticClickApi(dispatch, params?.id);
                  }}
                  style={fontColor ? { color: `#${fontColor}` } : {}}
                  className="mt-0 font-semibold text-base transition-all hover:bg-white hover:text-[black] cursor-pointer p-3 rounded-lg"
                  onMouseOver={onLinksOver}
                  onMouseLeave={onLinksLeave}
                >
                  Meet Our Team
                </li>
                <a href="#about">
                  <li
                    onClick={() => {
                      history.push(`/${params?.name}/${params?.id}`);
                      analyticClickApi(dispatch, params?.id);
                    }}
                    style={fontColor ? { color: `#${fontColor}` } : {}}
                    className="mt-0 font-semibold text-base transition-all hover:bg-white hover:text-[black] cursor-pointer p-3 rounded-lg"
                    onMouseOver={onLinksOver}
                    onMouseLeave={onLinksLeave}
                  >
                    About Us
                  </li>
                </a>
              </ul>
            </div>
            <div>
              <Button
                variant={"filled"}
                label="Book an Appointment"
                onClick={() => {
                  toggle();
                  analyticClickApi(dispatch, params?.id);
                }}
                className={"text-[black]"}
              />
            </div>
          </div>

          <div
            className="flex justify-between items-center h-full flex-wrap lg:hidden"
            style={{
              backgroundColor: primaryColor ? `#${primaryColor}` : "#7C47FF",
            }}
          >
            <div
              onClick={() => {
                history.push(`/${params?.name}/${params.id}`);
                scrollToTop();
              }}
            >
              {/* <img
                src={getAgencyDetails?.data?.data?.logo_Url}
                className="h-[80px]"
                alt="Logo"
              /> */}
              <svg className="svg-header" viewBox="0 0 1320 300">
                <text
                  ref={refTextMb}
                  style={{
                    stroke: `#${data?.agencyDigitalCatalogue?.fontColor}`,
                  }}
                  className="text-name1"
                  x="33%"
                  y="50%"
                  dy=".35em"
                  textAnchor="middle"
                >
                  {data?.agencyName && data?.agencyName?.toUpperCase()}
                </text>
              </svg>
            </div>
            {/* <div>
            <Button variant={"filled"} label="Book an Appointment" />
          </div> */}
            <div>
              <button onClick={() => setMobileMenuVisible(true)}>
                <GiHamburgerMenu color="#fff" size="28" />
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{
          transform: !mobileMenuVisible ? "translateX(-100%)" : "translateX(0)",
          backgroundColor: primaryColor ? `#${primaryColor}` : "#7C47FF",
        }}
        className=" fixed left-0 top-0 w-full h-full z-[99999] transition-all"
      >
        <ul className="flex flex-col items-center gap-[10px] flex-wrap justify-center h-full relative">
          <button
            onClick={() => setMobileMenuVisible(false)}
            className="absolute right-3 top-3"
          >
            <RxCross1 color="#fff" size="40" />
          </button>
          <li
            onClick={() => {
              setMobileMenuVisible(false);
              history.push(`/${params?.name}/${params?.id}/inventories`);
              analyticClickApi(dispatch, params?.id);
            }}
            style={fontColor ? { color: `#${fontColor}` } : {}}
            className="text-white font-semibold text-[24px] transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg"
            onMouseOver={onLinksOver}
            onMouseLeave={onLinksLeave}
          >
            Inventories
          </li>
          <li
            onClick={() => {
              setMobileMenuVisible(false);
              history.push(`/${params?.name}/${params?.id}/meet-our-team`);
              analyticClickApi(dispatch, params?.id);
            }}
            style={fontColor ? { color: `#${fontColor}` } : {}}
            className="text-white font-semibold text-[24px] transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg"
            onMouseOver={onLinksOver}
            onMouseLeave={onLinksLeave}
          >
            Meet Our Team
          </li>
          {/* <li className="text-white font-semibold text-[24px] transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg">
            Contact Us
          </li> */}

          <a href="#about">
            <li
              onClick={() => {
                setMobileMenuVisible(false);
                history.push(`/${params?.name}/${params?.id}`);
                analyticClickApi(dispatch, params?.id);
              }}
              style={fontColor ? { color: `#${fontColor}` } : {}}
              className="text-white font-semibold text-[24px] transition-all hover:bg-white hover:text-[#7C47FF] cursor-pointer p-3 rounded-lg"
              onMouseOver={onLinksOver}
              onMouseLeave={onLinksLeave}
            >
              About Us
            </li>
          </a>
          <li>
            <Button
              variant={"filled"}
              label="Book an Appointment"
              onClick={() => {
                setMobileMenuVisible(false);
                toggle();
                analyticClickApi(dispatch, params?.id);
              }}
              className={"text-[black]"}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
