import { Button, Modal, Input, Form, Row, Col } from "antd";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewLeadlogNoteApi,
  updateLeadsLeadApi,
} from "../../../../../redux/api/SalesPlus/LeadDetails";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
type AddNotedModal = {
  toggle: any;
  setToggle: any;
  data: any;
};

const UpdateLeadsModal = ({ toggle, setToggle, data }: AddNotedModal) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const updateLeadsLead = useSelector((state: any) => state?.updateLeadsLead);
  function onFinish(value: any) {
    const body = {
      ...value,
    };
    if (data?.data?.id) {
      updateLeadsLeadApi(dispatch, body, data?.data?.id, onSuccess);
    }
  }

  function onSuccess() {
    setToggle(false);
    form.resetFields();
  }
  useEffect(() => {
    form.setFieldsValue(data?.data);
  }, [data?.data]);
  return (
    <Modal
      title="Update Lead"
      centered
      width={553}
      open={toggle}
      onOk={() => setToggle(false)}
      onCancel={() => setToggle(false)}
      footer={null}
    >
      <Form
        onFinish={onFinish}
        form={form}
        autoComplete="off"
        name="updateLead"
      >
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24} md={24}>
            <div className="mt-1 mb-1">
              <p className="text-[#292D35] font-medium text-[1rem]">
                Name<span className="text-[red]">*</span>
              </p>
            </div>
            <TextInput
              rules={[{ required: true, message: "Please input your name!" }]}
              className="h-[48px] "
              placeholder="Name"
              name="name"
            />
          </Col>

          <Col sm={24} xs={24} lg={24} md={24}>
            <div className="mt-1 mb-1">
              <p className="text-[#292D35] font-medium text-[1rem]">
                Email<span className="text-[red]">*</span>
              </p>
            </div>
            <TextInput
              className="h-[48px] "
              placeholder="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            />
          </Col>

          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex justify-end gap-2 mt-4">
              <Button
                type="primary"
                loading={updateLeadsLead?.loading}
                htmlType="submit"
                className="dark:bg-dark-primary bg-light-primary text-white border-none h-[40px] font-normal"
              >
                Update
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default UpdateLeadsModal;
