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
import {
  couponsApi,
  getCouponApi,
} from "../../../../services/api/Dashboard/Coupons";

interface Props {
  open: boolean;
  close: (e: boolean) => void;
  type?: string;
}
export interface BodyType {
  name?: string;
  percentOff?: number;
  usageLimit: number;
}
const CouponModal = ({ open, close, type }: Props) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const users = useSelector((state: RootState) => state.users);

  function onFinish(values: BodyType) {
    const body: any = {
      ...values,
      name: values?.name?.trim(),
      usageLimit: Number(values?.usageLimit),
      percentOff: Number(values?.percentOff),
      duration: "once",
      durationInMonths: 0,
    };
    couponsApi(dispatch, body, onSuccess);
  }

  function onSuccess() {
    close(false);
    getCouponApi(dispatch);
    form.resetFields();
  }

  return (
    <div>
      <Modal
        width={"600px"}
        title={
          <h3 className="text-[18px] font-semibold">
            {type ? "Update" : "Add"} Coupon
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
              <InputLabel>Percent Off</InputLabel>
              <TextInput
                name="percentOff"
                className="w-full min-h-[48px]"
                rules={[
                  {
                    required: true,
                    message: "Enter percentOff",
                  },
                ]}
                isNumber
              />
            </Col>

            <Col sm={24} md={24} lg={24} xl={24}>
              <InputLabel>Usage Limit</InputLabel>
              <TextInput
                isNumber
                name="usageLimit"
                className="w-full min-h-[48px]"
                rules={[{ required: true, message: "Usage Limit is required" }]}
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
              Add Coupon
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CouponModal;
