import { Button, Col, Form, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../../utils/storage";
import TextInput from "../../../helpers/inputs/TextInput";
import { RootState } from "../../../redux/store";
import { addNewWithdrawRequestApi } from "../../../redux/api/Wallet";
import { errorMessage } from "../../../utils/message";

type Props = {
  open: boolean;
  close: () => void;
  data?: any;
};

const AddWithdrawAmountModal = ({ open, close, data }: Props) => {
  const dispatch = useDispatch();
  const getProfile = useSelector((state: RootState) => state.getProfile);
  const [form] = useForm();
  const addNewWithdrawRequest = useSelector(
    (state: any) => state.addNewWithdrawRequest
  );
  const onSuccess = () => {
    close();
  };
  const onFinish = (formData: any) => {
    if (formData.amount < 3000 || formData.amount > 12000) {
      errorMessage("withdraw request range should be from 3000 to 120000");
      return;
    }
    const body = {
      amount: formData.amount,
      bankName: formData.bankName,
      accountNo: formData.accountNo,
      accountTitleName: formData.accountTitle,
    };
    addNewWithdrawRequestApi(dispatch, body, onSuccess);
  };

  useEffect(() => {
    if (getProfile?.data) {
      form.setFieldsValue({
        email: getProfile.data?.email,
        phone: getProfile.data?.phone,
      });
    }
  }, [getProfile?.data]);
  return (
    <Modal
      title="Withdraw Amount"
      centered
      open={open}
      //   onOk={() => setModal2Open(false)}
      onCancel={close}
      footer={false}
    >
      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Row gutter={16} className="py-6">
          <Col sm={24}>
            <label htmlFor="bankName">Bank Name</label>
            <TextInput
              name="bankName"
              id="bankName"
              className="h-[42px]"
              placeholder="Enter Bank Name"
              rules={[{ required: true, message: "Please Enter Bank Name" }]}
              onKeyDown={(event) => {
                if (/[0-9,.]/.test(event.key)) {
                  event.preventDefault();
                  return
                }
              }}
            />
          </Col>
          <Col sm={24}>
            <label htmlFor="accountName">Account Name</label>
            <TextInput
              name="accountName"
              id="accountName"
              className="h-[42px]"
              placeholder="Enter Account Name"
              rules={[{ required: true, message: "Please Enter Account Name" }]}
            />
          </Col>
          <Col sm={24}>
            <label htmlFor="accountTitle">Account Title</label>
            <TextInput
              name="accountTitle"
              id="accountTitle"
              className="h-[42px]"
              placeholder="Enter Account Title"
              rules={[
                { required: true, message: "Please Enter Account Title" },
              ]}
            />
          </Col>
          <Col sm={24}>
            <label htmlFor="accountNo">Acc No. / IBAN</label>
            <TextInput
              name="accountNo"
              id="accountNo"
              isNumber
              className="h-[42px]"
              placeholder="Enter Account No"
              rules={[{ required: true, message: "Please Enter Account No" }]}
            />
          </Col>
          <Col sm={24}>
            <label htmlFor="amount">Amount</label>
            <TextInput
              name="amount"
              id="amount"
              isNumber
              className="h-[42px]"
              placeholder="Enter Amount"
              rules={[{ required: true, message: "Please Enter Amount" }]}
            />
          </Col>
          <Col sm={24}>
            <label htmlFor="cnic">Cnic</label>
            <TextInput
              name="cnic"
              id="cnic"
              isNumber
              className="h-[42px]"
              placeholder="Enter Cnic"
              rules={[{ required: true, message: "Please Enter Cnic" }]}
              maxLength={13}
            />
          </Col>
          <Col sm={24}>
            <label htmlFor="phone">Phone No</label>
            <TextInput
              disabled
              name="phone"
              id="phone"
              isNumber
              className="h-[42px]"
              placeholder="Enter Phone No"
            />
          </Col>
          <Col sm={24}>
            <label htmlFor="email">Email</label>
            <TextInput
              disabled
              name="email"
              id="email"
              className="h-[42px]"
              placeholder="Enter Email"
            />
          </Col>
        </Row>
        <div className="flex justify-end w-[100%]">
          <Button
            htmlType="submit"
            type="primary"
            className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
            loading={addNewWithdrawRequest.loading}
          >
            Continue
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default AddWithdrawAmountModal;
