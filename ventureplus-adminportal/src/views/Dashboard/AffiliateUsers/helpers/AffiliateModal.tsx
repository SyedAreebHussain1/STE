import { Button, Modal, Form, Row, Col, Select, Checkbox } from "antd";
import { useForm } from "antd/es/form/Form";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { InputLabel, RoundedButton, TextInput } from "../../../../components";
import { useRef } from "react";
import {
  getAffiliateUserApi,
  postAffiliateUserApi,
} from "../../../../services/api/Dashboard/Users";

interface Props {
  open: boolean;
  close: (e: boolean) => void;
  type?: string;
}
export interface BodyType {
  name?: string;
  email?: string;
  phoneNo?: string;
  password?: string;
}
const AffiliateModal = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const users = useSelector((state: RootState) => state.users);

  function onFinish(values: BodyType) {
    postAffiliateUserApi(dispatch, values, onSuccess);
  }

  function onSuccess() {
    close(false);
    getAffiliateUserApi(dispatch, { page: 1, limit: 10 });
    form.resetFields();
  }

  return (
    <div>
      <Modal
        width={"600px"}
        title={
          <h3 className="text-[18px] font-semibold">
            {type ? "Update" : "Add"} Affiliate Users
          </h3>
        }
        open={open}
        onCancel={() => close(false)}
        footer={null}
        centered={true}
      >
        <Form onFinish={onFinish} autoComplete="off" form={form}>
          <Row gutter={16}>
            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Name</InputLabel>
              <TextInput
                name="name"
                className="w-full min-h-[48px]"
                rules={[{ required: true, message: "Name is required" }]}
              />
            </Col>

            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Email</InputLabel>
              <TextInput
                name="email"
                className="w-full min-h-[48px]"
                rules={[
                  {
                    required: true,
                    message: "Enter a valid email address!",
                  },
                ]}
              />
            </Col>

            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Phone Number</InputLabel>
              <TextInput
                isNumber
                name="phoneNo"
                className="w-full min-h-[48px]"
                rules={[
                  { required: true, message: "Phone Number is required" },
                ]}
              />
            </Col>
            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Password</InputLabel>
              <TextInput
                name="password"
                className="w-full min-h-[48px]"
                rules={[{ required: false }]}
              />
            </Col>
          </Row>
          <div className="flex justify-end mt-[30px] gap-2">
            <Button
              size="middle"
              key="1"
              loading={users?.loading}
              type="primary"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              htmlType="submit"
            >
              Add User
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AffiliateModal;
