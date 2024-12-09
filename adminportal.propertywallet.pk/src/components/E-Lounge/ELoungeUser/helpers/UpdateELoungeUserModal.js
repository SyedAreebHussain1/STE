import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row, Divider, Select, Input } from 'antd'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import en from 'world_countries_lists/data/countries/en/world.json'
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import {
  UpdateELoungeUserApi,
  getELoungeUserApi,
  postELoungeUserApi,
} from '../../../../redux/api/ELoungeUser'

const UpdateELoungeUserModal = ({ visible, toggle, data }) => {
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [state, setState] = useState({
    phone: {
      code: '92',
      short: 'PK',
      phone: data?.phone?.split('+92')[1],
    },
  })

  const [form] = useForm()
  const UpdateELoungeUser = useSelector((state) => state?.UpdateELoungeUser)

  function onCancel() {
    toggle()
  }

  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  function onSuccess() {
    getELoungeUserApi(dispatch, pageLimit)
    toggle()
  }

  function onFinish(values) {
    const body = {
      email: values.email,
    }

    UpdateELoungeUserApi(dispatch, data?.id, body, onSuccess)
  }
  useEffect(() => {
    form.setFieldsValue({
      name: data?.fullName,
      email: data?.email,
    })
  }, [data])

  return (
    <Modal
      title={
        <h3 className="text-[18px] font-semibold">
          Edit E-Lounge User Details
        </h3>
      }
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={713}
    >
      <Divider />

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <div>
          <Row gutter={16}>
            <Col lg={12} sm={24} xs={24}>
              <div>
                <InputLabel>
                  Name <span class="text-red-700 ">*</span>
                </InputLabel>
                <Form.Item
                  name="name"
                  className="mb-[20px] mt-[10px] "
                  rules={[
                    {
                      required: true,
                      message: 'Name is required',
                    },
                  ]}
                >
                  <Input size="large" disabled />
                </Form.Item>
              </div>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <div>
                <InputLabel>
                  Phone No <span class="text-red-700 ">*</span>
                </InputLabel>
                <Form.Item
                  name="phone"
                  className="mb-[20px] mt-[10px] "
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
                      disabled
                      className="phoneInputForELoungeModal"
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
              </div>
            </Col>
            <Col lg={24} sm={24} xs={24}>
              <div>
                <InputLabel>
                  Email <span>(Optional)</span>
                </InputLabel>
                <Form.Item name="email" className="mb-[20px] mt-[10px] ">
                  <Input size="large" />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={UpdateELoungeUser.loading}
              htmlType="submit"
            >
              Edit Now
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}

export default UpdateELoungeUserModal
