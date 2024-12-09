import { Col, Form, FormInstance, Row } from "antd";
import SectionContainer from "../../../../SectionContainer";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { SelectField } from "../../../../../helpers/inputs/SelectField";
import { useEffect, useState } from "react";

import {
  getLandAreaApi,
  getProjectSubTypesNamebyIDApi,
  getProjectSubTypesbyProjectTypeIDApi,
  getProjectTypeApi,
} from "../../../../../redux/api/InventoryManagement";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import MapsLocation from "../../../../../helpers/Map/MapsLocation";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../../../../../helpers/inputs/Button";
import { useForm } from "antd/es/form/Form";
import { getFromStorage, setInStorage } from "../../../../../utils/storage";

type Props = {
  current?: number;
  next: () => void;
  prev?: () => void;
  formInstance?: any;
};

enum ForSellType {
  sale = "ForSell",
  rent = "ForRent",
}

const PropertyDetailsStep = (props: Props) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const projectId = searchParams.get("projectId");

  useEffect(() => {
    if (type === "existing") {
      const propertyName = location?.state?.projectName;
      form.setFieldValue("propertyTitle", propertyName);
    }
  }, [type]);

  const dispatch = useDispatch();
  const getProjectType = useSelector((state: any) => state.getProjectType);
  const getLandArea = useSelector((state: any) => state.getLandArea);

  const [markers, setMarkers] = useState<any>([]);
  const [selectedPlace, setSelectedPlace] = useState<any>({});
  const getProjectSubTypeByProjectTypeID = useSelector(
    (state: any) => state.getProjectSubTypeByProjectTypeID
  );
  const [form] = useForm();

  useEffect(() => {
    getProjectTypeApi(dispatch, { page: 1, limit: 10 });
    getLandAreaApi(dispatch, { page: 1, limit: 10 });
  }, []);

  function onChangeProjectType(id: any) {
    getProjectSubTypesbyProjectTypeIDApi(dispatch, id);
  }
  function onChangeProjectSubType(id: any) {
    getProjectSubTypesNamebyIDApi(dispatch, id, subTypeonSuccess);
  }
  const subTypeonSuccess = (e: any) => {
    setInStorage("projectSubType", e?.title);
  };

  const onFinish = (val: any) => {
    let body: any;
    if (type !== "existing") {
      body = {
        builderName: val?.builderName,
        NOC: val?.NOC,
        country: selectedPlace?.country,
        city: val?.city,
        latitude: markers?.[0]?.lat,
        longitude: markers?.[0]?.lng,
        address: val?.address,
        description: val?.description,
        inventory: {
          landAreaId: val?.units,
          landSize: val?.areaSize,
          noOfUnit: val?.numberOfUnits || 1,
          price: val?.price,
          description: val?.description,
          inVentoryType:
            val?.sellRent == "sale" ? ForSellType.sale : ForSellType.rent,
        },
      };
      if (type === "project") {
        body.projectName = val?.projectName;
        body.inventory.title = val?.projectName;
        body.inventory.projectTypeId = val?.projectType;
        body.inventory.projectSubTypeId = val?.projectSubType;
        body.isIndividual = false;
      } else if (type === "property") {
        body.isIndividual = true;
        body.projectName = val?.propertyTitle;
        body.inventory.title = val?.propertyTitle;
        body.inventory.projectTypeId = val?.inventoryType;
        body.inventory.projectSubTypeId = val?.inventorySubType;
      }
    } else if (type == "existing") {
      body = {
        landAreaId: val?.units,
        landSize: val?.areaSize,
        noOfUnit: val?.numberOfUnits,
        price: val?.price,
        description: val?.description,
        inVentoryType:
          val?.sellRent == "sale" ? ForSellType.sale : ForSellType.rent,
        title: val?.propertyTitle,
        projectTypeId: val?.inventoryType,
        projectSubTypeId: val?.inventorySubType,
      };
    }

    const project = getFromStorage("project");
    if (project) {
      setInStorage("project", { ...project, ...body });
    } else {
      setInStorage("project", body);
    }
    props.next();
  };

  useEffect(() => {
    form.setFieldValue("city", selectedPlace.city);
    form.setFieldValue("location", selectedPlace.address);
    form.setFieldValue("address", selectedPlace.address);
  }, [selectedPlace]);
  return (
    <Form
      name="add-single-property-step-one"
      className="projects-form"
      initialValues={{ remember: true }}
      form={form}
      autoComplete="false"
      onFinish={onFinish}
    >
      <SectionContainer
        title={"Inventory Details"}
        subtitle={"Provide the title for the inventory"}
      >
        <Row gutter={24}>
          {type === "project" ? (
            <Col lg={8} xs={24}>
              <span className="text-[#292D35] font-medium text-base">
                Project Name
              </span>
              <TextInput
                name="projectName"
                className="h-[48px] mt-2"
                rules={[
                  { required: true, message: "Property Name is Required" },
                ]}
              />
            </Col>
          ) : (
            <Col lg={8} xs={24}>
              <span className="text-[#292D35] font-medium text-base">
                Property Title
              </span>
              <TextInput
                name="propertyTitle"
                disabled={projectId ? true : false}
                className="h-[48px] mt-2"
                rules={[
                  { required: true, message: "Property Title is Required" },
                ]}
              />
            </Col>
          )}

          {type === "project" && (
            <Col lg={8} xs={24}>
              <span className="text-[#292D35] font-medium text-base">
                Builder Name
              </span>
              <TextInput
                name="builderName"
                className="h-[48px] mt-2"
                rules={[
                  { required: true, message: "Builder Name is Required" },
                ]}
              />
            </Col>
          )}
          {type === "project" || type === "property" ? (
            <Col lg={8} xs={24}>
              <span className="text-[#292D35] font-medium text-base">
                NOC Approved
              </span>
              <SelectField
                name="NOC"
                rules={[{ required: true, message: "NOC is Required" }]}
                options={[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ]}
                className="!h-[48px] mt-2"
              />
            </Col>
          ) : (
            <></>
          )}
          {type === "project" ? (
            <Col lg={8} xs={24}>
              <span className="text-[#292D35] font-medium text-base">
                Project Type
              </span>
              <SelectField
                name="projectType"
                rules={[
                  { required: true, message: "Property Type is Required" },
                ]}
                options={getProjectType?.data?.items?.map((item: any) => ({
                  label: item.title,
                  value: item.id,
                }))}
                className="!h-[48px] mt-2"
                onChange={(id: any) => {
                  form.setFieldValue("projectSubType", null);
                  onChangeProjectType(id);
                  const array = getProjectType?.data?.items?.filter(
                    (val: any) => val.id === id && val
                  );
                  setInStorage("projectType", array?.[0]?.title);
                }}
              />
            </Col>
          ) : (
            <Col lg={8} xs={24}>
              <span className="text-[#292D35] font-medium text-base">
                Inventory Type
              </span>
              <SelectField
                name="inventoryType"
                rules={[
                  { required: true, message: "Property Type is Required" },
                ]}
                options={getProjectType?.data?.items?.map((item: any) => ({
                  label: item.title,
                  value: item.id,
                }))}
                className="!h-[48px] mt-2"
                onChange={(id: any) => {
                  form.setFieldValue("inventorySubType", null);
                  onChangeProjectType(id);
                  const array = getProjectType?.data?.items?.filter(
                    (val: any) => val.id === id && val
                  );
                  setInStorage("projectType", array?.[0]?.title);
                }}
              />
            </Col>
          )}
          {type === "project" ? (
            <Col lg={8} xs={24}>
              <span className="text-[#292D35] font-medium text-base">
                Project Sub-Type
              </span>
              <SelectField
                name="projectSubType"
                rules={[
                  { required: true, message: "Property Sub-Type is Required" },
                ]}
                options={getProjectSubTypeByProjectTypeID?.data?.map(
                  (item: any) => ({
                    label: item.title,
                    value: item.id,
                  })
                )}
                onChange={(id: any) => {
                  onChangeProjectSubType(id);
                }}
                className="!h-[48px] mt-2"
              />
            </Col>
          ) : (
            <Col lg={8} xs={24}>
              <span className="text-[#292D35] font-medium text-base">
                Inventory Sub-Type
              </span>
              <SelectField
                name="inventorySubType"
                rules={[
                  { required: true, message: "Property Sub-Type is Required" },
                ]}
                options={getProjectSubTypeByProjectTypeID?.data?.map(
                  (item: any) => ({
                    label: item.title,
                    value: item.id,
                  })
                )}
                className="!h-[48px] mt-2"
                onChange={(id: any) => {
                  onChangeProjectSubType(id);
                }}
              />
            </Col>
          )}
          {type === "project" || type === "existing" ? (
            <Col lg={8} xs={24}>
              <span className="text-[#292D35] font-medium text-base">
                Number of units
              </span>
              <TextInput
                name="numberOfUnits"
                className="h-[48px] mt-2"
                rules={[{ required: true, message: "City is Required" }]}
                isNumber
              />
            </Col>
          ) : (
            <></>
          )}

          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Sell / Rent
            </span>
            <SelectField
              name="sellRent"
              rules={[
                { required: true, message: "Property Sub-Type is Required" },
              ]}
              options={["Sale", "Rent"].map((item: any) => ({
                label: item,
                value: item.toLowerCase(),
              }))}
              className="!h-[48px] mt-2"
            />
          </Col>

          <Col lg={16} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Description
            </span>
            <Form.Item name={"description"} rules={[{ required: true }]}>
              <TextArea rows={4} />
            </Form.Item>
          </Col>

          {type === "project" || type === "property" ? (
            <>
              <Col lg={8} xs={24}>
                <span className="text-[#292D35] font-medium text-base">
                  City
                </span>
                <TextInput
                  name="city"
                  className="h-[48px] mt-2"
                  rules={[{ required: true, message: "City is Required" }]}
                />
              </Col>
              <Col lg={8} xs={24}>
                <span className="text-[#292D35] font-medium text-base">
                  Address
                </span>
                <TextInput
                  name="address"
                  className="h-[48px] mt-2"
                  rules={[{ required: true, message: "Address is Required" }]}
                />
              </Col>
              <Col lg={8} xs={24}>
                <span className="text-[#292D35] font-medium text-base">
                  Location
                </span>
                <TextInput
                  name="location"
                  className="h-[48px] mt-2"
                  rules={[{ required: true, message: "Location is Required" }]}
                />
              </Col>
              <Col sm={24} lg={8}>
                <MapsLocation
                  markers={markers}
                  setMarkers={setMarkers}
                  setSelectedPlace={setSelectedPlace}
                />
              </Col>
            </>
          ) : (
            ""
          )}
        </Row>
      </SectionContainer>
      <SectionContainer
        title={"Pricing and Area Size"}
        subtitle={"Provide the value & size for the inventory"}
      >
        <Row gutter={24}>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">Price</span>
            <TextInput
              name="price"
              className="h-[48px] mt-2"
              rules={[{ required: true, message: "Price is Required" }]}
              isNumber
            />
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Area Size
            </span>
            <TextInput
              name="areaSize"
              className="h-[48px] mt-2"
              rules={[{ required: true, message: "Area Size is Required" }]}
              isNumber
            />
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">Units</span>
            <SelectField
              name="units"
              rules={[{ required: true, message: "Units is Required" }]}
              options={getLandArea?.data?.items?.map((item: any) => ({
                label: item.title,
                value: item.id,
              }))}
              className="!h-[48px] mt-2"
            />
          </Col>
        </Row>
      </SectionContainer>
      <Col sm={24}>
        <div className="flex items-center justify-between gap-4 mt-5">
          <Button
            label={
              <div className="flex items-center gap-2">
                <BsArrowLeft />
                <span>Back</span>
              </div>
            }
            variant="outlined"
            disabled
          />
          <Button label="Continue" variant="filled" htmlType="submit" />
        </div>
      </Col>
    </Form>
  );
};

export default PropertyDetailsStep;
