import React, { useEffect } from "react";
import "../amentities/Amentities.css";
import restaurant from "../images/locationicon.png";
import shopping from "../images/amenitiesicon.png";
import community from "../images/specialicon.png";
import gym from "../images/isfrastructureicon.png";
import hospital from "../images/builtup.png";
import mosque from "../images/commercial.png";
import roads from "../images/roads.png";
import school from "../images/school.png";
import parks from "../images/parks.png";
import { AiFillInfoCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, NavLink,useHistory } from "react-router-dom";
const ProjectFeatures = () => {
  const { i18n,t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  const history = useHistory()
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      // style={{ backgroundColor: "red" }}
      // style={{marginBottom:'2%'}}
      className="service component__space amentities"
      id="Services"
    >
     <h1 style={{ textAlign: "center",marginTop: "-4.5%" }}>
        <span style={{ fontSize: "3.5vh", color: "#d69929" }}>
        { t('profea1')}{" "}
          <span style={{ fontSize: "3.5vh", color: "#2D3748" }}>
          { t('profea2')}
          </span>{" "}
        </span>
      </h1>
      {/* hr */}
      <div style={{marginLeft:'10%',marginRight:'10%'}} className="hr-theme-slash-2">
  <div  className="hr-line"></div>
  <div className="hr-icon"><AiFillInfoCircle color="#d69929" size={20}/></div>
  <div className="hr-line"></div>
</div>
{/* hr */}

      <div
        //  style={{ backgroundColor: "blue" }}
        style={{marginBottom:-60}}
        className="amencontainerf"
      >
        <div className="row">
          
          <div  onClick={() => history.push('/location')} className="colf__3">
            
            <div className="service__boxf pointer">
              
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",

                  alignItems: "center",
                }}
              >
                <img
                  className="amenimg"
                  // style={{ padding: 20 }}
                  src={restaurant}
                  alt="res"
                  width="75%"
                />
              </div>
              <h1
                style={ data == "ur" || data == "ps" ? { color: "white", textAlign: "center", marginTop: "8%",fontSize:24 } :{ color: "white", textAlign: "center", marginTop: "8%", } }
                // className="service__text"
              >
                { t('profea3')}
              </h1>
            </div>


          </div>
          <div onClick={() => history.push('/Project')} className="colf__3">
            <div className="service__boxf pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img className="amenimg" src={shopping} alt="res" width={data== "ur" || data == "ps" ? "74%" : "76%"} />
              </div>
              <h1
                // style={{ color: "white", textAlign: "center", marginTop: "8%" }}
                style={ data == "ur" || data == "ps" ? { color: "white", textAlign: "center", marginTop: "8%",fontSize:24 } :{ color: "white", textAlign: "center", marginTop: "8%", } }
                // className="service__text"
              >
               { t('profea4')}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push('/special')} className="colf__3">
            <div className="service__boxf pointer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img src={community} alt="res" width={data== "ur" || data == "ps" ? "74%" : "68%"} />
              </div>
              <h1
                // style={{ color: "white", textAlign: "center", marginTop: "8%" }}
                style={ data == "ur" || data == "ps" ? { color: "white", textAlign: "center", marginTop: "8%",fontSize:24 } :{ color: "white", textAlign: "center", marginTop: "8%", } }
                // className="service__text"
              >
               { t('profea5')}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push('/infrastructure')} className="colf__3">
            <div className="service__boxf pointer">
              <div
                style={{
                  display: "flex",

                  // paddingRight: 10,
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img className="amenimg" src={gym} alt="res" width={data == 'ur' || data == "ps" ? "73.5%" : "72.5%" } />
              </div>
              <h1
                // style={{
                //   // fontSize: 25,
                //   color: "white",
                //   textAlign: "center",
                //   marginTop: "8%",
                // }}
                style={ data == "ur" || data == "ps" ? { color: "white", textAlign: "center", marginTop: "8%",fontSize:24 } :{ color: "white", textAlign: "center", marginTop: "8%", } }
                // className="service__text"
              >
                { t('profea6')}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push('/builtup')} className="colf__3">
            <div className="service__boxf pointer">
              <div
                style={{
                  display: "flex",

                  // paddingRight: 10,
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img className="amenimg" src={hospital} alt="res" width={data == 'ur' || data == "ps" ? "73.5%" : "72.5%" } />
              </div>
              <h1
                // style={{
                //   // fontSize: 25,
                //   color: "white",
                //   textAlign: "center",
                //   marginTop: "8%",
                // }}
                style={ data == "ur" || data == "ps" ? { color: "white", textAlign: "center", marginTop: "8%",fontSize:24 } :{ color: "white", textAlign: "center", marginTop: "8%", } }
                // className="service__text"
              >
                { t('profea9')}
              </h1>
            </div>
          </div>
          <div onClick={() => history.push('/commercials')} className="colf__3">
            <div className="service__boxf pointer">
              <div
                style={{
                  display: "flex",

                  // paddingRight: 10,
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "-8%",
                  alignItems: "center",
                }}
              >
                <img className="amenimg" src={mosque} alt="res" width={data == 'ur' || data == "ps" ? "73.5%" : "88.5%" } />
              </div>
              <h1
                // style={{
                //   // fontSize: 25,
                //   color: "white",
                //   textAlign: "center",
                //   marginTop: "8%",
                // }}
                style={ data == "ur" || data == "ps" ? { color: "white", textAlign: "center", marginTop: "8%",fontSize:24 } :{ color: "white", textAlign: "center", marginTop: "8%", } }
                // className="service__text"
              >
                { t('profea10')}
              </h1>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default ProjectFeatures;
