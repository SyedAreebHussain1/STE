import React from "react";
import { Link } from "react-router-dom";

const ViewAllFeature = ({ handleNavigate, name }) => {
  return (
    <div className="container go-top">
      <ul style={{ listStyle: "none" }}>
        <li className="special-link " onClick={handleNavigate}>
          <Link
            to="/property-wallet-app"
            className="theme-btn-1 btn btn-effect-1"
          >
            <span>{name}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ViewAllFeature;
