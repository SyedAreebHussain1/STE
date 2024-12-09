import React from "react";
import { Link, useHistory } from "react-router-dom";
import imgBackground from "../../../images/JoinImg.png";
import ViewAllFeature from "./ViewAllFeature";

const Join = () => {
  const history = useHistory();
  function handleNavigate(nav) {
    history.push(nav);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="topspace bottomspace centered-join-main">
      <div className="centered-join">
        <div style={{ color: "#000000",padding:"5px" }}>
          <span   className="join-heading">
            {" "}
            Zameen ki Duniya ab aapke haath mein{" "}
          </span>
          <span className="join-heading-merge" style={{ }}>
            – Hamara app, aapka asli estate saathi!
          </span>
          <div style={{ marginTop: "4%" }}>
            {/* <li className="special-link ">
            <Link to="/pricing" className="theme-btn-1 btn btn-effect-1">
              <span>Become a Property Wallet Partner</span>
            </Link>
          </li> */}
            <ViewAllFeature
              name="Become a Property Wallet Partner"
              handleNavigate={() => handleNavigate("/pricing")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
