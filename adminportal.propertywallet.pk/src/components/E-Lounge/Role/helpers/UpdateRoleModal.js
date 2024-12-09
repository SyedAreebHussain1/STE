import { Button, Card, Divider, Form, Input, Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patchRolesELoungeApi } from '../../../../redux/api/ELoungeRoles'
import NumberField from '../../../../utils/components/InputFields/NumberField'
import { useForm } from 'antd/es/form/Form'

const UpdateRoleModal = ({ visible, toggleAdd, updateData }) => {
  const dispatch = useDispatch()
  const EloungeDeleteRoles = useSelector((state) => state.EloungeDeleteRoles)
  const [form] = useForm()

  useEffect(() => {
    form.setFieldsValue({
      title: updateData?.title,
      roleType: updateData?.roleType,
      // divisionPercent: updateData?.divisionPer,
      subRoleType: updateData?.subRoleType,
      // salesPer: updateData?.salesPer,
    })
  }, [updateData])

  function onSuccess() {
    toggleAdd()
  }
  const onFinishHandler = (e) => {
    const body = {
      title: e.title,
    }
    patchRolesELoungeApi(dispatch, body, updateData.id, onSuccess)
  }

  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Update Role</h3>}
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
            form={form}
            className="login-form"
            initialValues={{ remember: true }}
            style={{
              marginTop: -40,
            }}
            onFinish={onFinishHandler}
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
            >
              <Input name="title" className="py-2" />
            </Form.Item>

            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[16px] pb-1"
            >
              Role Types
            </h4>
            <Form.Item
              name="roleType"
              rules={[{ required: false, message: 'Role types is required' }]}
            >
              <Select className="rounded-[8px]" size="large" disabled={true}>
                <Select.Option value="sale">Sale</Select.Option>
                <Select.Option value="management">Management</Select.Option>
                <Select.Option value="leaduser">Lead User</Select.Option>
                <Select.Option value="owner">Owner</Select.Option>
                <Select.Option value="other">other</Select.Option>
              </Select>
            </Form.Item>

            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[16px] pb-1"
            >
              Sub Role Type
            </h4>
            <Form.Item
              name="subRoleType"
              rules={[
                {
                  required: false,
                  message: 'Sub Role Type is required',
                },
              ]}
            >
              <Select className="rounded-[8px]" size="large" disabled={true}>
                <Select.Option value="agency">Agency</Select.Option>
                <Select.Option value="freelancer">Freelancer</Select.Option>
                <Select.Option value="outdoor">outdoor</Select.Option>
              </Select>
            </Form.Item>

            {/* <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[16px] pb-1"
            >
              Division Percent
            </h4>

            <NumberField
              name="divisionPercent"
              addonAfter="%"
              maxLength="3"
              disabled={true}
            />

            <h4 style={{ textAlign: 'start' }} className="text-[16px] pb-1">
              Sales Percent
            </h4>

            <NumberField
              name="salesPer"
              addonAfter="%"
              maxLength="3"
              disabled={true}
            /> */}
            <div className="flex justify-end">
              <Button
                size="middle"
                key="1"
                className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
                onClick={toggleAdd}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="2"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
                loading={EloungeDeleteRoles?.loading}
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
