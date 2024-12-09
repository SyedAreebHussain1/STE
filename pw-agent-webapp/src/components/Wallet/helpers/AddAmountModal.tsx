import { Button, Col, Form, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../../utils/storage";
import TextInput from "../../../helpers/inputs/TextInput";
import { RootState } from "../../../redux/store";
import {
  addNewWithdrawRequestApi,
  paymentByBlinqApi,
  paymentByPayMobApi,
} from "../../../redux/api/Wallet";

type Props = {
  open: boolean;
  close: () => void;
  data?: any;
  toggleHasWindowClosed: (value: boolean) => void;
};

const AddAmountModal = ({
  open,
  close,
  data,
  toggleHasWindowClosed,
}: Props) => {
  const dispatch = useDispatch();
  const getProfile = useSelector((state: RootState) => state.getProfile);
  const [form] = useForm();
  const paymentByPayMob = useSelector((state: any) => state.paymentByPayMob);
  const paymentByBlinq = useSelector((state: any) => state.paymentByBlinq);
  const onFinish = (formData: any) => {
    const body = {
      amount: formData.amount,
    };
    if (formData.paymentMethod === "0") {
      paymentByBlinqApi(dispatch, body, onSuccessBlinq);
    } else {
      paymentByPayMobApi(dispatch, body, onSuccessPaymob);
    }
  };
  function onSuccessBlinq(data: any) {
    const windowObject = window.open(
      data.ClickToPayUrl,
      "",
      "width=700,height=500,left=400,top=120,"
    );
    const interval = setInterval(() => {
      if (windowObject?.closed) {
        toggleHasWindowClosed(true);
        clearInterval(interval);
      }
    }, 500);
  }
  function onSuccessPaymob(data: any) {
    const windowObject = window.open(
      `https://pakistan.paymob.com/api/acceptance/iframes/${
        import.meta.env.VITE_PYAMOB_TOKEN_VALUE
      }?payment_token=${data?.token}`,
      "",
      "width=700,height=500,left=400,top=120,"
    );
    const interval = setInterval(() => {
      if (windowObject?.closed) {
        toggleHasWindowClosed(true);
        clearInterval(interval);
      }
    }, 500);
  }
  const items = ["500", "1000", "2000", "5000", "7500", "10000", "15000"];
  const amount = Form.useWatch("amount", form);
  return (
    <Modal
      title="Add Amount to Wallet"
      centered
      open={open}
      //   onOk={() => setModal2Open(false)}
      onCancel={close}
      footer={false}
    >
      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Row gutter={16} className="py-6">
          <Col sm={24} className="mb-6">
            <label htmlFor="amount">Amount</label>
            <TextInput
              name="amount"
              id="amount"
              className="h-[42px]"
              placeholder="Enter Amount"
              rules={[{ required: true, message: "Please Enter Amount" }]}
              isNumber
            />
            <div className="flex items-center gap-1">
              {items.map((item, i) => {
                return (
                  <button
                    key={i}
                    className={`border border-borderColor rounded-full px-2 py-1 ${
                      amount === item && "bg-primary text-white"
                    }`}
                    onClick={() => {
                      form.setFieldValue("amount", item);
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </Col>
          <Col sm={24}>
            <label htmlFor="paymentMethod">Select Payment Method</label>
            <Form.Item
              name={"paymentMethod"}
              rules={[
                { required: true, message: "Please Enter Payment Method" },
              ]}
            >
              <Select
                id="paymentMethod"
                className="h-[42px]"
                options={[
                  { label: "Blinq Payment", value: "0" },
                  { label: "Paymob", value: "1" },
                ]}
                placeholder="Enter Payment Method"
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-end w-[100%]">
          <Button
            htmlType="submit"
            type="primary"
            className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
            loading={paymentByPayMob.loading || paymentByBlinq.loading}
          >
            Continue
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default AddAmountModal;
