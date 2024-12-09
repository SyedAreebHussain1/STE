import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import projectIcon from "../../../assets/building.png";
import singlePropertyIcon from "../../../assets/homeIcon.png";
import SelectFieldComponent from "../../../helpers/inputs/SelectFieldComponent";
import TextInput from "../../../helpers/inputs/TextInput";
import {
  addNewLeadApi,
  getAllcampaignsApi,
  getAvailableInventoriesByProjectIdApi,
  pwpGetAllProductListApi,
  pwpGetAllProjectListApi,
} from "../../../redux/api/LeadManagement";
import { AppDispatch } from "../../../redux/store";
import { infoMessage } from "../../../utils/message";
const { TextArea } = Input;
const { Option } = Select;
type CountryInputProps = {
  name: string | undefined | null;
  placeholder: string | undefined | null;
  phone: any;
  setPhone: any;
};
type FinishType = {
  name: string;
  email: string;
  location: string;
  description: string;
  inventoryValue: string;
  propertyWalletInventoryPlotId?: number[] | number;
  inventoryId?: number | number[];
  campaignId: any;
};
const CountryInput: React.FC<CountryInputProps> = ({
  name,
  placeholder,
  phone,
  setPhone,
}: CountryInputProps) => {
  return (
    <PhoneInput
      placeholder={placeholder}
      value={phone}
      onChange={setPhone}
      maxLength={12}
      country="PK"
      name={name}
      className="h-[48px] p-[9px] border border-[#D0D5DD] rounded-[8px] mb-5"
      defaultCountry="PK"
    />
  );
};

type AddNewStaffDrawerPorps = {
  toggle: boolean;
  setToggle: (e: boolean) => void | undefined | null;
  campaignData: any;
};

