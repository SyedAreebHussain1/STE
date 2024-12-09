import { useDispatch, useSelector } from "react-redux";
import attachmentBlackIcon from "../../../assets/attachmentBlackIcon.svg";
import attachmentIcon from "../../../assets/attachmentIcon.svg";
import fileAttIcon from "../../../assets/fileAttIcon.svg";
import fileWhiteAttIcon from "../../../assets/fileAttWhiteIcon.svg";
import { CloseOutlined } from "@ant-design/icons";
import { RootState } from "../../../redux/store";
import { useEffect, useRef, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Col, Drawer, Form, Row, Select, Space } from "antd";
import TextInput from "../../../helpers/inputs/TextInput";
import RoundedButton from "../../../helpers/button/RoundedButton";
import TextArea from "antd/es/input/TextArea";
import {
  getAnnouncementsApi,
  getByIDAnnouncementsApi,
  postAnnouncementsApi,
  updateAnnouncementsApi,
} from "../../../redux/api/Announcements";
import { infoMessage } from "../../../utils/message";
import { getByIDAnnouncementsClear } from "../../../redux/slices/Announcements/getByIDAnnouncementsSlice";

const AddOrEditAnnouncement = ({ open, onClose, id }: any) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [attachments, setAttachments] = useState<any[]>([]);
  const [form] = useForm();
  const dispatch = useDispatch();
  const inputRef = useRef<any>(null);

  const uploadHandler = (ref: any) => {
    ref.current.click();
  };

  const changeHandler = (e: any) => {
    const { files } = e.target;
    if (files.length === 0) return;
    setAttachments([files[0]]);
  };

  const handleRemoveAttachment = (fileName: any) => {
    setAttachments([]);
  };
  const getByIDAnnouncements = useSelector(
    (state: any) => state?.getByIDAnnouncements
  );

  useEffect(() => {
    if (getByIDAnnouncements?.data) {
      form.setFieldsValue({
        title: getByIDAnnouncements?.data?.data?.title,
        body: getByIDAnnouncements?.data?.data?.description,
      });
      setAttachments([getByIDAnnouncements?.data?.data?.attachment]);
    }
  }, [getByIDAnnouncements]);

  useEffect(() => {
    if (id) {
      getByIDAnnouncementsApi(dispatch, id);
    }
    return () => {
      dispatch(getByIDAnnouncementsClear());
    };
  }, [id]);

  const onFinish = (value: any) => {
    if (attachments.length <= 0) {
      infoMessage("Add Attachments!");
      return;
    }
    if (id) {
      const formData = new FormData();
      formData.append("description", value?.body);
      formData.append("title", value?.title);

      if (
        getByIDAnnouncements?.data?.data?.attachment?.url !==
        attachments[0]?.url
      ) {
        formData.append("file", attachments[0]);
      }

      updateAnnouncementsApi(dispatch, id, formData, onSuccess);
    } else {
      const formData = new FormData();
      formData.append("file", attachments[0]);
      formData.append("title", value?.title);
      formData.append("description", value?.body);

      postAnnouncementsApi(dispatch, formData, onSuccess);
    }
  };
  const onSuccess = () => {
    getAnnouncementsApi(dispatch, { page: 1, limit: 10 });
    onClose();
  };

  return (
    <>
      <Drawer
        title={
          <span className="text-[1.25rem]  font-bold">
            {id ? "Edit New Announcement" : "Add New Announcement"}
          </span>
        }
        closable={false}
        placement="right"
        width={448}
        onClose={onClose}
        open={open}
        className="bg-[#fff] h-[100vh]"
        styles={{
          body: {
            padding: 0,
          },
        }}
        extra={
          <Space>
            <CloseOutlined onClick={onClose} />
          </Space>
        }
      >
        <Form
          wrapperCol={{ span: 24 }}
          layout="vertical"
          onFinish={onFinish}
          form={form}
          className="h-full"
        >
          <div className="flex flex-col justify-between h-full p-[20px]">
            <div>
              <Col xs={24}>
                <div>
                  <label
                    htmlFor="title"
                    className="text-[.975rem] font-medium text-[#667085] dark-input-label "
                  >
                    Title
                  </label>
                  <TextInput
                    className="w-full min-h-[48px] dark-input"
                    name="title"
                    placeholder="e.g Daftar Plus"
                    rules={[
                      {
                        required: true,
                        message: "Please input Title",
                      },
                    ]}
                  />
                </div>
              </Col>
              <Col xs={24}>
                <div>
                  <label
                    htmlFor="body"
                    className="text-[.975rem] font-medium text-[#667085] dark-input-label "
                  >
                    Body
                  </label>
                  <Form.Item
                    name="body"
                    rules={[
                      {
                        required: true,
                        message: "Please input Body!",
                      },
                    ]}
                  >
                    <TextArea
                      maxLength={100}
                      placeholder="Enter Message"
                      className="dark-input"
                      style={{ height: 120, resize: "none" }}
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col xs={24}>
                <span
                  className="text-md font-semibold text-graySecondary dark:text-white mb-3 flex gap-2 items-center cursor-pointer"
                  onClick={() => uploadHandler(inputRef)}
                >
                  {" "}
                  <img
                    src={
                      darkMode === "dark" ? attachmentIcon : attachmentBlackIcon
                    }
                    alt=""
                    className="h-5"
                  />{" "}
                  Add Attachments
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={(e) => changeHandler(e)}
                    className="hidden w-0"
                    accept=".png,.jpg,.jpeg,.pdf"
                  ></input>
                </span>

                {attachments.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {attachments?.map((item, i) => (
                      <div key={i} className="border rounded-md p-2 w-[120px] ">
                        <div className="flex justify-between items-center mb-2">
                          <img
                            src={
                              darkMode === "dark"
                                ? fileWhiteAttIcon
                                : fileAttIcon
                            }
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
            </div>

            <div className="flex justify-end  gap-3 w-full">
              <RoundedButton
                onClick={onClose}
                title={"Cancel"}
                className="dark:bg-dark-primary dark:text-white w-full"
              />

              <RoundedButton
                title={id ? "Edit" : "Send"}
                className="dark:bg-white dark:text-dark-primary w-full  bg-light-primary text-white"
                htmlType="submit"
              />
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default AddOrEditAnnouncement;
