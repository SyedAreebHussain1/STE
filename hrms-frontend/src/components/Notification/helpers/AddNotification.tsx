import { useDispatch, useSelector } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Col, Drawer, Form, Select, Space } from "antd";
import TextInput from "../../../helpers/inputs/TextInput";
import RoundedButton from "../../../helpers/button/RoundedButton";
import TextArea from "antd/es/input/TextArea";

import { Option } from "antd/es/mentions";
import {
  getDepartmentForNotificationApi,
  postNotificationApi,
} from "../../../redux/api/Notification";
import { getFromStorage } from "../../../utils/storage";

const AddNotification = ({ open, onClose }: any) => {
  const [department, setDepartment] = useState<any[]>([]);
  const [form] = useForm();
  const postNotification = useSelector((state: any) => state?.postNotification);
  const dispatch = useDispatch();

  const getDepartmentForNotification = useSelector(
    (state: any) => state?.getDepartmentForNotification
  );

  const onFinish = (value: any) => {
    const user = getFromStorage("user");
    const body = {
      companyId: user?.companyUser?.companyId,
      companyDepartmentId: department,
      message: value?.body,
      Status: "DafterPlus",
      redirectUrl: value?.redirectUrl,
      title: value?.title,
      imageUrl: value?.imageURL,
      referenceId: value?.referenceId,
    };
    postNotificationApi(dispatch, body, onSuccess);
  };

  const onSuccess = () => {
    onClose();
  };

  useEffect(() => {
    getDepartmentForNotificationApi(dispatch);
  }, []);

  return (
    <>
      <Drawer
        title={
          <span className="text-[1.25rem]  font-bold">
            Add New Notification
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
                  <Form.Item name="body">
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
                <div>
                  <label
                    htmlFor="body"
                    className="text-[.975rem] font-medium text-[#667085] dark-input-label "
                  >
                    Department
                  </label>

                  <Form.Item>
                    <Select
                      className=" dark-input"
                      allowClear
                      onChange={(e) => setDepartment(e)}
                      placeholder="-Select Department-"
                      //   mode="multiple"
                      size="large"
                    >
                      {getDepartmentForNotification?.data?.data?.map(
                        (item: any, i: any) => {
                          return (
                            <Option key={i} value={item?.id}>
                              {item?.title}
                            </Option>
                          );
                        }
                      )}
                    </Select>
                  </Form.Item>
                </div>
              </Col>
              <Col xs={24}>
                <div>
                  <label
                    htmlFor="imageURL"
                    className="text-[.975rem] font-medium text-[#667085] dark-input-label "
                  >
                    Image URL
                  </label>
                  <TextInput
                    className="w-full min-h-[48px] dark-input"
                    name="imageURL"
                    placeholder="e.g https://example.com/sample-image.jpg"
                  />
                </div>
              </Col>
              <Col xs={24}>
                <div>
                  <label
                    htmlFor="redirectUrl"
                    className="text-[.975rem] font-medium text-[#667085] dark-input-label "
                  >
                    Redirect URL
                  </label>
                  <TextInput
                    className="w-full min-h-[48px] dark-input"
                    name="redirectUrl"
                    placeholder="e.g https://example.com/sample-image.jpg"
                  />
                </div>
              </Col>
              <Col xs={24}>
                <div>
                  <label
                    htmlFor="referenceId"
                    className="text-[.975rem] font-medium text-[#667085] dark-input-label "
                  >
                    Reference ID
                  </label>
                  <TextInput
                    className="w-full min-h-[48px] dark-input"
                    name="referenceId"
                    placeholder="e.g 123"
                  />
                </div>
              </Col>
            </div>

            <div className="flex justify-end  gap-3 w-full">
              <RoundedButton
                onClick={onClose}
                title={"Cancel"}
                className="dark:bg-dark-primary dark:text-white w-full"
              />

              <RoundedButton
                title={"Send"}
                loading={postNotification?.loading}
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

export default AddNotification;
