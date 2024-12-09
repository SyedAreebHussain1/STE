import { CloseOutlined } from "@ant-design/icons";
import {
  Avatar,
  Col,
  DatePicker,
  Divider,
  Form,
  Modal,
  Row,
  Select,
} from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { Input } from "antd/lib";
import dayjs from "dayjs";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../helpers/button/RoundedButton";
import TextInput from "../../../../helpers/inputs/TextInput";
import {
  addAttachmentToProjectTaskApi,
  completeProjectTaskApi,
  createTaskNoteApi,
  deleteTaskAttachmentApi,
  editProjectTaskApi,
  getProjectTaskByIdApi,
  getTasksByProjectIdApi,
  getUsersByDepartmentForTaskApi,
} from "../../../../redux/api/ProjectAndActivities/Task";
import { RootState } from "../../../../redux/store";
import attachmentBlackIcon from "./../../../../assets/attachmentBlackIcon.svg";
import attachmentIcon from "./../../../../assets/attachmentIcon.svg";
import fileAttIcon from "./../../../../assets/fileAttIcon.svg";
import fileWhiteAttIcon from "./../../../../assets/fileAttWhiteIcon.svg";
import NoteCard from "./NoteCard";

interface Props {
  open: boolean;
  close: () => void;
  id: any;
  projectId: any;
  onReset: any;
}

