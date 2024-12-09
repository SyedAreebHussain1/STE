import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
} from 'antd'
import { useForm } from 'antd/es/form/Form'

import TextAreaField from '../../../../utils/components/InputFields/TextAreaField'
import { postWithdrawAmountApi } from '../../../../redux/api/Freelance'

const AppRejModal = ({ visible, toggle, data }) => {
  const { loading } = useSelector((state) => state.withdrawAmount)
  const [form] = useForm()
  const dispatch = useDispatch()
  const onFinish = (e) => {
    let body = {
      status: data?.status,
      statusRemarks: e.remarks,
    }
    // console.log("body", body);
    postWithdrawAmountApi(body, data.id, dispatch, onSuccess)
  }
  function onSuccess() {
    form.resetFields()
    toggle()
  }

  return (
    <Modal
      //   width={"541px"}
      title={
        <h3 className="text-[15px] font-medium leading-[22px] text-[#181818]">
          Withdraw Modal
        </h3>
      }
      open={visible}
      onCancel={toggle}
      footer={null}
      centered={true}
    >
      <Divider />

      <div>
        <Form
          name="normal_login"
          form={form}
          className="login-form"
          initialValues={{ remember: true }}
          style={{
            marginTop: -5,
          }}
          onFinish={onFinish}
        >
          <h4
            style={{ textAlign: 'start' }}
            className="text-[14px] text-[#344054] font-medium mt-[] mb-[]"
          >
            Enter your remarks
          </h4>
          <TextAreaField name="remarks" />

          <div className="flex justify-end ">
            <Button
              size="middle"
              key="3"
              className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
              onClick={toggle}
            >
              Close
            </Button>
            <Button
              size="middle"
              key="4"
              // type="primary"
              className="ml-4 btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={loading}
              htmlType="submit"
            >
              Confirm
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default AppRejModal
