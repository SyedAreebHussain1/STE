import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Progress,
  Row,
  Select,
} from 'antd'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons'

import dayjs from 'dayjs'
import { useForm } from 'antd/es/form/Form'
import { useUpload } from '../../../utils/hooks/useUpload'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import PropertiesDetailsTableImg from '../../assest/img/ViewDetailsTableImg.png'
import { Option } from 'antd/es/mentions'

dayjs.extend(customParseFormat)
const { RangePicker } = DatePicker
const dateFormat = 'YYYY/MM/DD'

const AddNewLeadsModal = ({ visible, toggleAdd }) => {
  const [titleRole, setTitleRole] = useState('')
  const [form] = useForm()
  const dispatch = useDispatch()
  const [mediaImage, setMediaImage, imagePreviews, deleteMasterFile, progress] =
    useUpload()
  const [range, setRange] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [body, setBody] = useState({
    redirectLink: null,
    startDate: null,
    endDate: null,
    type: null,
    placement: null,
    url: null,
  })

  const onFinish = (e) => {}

  function onSuccess() {
    toggleAdd()
    form.resetFields()
    // deleteMasterFile(imagePreviews[0].name)
  }
  function onCancel() {
    toggleAdd()
    progress.resetProgress()
    form.resetFields()
  }

  return (
    <Modal
      width={'1102px'}
      title={<h3 className="text-[18px] font-semibold">Add Lead</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%' }} bordered={false}>
          <Form
            name="normal_login"
            form={form}
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <div className="mb-[8px] ">
                  {' '}
                  <InputLabel>Property Type</InputLabel>{' '}
                </div>
                <Form.Item
                  name="selectPromotion"
                  rules={[{ required: true, message: 'Title is required' }]}
                >
                  <Select
                    placeholder={'Select'}
                    className="rounded-[31px] text-[12px] h-[41px] w-full"
                  >
                    <Option key={1}>Project</Option>
                    <Option key={2}>Single Inventry</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <div className="mb-[8px] ">
                  {' '}
                  <InputLabel>Select Inventory</InputLabel>{' '}
                </div>
                <Form.Item
                  name="selectInventory"
                  rules={[{ required: true, message: 'Title is required' }]}
                >
                  {/* <Input
                                        placeholder="Search"
                                        prefix={<SearchOutlined />}
                                        className="w-full lg:w-[] h-[40px]"
                                    /> */}
                  <Select
                    placeholder={'Search'}
                    className="rounded-[31px] text-[12px] h-[41px] w-full"
                    dropdownRender={(menu) => (
                      <>
                        <Divider style={{ margin: '8px 0' }} />
                        <div
                          style={{ padding: '0 8px 4px' }}
                          className="w-full"
                        >
                          <Input
                            placeholder="Search"
                            className="w-full border-none bg-[#6670850A]"
                          />
                        </div>

                        {menu}
                      </>
                    )}
                  >
                    <Option key={1}>-</Option>
                    <Option key={2}>-</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <div className="gap-2" style={{ display: 'flex' }}>
                  <div className="flex gap-3">
                    <div>
                      <img src={PropertiesDetailsTableImg} alt="" />
                    </div>
                    <div>
                      <p>Stunning 3-Bedroom Home with High-End Finishes</p>{' '}
                    </div>
                  </div>
                  <div>
                    {' '}
                    <span>125 Properties</span>{' '}
                  </div>

                  <div>
                    <span
                      className=" right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex  cursor-pointer"
                      // onClick={() => deleteMasterFile()}
                    >
                      {' '}
                      <CloseOutlined />{' '}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <div className="mb-[8px] ">
                  {' '}
                  <InputLabel>Select Agency</InputLabel>{' '}
                </div>
                <Form.Item
                  name="selectInventory"
                  rules={[{ required: true, message: 'Title is required' }]}
                >
                  {/* <Input
                                        placeholder="Search"
                                        prefix={<SearchOutlined />}
                                        className="w-full lg:w-[] h-[40px]"
                                    /> */}
                  <Select
                    placeholder={'Search'}
                    className="rounded-[31px] text-[12px] h-[41px] w-full"
                    dropdownRender={(menu) => (
                      <>
                        <Divider style={{ margin: '8px 0' }} />
                        <div
                          style={{ padding: '0 8px 4px' }}
                          className="w-full"
                        >
                          <Input
                            placeholder="Search"
                            className="w-full border-none bg-[#6670850A]"
                          />
                        </div>

                        {menu}
                      </>
                    )}
                  >
                    <Option key={1}>-</Option>
                    <Option key={2}>-</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <div className="gap-2" style={{ display: 'flex' }}>
                  <div className="flex gap-3">
                    <div>
                      <img src={PropertiesDetailsTableImg} alt="" />
                    </div>
                    <div>
                      <p>Stunning 3-Bedroom Home with High-End Finishes</p>{' '}
                    </div>
                  </div>
                  <div>
                    {' '}
                    <span>125 Properties</span>{' '}
                  </div>

                  <div>
                    <span className=" right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex  cursor-pointer">
                      {' '}
                      <CloseOutlined />{' '}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <InputLabel>Name</InputLabel>
                <TextField placeholder="Name" name="name" />
              </Col>
              <Col lg={12} xs={24}>
                <InputLabel>CNIC</InputLabel>
                <TextField placeholder="CNIC" name="CNIC" />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={12} xs={24}>
                <InputLabel>Mobile no</InputLabel>
                <TextField placeholder="Mobile No" name="mobileNo" />
              </Col>
              <Col lg={12} xs={24}>
                <InputLabel>Email</InputLabel>
                <TextField placeholder="Email" name="email" />
              </Col>
            </Row>

            <div className="flex justify-end mt-[30px] gap-2">
              <Button
                size="middle"
                key="2"
                type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
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

export default AddNewLeadsModal
