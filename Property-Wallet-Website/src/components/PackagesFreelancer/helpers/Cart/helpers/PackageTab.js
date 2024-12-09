import React, { useEffect, useState } from "react";
import PackageAddon from "./PackageAddon";
import PackageAddonInteractive from "./PackageAddonInteractive";
import PackagePlanTabs from "./PackagePlanTabs";

const PackageTab = ({
  title,
  data,
  setStateHelper,
  basePrices,
  planIndex,
  setPlanIndex,
  setTabIndex,
  tabIndex,
  setCurrentHelper,
}) => {
  const functionToBeCall = (val, obj = {}) => {
    setStateHelper((prev) => {
      return {
        ...data,
        Custom: {
          ...data[title],
          ...obj,
          plans: prev["Custom"].plans,
        },
      };
    });

    setTabIndex(val);
    setCurrentHelper("Custom");
  };
  useEffect(() => {
    if (data[title]?.website === false) {
      setStateHelper((prev) => {
        return {
          ...prev,
          [title]: {
            ...prev[title],
            appointsments: 0,
            appointsmentsAmount: 0,
          },
        };
      });
    }
  }, [data[title]?.website]);
  return (
    <div>
      <div className="package-main-addons">
        <PackageAddon
          label={"User Limits"}
          value={data[title]?.userLimits}
          setStateHelper={setStateHelper}
          stateName={"userLimits"}
          title={title}
          basePrices={basePrices}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
          setCurrentHelper={setCurrentHelper}
          functionToBeCall={functionToBeCall}
          isTure={true}
          disabled={true}
        />
        <PackageAddon
          label={"Listings"}
          value={data[title]?.listings}
          setStateHelper={setStateHelper}
          stateName={"listings"}
          title={title}
          basePrices={basePrices}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
          setCurrentHelper={setCurrentHelper}
          functionToBeCall={functionToBeCall}
        />
        <PackageAddon
          label={"Hot Listings"}
          value={data[title]?.hotListings}
          setStateHelper={setStateHelper}
          stateName={"hotListings"}
          title={title}
          basePrices={basePrices}
          setTabIndex={setTabIndex}
          tabIndex={tabIndex}
          setCurrentHelper={setCurrentHelper}
          functionToBeCall={functionToBeCall}
        />
        {data[title]?.website && (
          <PackageAddon
            label={
              <>
                Extra Appointsments
                <br />{" "}
                <span style={{ fontSize: 12 }}>(Interactive Online Hub)</span>
              </>
            }
            intervals={50}
            value={data[title]?.appointsments}
            setStateHelper={setStateHelper}
            stateName={"appointsments"}
            title={title}
            basePrices={basePrices}
            setTabIndex={setTabIndex}
            tabIndex={tabIndex}
            setCurrentHelper={setCurrentHelper}
            functionToBeCall={functionToBeCall}
            limits={500}
          />
        )}
      </div>

      <PackageAddonInteractive
        basePrices={basePrices}
        value={[data[title]?.websiteSetup, data[title]?.website]}
        setStateHelper={setStateHelper}
        stateName={["websiteSetup", "website"]}
        functionToBeCall={functionToBeCall}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        title={title}
      />
      <PackagePlanTabs
        basePrices={basePrices}
        value={data[title]}
        setStateHelper={setStateHelper}
        title={title}
        planIndex={planIndex}
        setPlanIndex={setPlanIndex}
      />
    </div>
  );
};

export default PackageTab;
