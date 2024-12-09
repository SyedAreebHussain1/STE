import { Button, Divider, Form, Input, Modal, Select } from 'antd'
import React, { useState } from 'react'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import { useForm } from 'antd/es/form/Form'
import TextAreaField from '../../../../utils/components/InputFields/TextAreaField'
import TextField from '../../../../utils/components/InputFields/TextField'
import {
  createManualNotificationApi,
  unverifiedUserNotificationApi,
} from '../../../../redux/api/Advertisement/Notification'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CitySelectField from './CitySelectField'

const SmsNotificationModal = ({ visible, toggle }) => {
  const [form] = useForm()
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const createManualNotification = useSelector(
    (state) => state.createManualNotification
  )
  function onCancel() {
    toggle()
  }
  function onSuccess(body) {
    const newBody = { ...body }
    if (form.getFieldValue('city')) {
      newBody.city = form.getFieldValue('city')
    }
    unverifiedUserNotificationApi(dispatch, newBody)
    toggle()
  }
  function onFinish(values) {
    const body = {
      message: values.message,
      status: values.selectGroup,
      redirectUrl: 'null',
      imageUrl: 'null',
      referenceId: '0',
    }
    createManualNotificationApi(dispatch, body, onSuccess)
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Send Message</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={539}
    >
      <Divider />
      <div>
        <div>
          <Form
            name="normal_login"
            form={form}
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div>
              <InputLabel>User Group</InputLabel>
              <Form.Item
                name="selectGroup"
                rules={[{ required: true, message: 'User Group is required' }]}
              >
                <Select
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  options={[
                    {
                      label: 'Verified Users',
                      value: 'SMS_FOR_VERIFIED_USER',
                    },
                    {
                      label: 'UnVerified Users',
                      value: 'SMS_FOR_UNVERIFIED_USER',
                    },
                  ]}
                  // { label: moduleList?.data?.data?.[0]?.title, value: moduleList?.data?.data[0]?.id, },
                  className="h-[43px]"
                />
              </Form.Item>
            </div>
            <div>
              <InputLabel>Your Message</InputLabel>
              <TextAreaField name={'message'} />
            </div>
            <div>
              <InputLabel>Enter City</InputLabel>
              {/* <CitySelectField /> */}
              <TextField name="city" required={false} />
            </div>

            <div className="flex justify-end mt-[55px]">
              <Button
                size="middle"
                key="1"
                // type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                loading={createManualNotification.loading}
                htmlType="submit"
              >
                Send Message
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default SmsNotificationModal
