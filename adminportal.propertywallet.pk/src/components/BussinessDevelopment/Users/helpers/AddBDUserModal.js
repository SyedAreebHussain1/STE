import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row, Divider, Checkbox, Input } from 'antd'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import { SelectField } from '../../../../utils/components/InputFields/SelectField'
import en from 'world_countries_lists/data/countries/en/world.json'
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'

import {
  createAffiliateSignupApi,
  getBDUsersRolesApi,
} from '../../../../redux/api/BDUsers'

const AddBDUserModal = ({ visible, toggle }) => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    phone: {
      code: '+92',
      short: 'PK',
      phone: '',
    },
  })

  const [form] = useForm()
  const createUsers = useSelector((state) => state?.createUser)

  const getRoles = useSelector((state) => state?.getAllRoleForBDUser)
  function onCancel() {
    toggle()
  }

  useEffect(() => {
    getBDUsersRolesApi(dispatch)
  }, [dispatch])
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  function onFinish(values) {
    const body = {
      fullName: values?.name,
      email: values?.email,
      phone: state.phone.code.toString().includes('+')
        ? `${state.phone.code}${state.phone.phone}`
        : `+${state.phone.code}${state.phone.phone}`,
      bdRoleId: values?.bdRoleId,
      salary: values?.salary,
      bankName: values.bankName,
      accountNumber: values.accountNumber,
      signupTarget: values?.bdRoleId == 1 ? values?.signupTarget : 0,
    }
    createAffiliateSignupApi(dispatch, body, onSuccess)
  }

  function onSuccess() {
    // getLoungeApi(dispatch, pageLimit)
    toggle()
  }
  useEffect(() => {
    console.log(createUsers?.loading)
  }, [createUsers])

  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add Users Details</h3>}
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
            <Col lg={24} sm={24}>
              <Row gutter={16}>
                <Col lg={12} sm={24}>
                  <h4
                    style={{ textAlign: 'start' }}
                    className="text-[14px] pb-1"
                  >
                    Name <span style={{ color: 'red' }}>*</span>
                  </h4>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Name is required' }]}
                  >
                    <Input
                      value={state.name}
                      className="py-2"
                      onChange={(e) => onChange(e.target.value, 'name')}
                      onKeyPress={(event) => {
                        if (!/[a-z | A-Z,.]/.test(event.key)) {
                          event.preventDefault()
                        }
                      }}
                      onPasteCapture={(e) => {
                        const pastedText = e.clipboardData.getData('text')
                        if (/[0-9]/g.test(pastedText)) {
                          e.preventDefault()
                        }
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24}>
                  <h4
                    style={{ textAlign: 'start' }}
                    className="text-[14px] pb-1"
                  >
                    Email <span style={{ color: 'red' }}>*</span>
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
                <Col lg={12} sm={24}>
                  <h4
                    style={{ textAlign: 'start' }}
                    className="text-[14px] pb-1"
                  >
                    Mobile No <span style={{ color: 'red' }}>*</span>
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
                        maxLength={15}
                        value={state.phone}
                        onChange={(e) => onChange(e, 'phone')}
                        defaultValue={{
                          short: 'PK',
                        }}
                      />
                    </ConfigProvider>
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24}>
                  <h4
                    style={{ textAlign: 'start' }}
                    className="text-[14px] pb-1"
                  >
                    Bank Name <span style={{ color: 'red' }}>*</span>
                  </h4>
                  <Form.Item
                    name="bankName"
                    rules={[
                      { required: true, message: 'Bank Name is required' },
                    ]}
                  >
                    <Input
                      value={state.name}
                      className="py-2"
                      onChange={(e) => onChange(e.target.value, 'name')}
                      onKeyPress={(event) => {
                        if (!/[a-z | A-Z,.]/.test(event.key)) {
                          event.preventDefault()
                        }
                      }}
                      onPasteCapture={(e) => {
                        const pastedText = e.clipboardData.getData('text')
                        if (/[0-9]/g.test(pastedText)) {
                          e.preventDefault()
                        }
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24}>
                  <h4
                    style={{ textAlign: 'start' }}
                    className="text-[14px] pb-1"
                  >
                    Account No <span style={{ color: 'red' }}>*</span>
                  </h4>
                  <Form.Item
                    name="accountNumber"
                    rules={[
                      { required: true, message: 'Account Number is required' },
                    ]}
                    //   className='mb-0'
                  >
                    <Input
                      value={state.email}
                      className="py-2"
                      onChange={(e) => onChange(e.target.value, 'email')}
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24}>
                  <InputLabel>Select Role</InputLabel>
                  <SelectField
                    name="bdRoleId"
                    required={true}
                    allowClear
                    options={getRoles?.data?.data?.map((val) => ({
                      label: val?.title,
                      value: val?.id,
                    }))}
                    onChange={(e) =>
                      setState((pre) => ({
                        ...pre,
                        bdRoleId: e,
                      }))
                    }
                  />
                </Col>
                <Col lg={12} sm={24}>
                  <h4 style={{ textAlign: 'start' }} className="text-[14px] ">
                    Salary <span style={{ color: 'red' }}>*</span>
                  </h4>
                  <Form.Item
                    name="salary"
                    rules={[{ required: true, message: 'Salary is required' }]}
                    //   className='mb-0'
                  >
                    <Input
                      value={state.salary}
                      className="py-2"
                      onChange={(e) => onChange(e.target.value, 'salary')}
                      disabled={state.bdRoleId > 0 ? false : true}
                    />
                  </Form.Item>
                </Col>
                {state.bdRoleId == 1 ? (
                  <Col lg={12} sm={24}>
                    <h4
                      style={{ textAlign: 'start' }}
                      className="text-[14px] pb-1"
                    >
                      Signup Target <span style={{ color: 'red' }}>*</span>
                    </h4>
                    <Form.Item
                      name="signupTarget"
                      rules={[
                        {
                          required: true,
                          message: 'Signup Target is required',
                        },
                      ]}
                      //   className='mb-0'
                    >
                      <Input
                        value={state.signupTarget}
                        className="py-2"
                        onChange={(e) =>
                          onChange(e.target.value, 'signupTarget')
                        }
                      />
                    </Form.Item>
                  </Col>
                ) : (
                  ''
                )}
              </Row>
            </Col>
          </Row>
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={createUsers?.loading}
              htmlType="submit"
              disabled={createUsers?.loading}
            >
              Add Now
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}

export default AddBDUserModal
