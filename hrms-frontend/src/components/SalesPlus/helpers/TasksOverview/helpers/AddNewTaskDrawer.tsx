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
import { getFromStorage } from "../../../../../utils/storage";
import type { TimePickerProps } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  createTaskApi,
  getAllCompanyUserCompanyDepartmentIdApi,
  getAllDepartmentsApi,
} from "../../../../../redux/api/SalesPlus/TasksOverview";
import {
  getCampaignsApi,
  getLeadsByCampaignIdApi,
} from "../../../../../redux/api/SalesPlus/Campaigns";
import { getAllCompanyDepartmentApi } from "../../../../../redux/api/SalaryManagement/SalaryDetails";
import { clearGetAllCompanyUserCompanyDepartmentId } from "../../../../../redux/slices/SalesPlus/TasksOverview/getAllCompanyUserCompanyDepartmentIdSlice";
import { clearGetLeadsByCampaignId } from "../../../../../redux/slices/SalesPlus/Campaigns/getLeadsByCampaignIdSlice";
import { clearGetCampaigns } from "../../../../../redux/slices/SalesPlus/Campaigns/getCampaignsSlice";
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
  const [manager, setManager] = useState(null);
  const [staff, setStaff] = useState(null);
  let user = getFromStorage("user");
  const [compaign, setCompaign] = useState(null);
  const [note, setNote] = useState<string>("");
  const getCampaigns = useSelector((state: any) => state?.getCampaigns);
  const getAllCompanyUserCompanyDepartmentId = useSelector(
    (state: any) => state?.getAllCompanyUserCompanyDepartmentId
  );
  const getLeadsByCampaignId = useSelector(
    (state: any) => state?.getLeadByCampaignId
  );
  const createTask = useSelector((state: any) => state?.createTask);
  const getAllDepartments = useSelector(
    (state: any) => state?.getAllDepartments
  );



  useEffect(() => {
    getAllDepartmentsApi(dispatch, {
      page: 1,
      limit: 1000,
    });
    getCampaignsApi(dispatch, {
      page: 1,
      limit: 1000,
    });
  }, [dispatch]);

  function onFinish(value: any) {
    const { notes, ...items } = value;
    const body = {
      ...items,
      notes: note,
      assignedTo: manager,
    };
    createTaskApi(dispatch, body, onSuccess);
  }
  function onSuccess() {
    setToggle(false);
    dispatch(clearGetAllCompanyUserCompanyDepartmentId());
    dispatch(clearGetLeadsByCampaignId());
    dispatch(clearGetCampaigns());
    form.resetFields();
  }

  useEffect(() => {
    if (manager) {
      getAllCompanyUserCompanyDepartmentIdApi(dispatch, manager);
    }
  }, [manager]);
  useEffect(() => {
    if (compaign) {
      getLeadsByCampaignIdApi(dispatch, { page: 1, limit: 1000 }, compaign);
    }
  }, [compaign]);

  function handleClose() {
    setToggle(false);
    dispatch(clearGetAllCompanyUserCompanyDepartmentId());
    dispatch(clearGetLeadsByCampaignId());
    dispatch(clearGetCampaigns());
    form.resetFields();
  }
  function onManagerChangerAndManagerNotSelect() {}
  const disabledEndDate = (endDate: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate && endDate < today;
  };

  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium dark:text-white text-[#475467]">
            Add Task
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
            <Col sm={24} xs={24} lg={12} md={14} style={{ height: "75vh" }}>
              <Row gutter={16}>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className=" mb-1 mt-2">
                    <p className="text-[#292D35] dark-input-label font-medium text-[.8125rem]">
                      Title
                    </p>
                  </div>
                  <TextInput
                    className="h-[44px] dark-input "
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
                      className="dark-input"
                      placeholder="Description"
                      style={{ height: 102, resize: "none" }}
                    />
                  </Form.Item>
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] dark-input-label font-medium text-[.8125rem]">
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
                        className="h-10 dark-input resize-none rounded-none border-t-0 border-r-0 border-l-0 border-b border-b-[#98A2B3]"
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
                        className="p-1 mt-4 w-full h-[44px] dark-input "
                        format="YYYY-MM-DD HH:mm"
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={24} xs={24} lg={12} md={10} style={{ height: "75vh" }}>
              <Row gutter={16}>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="border-[1px] min-h-[68px]  p-2  rounded-md">
                    <div
                      className="flex justify-between"
                      onClick={() => setAssignTo(!assignTo)}
                    >
                      <p className="text-[.8125rem] p-1 dark-input-label text-[#667085] font-medium">
                        Assign to
                      </p>
                      <DownOutlined className="dark:text-white" />
                    </div>
                    <div>
                      <div>
                        <div className="mt-2">
                          <p className="dark-input-label">Department</p>
                          <Form.Item
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
                                    name: "assignedTo",
                                    errors: [],
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
                                    className="p-[5px] dark-input-label"
                                    style={{ marginBottom: 10 }}
                                  />
                                  {menu}
                                </div>
                              )}
                              filterOption={(input, option: any) =>
                                option?.children.toLowerCase().indexOf(2) >= 0
                              }
                            >
                              {getAllDepartments?.data?.data?.map(
                                (item: any) => {
                                  return (
                                    <Option value={item.id}>
                                      <p className="mt-0 mb-0">{item?.title}</p>
                                    </Option>
                                  );
                                }
                              )}
                            </Select>
                          </Form.Item>
                        </div>

                        <div className="mt-2">
                          <p className="dark-input-label">User List</p>
                          <Form.Item
                            name="assignedTo"
                            rules={[
                              {
                                required: true,
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
                              {getAllCompanyUserCompanyDepartmentId?.data?.items.map(
                                (item: any) => {
                                  return (
                                    <Option value={item.id}>
                                      <p className="mt-0 mb-0">
                                        {item?.companyUserProfile.name}
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
                  </div>
                  <div className="border-[1px] min-h-[68px] p-1 mt-4 rounded-md">
                    <div className="flex justify-between">
                      <p className="text-[.8125rem] p-1 text-[#667085] font-medium">
                        Associate Lead
                      </p>
                      <DownOutlined className="text-white" />
                    </div>
                    <div>
                      <div>
                        <div className="mt-2">
                          <p className="dark-input-label">Compaign</p>
                          <Form.Item
                            rules={[
                              {
                                required: false,
                                message: "Please input your Compaign",
                              },
                            ]}
                          >
                            <Select
                              onChange={(e) => {
                                if (!e) {
                                  // dispatch(cleargetLeadsByCampaignId());
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
                              {getCampaigns?.data?.items?.map((item: any) => {
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
                          <p className="dark-input-label">Lead</p>
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
                      <p className="text-[.8125rem] dark-input-label p-1 text-[#667085] font-medium">
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
              <div className="flex mt-4 md:mt-48  gap-2 justify-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={createTask.loading}
                  className="dark:bg-white dark:text-dark-primary absolute    bg-light-primary text-white rounded-md border-none h-[48px]  text-[1rem] font-semibold"
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
