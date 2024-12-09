import React, { useState } from "react";
import PackageInteractiveBenefit from "./PackageInteractiveBenefit";

const PackageAddonInteractive = ({
  basePrices,
  // isInteractive,
  // setIsInteractiveHelper,
  setStateHelper,
  value,
  title,
  stateName,
  functionToBeCall,
}) => {
  // const [isInteractive, setIsInteractive] = useState(false);

  return (
    <div className="package-main-interactive">
      <div className="package-main-interactive-switch-price-container">
        <div>
          <h2>
            PKR{" "}
            {basePrices?.website?.[0]?.basePrice &&
              basePrices?.website?.[0]?.basePrice}
          </h2>
          <h3>Interactive Online Hub</h3>
        </div>
        <svg
          width="39"
          height="24"
          viewBox="0 0 39 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            if (value[1] === true) {
              setStateHelper((prev) => {
                const websiteAmount = `${stateName[1]}Amount`;
                const website = `${stateName[1]}`;
                const websiteSetupAmount = `${stateName[0]}Amount`;
                const websiteSetup = `${stateName[0]}`;
                return {
                  ...prev,
                  [title]: {
                    ...prev[title],
                    [website]: false,
                    [websiteAmount]: 0,
                    [websiteSetup]: false,
                    [websiteSetupAmount]: 0,
                  },
                };
              });
            } else {
              const websiteAmount = `${stateName[1]}Amount`;
              const website = `${stateName[1]}`;
              const newValue = basePrices?.website?.[0]?.basePrice;
              const obj = {
                [website]: true,
                [websiteAmount]: newValue,
              };
              if (title !== "Custom") {
                functionToBeCall(0, obj);
              } else {
                setStateHelper((prev) => {
                  return {
                    ...prev,
                    [title]: {
                      ...prev[title],
                      ...obj,
                    },
                  };
                });
              }
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <rect x="0.5" y="0.5" width="38" height="23" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="38"
            height="23"
            rx="11.5"
            stroke={value[1] ? "#27A3A3" : "#667085"}
            fill="#fff"
          />
          <rect
            x={value[1] ? "18" : "4"}
            y="4"
            width="16"
            height="16"
            rx="8"
            fill={value[1] ? "#27A3A3" : "#667085"}
          />
        </svg>
      </div>
      <div className="package-main-interactive-benefits">
        <PackageInteractiveBenefit benefit={"Website Catalogue Management"} />
        <PackageInteractiveBenefit benefit={"Leads Generation"} />
        <PackageInteractiveBenefit benefit={"Live Chat"} />
        <PackageInteractiveBenefit benefit={"Custom"} />
        <PackageInteractiveBenefit benefit={"Appointments(50 Free)"} />
      </div>
      <br />
      <div className="package-main-interactive-switch-price-container">
        <div>
          <h2>
            PKR{" "}
            {basePrices?.websiteSetup?.[0]?.basePrice &&
              basePrices?.websiteSetup?.[0]?.basePrice}
          </h2>
        </div>
        <svg
          width="39"
          height="24"
          viewBox="0 0 39 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            if (value[0] === true) {
              setStateHelper((prev) => {
                const websiteSetupAmount = `${stateName[0]}Amount`;
                const websiteSetup = `${stateName[0]}`;
                return {
                  ...prev,
                  [title]: {
                    ...prev[title],
                    [websiteSetup]: false,
                    [websiteSetupAmount]: 0,
                  },
                };
              });
            } else if (value[0] !== true && value[1] === true) {
              setStateHelper((prev) => {
                const websiteSetupAmount = `${stateName[0]}Amount`;
                const websiteSetup = `${stateName[0]}`;
                const newValue = basePrices?.websiteSetup?.[0]?.basePrice;
                return {
                  ...prev,
                  [title]: {
                    ...prev[title],
                    [websiteSetup]: true,
                    [websiteSetupAmount]: newValue,
                  },
                };
              });
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <rect x="0.5" y="0.5" width="38" height="23" rx="11.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="38"
            height="23"
            rx="11.5"
            stroke={value[0] ? "#27A3A3" : "#667085"}
            fill="#fff"
          />
          <rect
            x={value[0] ? "18" : "4"}
            y="4"
            width="16"
            height="16"
            rx="8"
            fill={value[0] ? "#27A3A3" : "#667085"}
          />
        </svg>
      </div>
      <div className="package-main-interactive-benefits">
        <PackageInteractiveBenefit benefit={"Website Setup"} />
      </div>
    </div>
  );
};

export default PackageAddonInteractive;
