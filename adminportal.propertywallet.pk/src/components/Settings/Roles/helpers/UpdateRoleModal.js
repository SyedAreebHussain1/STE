import { Button, Card, Divider, Form, Input, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patchRolesApi } from '../../../../redux/api/Settings/Roles'

const UpdateRoleModal = ({ visible, toggleAdd, updateData }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (updateData) {
      setTitle(updateData.title)
    }
  }, [updateData])

  const handleOnClick = () => {
    const body = {
      title: title,
    }
    patchRolesApi(dispatch, body, updateData.id, onSuccess)
  }
  function onSuccess() {
    toggleAdd()
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Update Role</h3>}
      // style={{  }}
      open={visible}
      onCancel={toggleAdd}
      footer={null}
      centered={true}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '100%' }} bordered={false}>
          <Form
            name="normal_login"
            // form={form}
            className="login-form"
            initialValues={{ remember: true }}
            style={{
              marginTop: -40,
              //   textAlign: "center",
            }}
            // onFinish={onFinish}
          >
            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[16px] pb-1"
            >
              Title
            </h4>
            <Input
              className="py-2 mb-5"
              // placeholder="Enter role title"
              // classTitle="email_input"

              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoComplete="off"
            />
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
                onClick={handleOnClick}
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

export default UpdateRoleModal
