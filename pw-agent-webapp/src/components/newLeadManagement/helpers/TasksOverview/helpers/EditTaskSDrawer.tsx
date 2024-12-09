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
  getCampaignsByAgencyIdApi,
  getCampaignsIdApi,
  getLeadsByCampaignIdApi,
  getProfileStaffListApi,
  getTeamMemberApi,
  updateTaskApi,
} from "../../../../../redux/api/TaskOverview";
import { cleargetLeadsByCampaignId } from "../../../../../redux/slices/TaskOverview/getLeadsByCampaignIdSlice";
import { clearGetCampaignsByAgencyId } from "../../../../../redux/slices/TaskOverview/getCampaignsByAgencyIdSlice";
import { clearGetProfileStaffList } from "../../../../../redux/slices/TaskOverview/getProfileStaffListSlice";
import { getFromStorage } from "../../../../../utils/storage";
import dayjs from "dayjs";
import { clearGetTeamMember } from "../../../../../redux/slices/TaskOverview/getTeamMemberSlice";
import calendarIcon from "../../../../../assets/calanderIcon.png";
const { TextArea } = Input;
const { Option } = Select;
type AddNewStaffDrawerPorps = {
  toggle: any;
  setToggle: any;
};

const EditTaskSDrawer: React.FC<AddNewStaffDrawerPorps> = ({
  toggle,
  setToggle,
}: AddNewStaffDrawerPorps) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();

  let user = getFromStorage("user");
  const [campaign, setCampaign] = useState(null);
  const [note, setNote] = useState<string>("");
  const getTeamMember = useSelector((state: any) => state?.getTeamMember);
  const getCampaignsId = useSelector((state: any) => state?.getCampaignsId);
  const getProfileStaffList = useSelector(
    (state: any) => state?.getProfileStaffList
  );
  const getCampaignsByAgencyId = useSelector(
    (state: any) => state?.getCampaignsByAgencyId
  );
  const getLeadsByCampaignId = useSelector(
    (state: any) => state?.getLeadsByCampaignId
  );
  const updateTask = useSelector((state: any) => state?.updateTask);

  function onFinish(value: any) {
    const { notes, dueDate, campaign, lead_id, title, priority, description } =
      value;

    const body = {
      ...value,
      assignedTo: toggle?.assignedTo,
    };
    updateTaskApi(dispatch, body, toggle?.id, onSuccess);
  }

  function onSuccess() {
    setToggle(null);
    form.resetFields();
    dispatch(cleargetLeadsByCampaignId());
    dispatch(clearGetProfileStaffList());
    dispatch(clearGetCampaignsByAgencyId());
    dispatch(clearGetTeamMember());
  }
  useEffect(() => {
    getCampaignsByAgencyIdApi(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (campaign) {
      getLeadsByCampaignIdApi(dispatch, campaign, {
        page: 1,
        limit: 11,
      });
    }
  }, [campaign]);

  useEffect(() => {
    form.setFieldValue("lead_id", null);
    if (
      toggle?.lead?.client?.name &&
      getLeadsByCampaignId?.data?.items?.length > 0
    ) {
      const leadSelected = getLeadsByCampaignId?.data?.items?.filter(
        (item: any) => item?.client?.name === toggle?.lead?.client?.name
      )?.[0];

      form.setFieldValue("lead_id", leadSelected?.id);
    }
  }, [getLeadsByCampaignId]);

  function handleClose() {
    setToggle(null);
    dispatch(cleargetLeadsByCampaignId());
    dispatch(clearGetProfileStaffList());
    dispatch(clearGetCampaignsByAgencyId());
    dispatch(clearGetTeamMember());
    form.resetFields();
  }
  useEffect(() => {
    if (toggle) {
      form.setFields([
        {
          name: "title",
          value: toggle?.title,
        },
        {
          name: "description",
          value: toggle?.description,
        },
        {
          name: "notes",
          value: toggle?.notes,
        },
        {
          name: "priority",
          value: toggle?.priority,
        },
        {
          name: "dueDate",
          value: dayjs(toggle.dueDate),
        },
        {
          name: "manager",
          value: toggle?.assignedToUser?.createdByUser?.profile?.fullName,
        },
        {
          name: "staff",
          value: toggle?.assignedToUser?.profile?.fullName,
        },
      ]);
      setNote(toggle?.notes);
      if (toggle?.lead?.campaign?.title && getCampaignsByAgencyId?.data) {
        const campaignSelected = getCampaignsByAgencyId?.data?.filter(
          (item: any) => item?.title === toggle?.lead?.campaign?.title
        )?.[0];

        form.setFieldValue("campaign", campaignSelected?.id);
        setCampaign(campaignSelected?.id);
      }
    }
  }, [toggle, getCampaignsByAgencyId]);

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
        open={toggle ? true : false}
        closable={false}
        onClose={() => handleClose()}
        extra={
          <Space>
            <CloseOutlined onClick={() => handleClose()} />
          </Space>
        }
      >
        <Form
          onFinish={onFinish}
          name="editTask"
          form={form}
          autoComplete="off"
          initialValues={{ remember: true }}
        >
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={14} md={14}>
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
                        required: false,
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
                        required: false,
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
                          required: false,
                          message: "Please input your Notes",
                        },
                      ]}
                      name="notes"
                    >
                      <TextArea
                        maxLength={300}
                        placeholder="Add a note.."
                        className="h-10 resize-none rounded-none border-t-0 border-r-0 border-l-0 border-b border-b-[#98A2B3]"
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] font-medium text-[.8125rem]">
                      Due Date
                    </p>
                  </div>
                  <Form.Item
                    name="dueDate"
                    rules={[
                      {
                        required: false,
                        message: "Please Select Date",
                      },
                    ]}
                  >
                    <DatePicker
                      showNow={false}
                      className="p-1 w-full h-[44px]"
                      format={"MMM DD"}
                      disabledDate={disabledEndDate}
                      popupClassName={"customOkButtonStyle"}
                      showTime={{ format: "HH:mm" }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <div>
                    <h3 className="text-[.8125rem] font-medium text-[#344054]">
                      Created
                    </h3>
                    <p>
                      {dayjs(toggle?.createdAt).format("MMM D, YYYY, h:mm A")}
                    </p>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-[.8125rem] font-medium text-[#344054]">
                      Updated
                    </h3>
                    <p>
                      {dayjs(toggle?.updatedAt).format("MMM D, YYYY, h:mm A")}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={24} xs={24} lg={10} md={10}>
              <Row gutter={16}>
                <Col
                  sm={24}
                  xs={24}
                  lg={24}
                  md={24}
                  className="py-[5px] rounded-[4px]"
                >
                  <div className="border-[1px] min-h-[68px] p-2  rounded-md">
                    <div className="flex justify-between">
                      <p className="text-[.8125rem] p-1 text-[#667085] font-medium">
                        Assign to
                      </p>
                      <DownOutlined />
                    </div>

                    <div>
                      <div>
                        {user.role !== "agentManager" && (
                          <div className="mt-2">
                            <p>Manager</p>
                            <Form.Item name="manager">
                              <Input
                                disabled
                                className="w-full h-[44px] "
                              ></Input>
                            </Form.Item>
                          </div>
                        )}
                        <div className="mt-2">
                          <p>Staff</p>
                          <Form.Item name="staff">
                            <Input
                              disabled
                              className="w-full h-[44px] "
                            ></Input>
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
                      <DownOutlined />
                    </div>
                    <div className="px-1">
                      <div>
                        <div className="mt-2">
                          <p>Campaign</p>
                          {
                            <Form.Item name="campaign">
                              <Select
                                allowClear
                                onChange={(e) => {
                                  setCampaign(e);
                                  form.setFieldValue("lead_id", null);
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
                                {getCampaignsByAgencyId.data?.map(
                                  (item: any) => {
                                    return (
                                      <Option value={item.id}>
                                        <p className="mt-0 mb-0">
                                          {item?.title}
                                        </p>
                                      </Option>
                                    );
                                  }
                                )}
                              </Select>
                            </Form.Item>
                          }
                        </div>
                        <div className="mt-2">
                          <p>Lead</p>
                          {
                            <Form.Item name="lead_id">
                              <Select
                                allowClear
                                className="w-full h-[44px] remove-select-border"
                                placeholder="Select"
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
                                {getLeadsByCampaignId?.data?.items?.map(
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
                          }
                        </div>
                      </div>
                    </div>
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
                          required: false,
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
            </Col>
          </Row>
          <div className="flex justify-end gap-2 mt-3 mb-2">
            <Button
              type="primary"
              htmlType="submit"
              loading={updateTask.loading}
              className="bg-primary text-[#fff] border-none h-[48px]  text-[1rem] font-semibold"
            >
              Update Task
            </Button>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default EditTaskSDrawer;
