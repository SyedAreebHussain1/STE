import { Col, Form, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import RoundedButton from "../../../components/button/RoundedButton";
import TextInput from "../../../components/inputs/TextInput";
import {
  getSupportTicketsApi,
  postSupportTicketApi,
} from "../../../services/api/RequestSupport";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LeftSection = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    postSupportTicketApi(dispatch, values, setLoading, onSuccess);
  };

  const onSuccess = () => {
    form.resetFields();
    setLoading(false);
    getSupportTicketsApi(dispatch);
  };

  return (
    <div className="flex-1 rounded-xl p-4 h-fit">
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="requestSupportForm"
      >
        <Row gutter={16} className="!w-full">
          {/* left side of form */}

          <Col sm={24} lg={12}>
            <div>
              <label htmlFor="category" className="input-label-sm">
                Category
              </label>
              <TextInput
                className="w-full min-h-[48px]"
                name="category"
                id="category"
                placeholder="Enter category"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              />
            </div>
          </Col>

          <Col sm={24} lg={12}>
            <label htmlFor="priority" className="input-label-sm">
              Priority
            </label>
            <Form.Item
              className="w-full mb-2"
              name="priority"
              id="priority"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Select
                className="w-full min-h-[48px]"
                placeholder="Select priority"
              >
                <Select.Option key={"High"} value={"High"}>
                  High
                </Select.Option>
                <Select.Option key={"Medium"} value={"Medium"}>
                  Medium
                </Select.Option>
                <Select.Option key={"Low"} value={"Low"}>
                  Low
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <label htmlFor="description" className="input-label-sm">
              Description
            </label>
            <Form.Item
              className="w-full mb-2"
              name="description"
              id="description"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <TextArea
                maxLength={500}
                placeholder="Enter Description"
                rows={4}
              />
            </Form.Item>
          </Col>

          <Col sm={24} className="mt-2">
            <RoundedButton
              htmlType="submit"
              title={"Submit"}
              type="primary"
              sm
              loading={loading}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LeftSection;
