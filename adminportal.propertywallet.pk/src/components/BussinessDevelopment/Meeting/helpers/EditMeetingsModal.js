import { Button, Col, DatePicker, Divider, Form, Modal, Row } from 'antd'
import React, { useEffect } from 'react'
import { useForm } from 'antd/es/form/Form'
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../utils/components/InputFields/TextField'
import NumberField from '../../../../utils/components/InputFields/NumberField'
import { updateBdMeetingApi } from '../../../../redux/api/BDMeeting'

const EditMeetingsBDModal = ({ visible, toggle, editData }) => {
  const [form] = useForm()
  const dispatch = useDispatch()
  function onCancel() {
    toggle()
  }
  function onSuccess() {
    toggle()
  }
  const updateBdMeeting = useSelector((state) => state?.updateBdMeeting)
  function onFinish(values) {
    const body = {
      title: values?.title,
      meetingUrl: values?.url,
      totalSlots: values?.slots,
      meetingTime: values?.time,
      startTime: values?.date,
    }
    updateBdMeetingApi(dispatch, body, onSuccess, editData?.id)
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
  // const disabledDateTime = () => ({
  //   disabledHours: () => range(0, 24).splice(4, 20),
  //   disabledMinutes: () => range(30, 60),
  //   disabledSeconds: () => [55, 56],
  // })
  useEffect(() => {
    if (editData) {
      form.setFieldsValue({
        title: editData?.title,
        url: editData?.meetingUrl,
        slots: editData?.totalSlots,
        date: dayjs(editData?.startTime),
        time: editData?.meetingTime,
      })
    }
  }, [editData])
  return (
    <Modal
      title={
        <h3 className="text-[18px] font-semibold">Edit Meeting Details</h3>
      }
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
                      // disabledTime={disabledDateTime}
                      showTime={{
                        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                        format: 'hh:mm A',
                      }}
                      popupClassName="date-meeting"
                      use12Hours
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
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
                loading={updateBdMeeting?.loading}
              >
                Edit Now
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default EditMeetingsBDModal
