import React, { useState } from "react";
import CartPackagesTabs from "./helpers/CartPackagesTabs";
import PackageTab from "./helpers/PackageTab";

const Cart = ({
  data,
  setData,
  setCurrentHelper,
  basePrices,
  setIsInteractiveHelper,
  isInteractive,
  setTabIndex,
  tabIndex,
  setPlanIndex,
  planIndex,
}) => {
  const tabsAndData = [
    {
      title: "Custom",
      children: (
        <PackageTab
          setStateHelper={setStateHelper}
          title={"Custom"}
          data={data}
          basePrices={basePrices}
          setIsInteractiveHelper={setIsInteractiveHelper}
          isInteractive={isInteractive}
          planIndex={planIndex}
          setPlanIndex={setPlanIndex}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
          setCurrentHelper={setCurrentHelper}
        />
      ),
    },
    {
      title: "Silver",
      children: (
        <PackageTab
          setStateHelper={setStateHelper}
          title={"Silver"}
          data={data}
          basePrices={basePrices}
          planIndex={planIndex}
          setPlanIndex={setPlanIndex}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
          setCurrentHelper={setCurrentHelper}
        />
      ),
    },
    {
      title: "Gold",
      children: (
        <PackageTab
          setStateHelper={setStateHelper}
          title={"Gold"}
          data={data}
          basePrices={basePrices}
          planIndex={planIndex}
          setPlanIndex={setPlanIndex}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
          setCurrentHelper={setCurrentHelper}
        />
      ),
    },
    {
      title: "Basic",
      children: (
        <PackageTab
          setStateHelper={setStateHelper}
          title={"Basic"}
          data={data}
          basePrices={basePrices}
          planIndex={planIndex}
          setPlanIndex={setPlanIndex}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
          setCurrentHelper={setCurrentHelper}
        />
      ),
    },
  ];
  function setStateHelper(state) {
    setData(state);
  }
  return (
    <div className="packages-main-cart">
      <CartPackagesTabs
        setCurrentHelper={setCurrentHelper}
        tabsAndData={tabsAndData}
        setTabIndex={setTabIndex}
        tabIndex={tabIndex}
      />
    </div>
  );
};

export default Cart;
