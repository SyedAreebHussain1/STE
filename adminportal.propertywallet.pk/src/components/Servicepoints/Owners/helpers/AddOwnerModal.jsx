import React, { useEffect, useState } from 'react'
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
  Select,
} from 'antd'
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input'
import en from 'world_countries_lists/data/countries/en/world.json'
import { useForm } from 'antd/es/form/Form'
import {
  addNewInvestorApi,
  addOwnerApi,
  getInvestorsList,
  getPackagesListApi,
} from '../../../../redux/api/Investors'
import { infoMessage } from '../../../../utils/message'

const AddOwnerModal = ({ visible, toggleAdd }) => {
  const [state, setState] = useState({
    isCheck: false,
    selectedInvestors: [],
    investors: [],

    selectedPackage: null,
    phone: {
      code: '+92',
      short: 'PK',
      phone: '',
    },
    whatsapp: {
      code: '+92',
      short: 'PK',
      phone: '',
    },
  })
  const [objects, setObjects] = useState(null)
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 100,
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
      whatsapp_no: state.whatsapp.code.toString().includes('+')
        ? `${state.whatsapp.code}${state.whatsapp.phone}`
        : `+${state.whatsapp.code}${state.whatsapp.phone}`,
      agencyName: state.agencyname,
      NoOfStaffs: state.noofstaff,
      NoOfBranches: state.noofbranches,
      city: state.city,
      address: state.location,
      country: state.country,
      merchandiserRegistrationNo: state.merchandiserRegistrationNo,
      merchandiserLicenseNo: state.merchandiserLicenseNo,
      pwSubPackageId: JSON.parse(state?.selectedPackage).id,
    }
    if (state?.cnic && state?.cnic.trim().length > 0) {
      body.cnic = state.cnic
    }
    if (state?.referal && state?.referal.trim().length > 0) {
      body.referralCode = state.referal
    }
    if (state?.location && state?.location.trim().length > 0) {
      body.location = state.location
    }
    if (objects !== null && objects.length > 0) {
      let investors = objects.map((item, i) => {
        return {
          investerId: item.id,
          percentage: item.percentage,
        }
      })
      const isValEqualsHundred = investors
        .map((obj) => {
          if ('percentage' in obj) {
            return obj.percentage
          }
          return 0
        })
        .reduce((total, curr) => total + curr)
      if (Number(isValEqualsHundred.toFixed(1)) !== 100) {
        infoMessage('Sum of all percentage field must be 100%')
        return
      }
      body.investors = investors
      body.vendorPercentage = parseFloat(state.percentage)
    }

    addOwnerApi(dispatch, body, onSuccess)
  }
  function onSuccess() {
    toggleAdd()
    setObjects(null)
    form.resetFields()
    setState({
      isCheck: false,
      selectedInvestors: [],
      investors: [],

      selectedPackage: null,
      phone: {
        code: '+92',
        short: 'PK',
        phone: '',
      },
      whatsapp: {
        code: '+92',
        short: 'PK',
        phone: '',
      },
    })
  }
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    })
  }
  const onChangeCheck = (e) => {
    if (e.target.checked === true && state.phone !== '') {
      setState({
        ...state,
        whatsapp: {
          code: state.phone.code,
          short: state.phone.short,
          phone: state.phone.phone,
        },
        isCheck: true,
      })
    } else {
      setState({
        ...state,
        whatsapp: {
          code: '+92',
          short: 'PK',
          phone: '',
        },
        isCheck: false,
      })
    }
  }
  const { Option } = Select
  useEffect(() => {
    if (visible) {
      getInvestorsList(dispatch, pageLimit)
    }
  }, [pageLimit, visible])
  useEffect(() => {
    if (visible) {
      getPackagesListApi(dispatch)
    }
  }, [visible])

  const getAllInvestor = useSelector((state) => state?.getAllInvestor)
  useEffect(() => {
    if (getAllInvestor?.data?.data !== null) {
      let arr = []

      getAllInvestor?.data?.data?.items.map((item, i) => {
        return arr.push({
          id: item.id,
          cnic: item.cnic,
          phone: item.phone,
          email: item.email,
          fullName: item.fullName,
        })
      })

      setState({
        ...state,
        investors: arr,
      })
    }
  }, [getAllInvestor?.data])

  const packagesList = useSelector((state) => state?.PackagesList)
  // useEffect(() => {
  //   if (packagesList?.data !== null) {
  //     setState({
  //       ...state,
  //       packages: packagesList?.data,
  //     });
  //   }
  // }, [packagesList?.data]);
  useEffect(() => {
    if (state?.selectedInvestors.length > 0) {
      setObjects(state?.selectedInvestors.map((item) => JSON.parse(item)))
    } else {
      setObjects(null)
    }
  }, [state?.selectedInvestors])

  const handleInputChange = (e, index) => {
    const updatedObjects = [...objects]
    updatedObjects[index].percentage = parseInt(e.target.value)
    setObjects(updatedObjects)
  }

  function onCancel() {
    toggleAdd()
    form.resetFields()
    setState({
      isCheck: false,
      selectedInvestors: [],
      investors: [],

      selectedPackage: null,
      phone: {
        code: '+92',
        short: 'PK',
        phone: '',
      },
      whatsapp: {
        code: '+92',
        short: 'PK',
        phone: '',
      },
    })
  }
  return (
    <Modal
      width={900}
      title={<h3 className="text-[18px] font-semibold">Add New Owner</h3>}
      open={visible}
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
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Merchandiser Registration No{' '}
              <span style={{ color: 'red' }}>*</span>
            </h4>
            <Form.Item
              name="merchandiserRegistrationNo"
              rules={[
                { required: true, message: 'Merchendiser Reg No is required' },
              ]}
              //   className='mb-0'
            >
              <Input
                value={state.merchandiserRegistrationNo}
                className="py-2"
                onChange={(e) =>
                  onChange(e.target.value, 'merchandiserRegistrationNo')
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Merchandiser License No<span style={{ color: 'red' }}>*</span>
            </h4>
            <Form.Item
              name="merchandiserLicenseNo"
              rules={[
                {
                  required: true,
                  message: 'Merchendiser License No is required',
                },
              ]}
              //   className='mb-0'
            >
              <Input
                className="py-2"
                maxLength={13}
                value={state.merchandiserLicenseNo}
                onChange={(e) =>
                  onChange(e.target.value, 'merchandiserLicenseNo')
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Name <span style={{ color: 'red' }}>*</span>
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
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              CNIC
            </h4>
            <Form.Item
              name="cnic"

              //   className='mb-0'
            >
              <Input
                className="py-2"
                maxLength={13}
                value={state.cnic}
                onChange={(e) => onChange(e.target.value, 'cnic')}
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault()
                  }
                }}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
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
                  disabled={state?.isCheck}
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
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Whatsapp No <span style={{ color: 'red' }}>*</span>
            </h4>
            <Form.Item
              name="whatsapp"
              rules={[
                {
                  validator: () => {
                    if (state?.whatsapp?.phone?.trim().length > 0) {
                      return Promise.resolve()
                    } else {
                      return Promise.reject(
                        <span
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                          }}
                        >
                          whatsapp is required
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
                  disabled={state?.isCheck}
                  onKeyPress={(event) => {
                    if (!/[0-9,.]/.test(event.key)) {
                      event.preventDefault()
                    }
                  }}
                  maxLength={15}
                  value={state.whatsapp}
                  onChange={(e) => onChange(e, 'whatsapp')}
                  defaultValue={{
                    short: 'PK',
                  }}
                />
              </ConfigProvider>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Checkbox checked={state.isCheck} onChange={onChangeCheck} />{' '}
                &nbsp;
                <span>Same as phone</span>
              </div>
            </Form.Item>
          </Col>
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
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
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Referal Code (if any)
            </h4>
            <Form.Item name="referal">
              <Input
                value={state.referal}
                className="py-2"
                onChange={(e) => onChange(e.target.value, 'referal')}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Smart Point Name <span style={{ color: 'red' }}>*</span>
            </h4>
            <Form.Item
              name="agencyname"
              rules={[
                { required: true, message: 'Smart Point Name is required' },
              ]}
            >
              <Input
                value={state.agencyname}
                className="py-2"
                onChange={(e) => onChange(e.target.value, 'agencyname')}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              No of Staff <span style={{ color: 'red' }}>*</span>
            </h4>
            <Form.Item
              name="noofstaff"
              rules={[{ required: true, message: 'No of staff is required' }]}
              //   className='mb-0'
            >
              <Input
                className="py-2"
                maxLength={13}
                value={state.noofstaff}
                onChange={(e) => onChange(e.target.value, 'noofstaff')}
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault()
                  }
                }}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              No of Branches <span style={{ color: 'red' }}>*</span>
            </h4>
            <Form.Item
              name="noofbranches"
              rules={[{ required: true, message: 'No of staff is required' }]}
              //   className='mb-0'
            >
              <Input
                className="py-2"
                maxLength={13}
                value={state.noofbranches}
                onChange={(e) => onChange(e.target.value, 'noofbranches')}
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
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              City <span style={{ color: 'red' }}>*</span>
            </h4>
            <Form.Item
              name="city"
              rules={[{ required: true, message: 'City is required' }]}
            >
              <Input
                value={state.city}
                className="py-2"
                onChange={(e) => onChange(e.target.value, 'city')}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Country <span style={{ color: 'red' }}>*</span>
            </h4>
            <Form.Item
              name="country"
              rules={[{ required: true, message: 'Country is required' }]}
            >
              <Input
                value={state.country}
                className="py-2"
                onChange={(e) => onChange(e.target.value, 'country')}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Registered Agency Location <span style={{ color: 'red' }}>*</span>
            </h4>
            <Form.Item
              rules={[{ required: true, message: 'Adress is required' }]}
              name="location"
            >
              <Input
                value={state.location}
                className="py-2"
                onChange={(e) => onChange(e.target.value, 'location')}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={14}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Investors
            </h4>

            <Form.Item name="selectedInvestors">
              <Select
                mode="multiple"
                showSearch={false}
                value={state.selectedInvestors}
                placeholder="Select investors"
                style={{
                  textAlign: 'start',
                  minHeight: '42px',
                  display: 'grid',
                }}
                onChange={(e) => {
                  if (e.length > 0) {
                    onChange(e, 'selectedInvestors')
                    if (objects !== null && objects.length > 0) {
                      for (var i = 0; i < objects.length; i++) {
                        form.setFieldValue(objects[i].id, null)
                      }
                    }
                  } else {
                    setState({
                      ...state,
                      selectedInvestors: [],
                    })
                    form.setFieldValue('percentage', null)
                  }
                }}
                allowClear
              >
                {state?.investors.length > 0 &&
                  state?.investors.map((item, i) => {
                    return (
                      <Option value={JSON.stringify(item)}>
                        {item.fullName}
                      </Option>
                    )
                  })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Percentage
            </h4>
            <Form.Item
              rules={[
                {
                  required:
                    objects !== null && objects?.length > 0 ? true : false,
                  message: 'Percentage is required',
                },
              ]}
              name="percentage"
            >
              <Input
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault()
                  }
                }}
                value={state.percentage}
                className="py-2"
                onChange={(e) => onChange(e.target.value, 'percentage')}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={14}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Packages <span style={{ color: 'red' }}>*</span>
            </h4>

            <Form.Item
              name="selectedPackage"
              rules={[
                {
                  required: true,
                  message: 'Package is required',
                },
              ]}
            >
              <Select
                showSearch={false}
                value={state.selectedPackage}
                placeholder="Select package"
                style={{
                  textAlign: 'start',
                  minHeight: '42px',
                  display: 'grid',
                }}
                onChange={(e) => {
                  onChange(e, 'selectedPackage')
                }}
                allowClear
              >
                {packagesList?.data !== null &&
                  packagesList?.data?.length > 0 &&
                  packagesList?.data.map((item, i) => {
                    return (
                      <Option value={JSON.stringify(item)}>
                        {item?.title} - {item?.pwPackage?.title}
                      </Option>
                    )
                  })}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {objects !== null &&
          objects?.length > 0 &&
          objects.map((obj, index) => (
            <Row style={{ marginTop: '2%' }} gutter={16}>
              <Col span={12}>
                <h2>{obj.fullName}</h2>
                <p style={{ color: 'grey' }}>{obj.phone}</p>
              </Col>
              <Col span={12}>
                <div style={{ float: 'right' }}>
                  <Form.Item
                    rules={[
                      { required: true, message: 'Percentage is required' },
                    ]}
                    name={`${obj.id}`}
                  >
                    <Input
                      onKeyPress={(event) => {
                        if (!/[0-9,.]/.test(event.key)) {
                          event.preventDefault()
                        }
                      }}
                      placeholder="Enter your investor's percentage"
                      className="py-2"
                      value={obj.percentage}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          ))}

        <div style={{ marginTop: '2%' }} className="flex justify-end">
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

export default AddOwnerModal
