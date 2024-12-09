import { Button, Card, Divider, Form, Input, Modal } from 'antd'
import React, { useEffect } from 'react'
import { addUserApi } from '../../../../redux/api/Settings/Roles'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { errorMessage } from '../../../../utils/message'

const AddUserModal = ({ visible, toggleAdd, userData }) => {
  const dispatch = useDispatch()
  const [form] = useForm()

  function onSuccess() {
    toggleAdd()
    form.resetFields()
  }
  const addUser = useSelector((state) => state.addUser)
  function onFinish(body) {
    const newBody = {
      ...body,
    }
    if (newBody.phone[0] === '0') {
      newBody.phone = '+92' + newBody.phone.split('').splice(1).join('')
      addUserApi(dispatch, { ...newBody, adminRoleId: userData.id }, onSuccess)
    } else if (newBody.phone[0] === '3') {
      newBody.phone = '+92' + newBody.phone
      addUserApi(dispatch, { ...newBody, adminRoleId: userData.id }, onSuccess)
    } else {
      errorMessage('Invalid phone number')
    }
  }

  function onCancel() {
    form.resetFields()
    toggleAdd()
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add User</h3>}
      // style={{  }}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '100%' }} bordered={false}>
          <Form
            name="normal_login"
            form={form}
            className="login-form"
            initialValues={{ remember: true }}
            style={{
              marginTop: -40,
              //   textAlign: "center",
            }}
            onFinish={onFinish}
          >
            <div>
              <h4
                style={{ textAlign: 'start', marginTop: '2%' }}
                className="text-[16px] pb-1"
              >
                Full Name
              </h4>
              <Form.Item
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: 'First Name is required',
                  },
                ]}
              >
                <Input className="py-2" />
              </Form.Item>
            </div>
            <div>
              <h4
                style={{ textAlign: 'start', marginTop: '2%' }}
                className="text-[16px] pb-1"
              >
                Email
              </h4>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Email is required',
                  },
                ]}
              >
                <Input className="py-2" type="email" />
              </Form.Item>
            </div>
            <div>
              <h4
                style={{ textAlign: 'start', marginTop: '2%' }}
                className="text-[16px] pb-1"
              >
                Phone Number
              </h4>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Phone is required',
                  },
                ]}
              >
                <Input
                  className="py-2"
                  maxLength={11}
                  onKeyPress={(event) => {
                    if (!/[0-9,.]/.test(event.key)) {
                      event.preventDefault()
                    }
                  }}
                  addonBefore="+92"
                />
              </Form.Item>
            </div>

            <div className="flex justify-end">
              <Button
                size="middle"
                key="4"
                className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
                onClick={onCancel}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="4"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
                loading={addUser.loading}
              >
                Add
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </Modal>
  )
}

export default AddUserModal
