import { Form, FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getSectionFromCategory,
  getSubCategoryByName,
} from "../../../../../utils/utils";
import PremiumFeaturesSection from "./helpers/PremiumFeaturesSection";
import BusinessCommunicationSection from "./helpers/BusinessCommunicationSection";
import OtherFacilitiesSection from "./helpers/OtherFacilitiesSection";
import OtherNearbyLocationSection from "./helpers/OtherNearbyLocationSection";
import RoomsSection from "./helpers/RoomsSection";
import HealthCareSection from "./helpers/HealthCareSection";
import PlotFeaturesSection from "./helpers/PlotFeaturesSection";
import UtilitiesSection from "./helpers/UtilitiesSection";
import Button from "../../../../../helpers/inputs/Button";
import { BsArrowLeft } from "react-icons/bs";
import { getFromStorage, setInStorage } from "../../../../../utils/storage";
import { getProjectSubTypesNamebyIDApi } from "../../../../../redux/api/InventoryManagement";
import { useForm } from "antd/es/form/Form";
import ViewPermissionSection from "./helpers/ViewPermissionSection";
import { useSearchParams } from "react-router-dom";

type Props = {
  current?: number;
  next: () => void;
  prev: () => void;
  formInstance?: any;
};

const FeaturesStep = ({ next, prev, current }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const projectId = searchParams.get("projectId");
  const [subTypeId, setSubTypeId] = useState(1);
  const [bedRoom, setBedRoom] = useState(0);
  const [bathRoom, setBathRoom] = useState(0);
  const [utilies, setUtilies] = useState([]);
  const [facing, setFacing] = useState([]);

  const dispatch = useDispatch();
  const [form] = useForm();

  const premiumFeaturesSection = getSectionFromCategory(
    "createProductFeatureDto",
    subTypeId
  );
  const businessCommunicationSection = getSectionFromCategory(
    "createProductBusinessAndCommunicationDto",
    subTypeId
  );
  const otherSection = getSectionFromCategory(
    "createProductOtherFacilityDto",
    subTypeId
  );
  const otherNearbyLocationSection = getSectionFromCategory(
    "createProductOtherNearByLocationDto",
    subTypeId
  );
  const roomsSection = getSectionFromCategory(
    "createProductRoomDto",
    subTypeId
  );
  const healthCareSection = getSectionFromCategory(
    "createProductHealthCareRecreationalDto",
    subTypeId
  );

  const plotFeaturesSection = getSectionFromCategory(
    "createProductPlotFeatureDto",
    subTypeId
  );
  function onFinish(values: any) {
    const body: any = {
      createProductFeatureDto: {},
      createProductBusinessAndCommunicationDto: {},
      createProductOtherFacilityDto: {},
      createProductHealthCareRecreationalDto: {},
      createProductOtherNearByLocationDto: {},
      createProductRoomDto: {},
      createProductPlotFeatureDto: {},
    };
    const parentObject: any = [];
    const boolFields = [
      ...premiumFeaturesSection,
      ...businessCommunicationSection,
      ...otherSection,
      ...otherNearbyLocationSection,
      ...roomsSection,
      ...healthCareSection,
      ...plotFeaturesSection,
    ]
      .filter((f) => f.type === "bool")
      .map((f) => {
        if (
          values.hasOwnProperty(f.name) &&
          values[f.name] !== undefined &&
          values[f.name].length !== 0
        ) {
          return { [f.name]: true };
        } else {
          return { [f.name]: false };
        }
      });

    for (const key in values) {
      if (values[key] === undefined) {
        continue;
      }

      if (parentObject.includes(key.split("_")[1])) {
        continue;
      }
      body[key.split("_")[1]] = {};
    }
    for (const key in values) {
      if (values[key] === undefined) {
        continue;
      }
      if (body.hasOwnProperty(key.split("_")[1])) {
        if (isNaN(Number(values[key]))) {
          body[key.split("_")[1]][key.split("_")[0]] = values[key];
        } else {
          if (Number(values[key]) === 0) {
            continue;
          }
          body[key.split("_")[1]][key.split("_")[0]] = Number(values[key]);
        }
      }
    }
    for (let i = 0; i < boolFields.length; i++) {
      for (const key in boolFields[i]) {
        if (body.hasOwnProperty(key.split("_")[1])) {
          body[key.split("_")[1]][key.split("_")[0]] = boolFields[i][key];
        }
      }
    }

    const project = getFromStorage("project");
    let userIds = [];
    if (values?.viewUserIds?.length > 0) {
      userIds = values?.viewUserIds?.map((val: any) => val?.value);
    }
    if (project && type !== "existing") {
      setInStorage("project", {
        ...project,
        inventory: {
          ...project.inventory,
          view_userIds: [...userIds],
          utilies: [...utilies],
          facing: [...facing],
          bedRooms: bedRoom,
          washRooms: bathRoom,
          createFeature: { ...body.createProductFeatureDto },
          createBusinessAndCommunication: {
            ...body.createProductBusinessAndCommunicationDto,
          },
          createOtherFacility: { ...body.createProductOtherFacilityDto },
          createHealthcareRecreational: {
            ...body.createProductHealthCareRecreationalDto,
          },
          createNearbyLocationsAndOtherFacility: {
            ...body.createProductOtherNearByLocationDto,
          },
          createRoom: { ...body.createProductRoomDto },
          createPlotFeature: { ...body.createProductPlotFeatureDto },
        },
      });
    } else if (project && type === "existing") {
      setInStorage("project", {
        ...project,
        view_userIds: [...userIds],
        utilies: [...utilies],
        facing: [...facing],
        bedRooms: bedRoom,
        washRooms: bathRoom,
        createFeature: { ...body.createProductFeatureDto },
        createBusinessAndCommunication: {
          ...body.createProductBusinessAndCommunicationDto,
        },
        createOtherFacility: { ...body.createProductOtherFacilityDto },
        createHealthcareRecreational: {
          ...body.createProductHealthCareRecreationalDto,
        },
        createNearbyLocationsAndOtherFacility: {
          ...body.createProductOtherNearByLocationDto,
        },
        createRoom: { ...body.createProductRoomDto },
        createPlotFeature: { ...body.createProductPlotFeatureDto },
      });
    } else {
      setInStorage("project", body);
    }
    next();
  }

  useEffect(() => {
    if (current === 2) {
      const project = getFromStorage("projectSubType");

      setSubTypeId(getSubCategoryByName(project));
    }
  }, [current]);

  return (
    <Form
      name="add-single-property-step-two"
      className="projects-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
    >
      <ViewPermissionSection />
      {subTypeId && (
        <>
          <PremiumFeaturesSection fields={premiumFeaturesSection} />

          <BusinessCommunicationSection fields={businessCommunicationSection} />

          <OtherFacilitiesSection fields={otherSection} />

          <OtherNearbyLocationSection fields={otherNearbyLocationSection} />

          <RoomsSection fields={roomsSection} />

          <HealthCareSection fields={healthCareSection} />

          <PlotFeaturesSection fields={plotFeaturesSection} />
        </>
      )}

      <UtilitiesSection
        current={current}
        setBedRoom={setBedRoom}
        setBathRoom={setBathRoom}
        setUtilies={setUtilies}
        setFacing={setFacing}
      />

      <div className="flex items-center justify-between gap-4 mt-5">
        <Button
          label={
            <div className="flex items-center gap-2">
              <BsArrowLeft />
              <span>Back</span>
            </div>
          }
          variant="outlined"
          onClick={(e: any) => {
            e.preventDefault();
            prev();
          }}
        />
        <Button label="Continue" variant="filled" htmlType={"submit"} />
      </div>
    </Form>
  );
};

export default FeaturesStep;
