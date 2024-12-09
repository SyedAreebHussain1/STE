import { Col, Form, Row } from "antd";
import SectionContainer from "../../../../SectionContainer";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { SelectField } from "../../../../../helpers/inputs/SelectField";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import MapsLocation from "../../../../../helpers/Map/MapsLocation";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../../../../../helpers/inputs/Button";
import { useForm } from "antd/es/form/Form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getInventoryDetailsForEditApi } from "../../../../../redux/api/InventoryManagement";
import { useDispatch, useSelector } from "react-redux";

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
  const [markers, setMarkers] = useState<any>([]);
  const [form] = useForm();

  const onFinish = (val: any) => {
    props.next();
  };
  const param = useParams();
  const dispatch = useDispatch();
  const getInventoryForEdit = useSelector(
    (state: any) => state.getInventoryForEdit
  );
  useEffect(() => {
    const data = getInventoryForEdit?.data;
    if (data && props?.current == 0) {
      form.setFieldValue("propertyTitle", data?.inventory?.[0]?.title);
      form.setFieldValue("NOC", data?.NOC ? "Yes" : "No");
      form.setFieldValue(
        "inventoryType",
        data?.inventory?.[0]?.projectType?.title
      );
      form.setFieldValue(
        "inventorySubType",
        data?.inventory?.[0]?.projectSubType?.title
      );
      form.setFieldValue("description", data?.inventory?.[0]?.description);
      form.setFieldValue("city", data?.city);
      form.setFieldValue("location", data?.address);
      form.setFieldValue("address", data?.address);
      form.setFieldValue("price", data?.inventory?.[0]?.price);
      form.setFieldValue("areaSize", data?.inventory?.[0]?.landSize);
      form.setFieldValue("units", data?.inventory?.[0]?.landArea?.title);
      setMarkers([
        {
          lat: data?.latitude ? Number(data?.latitude) : 24.860966,
          lng: data?.longitude ? Number(data?.longitude) : 66.990501,
          time: new Date(),
        },
      ]);
    }
  }, [getInventoryForEdit?.data]);
  useEffect(() => {
    if (props?.current == 0) {
      getInventoryDetailsForEditApi(param.id, dispatch);
    }
  }, [param.id, props?.current]);
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
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Property Title
            </span>
            <TextInput
              name="propertyTitle"
              className="h-[48px] mt-2"
              disabled
              rules={[
                { required: true, message: "Property Title is Required" },
              ]}
            />
          </Col>

          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              NOC Approved
            </span>
            <SelectField
              name="NOC"
              disabled
              rules={[{ required: true, message: "NOC is Required" }]}
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
              className="!h-[48px] mt-2"
            />
          </Col>

          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Inventory Type
            </span>
            <SelectField
              name="inventoryType"
              rules={[{ required: true, message: "Property Type is Required" }]}
              options={[]}
              className="!h-[48px] mt-2"
              disabled
            />
          </Col>

          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Inventory Sub-Type
            </span>
            <SelectField
              name="inventorySubType"
              rules={[
                { required: true, message: "Property Sub-Type is Required" },
              ]}
              options={[]}
              disabled
              className="!h-[48px] mt-2"
            />
          </Col>

          <Col lg={16} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Description
            </span>
            <Form.Item name={"description"} rules={[{ required: true }]}>
              <TextArea rows={4} disabled />
            </Form.Item>
          </Col>

          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">City</span>
            <TextInput
              name="city"
              className="h-[48px] mt-2"
              disabled
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
              disabled
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
              disabled
              rules={[{ required: true, message: "Location is Required" }]}
            />
          </Col>
          <Col sm={24} lg={8}>
            <MapsLocation
              markers={markers}
              setMarkers={() => {}}
              notClickable
              setSelectedPlace={() => {}}
            />
          </Col>
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
              disabled
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
              disabled
              rules={[{ required: true, message: "Area Size is Required" }]}
              isNumber
            />
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">Units</span>
            <SelectField
              name="units"
              rules={[{ required: true, message: "Units is Required" }]}
              options={[]}
              className="!h-[48px] mt-2"
              disabled
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
