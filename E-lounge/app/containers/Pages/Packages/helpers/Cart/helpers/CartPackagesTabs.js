import React, { useState } from "react";
import PackageTab from "./PackageTab";

const CartPackagesTabs = ({
  tabsAndData,
  setCurrentHelper,
  setTabIndex,
  tabIndex,
}) => {
  return (
    <div>
      <div className="cart-tabs">
        {tabsAndData.map((item, i) => {
          return (
            <div
              key={item.title}
              className={`cart-tab ${tabIndex === i ? "cart-tab-active" : ""}`}
              onClick={() => [setTabIndex(i), setCurrentHelper(item?.title)]}
            >
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      {tabsAndData[tabIndex].children}
    </div>
  );
};

export default CartPackagesTabs;
