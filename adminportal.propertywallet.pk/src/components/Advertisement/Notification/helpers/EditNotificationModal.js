import { Button, Divider, Form, Input, Modal, Select } from 'antd'
import React, { useEffect } from 'react'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import { useForm } from 'antd/es/form/Form'
import TextAreaField from '../../../../utils/components/InputFields/TextAreaField'
import {
  createManualNotificationApi,
  updateManualNotificationApi,
} from '../../../../redux/api/Advertisement/Notification'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const EditNotificationModal = ({ visible, toggle, type, data }) => {
  const [form] = useForm()
  const dispatch = useDispatch()
  const updateManualNotification = useSelector(
    (state) => state.updateManualNotification
  )
  function onCancel() {
    toggle()
  }
  function onSuccess() {
    toggle()
  }
  function onFinish(values) {
    const body = {
      message: values.message,
      status: values.selectGroup,
      redirectUrl: values.url || 'null',
      imageUrl: values.imgUrl || 'null',
      referenceId: values.referenceId || '0',
    }
    if (type === 'FCM') {
      body.title = values.title
    }
    updateManualNotificationApi(dispatch, body, data?.id, onSuccess)
  }

  useEffect(() => {
    if (data) {
      if (type === 'FCM') {
        form.setFieldsValue({
          selectGroup: data.status,
          url: data.redirectUrl !== 'null' ? data.redirectUrl : '',
          imgUrl: data.imageUrl !== 'null' ? data.imageUrl : '',
          referenceId: data.referenceId !== '0' ? data.referenceId : '',
          message: data.message,
          title: data?.title,
        })
      } else {
        form.setFieldsValue({
          selectGroup: data.status,
          message: data.message,
        })
      }
    }
  }, [data])
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Save Message</h3>}
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
            {type === 'FCM' && (
              <div>
                <InputLabel>Title</InputLabel>
                <Form.Item
                  name="title"
                  rules={[{ required: true, message: 'Title is required' }]}
                >
                  <Input className="py-2" />
                </Form.Item>
              </div>
            )}
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
                  options={
                    type === 'FCM'
                      ? [
                          {
                            label: 'All Users',
                            value: 'FCM_FOR_ALL_USERS',
                          },
                          {
                            label: 'UnSingedup Users',
                            value: 'FCM_FOR_UNSIGNUP_USERS',
                          },
                        ]
                      : [
                          {
                            label: 'Verified Users',
                            value: 'SMS_FOR_VERIFIED_USER',
                          },
                          {
                            label: 'UnVerified Users',
                            value: 'SMS_FOR_UNVERIFIED_USER',
                          },
                        ]
                  }
                  // { label: moduleList?.data?.data?.[0]?.title, value: moduleList?.data?.data[0]?.id, },
                  className="h-[43px]"
                />
              </Form.Item>
            </div>
            {type === 'FCM' && (
              <>
                <div>
                  <InputLabel>Enter Url</InputLabel>
                  <Form.Item name="url">
                    <Input className="py-2" />
                  </Form.Item>
                </div>
                <div>
                  <InputLabel>Image Url</InputLabel>
                  <Form.Item name="imgUrl">
                    <Input className="py-2" />
                  </Form.Item>
                </div>
                <div>
                  <InputLabel>Reference Id</InputLabel>
                  <Form.Item name="referenceId">
                    <Input className="py-2" />
                  </Form.Item>
                </div>
              </>
            )}
            <div>
              <InputLabel>Your Message</InputLabel>
              <TextAreaField name={'message'} />
            </div>

            <div className="flex justify-end mt-[55px]">
              <Button
                size="middle"
                key="1"
                // type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                loading={updateManualNotification.loading}
                htmlType="submit"
              >
                Save Message
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default EditNotificationModal
