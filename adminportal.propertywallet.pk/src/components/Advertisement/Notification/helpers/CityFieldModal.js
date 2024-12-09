import { Button, Form, Modal } from 'antd'
import React from 'react'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../utils/components/InputFields/TextField'
import {
  mannualPushNotificationApi,
  unverifiedUserNotificationApi,
} from '../../../../redux/api/Advertisement/Notification'
import { useDispatch } from 'react-redux'

const CityFieldModal = ({ visible, toggle, data }) => {
  const dispatch = useDispatch()
  function onSuccess() {
    toggle()
  }

  function onFinish(e) {
    if (data.status === 'FCM_FOR_ALL_USERS') {
      const body = {
        message: data?.message,
        redirectUrl: data?.redirectUrl,
        imageUrl: data?.imageUrl,
        referenceId: data?.referenceId,
        title: data?.title,
      }
      if (e.city) {
        body.city = e.city
      }
      mannualPushNotificationApi(dispatch, body, onSuccess)
    } else {
      const body = {
        message: data?.message,
        status: data?.status,
      }
      if (e.city) {
        body.city = e.city
      }
      unverifiedUserNotificationApi(dispatch, body, onSuccess)
    }
  }
  return (
    <Modal
      open={visible}
      onCancel={toggle}
      footer={null}
      centered={true}
      width={539}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div>
          <InputLabel>Enter City</InputLabel>
          <TextField name="city" required={false} />
        </div>

        <div className="flex justify-end mt-[55px]">
          <Button
            size="middle"
            key="1"
            // type="primary"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            htmlType="submit"
          >
            Send
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default CityFieldModal
