import { Form, Switch } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  getInventoryDetailsForEditApi,
  getInventoryViewPermissionsApi,
  getProjectSubTypesbyProjectTypeIDApi,
  postFeatureApi,
} from "../../../../../redux/api/InventoryManagement";
import { useForm } from "antd/es/form/Form";
import ViewPermissionSection from "./helpers/ViewPermissionSection";
import { useParams } from "react-router-dom";
import ViewInventoryType from "./helpers/ViewInventoryType";

type Props = {
  current?: number;
  next: () => void;
  prev: () => void;
  formInstance?: any;
};

const FeaturesStep = ({ next, prev, current }: Props) => {
  const [subTypeId, setSubTypeId] = useState(1);
  const [bedRoom, setBedRoom] = useState(0);
  const [bathRoom, setBathRoom] = useState(0);
  const [utilies, setUtilies] = useState([]);
  const [facing, setFacing] = useState([]);
  const [editable, setEditable] = useState(false);
  const [facingEditable, setFacingEditable] = useState(false);
  const [utilitsEditable, setUtilitsEditable] = useState(false);

  const [projectType, setProjectType] = useState("");
  const [projectSubType, setProjectSubType] = useState("");
  const param = useParams();

  const dispatch = useDispatch();
  const [form] = useForm();

  const getInventoryForEdit = useSelector(
    (state: any) => state.getInventoryForEdit
  );
  const getInventoryViewUser = useSelector(
    (state: any) => state.getInventoryViewUser
  );

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
    if (!editable) {
      setEditable(false);
      next();
    }
    if (editable) {
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

      let userIds = [];
      if (values?.viewUserIds?.length > 0) {
        userIds = values?.viewUserIds?.map((val: any) => val?.value);
      }
      const apibody = {
        projectTypeId: values?.inventoryTypes,
        projectSubTypeId: values?.inventoryTypes,
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
      };
      postFeatureApi(param?.id, dispatch, apibody, () => {
        next();
      });
    }
  }

  useEffect(() => {
    if (current === 2 && editable == false) {
      getInventoryDetailsForEditApi(param.id, dispatch);
      getInventoryViewPermissionsApi(param.id, dispatch);
    }
  }, [current]);

  useEffect(() => {
    if (projectSubType) {
      setSubTypeId(getSubCategoryByName(projectSubType));
    }
  }, [projectSubType]);

  useEffect(() => {
    if (current == 2) {
      form.resetFields();
      setProjectType("");
      setProjectSubType("");
      setBedRoom(0);
      setBathRoom(0);
      setSubTypeId(getSubCategoryByName(""));
      if (getInventoryForEdit?.data && current == 2 && editable == false) {
        const project = getInventoryForEdit?.data?.inventory?.[0];
        setSubTypeId(getSubCategoryByName(project?.projectSubType?.title));
        for (let i = 0; i < premiumFeaturesSection.length; i++) {
          if (premiumFeaturesSection[i]?.type !== "bool") {
            const objectKey = premiumFeaturesSection[i].name.split("_")?.[0];
            form.setFieldValue(
              premiumFeaturesSection[i].name,
              project?.feature?.[0]?.[objectKey]
            );
          }
        }
        for (let i = 0; i < businessCommunicationSection.length; i++) {
          if (businessCommunicationSection[i]?.type !== "bool") {
            const objectKey =
              businessCommunicationSection[i].name.split("_")?.[0];
            form.setFieldValue(
              businessCommunicationSection[i].name,
              project?.businessAndCommunication?.[0]?.[objectKey]
            );
          }
        }
        for (let i = 0; i < otherSection.length; i++) {
          if (otherSection[i]?.type !== "bool") {
            const objectKey = otherSection[i].name.split("_")?.[0];
            form.setFieldValue(
              otherSection[i].name,
              project?.otherFacility?.[0]?.[objectKey]
            );
          }
        }
        for (let i = 0; i < otherNearbyLocationSection.length; i++) {
          if (otherNearbyLocationSection[i]?.type !== "bool") {
            const objectKey =
              otherNearbyLocationSection[i].name.split("_")?.[0];
            form.setFieldValue(
              otherNearbyLocationSection[i].name,
              project?.nearbyLocationsAndOtherFacility?.[0]?.[objectKey]
            );
          }
        }
        for (let i = 0; i < roomsSection.length; i++) {
          if (roomsSection[i]?.type !== "bool") {
            const objectKey = roomsSection[i].name.split("_")?.[0];
            form.setFieldValue(
              roomsSection[i].name,
              project?.room?.[0]?.[objectKey]
            );
          }
        }
        for (let i = 0; i < healthCareSection.length; i++) {
          if (healthCareSection[i]?.type !== "bool") {
            const objectKey = healthCareSection[i].name.split("_")?.[0];
            form.setFieldValue(
              healthCareSection[i].name,
              project?.healthcareRecreational?.[0]?.[objectKey]
            );
          }
        }
        for (let i = 0; i < plotFeaturesSection.length; i++) {
          if (plotFeaturesSection[i]?.type !== "bool") {
            const objectKey = plotFeaturesSection[i].name.split("_")?.[0];
            form.setFieldValue(
              plotFeaturesSection[i].name,
              project?.plotFeature?.[0]?.[objectKey]
            );
          }
        }
        setProjectType(project?.projectType?.title);
        setBedRoom(project?.bedRooms);
        setBathRoom(project?.washRooms);
        form.setFieldValue("inventoryTypes", project?.projectType?.title);
        form.setFieldValue("inventorySubTypes", project?.projectSubType?.title);
      }
    }
  }, [getInventoryForEdit?.data, editable, current]);

  useEffect(() => {
    if (getInventoryViewUser?.data && current == 2) {
      const viewUserArray = getInventoryViewUser?.data?.viewInventory?.map(
        (item: any) => item?.user?.profile?.fullName
      );
      form.setFieldValue("viewUserIds", viewUserArray);
    }
  }, [getInventoryViewUser?.data, editable]);

  function onChangeProjectType(id: any, val: any) {
    setProjectType(val);
    setProjectSubType("");
    getProjectSubTypesbyProjectTypeIDApi(dispatch, id);
  }

  const handlerSwitch = (e: any) => {
    setEditable(e);
  };

  return (
    <Form
      name="add-single-property-step-two"
      className="projects-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
    >
      <div className="flex justify-end items-center">
        <div className="text-[1.2rem] text-primary font-medium pr-[10px]">
          Feature Edit
        </div>

        <Switch
          className=" bg-[gray]"
          onChange={(e: any) => handlerSwitch(e)}
        />
      </div>
      <ViewInventoryType
        disabled={!editable}
        setProjectSubType={setProjectSubType}
        ontypeChange={onChangeProjectType}
        form={form}
      />
      <ViewPermissionSection disabled={true} />
      {subTypeId && (
        <>
          <PremiumFeaturesSection
            state={getInventoryForEdit?.data?.inventory?.[0]?.feature?.[0]}
            disabled={!editable}
            fields={premiumFeaturesSection}
          />

          <BusinessCommunicationSection
            state={
              getInventoryForEdit?.data?.inventory?.[0]
                ?.businessAndCommunication?.[0]
            }
            disabled={!editable}
            fields={businessCommunicationSection}
          />

          <OtherFacilitiesSection
            state={
              getInventoryForEdit?.data?.inventory?.[0]?.otherFacility?.[0]
            }
            disabled={!editable}
            fields={otherSection}
          />

          <OtherNearbyLocationSection
            state={
              getInventoryForEdit?.data?.inventory?.[0]
                ?.nearbyLocationsAndOtherFacility?.[0]
            }
            disabled={!editable}
            fields={otherNearbyLocationSection}
          />

          <RoomsSection
            state={getInventoryForEdit?.data?.inventory?.[0]?.room?.[0]}
            disabled={!editable}
            fields={roomsSection}
          />

          <HealthCareSection
            state={
              getInventoryForEdit?.data?.inventory?.[0]
                ?.healthcareRecreational?.[0]
            }
            disabled={!editable}
            fields={healthCareSection}
          />

          <PlotFeaturesSection
            state={getInventoryForEdit?.data?.inventory?.[0]?.plotFeature?.[0]}
            disabled={!editable}
            fields={plotFeaturesSection}
          />
        </>
      )}

      <UtilitiesSection
        disabled={!editable}
        current={current}
        state={[
          getInventoryForEdit?.data?.inventory?.[0]?.multiFace,
          getInventoryForEdit?.data?.inventory?.[0]?.utilities,
        ]}
        projectType={projectType}
        setBedRoom={setBedRoom}
        setBathRoom={setBathRoom}
        setUtilies={setUtilies}
        setFacing={setFacing}
        setUtilitsEditable={setUtilitsEditable}
        utilitsEditable={utilitsEditable}
        setFacingEditable={setFacingEditable}
        facingEditable={facingEditable}
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
            setEditable(false);
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
