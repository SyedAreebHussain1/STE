import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row, Divider, Select, Input } from 'antd'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import en from 'world_countries_lists/data/countries/en/world.json'
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { getRolesELoungeApi } from '../../../../redux/api/ELoungeRoles'
import {
  getELoungeUserApi,
  postELoungeUserApi,
} from '../../../../redux/api/ELoungeUser'

const AddnewELoungeUserModal = ({ visible, toggle }) => {
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [elounges, setElounges] = useState([])
  const [state, setState] = useState({
    phone: {
      code: '92',
      short: 'PK',
      phone: '',
    },
  })
  const [roleType, setRoleType] = useState('')
  const { Option } = Select

  const [form] = useForm()
  const PostELoungeUser = useSelector((state) => state?.PostELoungeUser)
  const EloungeGetRoles = useSelector((state) => state?.EloungeGetRoles)
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

  function handleLoadMore(e) {
    e.preventDefault()
    e.stopPropagation()
    setPageLimit((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
      }
    })
  }

  function onFinish(values) {
    let phoneNumber = 0

    if (state.phone.phone[0] === '0') {
      phoneNumber = '+' + state.phone.code + state?.phone?.phone?.substring(1)
    } else {
      phoneNumber = '+' + state.phone.code + state?.phone?.phone
    }

    let body = ''
    if (roleType == 'sale') {
      body = {
        eLoungeRoleId: values?.eLoungeRoleId,
        signUptarget: values?.signUptarget,
        fullName: values?.name,
        phone: phoneNumber,
        salary: values?.salary,
      }
    } else {
      body = {
        salary: values?.salary,
        eLoungeRoleId: values?.eLoungeRoleId,
        fullName: values?.name,
        phone: phoneNumber,
      }
    }
    if (values.email) {
      body.email = values?.email
    }
    postELoungeUserApi(dispatch, body, onSuccess)
  }

  function onSuccessGetELounges(allELounges) {
    setElounges((prev) => {
      return [
        ...prev,
        ...allELounges?.data?.items?.map((item) => ({
          title: item.title,
          value: item.id,
          roleType: item.roleType,
        })),
      ]
    })
  }

  useEffect(() => {
    getRolesELoungeApi(dispatch, pageLimit, '', onSuccessGetELounges)
  }, [pageLimit])

  useEffect(() => {
    form.setFields([{ name: 'signUptarget', errors: false }])
  }, [roleType])

  useEffect(() => {
    if (state.phone.phone) {
      form.setFields([{ name: 'phone', errors: false }])
    }
  }, [state.phone])
  return (
    <Modal
      title={
        <h3 className="text-[18px] font-semibold">Add E-Lounge User Details</h3>
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
                  <Input size="large" />
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
            <Col lg={12} sm={24} xs={24}>
              <div>
                <InputLabel>
                  Email <span>(Optional)</span>
                </InputLabel>
                <Form.Item name="email" className="mb-[20px] mt-[10px] ">
                  <Input size="large" />
                </Form.Item>
              </div>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <div className="mb-[20px]">
                <InputLabel>
                  Elounge Role <span class="text-red-700 ">*</span>
                </InputLabel>

                <Form.Item
                  name="eLoungeRoleId"
                  className="mb-[20px] mt-[10px] "
                  rules={[
                    {
                      required: true,
                      message: 'Elounge Role is required',
                    },
                  ]}
                >
                  <Select
                    style={{
                      width: '100%',
                      height: '40px',
                    }}
                    onChange={(e) => {
                      elounges?.map(
                        (val) => val?.value == e && setRoleType(val?.roleType)
                      )
                    }}
                    dropdownRender={(menu) => {
                      return (
                        <>
                          {menu}
                          <div className="flex justify-center items-center">
                            <Button
                              className="custom-btn mt-2 mb-2"
                              loading={EloungeGetRoles?.loading}
                              onClick={handleLoadMore}
                            >
                              Load More
                            </Button>
                          </div>
                        </>
                      )
                    }}
                  >
                    {elounges?.map((val, i) => (
                      <Option key={i} value={val.value}>
                        {val?.title}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <div>
                <InputLabel>
                  Salary{' '}
                  {roleType !== 'owner' && <span class="text-red-700 ">*</span>}
                </InputLabel>

                <Form.Item
                  className="mb-[20px] mt-[10px] "
                  name="salary"
                  rules={[
                    {
                      required: roleType === 'owner' ? false : true,
                      message: 'Salary is required',
                    },
                  ]}
                >
                  <Input
                    onKeyPress={(event) => {
                      if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault()
                      }
                    }}
                    className="w-full lg:w-[] h-[] rounded-[8px]"
                    size="large"
                    disabled={roleType === 'owner'}
                  />
                </Form.Item>
              </div>
            </Col>

            <Col lg={12} sm={24} xs={24}>
              <div>
                <InputLabel>
                  Sign Up Target{' '}
                  {roleType == 'sale' && <span class="text-red-700 ">*</span>}
                </InputLabel>

                <Form.Item
                  className="mb-[20px] mt-[10px] "
                  name="signUptarget"
                  rules={[
                    {
                      required: roleType == 'sale',
                      message:
                        roleType == 'sale' ? 'Signup target is required' : '',
                    },
                  ]}
                >
                  <Input
                    disabled={roleType !== 'sale'}
                    onKeyPress={(event) => {
                      if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault()
                      }
                    }}
                    className="w-full lg:w-[] h-[] rounded-[8px]"
                    size="large"
                  />
                </Form.Item>
              </div>
            </Col>

            {/* <Col lg={12} sm={24} xs={24}>
              <div>
                <InputLabel>
                  Earn Percentage{' '}
                  {roleType == 'sale' && <span class="text-red-700 ">*</span>}
                </InputLabel>
                <Form.Item
                  className="mb-[20px] mt-[10px] "
                  name="earnPercentage"
                  rules={[
                    {
                      required: roleType == 'sale',
                      message: 'Earn Percentage is required',
                    },
                  ]}
                >
                  <Input
                    disabled={roleType !== 'sale'}
                    onKeyPress={(event) => {
                      if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault()
                      }
                    }}
                    className="w-full lg:w-[] h-[] rounded-[8px]"
                    size="large"
                    addonAfter="%"
                    maxLength="3"
                    placeholder={''}
                    onChange={(e) => {
                      if (Number(e.target.value) > 100) {
                        e.target.value = 100
                        form.setFieldValue('earnPercentage', e.target.value)
                      }
                    }}
                  />
                </Form.Item>
              </div>
            </Col> */}
          </Row>
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={PostELoungeUser.loading}
              htmlType="submit"
            >
              Add Now
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}

export default AddnewELoungeUserModal
