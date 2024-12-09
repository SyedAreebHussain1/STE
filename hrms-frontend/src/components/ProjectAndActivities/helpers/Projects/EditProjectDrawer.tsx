import { CloseOutlined } from "@ant-design/icons";
import { Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../helpers/button/RoundedButton";
import TextInput from "../../../../helpers/inputs/TextInput";
import {
  editProjectApi,
  getAllProjectsApi,
  getProjectByIdApi,
} from "../../../../redux/api/ProjectAndActivities/Project";
import { RootState } from "../../../../redux/store";
const { TextArea } = Input;

const colorList = [
  {
    label: "Orange",
    value: "#FFA18D",
  },
  {
    label: "Pink",
    value: "#FFA4D5",
  },
  {
    label: "Purple",
    value: "#ABA3EA",
  },
  {
    label: "Blue",
    value: "#8BD5FF",
  },
];

interface EditProjectDrawerProps {
  id: any;
  toggle: boolean;
  setToggle: (e: boolean) => void | undefined | null;
}

const EditProjectDrawer = ({
  id,
  toggle,
  setToggle,
}: EditProjectDrawerProps) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [scheduledTime, setScheduledTime] = useState("");
  const projectDetails = useSelector(
    (state: RootState) => state.getProjectById
  );
  function onDateChange(date: any) {
    setScheduledTime(date);
  }

  const disabledEndDate = (endDate: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate && endDate < today;
  };

  useEffect(() => {
    getProjectByIdApi(dispatch, id);
  }, [id]);

  useEffect(() => {
    form.setFieldsValue({
      colorCode: projectDetails?.data?.data?.colorCode,
      name: projectDetails?.data?.data?.name,
      description: projectDetails?.data?.data?.description,
      deadlineDate: dayjs(projectDetails?.data?.data?.deadlineDate),
    });
  }, [projectDetails]);

  function onFinish(value: any) {
    editProjectApi(dispatch, id, value, onSuccess);
  }

  const onSuccess = () => {
    getAllProjectsApi(dispatch, { page: 1, limit: 10 });
    setToggle(false);
  };

  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium text-[#475467] dark:text-white">
            Edit Project
          </h3>
        }
        placement="right"
        width={500}
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
          name="createProject"
          form={form}
          autoComplete="off"
          initialValues={{ remember: true }}
        >
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={24} md={24}>
              <Row gutter={16}>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className=" mb-1 mt-2">
                    <p className="text-[#292D35] dark:text-white font-medium text-[.8125rem]">
                      Project Name
                    </p>
                  </div>
                  <TextInput
                    className="h-[44px] dark-input "
                    placeholder="Project Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input Project Name!",
                      },
                    ]}
                    name="name"
                  />
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="mt-1 mb-1">
                    <p className="text-[#292D35] dark:text-white font-medium text-[.8125rem]">
                      Description
                    </p>
                  </div>
                  <Form.Item name="description">
                    <TextArea
                      maxLength={100}
                      placeholder="Description"
                      className="dark-input"
                      style={{ height: 183, resize: "none" }}
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Due Date
                  </span>
                  <Form.Item
                    name="deadlineDate"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                  >
                    <DatePicker
                      className="w-full h-[44px] dark-input "
                      onChange={(e) =>
                        onDateChange(dayjs(e).format("YYYY-MM-DD HH:mm"))
                      }
                      disabledDate={disabledEndDate}
                      showTime={{ format: "HH:mm" }}
                      format="YYYY-MM-DD HH:mm"
                    />
                  </Form.Item>
                </Col>

                <Col sm={24}>
                  <span className="text-[#292D35] font-medium text-base dark-input-label">
                    Colors
                  </span>
                  <Form.Item
                    className="h-[44px] dark-input"
                    name="colorCode"
                    rules={[
                      {
                        required: true,
                        message: "Please Select Colors",
                      },
                    ]}
                  >
                    <Select
                      placeholder={
                        <p className="dark:text-gray-500">Select Colors</p>
                      }
                      className="h-[44px] dark-input"
                    >
                      {colorList.map((color) => (
                        <Select.Option key={color.value} value={color.value}>
                          <div className="flex items-center gap-4">
                            <div
                              style={{ backgroundColor: color.value }}
                              className={`rounded-full h-[24px] w-[24px]`}
                            ></div>
                            <p className="dark:text-white"> {color.label}</p>
                          </div>
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <div className="flex justify-end gap-2">
              <RoundedButton
                title={"Cancel"}
                htmlType="button"
                onClick={() => {
                  setToggle(false);
                }}
                sm
                bold
                className="mb-4 bg-transparent text-[#FC4D3A] border-[#FC4D3A]"
              />
              <RoundedButton
                title={"Confirm Changes"}
                htmlType="submit"
                sm
                bold
                className="mb-4 bg-light-primary dark:bg-dark-primary text-white"
              />
            </div>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default EditProjectDrawer;
