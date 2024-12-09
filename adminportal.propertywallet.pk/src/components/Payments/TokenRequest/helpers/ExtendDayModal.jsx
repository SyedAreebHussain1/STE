import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Checkbox, Divider, Form, Input, Modal } from 'antd'
// import { postRolesApi } from "../../../../redux/api/Settings/Roles";
import { useForm } from 'antd/es/form/Form'
import { tokenUpdateExpiryApi } from '../../../../redux/api/Payment'

const ExtendDayModal = ({ visible, toggleAdd, idToExtend }) => {
  const [days, setDays] = useState('')
  const dispatch = useDispatch()
  //   const postRoles = useSelector((state) => state.postRoles);
  const [form] = useForm()

  const tokenUpdateExpiry = useSelector((state) => state.tokenUpdateExpiry)
  const onFinish = (e) => {
    tokenUpdateExpiryApi(
      dispatch,
      idToExtend?.id,
      { expireAt: Number(idToExtend?.expireAt) + Number(e.expireAt) },
      onSuccess
    )
  }
  function onSuccess() {
    toggleAdd()
    form.resetFields()
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Extend</h3>}
      // style={{  }}
      open={visible}
      onCancel={toggleAdd}
      footer={null}
      centered={true}
    >
      <Divider />

      <Form
        name="normal_login"
        form={form}
        className="login-form"
        initialValues={{ remember: true }}
        style={{
          marginTop: -5,
          //   textAlign: "center",
        }}
        onFinish={onFinish}
      >
        <h4
          style={{ textAlign: 'start', marginTop: '2%' }}
          className="text-[16px] pb-1"
        >
          Extend Days
        </h4>
        <Form.Item
          name="expireAt"
          rules={[{ required: true, message: 'Days are required' }]}
          //   className='mb-0'
        >
          <Input className="py-2" />
        </Form.Item>

        <div className="flex justify-end">
          <Button
            size="middle"
            key="1"
            // type="primary"
            className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
            onClick={toggleAdd}
          >
            Close
          </Button>
          <Button
            size="middle"
            key="2"
            // type="primary"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            loading={tokenUpdateExpiry.loading}
            htmlType="submit"
          >
            Confirm
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default ExtendDayModal
