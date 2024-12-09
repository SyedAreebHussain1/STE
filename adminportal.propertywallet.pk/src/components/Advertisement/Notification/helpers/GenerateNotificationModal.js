import { Button, Divider, Form, Input, Modal, Select } from 'antd'
import React, { useState } from 'react'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import { useForm } from 'antd/es/form/Form'
import TextAreaField from '../../../../utils/components/InputFields/TextAreaField'
import { createManualNotification } from '../../../../redux/slices/Advertisement/Notification/createManualNotificationSlice'
import {
  createManualNotificationApi,
  mannualPushNotificationApi,
  mannualPushNotificationUnsiginUpApi,
} from '../../../../redux/api/Advertisement/Notification'
import { useDispatch } from 'react-redux'
import AttachImg from '../../../assest/icon/attach.png'
import { useSelector } from 'react-redux'
import TextField from '../../../../utils/components/InputFields/TextField'

const GenerateNotificationModal = ({ visible, toggle }) => {
  const [form] = useForm()
  const [type, setType] = useState('')
  const dispatch = useDispatch()
  const createManualNotification = useSelector(
    (state) => state.createManualNotification
  )
  function onCancel() {
    toggle()
  }
  function onSuccess(body) {
    if (body.status === 'FCM_FOR_UNSIGNUP_USERS') {
      mannualPushNotificationUnsiginUpApi(dispatch, body)
    } else {
      const newBody = {
        ...body,
      }
      if (form.getFieldValue('city')) {
        newBody.city = form.getFieldValue('city')
      }
      mannualPushNotificationApi(dispatch, newBody)
    }
    toggle()
  }
  function onFinish(values) {
    const body = {
      message: values.message,
      status: values.selectGroup,
      redirectUrl: values.url || 'null',
      imageUrl: values.imgUrl || 'null',
      referenceId: values.referenceId || '0',
      title: values.title,
    }
    createManualNotificationApi(dispatch, body, onSuccess)
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Send Notification</h3>}
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
              <InputLabel>Title</InputLabel>
              <Form.Item
                name="title"
                rules={[{ required: true, message: 'Title is required' }]}
              >
                <Input className="py-2" />
              </Form.Item>
            </div>
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
                      label: 'All Users',
                      value: 'FCM_FOR_ALL_USERS',
                    },
                    {
                      label: 'Unsigned up Users',
                      value: 'FCM_FOR_UNSIGNUP_USERS',
                    },
                  ]}
                  // { label: moduleList?.data?.data?.[0]?.title, value: moduleList?.data?.data[0]?.id, },
                  className="h-[43px]"
                  onChange={(e) => {
                    setType(e)
                  }}
                />
              </Form.Item>
            </div>
            <div>
              <InputLabel>Enter Url</InputLabel>
              <Form.Item name="url">
                <Input
                  className="py-2"
                  prefix={<img src={AttachImg} alt="" />}
                />
              </Form.Item>
            </div>
            <div>
              <InputLabel>Image Url</InputLabel>
              <Form.Item name="imgUrl">
                <Input
                  className="py-2"
                  prefix={<img src={AttachImg} alt="" />}
                />
              </Form.Item>
            </div>
            <div>
              <InputLabel>Reference Id</InputLabel>
              <Form.Item name="referenceId">
                <Input className="py-2" />
              </Form.Item>
            </div>
            <div>
              <InputLabel>Your Message</InputLabel>
              <TextAreaField name={'message'} />
            </div>
            {type === 'FCM_FOR_ALL_USERS' && (
              <div>
                <InputLabel>Enter City</InputLabel>
                {/* <CitySelectField /> */}
                <TextField name="city" required={false} />
              </div>
            )}

            <div className="flex justify-end mt-[55px]">
              <Button
                size="middle"
                key="1"
                // type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                loading={createManualNotification.loading}
                htmlType="submit"
              >
                Send Notification
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default GenerateNotificationModal