const EditTaskModal = ({ open, close, id, projectId, onReset }: Props) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [note, setNote] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [form] = useForm();
  const dispatch = useDispatch();
  const getProjectTaskById = useSelector(
    (state: RootState) => state.getProjectTaskById?.data
  );
  const inputRef = useRef<any>(null);
  const [attachments, setAttachments] = useState<any[]>([]);
  const [newAttachments, setNewAttachments] = useState<any[]>([]);
  const getUsersByDepartmentForTask = useSelector(
    (state: RootState) => state.getUsersByDepartmentForTask?.data?.data
  );
  const taskPriority = ["Low", "Medium", "High"];

  useEffect(() => {
    if (id) getProjectTaskByIdApi(dispatch, id);
  }, []);

  useEffect(() => {
    if (projectId) getUsersByDepartmentForTaskApi(dispatch, projectId);
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      priority: getProjectTaskById?.data?.task?.priority,
      name: getProjectTaskById?.data?.task?.name,
      description: getProjectTaskById?.data?.task?.description,
      dueDate: dayjs(getProjectTaskById?.data?.task?.dueDate),
      assignedTo:
        getProjectTaskById?.data?.task?.assignedTo &&
        getProjectTaskById?.data?.task?.assignedTo,
    });
    setAttachments(getProjectTaskById?.data?.task?.taskAttachments);
  }, [getProjectTaskById]);

  const onFinish = (values: any) => {
    editProjectTaskApi(dispatch, id, values, onSuccess);
    if (newAttachments.length > 0) {
      const formData = new FormData();
      for (let index = 0; index < newAttachments.length; index++) {
        formData.append("files", newAttachments[index]);
      }
      formData.append("projectTaskId", id);
      addAttachmentToProjectTaskApi(dispatch, formData, onUpdateAttachments);
    }
    onReset();
  };

  const onSuccess = () => {
    getTasksByProjectIdApi(dispatch, projectId, { page: 1, limit: 10 });
    close();
  };

  function onDateChange(date: any) {
    setScheduledTime(date);
  }

  const onAddTaskNote = () => {
    getProjectTaskByIdApi(dispatch, id);
    setNote("");
  };

  const onCompletion = () => {
    getTasksByProjectIdApi(dispatch, projectId, { page: 1, limit: 10 });
  };

  const handleMarkAsComplete = () => {
    completeProjectTaskApi(dispatch, id, onCompletion);
  };

  const disabledEndDate = (endDate: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDate && endDate < today;
  };

  const onDeleteAttachment = (res: any) => {
    setAttachments(res?.data);
    if (id) getProjectTaskByIdApi(dispatch, id);
  };

  const handleDeleteTaskAttachment = (attId: any) => {
    deleteTaskAttachmentApi(dispatch, attId, onDeleteAttachment);
  };

  const handleRemoveAttachment = (att: any) => {
    if (att?.id) {
      handleDeleteTaskAttachment(att?.id);
    } else {
      setAttachments((st) => st.filter((i) => i.fileName !== att.fileName));
      setNewAttachments((st) => st.filter((i) => i.fileName !== att.fileName));
    }
  };

  const changeHandler = (e: any) => {
    const { files } = e.target;
    if (files.length === 0) return;

    setAttachments([...attachments, files[0]]);
    setNewAttachments([...newAttachments, files[0]]);
  };

  const uploadHandler = (ref: any) => {
    ref.current.click();
  };

  const onUpdateAttachments = (res: any) => {
    getProjectTaskByIdApi(dispatch, id);
    getTasksByProjectIdApi(dispatch, projectId, { page: 1, limit: 10 });
  };

  return (
    <Modal
      title={<span className="text-lg font-bold">Edit Task</span>}
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
            name="editTask"
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
                    message: "Please input Task Name!",
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
              <Form.Item name="description">
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
            className="text-md font-semibold text-graySecondary dark:text-white mb-3 flex gap-2 items-center"
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
          <div className="flex flex-wrap gap-2 my-2">
            {attachments?.map((att: any, i: any) => (
              <div key={i} className="border rounded-md p-2 w-[120px] ">
                <div className="flex justify-between items-center mb-2">
                  <img
                    src={darkMode === "dark" ? fileWhiteAttIcon : fileAttIcon}
                    alt=""
                  />
                  <CloseOutlined
                    className="cursor-pointer dark:text-white"
                    onClick={() => handleRemoveAttachment(att)}
                  />
                </div>
                <h1 className="dark:text-white line-clamp-1">
                  {att?.fileName ? att?.fileName : att?.name}
                </h1>
                <p className="dark:text-white">
                  {att?.fileSize ? att?.fileSize : att?.size} bytes
                </p>
              </div>
            ))}
          </div>
          <h1 className="font-bold text-lg text-graySecondary dark:text-white mb-2">
            Notes
          </h1>
          <Input
            className="h-[48px] dark-input mb-3"
            placeholder="Add a note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                createTaskNoteApi(
                  dispatch,
                  { description: note, projectTaskId: id },
                  onAddTaskNote
                );
              }
            }}
            prefix={<Avatar className="mr-1">J</Avatar>}
          />
          <>
            {getProjectTaskById?.data?.task?.taskNotes?.map((item: any) => (
              <NoteCard key={item?.id} note={item} id={id} />
            ))}
          </>
        </Col>
        <Col
          span={12}
          className="p-4 rounded-md border dark:border-graySecondary"
        >
          <Form
            autoComplete="off"
            form={form}
            onFinish={onFinish}
            name="editTask"
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
                    message: "Please Select Priority",
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
                    <p className="dark:text-gray-500">Select User</p>
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
            <Divider className="dark:bg-graySecondary mb-4" />

            {getProjectTaskById?.data?.totalTime && (
              <>
                <h1 className="font-bold text-md text-graySecondary dark:text-white my-2">
                  Track Time
                </h1>
                <p className="text-graySecondary dark:text-lightGray mb-3 line-clamp-2">
                  {getProjectTaskById?.data?.totalTime}
                </p>
              </>
            )}

            <h1 className="font-bold text-md text-graySecondary dark:text-white my-2">
              Created
            </h1>
            <p className="text-graySecondary dark:text-lightGray mb-3 line-clamp-2">
              {moment(getProjectTaskById?.data?.task?.createdAt).format("lll")}
            </p>
            <h1 className="font-bold text-md text-graySecondary dark:text-white mb-2">
              Updated
            </h1>
            <p className="text-graySecondary dark:text-lightGray mb-3 line-clamp-2">
              {moment(getProjectTaskById?.data?.task?.updatedAt).format("lll")}
            </p>

            <Col className="w-full flex gap-2 items-center justify-end">
              <RoundedButton
                title={"Save Changes"}
                className="dark:bg-black dark:text-white  bg-light-primary text-white flex-end"
                htmlType="submit"
                sm
                bold
              />
              <RoundedButton
                disabled={
                  getProjectTaskById?.data?.task?.status !== "Inprogress"
                }
                title={
                  getProjectTaskById?.data?.task?.status === "Completed"
                    ? "Completed"
                    : "Mark as Complete"
                }
                className={`dark:bg-white dark:text-dark-primary  bg-light-primary text-white flex-end ${
                  getProjectTaskById?.data?.task?.status === "Completed"
                    ? "dark:!bg-[#71BC1C] !dark:text-white  !bg-[#71BC1C] !text-white"
                    : ""
                }`}
                htmlType="button"
                onClick={handleMarkAsComplete}
                sm
                bold
              />
            </Col>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};
export default EditTaskModal;
