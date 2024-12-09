import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
} from 'antd'
import { useForm } from 'antd/es/form/Form'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextAreaField from '../../../utils/components/InputFields/TextAreaField'
dayjs.extend(customParseFormat)

const RejectModal = ({ visible, toggleAdd }) => {
  const [titleRole, setTitleRole] = useState('')
  const [form] = useForm()

  const onFinish = (e) => {
    const body = {
      title: titleRole,
    }
  }
  function onSuccess() {
    toggleAdd()
    form.resetFields()
  }

  return (
    <Modal
      width={'541px'}
      title={
        <h3 className="text-[15px] font-medium leading-[22px] text-[#181818]">
          Reason
        </h3>
      }
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
            // onFinish={onFinish}
          >
            <h4
              style={{ textAlign: 'start' }}
              className="text-[14px] text-[#344054] font-medium mt-[] mb-[]"
            >
              Reason for rejection
            </h4>
            <Form.Item
              name="title"
              rules={[{ required: true, message: 'Title is required' }]}
            >
              <Col lg={24} xs={24}>
                {/* <InputLabel>Reason for rejection</InputLabel> */}
                <TextAreaField name={'reasonForRejection'} />
              </Col>
            </Form.Item>

            <div className="flex justify-end ">
              <Button
                size="middle"
                key="3"
                className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
                onClick={toggleAdd}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="4"
                // type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                // loading={postRoles.loading}
                htmlType="submit"
              >
                Confirm
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </Modal>
  )
}

export default RejectModal
