import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Checkbox, Divider, Form, Input, Modal } from 'antd'
import { postRolesApi } from '../../../../redux/api/Settings/Roles'
import { useForm } from 'antd/es/form/Form'

const AddNewRoleModal = ({ visible, toggleAdd }) => {
  const [titleRole, setTitleRole] = useState('')
  const dispatch = useDispatch()
  const postRoles = useSelector((state) => state.postRoles)
  const [form] = useForm()

  const onFinish = (e) => {
    const body = {
      title: titleRole,
    }
    postRolesApi(dispatch, body, onSuccess)
  }
  function onSuccess() {
    toggleAdd()
    form.resetFields()
  }
  function onCancel() {
    toggleAdd()
    form.resetFields()
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add New Role</h3>}
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
            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[16px] pb-1"
            >
              Title
            </h4>
            <Form.Item
              name="title"
              rules={[{ required: true, message: 'Title is required' }]}
              //   className='mb-0'
            >
              <Input
                className="py-2"
                onChange={(e) => setTitleRole(e.target.value)}
                // placeholder="Enter role title"
                // classTitle="email_input"

                // value={state.title}
                // onChange={(e) => onChange(e.target.value, "title")}
              />
            </Form.Item>
            {/* <Checkbox
              className="text-[#667085] font-normal text-[1rem]"
              value={1}
            >
              This Role is public
            </Checkbox> */}
            <div className="flex justify-end">
              <Button
                size="middle"
                key="1"
                // type="primary"
                className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
                onClick={onCancel}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="2"
                // type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                loading={postRoles.loading}
                htmlType="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </Modal>
  )
}

export default AddNewRoleModal
