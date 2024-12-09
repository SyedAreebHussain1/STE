import { Col, DatePicker, Form, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../helpers/button/RoundedButton";
import TextInput from "../../../../helpers/inputs/TextInput";
import {
  addAttachmentToProjectTaskApi,
  createProjectTaskApi,
  getProjectTaskByIdApi,
  getTasksByProjectIdApi,
  getUsersByDepartmentForTaskApi,
} from "../../../../redux/api/ProjectAndActivities/Task";
import { RootState } from "../../../../redux/store";
import attachmentBlackIcon from "./../../../../assets/attachmentBlackIcon.svg";
import attachmentIcon from "./../../../../assets/attachmentIcon.svg";
import fileAttIcon from "./../../../../assets/fileAttIcon.svg";
import fileWhiteAttIcon from "./../../../../assets/fileAttWhiteIcon.svg";
import { CloseOutlined } from "@ant-design/icons";

interface Props {
  open: boolean;
  close: () => void;
  projectId: any;
}

const taskPriority = ["Low", "Medium", "High"];

const CreateTaskModal = ({ open, close, projectId }: Props) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [scheduledTime, setScheduledTime] = useState("");
  const [attachments, setAttachments] = useState<any[]>([]);
  const [form] = useForm();
  const dispatch = useDispatch();
  const inputRef = useRef<any>(null);
  const getUsersByDepartmentForTask = useSelector(
    (state: RootState) => state.getUsersByDepartmentForTask?.data?.data
  );
  const onFinish = (values: any) => {
    createProjectTaskApi(dispatch, { ...values, projectId }, onSuccess);
  };

  const onAddAttachment = (res: any) => {
    setAttachments(res.data);
    getTasksByProjectIdApi(dispatch, projectId, { page: 1, limit: 10 });
  };

  const onSuccess = (res: any) => {
    if (attachments.length > 0) {
      const formData = new FormData();
      for (let index = 0; index < attachments.length; index++) {
        formData.append("files", attachments[index]);
      }
      formData.append("projectTaskId", res?.data?.id);
      addAttachmentToProjectTaskApi(dispatch, formData, onAddAttachment);
    }
    getTasksByProjectIdApi(dispatch, projectId, { page: 1, limit: 10 });
    close();
  };

  const onDateChange = (date: any) => {
    setScheduledTime(date);
  };

  const disabledEndDate = (endDate: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate && endDate < today;
  };

  useEffect(() => {
    if (projectId) getUsersByDepartmentForTaskApi(dispatch, projectId);
  }, []);

  const changeHandler = (e: any) => {
    const { files } = e.target;
    if (files.length === 0) return;

    setAttachments([...attachments, files[0]]);
  };

  const uploadHandler = (ref: any) => {
    ref.current.click();
  };

  const handleRemoveAttachment = (fileName: any) => {
    setAttachments((st) => st.filter((i) => i.name !== fileName));
  };

  return (
    <Modal
      title={<span className="text-lg font-bold">Create New Task</span>}
      centered
      width={561}
      open={open}
      onCancel={() => {
        close();
      }}
      className="!w-[950px]"
      footer={false}
    >
      <Row>
        <Col
          span={11}
          className="p-4 rounded-md border dark:border-graySecondary mr-2 h-[500px] overflow-y-auto custom-scrollbar"
        >
          <Form
            autoComplete="off"
            form={form}
            onFinish={onFinish}
            name="createTask"
          >
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className=" mb-1 mt-2">
                <p className="text-[#292D35] dark:text-white font-medium text-base dark-input-label">
                  Name
                </p>
              </div>
              <TextInput
                className="h-[44px] dark-input "
                placeholder="Task Name"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                name="name"
              />
            </Col>

            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] dark:text-white font-medium text-base dark-input-label">
                  Description
                </p>
              </div>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <TextArea
                  maxLength={100}
                  placeholder="Description"
                  className="dark-input"
                  style={{ height: 183, resize: "none" }}
                />
              </Form.Item>
            </Col>
          </Form>
          <span
            className="text-md font-semibold text-graySecondary dark:text-white mb-3 flex gap-2 items-center cursor-pointer"
            onClick={() => uploadHandler(inputRef)}
          >
            {" "}
            <img
              src={darkMode === "dark" ? attachmentIcon : attachmentBlackIcon}
              alt=""
              className="h-5"
            />{" "}
            Add Attachments
            <input
              type="file"
              ref={inputRef}
              onChange={(e) => changeHandler(e)}
              className="hidden w-0"
              accept="image/*,.pdf"
            ></input>
          </span>

          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {attachments?.map((item, i) => (
                <div key={i} className="border rounded-md p-2 w-[120px] ">
                  <div className="flex justify-between items-center mb-2">
                    <img
                      src={darkMode === "dark" ? fileWhiteAttIcon : fileAttIcon}
                      alt=""
                    />
                    <CloseOutlined
                      className="cursor-pointer dark:text-white"
                      onClick={() => handleRemoveAttachment(item)}
                    />
                  </div>
                  <h1 className="dark:text-white line-clamp-1">
                    {item?.name ? item.name : item?.fileName}
                  </h1>
                  <p className="dark:text-white">
                    {item?.size ? item.size : item?.fileSize} bytes
                  </p>
                </div>
              ))}
            </div>
          )}
        </Col>
        <Col
          span={12}
          className="p-4 rounded-md border dark:border-graySecondary"
        >
          <Form
            autoComplete="off"
            form={form}
            onFinish={onFinish}
            name="createTask"
          >
            <Col sm={24}>
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Priority
              </span>
              <Form.Item
                className="h-[44px] dark-input"
                name="priority"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Select
                  placeholder={
                    <p className="dark:text-gray-500">Select Priority</p>
                  }
                  className="h-[44px] dark-input"
                >
                  {taskPriority.map((p) => (
                    <Select.Option key={p} value={p}>
                      {p}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <span className="text-[#292D35] dark:text-white font-medium text-base dark-input-label">
                Assign To
              </span>
              <Form.Item className="h-[44px] dark-input" name="assignedTo">
                <Select
                  placeholder={
                    <p className="dark:text-gray-500">Select assignedTo</p>
                  }
                  className="h-[44px] dark-input"
                >
                  {getUsersByDepartmentForTask?.map((user: any) => (
                    <Select.Option key={user?.id} value={user?.id}>
                      {user?.companyUserProfile?.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <span className="text-[#292D35] font-medium text-base dark-input-label">
                Due Date
              </span>
              <Form.Item
                name="dueDate"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <DatePicker
                  placement="bottomLeft"
                  className="w-full h-[44px] dark-input "
                  onChange={(e) => onDateChange(dayjs(e).format("YYYY-MM-DD"))}
                  disabledDate={disabledEndDate}
                  format="YYYY-MM-DD "
                />
              </Form.Item>
            </Col>

            <div className="flex mt-[30px] gap-3 ">
              <RoundedButton
                onClick={() => close()}
                title={"Cancel"}
                className="dark:bg-dark-primary dark:text-white"
                htmlType="button"
                sm
              />

              <RoundedButton
                title={"Create Task"}
                className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
                htmlType="submit"
                sm
              />
            </div>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};
export default CreateTaskModal;
