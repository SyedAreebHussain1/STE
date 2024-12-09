import React, { useState } from "react";
import PackageTab from "./PackageTab";
const CartPackagesTabs = ({
  tabsAndData,
  setCurrentHelper,
  setTabIndex,
  tabIndex,
}: any) => {

  return (
    <div>
      <div className="cart-tabs">
        {tabsAndData.map((item: any, i: number) => {
          return (
            <div
              key={item.title}
              className={`cart-tab ${tabIndex === i ? "cart-tab-active" : ""}`}
              onClick={() => [setTabIndex(i), setCurrentHelper(item?.title)]}
            >
              <span>{item?.label}</span>
            </div>
          );
        })}
      </div>
      {tabsAndData[tabIndex].children}
    </div>
  );
};

export default CartPackagesTabs;
