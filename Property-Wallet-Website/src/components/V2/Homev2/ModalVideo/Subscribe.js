import React, { useEffect } from "react";
import "./subscribe.css";

import AOS from "aos";

import ModalAddVideo from "./ModalAddVideo";
const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);
  return (
    <>
      <div
        style={
          {
            // borderTopStyle: "solid",
            // borderTopColor: "#27a3a3",
            //   borderTop: "4px",
            // marginBottom: "2%"
          }
        }
      >
        <section id="subscribe">
          <div
            // style={
            //   data == "en"
            //     ? { marginTop: "4%" }
            //     : { marginTop: "4%", fontFamily: "" }
            // }
            style={{}}
            className=" subscribe subscribe2"
            // data-aos="fade-up"
          >
            {/* <h5>
                            <span className="prjtxt">
                                <span className="promotxt"></span>
                                What is Property Wallet Mobile App?
                            </span>
                            <span className="promotxt"> </span>
                        </h5>

                        <div >
                            <span className="prjtxt">
                                <span className="promotxt1"></span>
                                The video description of the property wallet 
                            </span>
                        </div>
                        <div>
                        <span className="prjtxt">
                                <span className="promotxt1 bold"></span>
                                mobile app, in which we outline  all of the features of
                            </span>
                        </div>
                        <div>
                            <span className="prjtxt">
                                <span className="promotxt1 bold"></span>
                                the app which is especially  design for Real Estate Agents.
                            </span>
                        </div>
                        <div style={{ marginTop: '' }}>
                            {" "}
                            <span
                                style={{ fontSize: "3vh" }}
                                className="u-text-small"
                            >
                            </span>{" "}
                        </div> */}

            <ModalAddVideo cName="subscribe" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Subscribe;
