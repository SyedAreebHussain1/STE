import { Button, Col, DatePicker, Divider, Form, Input, Modal, Row } from 'antd'
import React, { useRef, useState } from 'react'
import { useForm } from 'antd/es/form/Form'
import { useSelector, useDispatch } from 'react-redux'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import NumberField from '../../../utils/components/InputFields/NumberField'
import dayjs from 'dayjs'
import { createMeetingApi } from '../../../redux/api/ManageMeetings'

const AddMeetingModal = ({ visible, toggle }) => {
  const [form] = useForm()
  const dispatch = useDispatch()
  function onCancel() {
    toggle()
  }
  function onSuccess() {
    toggle()
  }
  const createMeeting = useSelector((state) => state.createMeeting)
  function onFinish(values) {
    const body = {
      title: values?.title,
      meetingUrl: values?.url,
      totalSlots: values?.slots,
      meetingTime: values?.time,
      startTime: values?.date,
    }
    createMeetingApi(dispatch, body, onSuccess)
  }
  const range = (start, end) => {
    const result = []
    for (let i = start; i < end; i++) {
      result.push(i)
    }
    return result
  }
  const disabledDate = (current) => {
    // Can not select days before today and today
    let customDate = dayjs().format('YYYY-MM-DD')
    return current && current < dayjs(customDate, 'YYYY-MM-DD')
  }
  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  })
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add Meeting Details</h3>}
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
            <div>
              <InputLabel>Title</InputLabel>
              <TextField name="title" />
            </div>

            <Row gutter={20}>
              <Col sm={24} lg={12}>
                <div>
                  <InputLabel>URL</InputLabel>
                  <TextField name="url" />
                </div>
                <div>
                  <InputLabel>Slots</InputLabel>
                  <NumberField name="slots" />
                </div>
              </Col>
              <Col sm={24} lg={12}>
                <div>
                  <InputLabel>Date</InputLabel>
                  <Form.Item
                    name={'date'}
                    className="mt-[10px]"
                    rules={[
                      {
                        required: true,
                        message: 'required',
                      },
                    ]}
                  >
                    <DatePicker
                      className="w-full h-[40px]"
                      format="YYYY-MM-DD hh:mm A"
                      disabledDate={disabledDate}
                      showTime={{
                        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                        format: 'hh:mm A',
                      }}
                      use12Hours
                      popupClassName="date-meeting"
                    />
                  </Form.Item>
                </div>
                <div>
                  <InputLabel>Duration in minutes</InputLabel>
                  <NumberField
                    name="time"
                    onChange={(e) => {
                      if (e.target.value > 60) {
                        form.setFieldValue('time', 60)
                      }
                    }}
                  />
                </div>
              </Col>
            </Row>

            <div className="flex justify-end mt-[55px]">
              <Button
                size="middle"
                key="1"
                // type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
                loading={createMeeting?.loading}
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

export default AddMeetingModal
