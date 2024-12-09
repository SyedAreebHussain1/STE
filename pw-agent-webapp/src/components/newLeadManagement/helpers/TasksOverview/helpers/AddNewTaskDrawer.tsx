import React, { useEffect, useState } from "react";
import {
  DatePicker,
  Col,
  Drawer,
  Form,
  Row,
  Select,
  Space,
  Input,
  Button,
} from "antd";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../../../helpers/inputs/TextInput";
import {
  createTaskApi,
  getCampaignsByAgencyIdApi,
  getLeadsByCampaignIdApi,
  getProfileStaffListApi,
  getTeamMemberApi,
} from "../../../../../redux/api/TaskOverview";
import { cleargetLeadsByCampaignId } from "../../../../../redux/slices/TaskOverview/getLeadsByCampaignIdSlice";
import { clearGetCampaignsByAgencyId } from "../../../../../redux/slices/TaskOverview/getCampaignsByAgencyIdSlice";
import { clearGetProfileStaffList } from "../../../../../redux/slices/TaskOverview/getProfileStaffListSlice";
import { getFromStorage } from "../../../../../utils/storage";
import { clearGetTeamMember } from "../../../../../redux/slices/TaskOverview/getTeamMemberSlice";
import type { TimePickerProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Value } from "react-phone-number-input/core";
import { SelectField } from "../../../../../helpers/inputs/SelectField";
import { values } from "@ant-design/plots/es/core/utils";
const { TextArea } = Input;
const { Option } = Select;
type AddNewStaffDrawerPorps = {
  toggle: boolean;
  setToggle: (e: boolean) => void | undefined | null;
};
const AddNewTaskDrawer: React.FC<AddNewStaffDrawerPorps> = ({
  toggle,
  setToggle,
}: AddNewStaffDrawerPorps) => {
  const [form]: any = useForm();
  dayjs.extend(customParseFormat);
  const dispatch: AppDispatch = useDispatch();
  const [assignTo, setAssignTo] = useState(false);
  const [associateLead, setAssociateLead] = useState(false);
  const [manager, setManager] = useState(null);
  const [staff, setStaff] = useState(null);
  let user = getFromStorage("user");
  const [compaign, setCompaign] = useState(null);
  const [note, setNote] = useState<string>("");
  const getTeamMember = useSelector((state: any) => state?.getTeamMember);
  const onChange: TimePickerProps["onChange"] = (time, timeString) => {
    console.log(time, timeString);
  };
  const getProfileStaffList = useSelector(
    (state: any) => state?.getProfileStaffList
  );
  const getCampaignsByAgencyId = useSelector(
    (state: any) => state?.getCampaignsByAgencyId
  );
  const getLeadsByCampaignId = useSelector(
    (state: any) => state?.getLeadsByCampaignId
  );
  const createTask = useSelector((state: any) => state?.createTask);
  function onFinish(value: any) {
    if (
      user.role === "agentOwner" &&
      !value?.assignedToManager &&
      !value?.assignedToStaff
    ) {
      form.setFields([
        {
          name: "assignedToManager",
          errors: ["Please Select Manager or Staff"],
        },
      ]);
      form.setFields([
        {
          name: "assignedToStaff",
          errors: ["Please Select Staff or Manager"],
        },
      ]);
      return;
    }

    const { notes, ...items } = value;
    if (assignTo && associateLead) {
      const body = {
        ...items,
        notes: note,
        assignedTo: staff || manager,
      };

      createTaskApi(dispatch, body, onSuccess);
    } else {
      setAssignTo(true);
      setAssociateLead(true);
    }
  }
  function onSuccess() {
    setToggle(false);
    dispatch(cleargetLeadsByCampaignId());
    dispatch(clearGetProfileStaffList());
    dispatch(clearGetCampaignsByAgencyId());
    dispatch(clearGetTeamMember());
    form.resetFields();
  }
  useEffect(() => {
    if (user.role === "agentOwner") {
      getTeamMemberApi(dispatch);
    }
    getCampaignsByAgencyIdApi(dispatch);
    if (
      user.userId &&
      (user.role === "agentManager" || user.role === "agentOwner")
    ) {
      getProfileStaffListApi(dispatch, user.userId);
    }
  }, [dispatch]);

  const [compaing, setcampeign] = useState([]);
  useEffect(() => {
    if (manager) {
      getProfileStaffListApi(dispatch, manager);
    }
  }, [manager]);
  useEffect(() => {
    if (compaign) {
      getLeadsByCampaignIdApi(dispatch, compaign, { page: 1, limit: 10 });
    }
  }, [compaign]);

  function handleClose() {
    setToggle(false);
    dispatch(cleargetLeadsByCampaignId());
    dispatch(clearGetProfileStaffList());
    dispatch(clearGetCampaignsByAgencyId());
    form.resetFields();
    dispatch(clearGetTeamMember());
    form.resetFields();
  }
  function onManagerChangerAndManagerNotSelect() {
    if (
      user.userId &&
      (user.role === "agentManager" || user.role === "agentOwner")
    ) {
      getProfileStaffListApi(dispatch, user.userId);
    }
  }
  const disabledEndDate = (endDate: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate && endDate < today;
  };

  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium text-[#475467]">
            Task Details
          </h3>
        }
        placement="right"
        width={800}
        open={toggle}
        closable={false}
        onClose={() => handleClose()}
        extra={
          <Space>
            <CloseOutlined onClick={() => setToggle(false)} />
          </Space>
        }
      >
        <Form
          onFinish={onFinish}
          name="addNewTask"
          form={form}
          autoComplete="off"
          initialValues={{ remember: true }}
        >
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={14} md={14} style={{ height: "75vh" }}>
              <Row gutter={16}>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className=" mb-1 mt-2">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Title
                    </p>
                  </div>
                  <TextInput
                    className="h-[44px] "
                    placeholder="Title"
                    rules={[
                      {
                        required: true,
                        message: "Please input your title",
                      },
                    ]}
                    name="title"
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Description
                    </p>
                  </div>
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Description",
                      },
                    ]}
                  >
                    <TextArea
                      maxLength={100}
                      placeholder="Description"
                      style={{ height: 102, resize: "none" }}
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Notes
                    </p>
                  </div>
                  <hr />
                  <div className="mt-4">
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your Notes",
                        },
                      ]}
                    >
                      <TextArea
                        onChange={(e) => setNote(e.target.value)}
                        maxLength={300}
                        placeholder="Add a note.."
                        className="h-10 resize-none rounded-none border-t-0 border-r-0 border-l-0 border-b border-b-[#98A2B3]"
                      />
                      <hr />
                    </Form.Item>
                  </div>

                  <div>
                    <Form.Item
                      name="dueDate"
                      rules={[
                        {
                          required: true,
                          message: "Please Select Due Date",
                        },
                      ]}
                    >
                      <DatePicker
                        showNow={false}
                        placeholder="Due Date"
                        disabledDate={disabledEndDate}
                        showTime={{ format: "HH:mm" }}
                        popupClassName={"customOkButtonStyle"}
                        className="p-1 mt-4 w-full h-[44px] "
                        format="YYYY-MM-DD HH:mm"
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={24} xs={24} lg={10} md={10} style={{ height: "75vh" }}>
              <Row gutter={16}>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="border-[1px] min-h-[68px] p-2  rounded-md">
                    <div
                      className="flex justify-between"
                      onClick={() => setAssignTo(!assignTo)}
                    >
                      <p className="text-[.8125rem] p-1 text-[#667085] font-medium">
                        Assign to
                      </p>
                      <DownOutlined />
                    </div>
                    {/* {assignTo && ( */}
                    <div>
                      <div>
                        {user.role !== "agentManager" && (
                          <div className="mt-2">
                            <p>Manager</p>
                            <Form.Item
                              name="assignedToManager"
                              rules={[
                                {
                                  required: false,
                                  message: "Please Select your Manager",
                                },
                              ]}
                            >
                              <Select
                                onChange={(e) => {
                                  setManager(e);
                                  setStaff(null);
                                  if (!e) {
                                    onManagerChangerAndManagerNotSelect();
                                  }
                                  form.setFields([
                                    {
                                      name: "assignedToStaff",
                                      errors: [],
                                      value: null,
                                    },
                                  ]);
                                }}
                                className="w-full h-[44px] remove-select-border"
                                placeholder="Select"
                                allowClear
                                dropdownRender={(menu) => (
                                  <div>
                                    <Input
                                      placeholder="Search"
                                      className="p-[5px]"
                                      style={{ marginBottom: 10 }}
                                    />
                                    {menu}
                                  </div>
                                )}
                                filterOption={(input, option: any) =>
                                  option?.children.toLowerCase().indexOf(2) >= 0
                                }
                              >
                                {getTeamMember.data?.map((item: any) => {
                                  return (
                                    <Option value={item.id}>
                                      <p className="mt-0 mb-0">
                                        {item?.profile.fullName}
                                      </p>
                                    </Option>
                                  );
                                })}
                              </Select>
                            </Form.Item>
                          </div>
                        )}
                        <div className="mt-2">
                          <p>Staff</p>
                          <Form.Item
                            name="assignedToStaff"
                            rules={[
                              {
                                required: user.role === "agentManager",
                                message: "Please Select your Staff",
                              },
                            ]}
                          >
                            <Select
                              className="w-full h-[44px] remove-select-border"
                              placeholder="Select"
                              allowClear
                              onChange={(e) => {
                                setStaff(e);
                                form.setFields([
                                  {
                                    name: "assignedToManager",
                                    errors: [],
                                  },
                                ]);
                              }}
                              dropdownRender={(menu) => (
                                <div>
                                  <Input
                                    placeholder="Search"
                                    className="p-[5px]"
                                    style={{ marginBottom: 10 }}
                                  />
                                  {menu}
                                </div>
                              )}
                              filterOption={(input, option: any) =>
                                option?.children.toLowerCase().indexOf(2) >= 0
                              }
                            >
                              {getProfileStaffList.data?.map((item: any) => {
                                return (
                                  <Option value={item.id}>
                                    <p className="mt-0 mb-0">
                                      {item?.profile.fullName}
                                    </p>
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    {/* )} */}
                  </div>
                  <div className="border-[1px] min-h-[68px] p-1 mt-4 rounded-md">
                    <div className="flex justify-between">
                      <p className="text-[.8125rem] p-1 text-[#667085] font-medium">
                        Associate Lead
                      </p>
                      <DownOutlined />
                    </div>
                    <div>
                      <div>
                        <div className="mt-2">
                          <p>Compaign</p>
                          <Form.Item
                            rules={[
                              {
                                required: false,
                                message: "Please input your Compaign",
                              },
                            ]}
                          >
                            <Select
                              allowClear
                              onChange={(e) => {
                                if (!e) {
                                  dispatch(cleargetLeadsByCampaignId());
                                }
                                setCompaign(e);
                                form.setFields([
                                  {
                                    name: "lead_id",
                                    value: null,
                                  },
                                ]);
                              }}
                              className="w-full h-[44px] remove-select-border"
                              placeholder="Select"
                              dropdownRender={(menu) => (
                                <div>
                                  <Input
                                    placeholder="Search"
                                    className="p-[5px]"
                                    style={{ marginBottom: 10 }}
                                  />
                                  {menu}
                                </div>
                              )}
                              filterOption={(input, option: any) =>
                                option?.children.toLowerCase().indexOf(2) >= 0
                              }
                            >
                              {getCampaignsByAgencyId.data?.map((item: any) => {
                                return (
                                  <Option value={item.id}>
                                    <p className="mt-0 mb-0">{item?.title}</p>
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                        </div>
                        <div className="mt-2">
                          <p>Lead</p>
                          <Form.Item
                            name="lead_id"
                            rules={[
                              {
                                required: false,
                                message: "Please input your Compaign",
                              },
                            ]}
                          >
                            <Select
                              className="w-full h-[44px] remove-select-border"
                              placeholder="Select"
                              allowClear
                              disabled={
                                !getLeadsByCampaignId?.data?.items?.length
                              }
                              dropdownRender={(menu) => (
                                <div>
                                  <Input
                                    placeholder="Search"
                                    className="p-[5px]"
                                    style={{ marginBottom: 10 }}
                                  />
                                  {menu}
                                </div>
                              )}
                              filterOption={(input, option: any) =>
                                option?.children.toLowerCase().indexOf(2) >= 0
                              }
                            >
                              {getLeadsByCampaignId?.data?.items?.length > 0 &&
                                getLeadsByCampaignId?.data?.items?.map(
                                  (item: any) => {
                                    return (
                                      <Option value={item.id}>
                                        <p className="mt-0 mb-0">
                                          {item?.client?.name}
                                        </p>
                                      </Option>
                                    );
                                  }
                                )}
                            </Select>
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    {/* )} */}
                  </div>
                  <div className="border-[1px] min-h-[68px] p-1 mt-4 rounded-md">
                    <div className="flex justify-between">
                      <p className="text-[.8125rem] p-1 text-[#667085] font-medium">
                        Set Priority
                      </p>
                      <DownOutlined />
                    </div>
                    <Form.Item
                      name="priority"
                      rules={[
                        {
                          required: true,
                          message: "Please input your priority",
                        },
                      ]}
                    >
                      <Select
                        className="w-full h-[44px] remove-select-border"
                        placeholder="Select"
                      >
                        {["High", "Medium", "Low"].map((item: any) => {
                          return (
                            <Option value={item}>
                              <p className="mt-0 mb-0">{item}</p>
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              <div className="flex  mt-4  gap-2 justify-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={createTask.loading}
                  className="bg-primary text-[#fff] border-none h-[48px]  text-[1rem] font-semibold"
                >
                  Add New Task
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddNewTaskDrawer;
