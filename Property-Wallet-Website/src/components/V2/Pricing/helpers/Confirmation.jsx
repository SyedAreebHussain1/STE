import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BackwardOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import NavbarSand from "../../../global-components/NavbarSand";
import Heading from "./Heading";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Checkbox } from "antd";

const Confirmation = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState(
    location?.state?.packages?.pwSubPackage[0]
  );
  const [title, setTitle] = useState("About | Property Wallet");

  useEffect(() => {
    if (props.location.pathname == "/confirmation") {
      setTitle("Confirmation | Property Wallet");
    } else {
      setTitle("Confirmation | Property Wallet");
    }
    // console.log(props.location.pathname)
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  // useEffect(() => {
  //   console.log("location", location);
  // }, [location]);
  const handlePackageChange = (packageItem) => {
    setSelectedPackage(packageItem);
  };
  return (
    <>
      <NavbarSand />
      <Heading Heading="Confirmation" />
      <div style={{ marginLeft: "2%", marginRight: "2%", marginTop: "2%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "3%",
          }}
        >
          <button
            style={{ boxShadow: "0px 0px 1px 1px #e7e2e2" }}
            className="subcrib-button"
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowLeftOutlined /> Back
          </button>
          <Link
            to={{
              pathname: `/checkout/${selectedPackage?.title}`,
              state: {
                selectedPackage: selectedPackage,
                package: location?.state?.packages,
              },
            }}
          >
            <button
              style={{ boxShadow: "0px 0px 1px 1px #e7e2e2" }}
              className="confirm-button"
            >
              Confirm <ArrowRightOutlined />
            </button>
          </Link>
        </div>

        <div className="row-p">
          {location?.state !== undefined &&
            location?.state?.packages?.pwSubPackage.length > 0 &&
            location?.state?.packages?.pwSubPackage.map((item, i) => {
              return (
                <div className="column-p">
                  <div
                    className={
                      selectedPackage === item
                        ? "column-confirm-selected"
                        : "column-confirm-grey"
                    }
                  >
                    <div
                      className={
                        selectedPackage === item
                          ? "column-confirm-selected-sub"
                          : "column-confirm-grey-sub"
                      }
                    >
                      {item?.title}
                    </div>
                    <div className="" style={{ textAlign: "center" }}>
                      <div
                        className=""
                        style={{
                          lineHeight: "1.3",
                          marginTop: "0",
                          marginBottom: "0.5rem",
                          fontWeight: "700",
                          color: "#343f52",
                          wordSpacing: "0.1rem",
                          letterSpacing: "-.01rem",
                          fontSize: "3rem",
                        }}
                      >
                        <span
                          className=""
                          style={{
                            fontSize: "1.1rem",
                            position: "relative",
                            top: "-15px",
                          }}
                        >
                          PKR
                        </span>
                        <span style={{ fontSize: "2.7rem", marginLeft: "1px" }}>
                          {item?.charges}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        color: "grey",
                        marginLeft: "2%",
                        marginRight: "2%",
                        paddingBottom: "2%",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>{`PKR ${item?.charges}/${
                        item?.title.includes("Monthly")
                          ? "month"
                          : item?.title.includes("Quarterly")
                          ? "every four months"
                          : item?.title.includes("Semi-Annually")
                          ? "after 6 months"
                          : item?.title.includes("Annually")
                          ? "per year"
                          : ""
                      }`}</div>
                      <div>
                        <Checkbox
                          checked={selectedPackage === item}
                          onChange={() => handlePackageChange(item)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Confirmation;
