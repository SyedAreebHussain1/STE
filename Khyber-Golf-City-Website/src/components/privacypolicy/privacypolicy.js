import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import OtherHeader from "../OtherHeader/OtherHeader";
import { AiFillInfoCircle } from "react-icons/ai";
import img1 from "../images/kgc1.jpg";
import img2 from "../images/Kgc2.jpg";
import img3 from "../images/Kgc3.png";
import AOS from "aos";
import img7 from "../images/kgclayout.jpg";
import img8 from "../images/1280-gate.jpg";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import NavbarV2 from "../navbar/NavbarV2";
const Privacy = (props) => {
  const [title, setTitle] = useState("Khyber Golf City");

  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (props.location.pathname == "/privacy") {
      setTitle("Privacy Policy | Khyber Golf City")
    } else {
      setTitle("Khyber Golf City | Modern Lifestyle Housing Project")
    }
  }, []);
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      {/* <header className="header-other-bg">
        <Navbar />
        <OtherHeader name1={"Privacy"} name2={"Policy"} />
      </header> */}
      {/* <Navbar sticky="*" /> */}
      <NavbarV2 />
      <OtherHeader
        name1={"Privacy"}
        name2={"Policy"}
        breadcumb1="Home"
        breadcumb2=">"
        breadcumb3="Privacy Policy"
      />
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Privacy
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              Policy
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          Following is our privacy policy which will govern the way in which we
          process any personal information provided to us by you. If there are
          any changes to this privacy policy, you will be duly notified. The
          kind of information we collect is as follows:
          <br />
          <br />
          <ul style={{ marginLeft: "3%" }}>
            <li>Name</li>
            <li>Email</li>
            <li>Phone number</li>
            <li>CNIC</li>
          </ul>
          <br />
          You can visit our home page, view the investments, and access other
          pages without providing your personal information. However, there are
          certain behavioral data that still might be recorded by cookies we use
          (more info provided below)
        </p>
      </div>

      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Data
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              Collection
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          In the majority of the cases, the data we will collect will be
          provided by you via Khyber Golf City. However, your personal
          information may also be collected through third parties or affiliates
          with whom we have arrangements for the collection of information
          through their tools. In those cases, this privacy policy will still
          apply.
        </p>
      </div>

      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Purpose of data
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              Collection
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          The main purpose of us collecting your data when you sign up is to
          help us process any transaction requested by you and to conduct
          customer and market research to provide tailored offers and marketing
          information to you via different mediums.
        </p>
      </div>
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Data Protection and Access to
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              information
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          Measures and security policies have been put in place to protect your
          personal information on our servers and keep it safe from unauthorized
          access, destruction, or loss.
          <br />
          Access to information will be strictly limited to ourselves. We might
          provide your information to our business partners only if it is needed
          to complete your transaction.
        </p>
      </div>
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Disclosure of
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              information
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          Your personal information will not be disclosed to any third party
          unless the law requires it. Khyber Golf City reserves the right to
          disclose any non-personal information collected via the cookies,
          traffic data, or that shared by you for the purpose so customer
          behavior and market research.
          <br />
          In the following events, your data might be disclosed
          <br />
          <br />
          <ul style={{ marginLeft: "3%", listStyleType: "number" }}>
            <li>As a part of a merger</li>
            <li>Required by Law</li>
            <li>
              To our business partners to help complete your requested
              transactions
            </li>
          </ul>
          <br />
          In cases numbered 1 and 3, this privacy policy will still be
          applicable and for case number 2, that process cannot be affected by
          Khyber Golf City.
        </p>
      </div>
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Cookies
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              information
            </span>{" "} */}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          Our application may track your mobile IP address and save information
          on your system in the form of cookies. Cookies allow us to improve
          your website experience, bring consistency to your visits and offer
          you a personalized experience by tracking your behavior via these
          cookies. The information provided to us by you may be linked with the
          information we get through cookies.
          <br />
          You always have the option of opting out of providing us with cookies
          by changing your mobile settings but that may partially or fully limit
          the functionality of some of the areas of the application.
        </p>
      </div>
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Copyright
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              information
            </span>{" "} */}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          All the content and this website are copyright of ©2022, Khyber Golf
          City, All Rights Reserved.
        </p>
      </div>
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Device
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              Information
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          We collect information from your device in some cases. The information
          will be utilized for the provision of better service and to prevent
          fraudulent acts. Additionally, such information will not include that
          which will identify the individual user.
        </p>
      </div>
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Location
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              Information
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          Khyber Golf City may use location information transmitted from users'
          mobile phones. We only use this information within the scope necessary
          for the designated service.
        </p>
      </div>
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Disclaimer
            {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              Information
            </span>{" "} */}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          <ul style={{ marginLeft: "3%" }}>
            <li>
              We do not claim the content and information on this application to
              be accurate, complete, or current, However, we try to make sure
              that all the content is true to the best of our ability. Khyber
              Golf City does not accept any liability for the accuracy of this
              application at any given point in time.
            </li>
            <li>
              Khyber Golf City makes every effort to ensure that the application
              infrastructure is error and virus free. However, we do not provide
              assurance that any material you download from the application or
              that the application will be virus-free. Hence you are encouraged
              to take all necessary actions to safeguard your device from
              viruses.
            </li>
            <li>
              Neither Khyber Golf City nor any of its agents, employees and
              Partners shall be liable to you or any other party for any claim,
              loss, demand, or damages whatsoever (whether such claims, loss,
              demands, or damages were foreseeable, known or otherwise) arising
              out of or in connection with the use of the Mobile Application or
              information, content or materials included on the Mobile
              Application.
            </li>
          </ul>
        </p>
      </div>
      <div
        data-aos="fade-up"
        style={{ marginLeft: "5%", marginRight: "5%", margin: "3%" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
            Contact
            <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
              {" "}
              Us
            </span>{" "}
          </span>
        </h1>
        {/* hr */}
        <div
          style={{ marginLeft: "10%", marginRight: "10%" }}
          className="hr-theme-slash-2"
        >
          <div className="hr-line"></div>
          <div className="hr-icon">
            <AiFillInfoCircle color="#d69929" size={20} />
          </div>
          <div className="hr-line"></div>
        </div>
        {/* hr */}
        <p
          style={
            data == "en"
              ? {
                  textAlign: "left",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontWeight: "400",
                }
              : {
                  textAlign: "right",
                  marginLeft: "1%",
                  marginRight: "1%",
                  marginTop: "2%",
                  fontSize: 20,
                }
          }
          className="u-text-small"
        >
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us. <br />
          Contact Information: 0304-111-5427 (KGCP)
          <br />
          Email: [info@khybergolfcity.com] <br /> <br />
          If you sign up on our application or visit our website, you have
          agreed to all the terms and conditions mentioned in our privacy
          policy. If you do not agree, it is important that you leave the
          application now.
        </p>
      </div>
    </>
  );
};
export default Privacy;
