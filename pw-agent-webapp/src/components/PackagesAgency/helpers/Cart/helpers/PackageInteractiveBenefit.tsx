import React from "react";
import TickIcon from "../../../assets/tick.svg";
const PackageInteractiveBenefit = ({ benefit }: any) => {
  return (
    <div className="package-main-interactive-benefit">
      <img src={TickIcon} />
      <span>{benefit}</span>
    </div>
  );
};

export default PackageInteractiveBenefit;
