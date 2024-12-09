import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Col,
} from 'antd'
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input'
import en from 'world_countries_lists/data/countries/en/world.json'
import { useForm } from 'antd/es/form/Form'
import { addNewInvestorApi } from '../../../../redux/api/Investors'

const AddInvestorModal = ({ visible, toggleAdd }) => {
  const [state, setState] = useState({
    phone: {
      code: '+92',
      short: 'PK',
      phone: '',
    },
  })
  const dispatch = useDispatch()
  const addNewInvestor = useSelector((state) => state.addnewInvestor)
  const [form] = useForm()

  const onFinish = (e) => {
    const body = {
      fullName: state.name,
      email: state.email,
      phone: state.phone.code.toString().includes('+')
        ? `${state.phone.code}${state.phone.phone}`
        : `+${state.phone.code}${state.phone.phone}`,
      cnic: state.cnic,
    }
    addNewInvestorApi(dispatch, body, onSuccess)
  }
  function onSuccess() {
    toggleAdd()
    form.resetFields()
  }
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    })
  }
  function onCancel() {
    toggleAdd()
    setState((prev) => ({
      ...prev,
      phone: {
        code: '+92',
        short: 'PK',
        phone: '',
      },
    }))
    form.resetFields()
  }
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add Investor</h3>}
      open={visible}
      width={700}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />

      <Form
        name="normal_login"
        form={form}
        className="login-form"
        initialValues={{ remember: true }}
        style={{
          marginTop: -5,

          //   textAlign: "center",
        }}
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={12}>
            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[14px] pb-1"
            >
              Name
            </h4>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Name is required' }]}
              //   className='mb-0'
            >
              <Input
                value={state.name}
                className="py-2"
                onChange={(e) => onChange(e.target.value, 'name')}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[14px] pb-1"
            >
              CNIC
            </h4>
            <Form.Item
              name="cnic"
              rules={[{ required: true, message: 'CNIC is required' }]}
              //   className='mb-0'
            >
              <Input
                className="py-2"
                maxLength={13}
                value={state.cninc}
                onChange={(e) => onChange(e.target.value, 'cnic')}
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault()
                  }
                }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[14px] pb-1"
            >
              Mobile No
            </h4>
            <Form.Item
              name="phone"
              rules={[
                {
                  validator: () => {
                    if (state?.phone?.phone?.trim().length > 0) {
                      return Promise.resolve()
                    } else {
                      return Promise.reject(
                        <span
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                          }}
                        >
                          phone is required
                        </span>
                      )
                    }
                  },
                },
              ]}
            >
              <ConfigProvider locale={en}>
                <CountryPhoneInput
                  inline
                  onKeyPress={(event) => {
                    if (!/[0-9,.]/.test(event.key)) {
                      event.preventDefault()
                    }
                  }}
                  maxLength={20}
                  value={state.phone}
                  onChange={(e) => onChange(e, 'phone')}
                  defaultValue={{
                    short: 'PK',
                  }}
                />
              </ConfigProvider>
            </Form.Item>
          </Col>
          <Col span={12}>
            <h4
              style={{ textAlign: 'start', marginTop: '2%' }}
              className="text-[14px] pb-1"
            >
              Email
            </h4>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Email is required' }]}
              //   className='mb-0'
            >
              <Input
                value={state.email}
                className="py-2"
                onChange={(e) => onChange(e.target.value, 'email')}
              />
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end">
          <Button
            size="middle"
            key="2"
            // type="primary"

            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            loading={addNewInvestor.loading}
            htmlType="submit"
          >
            Add new
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default AddInvestorModal
