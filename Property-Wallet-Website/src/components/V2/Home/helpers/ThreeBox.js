import React from "react";

const ThreeBox = ({
  contentArry,
  customClass,
  heading,
  content,
  locationType,
}) => {
  return (
    <>
      {locationType === "/" ? (
        <>
          {" "}
          <div className={customClass}>
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
                              style={{ width: "5rem" }}
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
                              <p
                                className="text-gray-ad"
                                style={{ fontSize: "15px" }}
                              >
                                {val.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}{" "}
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <div className=" bottomspace" style={{ marginTop: "2%" }}>
          <div className="container">
            <div className="row ltn__custom-gutter--- justify-content-center go-top">
              {" "}
              {contentArry.map((val, i) => {
                return (
                  <div key={i} className="col-lg-6 col-sm-6 col-12 mt-2per">
                    <div
                      className="ltn__feature-item  bg-white  box-shadow-1  features_v1_height h-auto-about"
                      style={{ height: "230px" }}
                    >
                      <div className="ltn__feature-info">
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
                            <p
                              className="text-gray-ad"
                              style={{ fontSize: "15px" }}
                            >
                              {val.content}
                            </p>
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
      )}
    </>
  );
};

export default ThreeBox;
