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
// import Upload from "../../../../utils/components/Upload/Upload";
// import { useUpload } from "../../../../utils/hooks/useUpload";
// import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
// import { SelectField } from "../../../../utils/components/InputFields/SelectField";
dayjs.extend(customParseFormat)

// const { RangePicker } = DatePicker;
// const dateFormat = 'YYYY-MM-DD';
const ChangeStatusModal = ({ visible, toggleAdd }) => {
  // const dataSource = data.map((value) => value)
  const [titleRole, setTitleRole] = useState('')
  const [form] = useForm()

  const onFinish = (e) => {
    const body = {
      title: titleRole,
    }
    // postRolesApi(dispatch, body, onSuccess);
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
          Change Status
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
              //   textAlign: "center",
            }}
            // onFinish={onFinish}
          >
            <h4
              style={{ textAlign: 'start' }}
              className="text-[14px] text-[#344054] font-medium mt-[3%] mb-[1%]"
            >
              Change Status
            </h4>
            <Form.Item
              name="title"
              rules={[{ required: true, message: 'Title is required' }]}
              //   className='mb-0'
            >
              {/* <InputLabel>Change Status</InputLabel> */}
              <Select className="h-[40px]">
                <Select.Option key={1}>Paid</Select.Option>
                <Select.Option key={2}>Reject</Select.Option>
                <Select.Option key={2}>In Progress</Select.Option>
              </Select>
            </Form.Item>

            <div className="flex justify-end ">
              <Button
                size="middle"
                key="5"
                // type="primary"
                className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
                onClick={toggleAdd}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="6"
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

export default ChangeStatusModal
