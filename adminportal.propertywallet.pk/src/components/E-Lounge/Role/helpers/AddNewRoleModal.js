import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Divider, Form, Input, Modal, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { postRolesELoungeApi } from '../../../../redux/api/ELoungeRoles'
import NumberField from '../../../../utils/components/InputFields/NumberField'

const AddNewRoleModal = ({ visible, toggleAdd }) => {
  const [roleType, setRoleType] = useState('')

  const dispatch = useDispatch()
  const postRoles = useSelector((state) => state.EloungePostRoles)
  const [form] = useForm()

  const onFinish = (e) => {
    let body = ''
    if (e.roleType == 'sale') {
      body = {
        title: e.title,
        roleType: e.roleType,
        // salesPer: e.salesPer,
        // divisionPer: 0,
        subRoleType: e.subRoleType,
      }
    } else {
      body = {
        title: e.title,
        roleType: e.roleType,
        // salesPer: e.salesPer,
        // divisionPer: e.divisionPercent,
      }
    }
    postRolesELoungeApi(dispatch, body, onSuccess)
  }
  function onSuccess() {
    toggleAdd()
    form.resetFields()
  }
  function onCancel() {
    toggleAdd()
    form.resetFields()
  }
  useEffect(() => {
    form.resetFields()
    setRoleType('')
  }, [visible])

  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add New Role</h3>}
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
            >
              <Input className="py-2" placeholder="Title" />
            </Form.Item>

            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[16px] pb-1"
            >
              Role Types
            </h4>
            <Form.Item
              name="roleType"
              rules={[{ required: true, message: 'Role types is required' }]}
            >
              <Select
                className="rounded-[8px]"
                size="large"
                placeholder="Role Type"
                onChange={(e) => setRoleType(e)}
              >
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
                  required: roleType == 'sale' ? true : false,
                  message: 'Sub Role Type is required',
                },
              ]}
            >
              <Select
                className="rounded-[8px]"
                size="large"
                placeholder="Sub Role Type"
                disabled={roleType !== 'sale'}
              >
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
              required={roleType !== 'sale'}
              addonAfter="%"
              maxLength="3"
              placeholder={''}
              disabled={roleType == 'sale'}
              onChange={(e) => {
                if (Number(e.target.value) > 100) {
                  e.target.value = 100
                  form.setFieldValue('divisionPercent', e.target.value)
                }
              }}
            />
            <h4 style={{ textAlign: 'start' }} className="text-[16px] pb-1">
              Sales Percent
            </h4>

            <NumberField
              name="salesPer"
              required={true}
              addonAfter="%"
              maxLength="3"
              placeholder={''}
              onChange={(e) => {
                if (Number(e.target.value) > 100) {
                  e.target.value = 100
                  form.setFieldValue('salesPer', e.target.value)
                }
              }}
            /> */}

            <div className="flex justify-end">
              <Button
                size="middle"
                key="1"
                className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
                onClick={onCancel}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="2"
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