const AddNewLeadDrawer: React.FC<AddNewStaffDrawerPorps> = ({
  toggle,
  setToggle,
  campaignData,
}: AddNewStaffDrawerPorps) => {
  const [index, setIndex] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const [phone, setPhone] = useState<string>("");
  const [inventoryValue, setInventoryValue] = useState<string>("");
  const [projectId, setProjectId] = useState("");
  const [form] = useForm();
  const [projectSearch, setProjectSearch] = useState("");
  const pwpGetAllProductList = useSelector(
    (state: any) => state?.pwpGetAllProductList
  );
  const pwpGetAllProjectList = useSelector(
    (state: any) => state?.pwpGetAllProjectList
  );
  const getAvailableInventoriesByProjectId = useSelector(
    (state: any) => state?.getAvailableInventoriesByProjectId
  );
  const getAllCampaigns = useSelector((state: any) => state?.getAllCampaigns);

  const addNewLead = useSelector((state: any) => state?.addNewLead);

  useEffect(() => {
    if (inventoryValue || projectSearch) {
      if (index == 0) {
        pwpGetAllProjectListApi(
          dispatch,
          pageLimit,
          inventoryValue,
          projectSearch
        );
      } else if (index == 1 && inventoryValue) {
        pwpGetAllProductListApi(dispatch, pageLimit, inventoryValue);
      }
    }
  }, [inventoryValue, projectSearch, index]);
  useEffect(() => {
    if (projectId) {
      getAvailableInventoriesByProjectIdApi(
        dispatch,
        Number(projectId),
        pageLimit
      );
    }
  }, [projectId]);

  const onFinish = (value: FinishType) => {
    const body = {
      ...value,
      phone,
      campaignId: campaignData?.id,
      leadSource: "WEB",
    };
    if (body) {
      addNewLeadApi(dispatch, body, onSuccess);
    }
  };
  function onSuccess() {
    setToggle(false);
    setIndex(0);
    form.setFieldValue("propertyWalletInventory", null);
    form.setFieldValue("inventoryId", null);
    form.setFieldValue("propertyWalletProductId", null);
    setInventoryValue("");
  }
  useEffect(() => {
    form.setFieldValue("propertyWalletInventory", null);
    form.setFieldValue("inventoryId", null);
    form.setFieldValue("propertyWalletProductId", null);
  }, [index, inventoryValue]);
  useEffect(() => {
    form.setFieldValue("inventoryValue", null);
    setInventoryValue("");
  }, [index]);
  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium text-[#475467]">
            Add New Lead
          </h3>
        }
        placement="right"
        width={1190}
        open={toggle}
        closable={false}
        onClose={() => setToggle(false)}
        extra={
          <Space>
            <CloseOutlined onClick={() => setToggle(false)} />
          </Space>
        }
      >
        <Form
          onFinish={onFinish}
          name="addNewLead"
          form={form}
          autoComplete="off"
          initialValues={{ remember: true }}
        >
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={10} md={10}>
              <Row gutter={16}>
                <Col sm={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Campaign Name
                    </p>
                  </div>
                  <Input
                    value={campaignData?.title}
                    disabled
                    size="large"
                    className="h-[44px] mb-[24px]"
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className=" mb-1 ">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Customer Name
                    </p>
                  </div>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                    name="name"
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Email Address
                    </p>
                  </div>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Email"
                    name="email"
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Phone no
                    </p>
                  </div>
                  <CountryInput
                    name="phone"
                    placeholder={"Phone no"}
                    phone={phone}
                    setPhone={setPhone}
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Location
                    </p>
                  </div>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Location"
                    name="location"
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Description
                    </p>
                  </div>
                  <Form.Item name="description">
                    <TextArea
                      maxLength={100}
                      placeholder="Description"
                      style={{ height: 183, resize: "none" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col sm={12} xs={24} lg={14} md={14}>
              <p className="text-[.8125rem]  font-medium text-[#344054]">
                Select Inventory for the Lead
              </p>
              <Row gutter={16}>
                {[
                  {
                    title: "Project",
                    description: "Select the inventories from project",
                    icon: projectIcon,
                  },
                  {
                    title: "Single Property",
                    description: "Attach the single listing Property",
                    icon: singlePropertyIcon,
                  },
                ].map((item, i) => {
                  return (
                    <Col sm={24} xs={12} lg={12} md={12} key={i}>
                      <div
                        style={{
                          border:
                            index === i ? "1px solid rgb(39,163,163)" : "",
                        }}
                        className="rounded-[12px] p-[16px] mt-2 border border-gray-300 cursor-pointer"
                        onClick={() => setIndex(i)}
                      >
                        <div className="flex justify-between">
                          <div>
                            <img src={item.icon} alt="" />
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              className={
                                index === i
                                  ? `rounded-full w-4 h-4 bg-[rgb(39,163,163)] align-middle border border-gray-300 appearance-none outline-none cursor-pointer`
                                  : `rounded-full w-4 h-4 bg-white align-middle border border-gray-300 appearance-none outline-none cursor-pointer`
                              }
                              checked={index === i}
                            />
                          </div>
                        </div>
                        <p className="text-[1rem] text-[rgb(29,41,57)] font-medium mt-1 mb-1">
                          {item.title}
                        </p>
                        <div>
                          <p className="text-[.8125rem] text-[rgb(71,84,103)] font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
                <Col sm={24} xs={24} lg={24} md={24} className="mt-3">
                  <div className="mt-1 mb-1">
                    <p className="text-[#667085] font-medium text-[.8125rem]">
                      Inventory From
                    </p>
                  </div>
                  <Form.Item name="inventoryValue">
                    <Select
                      className="w-full h-[44px]"
                      placeholder="Select"
                      onChange={(e) => setInventoryValue(e)}
                      options={[
                        {
                          value: "propertyWalletInventory",
                          label: "Property Wallet Inventory",
                        },
                        { value: "myAgency", label: "My Agency" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                {index === 0 ? (
                  <>
                    <Col sm={24} xs={24} lg={24} md={24}>
                      <div className="mt-1 mb-1">
                        <p className="text-[#667085] font-medium text-[.8125rem]">
                          Select Project
                        </p>
                      </div>
                      <Form.Item
                        name={
                          inventoryValue !== "propertyWalletInventory"
                            ? "inventoryId"
                            : ""
                        }
                      >
                        <Select
                          className="w-full h-[44px]"
                          allowClear
                          placeholder="Select"
                          onChange={(e) => setProjectId(e)}
                          dropdownRender={(menu) => (
                            <div>
                              <Input
                                placeholder="Search"
                                className="p-[5px]"
                                value={projectSearch}
                                onChange={(e) =>
                                  setProjectSearch(e.target.value)
                                }
                                style={{ marginBottom: 10 }}
                              />
                              {menu}
                            </div>
                          )}
                          filterOption={(input, option: any) =>
                            option?.children.toLowerCase().indexOf(2) >= 0
                          }
                        >
                          {pwpGetAllProjectList?.data?.items?.map(
                            (item: any) => {
                              return (
                                <Option value={item.id}>
                                  <p className="mt-0 mb-0">
                                    {item?.projectName}
                                  </p>
                                </Option>
                              );
                            }
                          )}
                        </Select>
                      </Form.Item>
                    </Col>
                    {inventoryValue === "propertyWalletInventory" && (
                      <Col sm={24} xs={24} lg={24} md={24}>
                        <div className="mt-1 mb-1">
                          <p className="text-[#667085] font-medium text-[.8125rem]">
                            Select Project Inventory
                          </p>
                        </div>
                        <Form.Item
                          name={
                            inventoryValue === "propertyWalletInventory"
                              ? "propertyWalletInventoryPlotId"
                              : "inventoryId"
                          }
                        >
                          <Select
                            placeholder="Select"
                            mode="multiple"
                            className="w-full min-h-[44px]"
                            allowClear
                            tokenSeparators={[","]}
                          >
                            {getAvailableInventoriesByProjectId?.data?.items?.map(
                              (item: any) => {
                                return (
                                  <Option key={item.value} value={item?.id}>
                                    <div className="flex items-center">
                                      <div className="flex gap-2 items-center justify-center">
                                        <div>
                                          <p className="text-[#667085] text-[.8125rem] font-medium">
                                            Plot size{" "}
                                            {
                                              item?.propertyWalletInventory
                                                ?.landSize
                                            }
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-[#667085] text-[.8125rem] font-medium">
                                            Property type{" "}
                                            {
                                              item?.propertyWalletInventory
                                                ?.projectSubType?.title
                                            }
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Option>
                                );
                              }
                            )}
                          </Select>
                        </Form.Item>
                      </Col>
                    )}
                  </>
                ) : (
                  <>
                    <Col sm={24} xs={24} lg={24} md={24}>
                      <div className="mt-1 mb-1">
                        <p className="text-[#667085] font-medium text-[.8125rem]">
                          Select Property
                        </p>
                      </div>
                      <Form.Item
                        name={
                          inventoryValue === "propertyWalletInventory"
                            ? "propertyWalletProductId"
                            : "inventoryId"
                        }
                      >
                        <Select
                          className="w-full h-[44px]"
                          allowClear
                          placeholder="Select"
                          mode="multiple"
                          style={{ width: "100%" }}
                          options={pwpGetAllProductList?.data?.items?.map(
                            (val: any) => ({
                              label: val?.title,
                              value: val?.id,
                            })
                          )}
                          filterOption={(input, option: any) =>
                            option?.children.toLowerCase().indexOf(2) >= 0
                          }
                        />
                      </Form.Item>
                    </Col>
                  </>
                )}
              </Row>
            </Col>
          </Row>
          <div className="flex justify-end gap-2">
            <Button
              onClick={() => setToggle(false)}
              className=" text-[#475467] border-none h-[48px] bg-transparent text-[1rem] font-semibold border"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={addNewLead.loading}
              className="bg-primary text-[#fff] border-none h-[48px]  text-[1rem] font-semibold"
            >
              Add New Lead
            </Button>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewLeadDrawer;
