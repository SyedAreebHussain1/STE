import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavbarSand from "../../global-components/NavbarSand";
import Footer_v1 from "../../global-components/footer";
import sellfaster from "../../images/sellfaster01.png";
import hour24 from "../../images/24serives01.png";
import easytouse from "../../images/easytouse01.png";
import ViewAllFeature from "../../V2/Home/helpers/ViewAllFeature";
const SelectType = () => {
  const contentArry = [
    {
      title: "Agency",
      redirect: "/pricing-agency",
      icon: hour24,
      content:
        "You can easily navigate through our app without being a tech specialist. ",
      btnName: "Continue with agency",
    },
    {
      title: "Freelancer",
      redirect: "/pricing-freelancer",
      icon: easytouse,
      content:
        "You can easily navigate through our app without being a tech specialist. ",
      btnName: "Continue with freelancer",
    },
  ];
  return (
    <>
      <NavbarSand />
      <br />
      <div className="container topspace bottomspace">
        <div className="row ltn__custom-gutter--- justify-content-center go-top">
          <div className="container topspace bottomspace">
            <div className="row ltn__custom-gutter--- justify-content-center go-top">
              {" "}
              {contentArry.map((val, i) => {
                return (
                  <div key={i} className="col-lg-4 col-sm-6 col-12">
                    <div
                      className="ltn__feature-item ltn__feature-item-6 bg-white  box-shadow-1 active features_v1_height"
                      style={{ height: "200px" }}
                    >
                      <div
                        className="ltn__feature-info"
                        style={{ display: "flex", gap: "12px" }}
                      >
                        <div>
                          {" "}
                          <img
                            src={val?.icon}
                            alt=""
                            style={{ width: "4rem" }}
                          />{" "}
                        </div>
                        <div>
                          <div>
                            <h4>
                              <div
                                className="freature-link-hover"
                                style={{ color: "black" }}
                              >
                                <span
                                  style={{
                                    display: "block",
                                    fontSize: "22px",
                                  }}
                                >
                                  {val.title}
                                </span>
                              </div>
                            </h4>
                          </div>
                          <div>
                            <p
                              style={{ fontSize: "15px" }}
                              className="text-gray-ad"
                            >
                              {val.content}
                            </p>
                            <div style={{ marginTop: "10px" }}>
                              <Link to={val.redirect}>
                                <button
                                  style={{
                                    border: "none",
                                    background: "rgb(20, 130, 140)",
                                    color: "white",
                                    borderRadius: "32px",
                                    padding: "7px",
                                  }}
                                >
                                  <span
                                    style={{
                                      padding: "5px",
                                      fontSize: "1rem",
                                      fontWeight: "normal",
                                    }}
                                  >
                                    {val.btnName}
                                  </span>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer_v1 />
    </>
  );
};

export default SelectType;
