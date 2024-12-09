import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Col,
  Divider,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import TextInput from "../../../helpers/inputs/TextInput";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../helpers/inputs/Button";
import { editAnnouncementsApi } from "../../../redux/api/WebEstate";

type EditNewAnnouncementDrawerPorps = {
  open: boolean;
  close: () => void;
  data: any;
};

const EditNewAnnouncementDrawer: React.FC<EditNewAnnouncementDrawerPorps> = ({
  open,
  close,
  data,
}: EditNewAnnouncementDrawerPorps) => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const editAnnouncements = useSelector(
    (state: any) => state.editAnnouncements
  );
  const onFinish = (values: any) => {
    editAnnouncementsApi(dispatch, values, onSuccess, data.id);
  };
  const onSuccess = () => {
    close();
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        heading: data.heading,
        description: data.description,
      });
    }
  }, [data]);

  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium text-[rgb(64,64,64)]">
            Edit Announcement
          </h3>
        }
        placement="right"
        width={440}
        open={open}
        closable={false}
        onClose={close}
        extra={
          <Space>
            <CloseOutlined onClick={close} />
          </Space>
        }
        footer={false}
      >
        <Form onFinish={onFinish} autoComplete="off" form={form}>
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={24} md={24}>
              <label
                htmlFor="heading"
                className="text-[#667085] text-base font-medium"
              >
                Title
              </label>
              <TextInput
                rules={[
                  { required: true, message: "Please input your title!" },
                ]}
                className="h-[48px] "
                placeholder="Title"
                name="heading"
                id="heading"
              />
            </Col>

            <Col sm={24} xs={24} lg={24} md={24}>
              <label
                htmlFor="description"
                className="text-[#667085] text-base font-medium"
              >
                Details
              </label>
              <Form.Item name={"description"} rules={[{ required: true }]}>
                <Input.TextArea
                  placeholder="Enter Here"
                  rows={3}
                  id="description"
                />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-end w-[100%] align-bottom  absolute bottom-2 right-2">
            <div>
              <Divider />
              <Button
                label={"Edit Announcement"}
                variant="filled"
                loading={editAnnouncements.loading}
              />
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default EditNewAnnouncementDrawer;
