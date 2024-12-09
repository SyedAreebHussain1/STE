import React from "react";
import "./AgencyCatalogue/AgencyCatlogue.css";
import "react-phone-number-input/style.css";

const TailwindWrapper = ({ children }) => {
  return <div className="agency-catalogue">{children}</div>;
};

export default TailwindWrapper;
