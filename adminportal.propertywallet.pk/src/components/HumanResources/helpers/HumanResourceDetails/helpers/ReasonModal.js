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

import TextAreaField from '../../../../../utils/components/InputFields/TextAreaField'
import { suspendApi } from '../../../../../redux/api/Freelance'
import { useNavigate } from 'react-router-dom'

const ReasonModal = ({ visible, toggle, data }) => {
  const { loading } = useSelector((state) => state.withdrawAmount)
  const [form] = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = (e) => {
    let query = {
      id: data?.id,
      isSuspend: data?.isSuspendid ? false : true,
      suspendReason: data?.isSuspendid ? null : e.remarks,
    }
    // console.log("body", body);
    suspendApi(query, dispatch, onSuccess)
  }
  function onSuccess() {
    form.resetFields()
    toggle()
    navigate(-1)
  }

  return (
    <Modal
      //   width={"541px"}
      title={
        <h3 className="text-[15px] font-medium leading-[22px] text-[#181818]">
          {data?.isSuspendid ? 'Unsuspend freelancer' : 'Suspend freelancer'}
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
            Enter your reason
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

export default ReasonModal
