import React from "react";
// import TestimonialServicePage from "./Testimonials/testimonials-service-page";
import "../V2/Sellwithus/sellwithus.css"

const BottomLineBox = ({ contentArry, customClass, heading, content, locationType }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let customClasss = customClass ? customClass : "";
  return (
    <>
      {locationType === '/' ? <>  <div className={customClass}>
        <div className="container"
          data-aos="fade-up"
        >
          <div
            className="row ltn__custom-gutter--- justify-content-center go-top" style={{ border: "" }}
          > {contentArry.map((val, i) => {
            return <div key={i} className="col-lg-4 col-sm-6 col-12">
              <div
                className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active features_v1_height" style={{ border: "", height: "190px" }}
              >

                <div className="ltn__feature-info">
                  <h3>
                    <div className="freature-link-hover" style={{ color: "black" }}>
                      {val.title}
                    </div>
                  </h3>
                  <p className="text-gray-ad" style={{ fontSize: "15px" }}>
                    {val.content}
                  </p>

                </div>
              </div>
            </div>
          })
            }  </div>
        </div>
      </div>  </> :
        <div className={customClasss} style={{ marginTop: "10%" }}>
          <div className="container"
            data-aos="fade-up"
          >
            <div
              className="row ltn__custom-gutter--- justify-content-center go-top"
            >
              <div style={{ textAlign: "center", marginTop: '-7%' }}>
                <h6 className=" bold" style={{ color: "#053857", fontSize: "1rem" }}>
                  {heading}
                </h6>
                <div className="completeDesktopText  font-size-1_6rem bold" >
                  {content}
                </div>
              </div>
              <br />
              {contentArry.map((val, i) => {
                return <div key={i} className="col-lg-4 col-sm-6 col-12">
                  <div className="ltn__feature-item ltn__feature-item-6-areeb bg-white box-shadow-1  features_v1_height" style={{ height: "", minHeight: "300px" }} >
                    <div className="ltn__feature-info">
                      <div className="flexs">
                        <img src={val.img} className="height-2_rem" />
                        <div className="margin-left_12px bold marginTop-7px" style={{ color: "#053857" }}>{val.title}</div>
                      </div>
                      <p className="text-gray-ad" style={{ fontSize: "1rem" }}>{val.content}</p>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
          <br />
          <br />
        </div>
      }
    </>
  );
};
export default BottomLineBox;
