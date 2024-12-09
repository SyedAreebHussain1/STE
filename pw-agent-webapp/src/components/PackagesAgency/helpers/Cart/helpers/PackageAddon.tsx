import React from "react";
import PlusIcon from "../../../assets/plus-icon.svg";
import MinusIcon from "../../../assets/minus-icon.svg";

const PackageAddon = ({
  label,
  value,
  stateName,
  setStateHelper,
  title,
  basePrices,
  setTabIndex,
  tabIndex,
  setCurrentHelper,
  functionToBeCall,
  intervals = 1,
  limits = 100,
  isTure,
}: any) => {
  function IncementCounter() {
    if (tabIndex !== 0) {
      functionToBeCall(0);
      return;
    }
    if (value < limits) {
      setStateHelper((prev: any) => {
        const amountString = `${stateName}Amount`;
        const newValue = prev[title][stateName] + intervals;
        const calculatedAmount =
          newValue *
          (basePrices?.[stateName]?.[0].basePrice -
            basePrices?.[stateName]?.[0].intervals * (newValue - intervals));
        return {
          ...prev,
          [title]: {
            ...prev[title],
            [stateName]: newValue,
            [amountString]: calculatedAmount,
          },
        };
      });
    }
  }
  function DecrementCounter() {
    if (tabIndex !== 0) {
      functionToBeCall(0);
      return;
    }
    if (value)
      setStateHelper((prev: any) => {
        const amountString = `${stateName}Amount`;
        const newValue = prev[title][stateName] - intervals;
        const calculatedAmount =
          newValue *
          (basePrices?.[stateName]?.[0].basePrice -
            basePrices?.[stateName]?.[0].intervals * (newValue - intervals));

        return {
          ...prev,
          [title]: {
            ...prev[title],
            [stateName]: newValue,
            [amountString]: calculatedAmount,
          },
        };
      });
  }
  return (
    <div className="package-main-addon">
      <h4>{label}</h4>
      <div className="package-main-addon-counter">
        {isTure && value == 1 ? (
          <img src={MinusIcon} />
        ) : (
          <img src={MinusIcon} onClick={DecrementCounter} />
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => {
            if (e.target.value < limits) {
              setStateHelper((prev: any) => {
                return {
                  ...prev,
                  [title]: {
                    ...prev[title],
                    [stateName]: Number(e.target.value),
                  },
                };
              });
            } else {
              setStateHelper((prev: any) => {
                return {
                  ...prev,
                  [title]: {
                    ...prev[title],
                    [stateName]: Number(limits),
                  },
                };
              });
            }
          }}
        />
        <img src={PlusIcon} onClick={IncementCounter} />
      </div>
    </div>
  );
};

export default PackageAddon;
