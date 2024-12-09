import React, { useEffect, useState } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import "./Question.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../UI/Button/Button";
import phoneHeader from "../../components/images/Form.jpg";
import banken from "./FormImages/BANKFORMENGLISH.jpg";
import bankur from "./FormImages/BANKFORMURDU.jpg";
import banps from "./FormImages/BANKFORMPASHTO.jpg";
import onlineen from "./FormImages/BANKFORMENGLISH.jpg";
import onlineur from "./FormImages/BANKFORMURDU.jpg";
import onlineps from "./FormImages/BANKFORMPASHTO.jpg";
import restaurant from "../images/locationicon.png";
import shopping from "../images/bank.png";
import community from "../images/specialicon.png";
import gym from "../images/online.png";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import img4 from "../images/td1.jpg";
import img5 from "../images/td2.jpg";
import img6 from "../images/td3.jpg";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link, withRouter, NavLink, useHistory } from "react-router-dom";
// import FocusLock from "react-focus-lock";
const Faq = () => {
  const { i18n, t } = useTranslation();
  const [model, setModal] = useState(false);
  const [model1, setModal1] = useState(false);
  const myRef = React.useRef(null);
  const history = useHistory();
  const data = useSelector((state) => state.language.lang);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(false);
  };
  const closeModal1 = () => {
    setModal1(false);
  };
  const openModal1 = () => {
    setModal1(false);
  };
  return (
    <div
      className="faqbot"
      data-aos="fade-up"
      style={{
        width: "100%",
        // marginLeft: "8%",
        // marginRight: "8%",
        // margin: "2%",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "2%" }}>
        <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
          {t("avail1")}{" "}
          {/* <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
          {t('port2')}
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
      <div
        style={{
          marginTop: "1.2%",

          marginLeft: "29%",
          marginRight: "25%",
          textAlign: "center",
        }}
        className="pesharwarow availform"
      >
        <div style={{ margin: "1%" }} className="pesharwarcolumnss tooltip">
          <div
            onClick={openModal}
            className="baks"
            style={{
              backgroundColor: "#042023",
              fontSize: "12px",
              padding: "60px",
              color: "white",
              borderRadius: 8,
            }}
          >
            <img
              style={{ margin: "10px" }}
              src={shopping}
              alt="res"
              width="55%"
            />
            <h2>{t("avail3")}</h2>
          </div>
          <span
            style={{ fontSize: "12px", cursor: "pointer" }}
            className="tooltiptext"
          >
            {t("avail5")}
          </span>
        </div>
        <div style={{ margin: "1%" }} className="pesharwarcolumnss tooltip2">
          <div
            onClick={openModal1}
            className="baks"
            style={{
              backgroundColor: "#042023",
              fontSize: "12px",
              padding: "60px",
              color: "white",
              borderRadius: 8,
            }}
          >
            <img style={{ margin: "10px" }} src={gym} alt="res" width="55%" />
            <h2>{t("avail4")}</h2>
            <span style={{ fontSize: "12px" }} className="tooltiptext1">
              {t("avail6")}
            </span>
          </div>
        </div>
      </div>
      {/* <div ref={myRef} /> */}
      <Modal center open={model} onClose={closeModal}>
        <h2
          style={
            data == "en"
              ? { fontSize: 20, color: "#2D3748" }
              : {
                  fontSize: 20,
                  color: "#2D3748",
                  textAlign: "right",
                  marginRight: "5%",
                }
          }
        >
          {t("port3")}
        </h2>
        <img
          // className="imgreponsive"
          style={{ objectFit: "contain", marginTop: "2%" }}
          // style={{ marginRight: "2%", width: "40%", height: "auto" }}
          // style={{ marginTop: "-50px" }}
          src={data == "en" ? banken : data == "ps" ? banps : bankur}
          alt="phone"
          width="100%"
        />
      </Modal>
      <Modal center open={model1} onClose={closeModal1}>
        <h2
          style={
            data == "en"
              ? { fontSize: 20, color: "#2D3748" }
              : {
                  fontSize: 20,
                  color: "#2D3748",
                  textAlign: "right",
                  marginRight: "5%",
                }
          }
        >
          {t("port3")}
        </h2>
        <img
          // className="imgreponsive"
          style={{ objectFit: "contain", marginTop: "2%" }}
          // style={{ marginRight: "2%", width: "40%", height: "auto" }}
          // style={{ marginTop: "-50px" }}
          src={data == "en" ? onlineen : data == "ps" ? onlineps : onlineur}
          alt="phone"
          width="100%"
        />
      </Modal>
      <div
        // onClick={() => history.push("/furtherdetails")}
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "1.6%",
          marginBottom: "2%",
        }}
      >
        <Button text={t("avail2")} btnClass={"btn-light"} />
      </div>

      {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'1.5%',flexWrap:'wrap', marginTop:'0.5%', marginLeft:'25%',marginRight:'25%'}}>
            <div style={{backgroundColor:'red',padding:'60px',color:'white'}} >
              <h2>Bank</h2>
            </div>
            <div style={{backgroundColor:'red',padding:'60px',color:'white'}} >
              <h2>Online</h2>
            </div>
          </div> */}
      {/* <div
        className="online-portal"
        style={{
          // marginTop:'-1%',
          // backgroundColor: "blue",
          display: "flex",
          margin: "2%",
          padding: "2%",
          flexDirection: "row",
          justifyContent: "space-around",
          // flexWrap: "wrap",
        }}
      >
        {data == "ur" ? (
          <>
          <img
          className="imgreponsive"
          style={{ objectFit: 'contain',marginTop:'2%',marginLeft:'2.8%' }}
          // style={{ marginRight: "2%", width: "40%", height: "auto" }}
          // style={{ marginTop: "-50px" }}
          src={phoneHeader}
          alt="phone"
          width="40%"
        />
        <div className="ques" 
        // style={{ marginTop: "1.5%" }}
        >
          <div style={ data =="ur" || data == "ps" ? {textAlign:'right',marginRight:'9%',} : {marginLeft:'1.3%'}}>
            <h2 style={{fontSize:18,color:'#2D3748',}}>{t('port3')}</h2>
          </div>
          <Question  />
        </div>  
          </>
        ) : (<>
        
        <div className="ques" 
        // style={{ marginTop: "1.5%" }}
        >
          <div style={ data =="ur" || data == "ps" ? {textAlign:'right',marginRight:'9%',} : {marginLeft:'1.3%'}}>
            <h2 style={{fontSize:18,color:'#2D3748',}}>{t('port3')}</h2>
          </div>
          <Question  />
        </div>
        <img
          className="imgreponsive"
          style={{ objectFit: 'contain',marginTop:'2%' }}
          // style={{ marginRight: "2%", width: "40%", height: "auto" }}
          // style={{ marginTop: "-50px" }}
          src={phoneHeader}
          alt="phone"
          width="40%"
        />
        </>)}
        
      </div> */}
    </div>
  );
};

export default Faq;
