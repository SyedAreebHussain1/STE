import React, { useState } from "react";
import PropertyTypeOption from "./PropertyTypeOption";
import BuildingIcon from "./../../../assets/building-icon.svg";
import HouseIcon from "./../../../assets/house-icon.svg";

export enum PropertyTypeOptions {
  PROJECT = "project",
  PROPERTY = "property",
  EXISTING = "existing",
}

type Props = {
  current: PropertyTypeOptions;
  setCurrent: (value: PropertyTypeOptions) => void;
};

const PropertyTypeSelect = ({ current, setCurrent }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <PropertyTypeOption
        logo={BuildingIcon}
        desc="List a new project for new growth and collaboration"
        title="Add Project"
        onChange={() => setCurrent(PropertyTypeOptions.PROJECT)}
        isSelected={current === PropertyTypeOptions.PROJECT}
      />
      <PropertyTypeOption
        logo={HouseIcon}
        desc="List a new project for new growth and collaboration"
        title="Add Property Listing"
        onChange={() => setCurrent(PropertyTypeOptions.PROPERTY)}
        isSelected={current === PropertyTypeOptions.PROPERTY}
      />
      <PropertyTypeOption
        logo={BuildingIcon}
        desc="Add your new inventory to your existing project"
        title="Existing Project"
        onChange={() => setCurrent(PropertyTypeOptions.EXISTING)}
        isSelected={current === PropertyTypeOptions.EXISTING}
      />
    </div>
  );
};

export default PropertyTypeSelect;
