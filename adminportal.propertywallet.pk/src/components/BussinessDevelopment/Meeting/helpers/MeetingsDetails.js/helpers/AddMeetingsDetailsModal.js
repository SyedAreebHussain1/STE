import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import React, { useState } from 'react'
import { useForm } from 'antd/es/form/Form'
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '../../../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../../../utils/components/InputFields/TextField'
import NumberField from '../../../../../../utils/components/InputFields/NumberField'
import { useParams } from 'react-router-dom'
import { errorMessage } from '../../../../../../utils/message'
import { createBDMeetingSessionApi } from '../../../../../../redux/api/BDMeeting'

const AddMeetingDetailsBDModal = ({ visible, toggle }) => {
  const [form] = useForm()
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY']
  const dateFormat = 'YYYY/MM/DD'

  function onCancel() {
    toggle()
  }
  const params = useParams()
  const { id } = params
  function onSuccess() {
    toggle()
  }
  const dispatch = useDispatch()
  const createBDMeetingSession = useSelector(
    (state) => state.createBDMeetingSession
  )
  function onFinish(values) {
    const body = {
      name: values?.name,
      email: values?.email,
      phone: values?.mobileNo,
      bdMeetingId: id,
    }
    if (body.phone[0] === '0') {
      body.phone = '+92' + body.phone.split('').splice(1).join('')

      createBDMeetingSessionApi(dispatch, body, onSuccess)
    } else if (body.phone[0] === '3') {
      body.phone = '+92' + body.phone

      createBDMeetingSessionApi(dispatch, body, onSuccess)
    } else {
      errorMessage('Invalid phone number')
    }
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add Custom Details</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={719}
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
            <Row gutter={20}>
              <Col sm={24} lg={12}>
                <div>
                  <InputLabel>Name</InputLabel>
                  <TextField name="name" />
                </div>
                <div>
                  <InputLabel>Email</InputLabel>
                  <TextField name="email" />
                </div>
              </Col>
              <Col sm={24} lg={12}>
                <div>
                  <InputLabel>Mobile No</InputLabel>
                  <NumberField name="mobileNo" />
                </div>
              </Col>
            </Row>

            <div className="flex justify-end mt-[55px]">
              <Button
                size="middle"
                key="1"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
                loading={createBDMeetingSession?.loading}
              >
                Add Now
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default AddMeetingDetailsBDModal
