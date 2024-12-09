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
  assignOwnerApi,
  getInvestorsList,
  getOwnersList,
} from '../../../../redux/api/Investors'
import { infoMessage } from '../../../../utils/message'

const AssignOwnerModal = ({ visible, toggleAdd }) => {
  const [state, setState] = useState({
    isCheck: false,
    selectedInvestors: [],
    investors: [],
    owners: [],
    owner: '',
  })

  const [objects, setObjects] = useState(null)
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 100000,
  })
  const dispatch = useDispatch()
  const addNewInvestor = useSelector((state) => state.addnewInvestor)
  const [form] = useForm()

  const onFinish = (e) => {
    const body = {
      userId: parseInt(state.owner),
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

    assignOwnerApi(dispatch, body, onSuccess)
  }
  function onSuccess() {
    toggleAdd()
    form.resetFields()
    setObjects(null)
  }
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  const { Option } = Select
  useEffect(() => {
    if (visible) {
      getInvestorsList(dispatch, pageLimit)
      getOwnersList(dispatch, pageLimit)
    }
  }, [pageLimit, visible])
  const getAllOwners = useSelector((state) => state?.getAllOwners)
  const getAllInvestor = useSelector((state) => state?.getAllInvestor)
  useEffect(() => {
    if (getAllInvestor?.data) {
      const data = getAllInvestor?.data?.data?.items.map((item, i) => {
        return {
          key: i,
          id: item.id,
          cnic: item.cnic,
          phone: item.phone,
          email: item.email,
          fullName: item.fullName,
        }
      })
      setState({
        ...state,
        investors: data,
      })
    }
  }, [getAllInvestor?.data])
  useEffect(() => {
    if (getAllOwners?.data?.data !== null) {
      let arr = []

      getAllOwners?.data?.data?.items.map((item, i) => {
        if (item.investorUserCount === 0) {
          return arr.push({
            id: item.id,
            email: item.email,
            fullName: item?.profile?.fullName,
          })
        }
      })

      setState({
        ...state,
        owners: arr,
      })
    }
  }, [getAllOwners?.data])
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
    setState((prev) => ({
      ...prev,
      isCheck: false,
      selectedInvestors: [],
      owner: '',
    }))
    form.resetFields()
  }

  return (
    <Modal
      width={900}
      title={<h3 className="text-[18px] font-semibold">Assign Owner</h3>}
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
          <Col span={24}>
            <Form.Item
              rules={[{ required: true, message: 'Owner is required' }]}
              name="owner"
            >
              <Select
                showSearch={false}
                value={state.owner}
                placeholder="Select owner"
                style={{
                  textAlign: 'start',
                  minHeight: '42px',
                  display: 'grid',
                }}
                onChange={(e) => {
                  onChange(e, 'owner')
                }}
              >
                {state?.owners.length > 0 &&
                  state?.owners.map((item, i) => {
                    return <Option value={item.id}>{item.fullName}</Option>
                  })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={14}>
            <h4 style={{ textAlign: 'start' }} className="text-[14px] pb-1">
              Investors
            </h4>

            <Form.Item
              rules={[{ required: true, message: 'Investor is required' }]}
              name="selectedInvestors"
            >
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
                {getAllInvestor?.data?.data?.items.length > 0 &&
                  getAllInvestor?.data?.data?.items.map((item, i) => {
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
            Assign new
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default AssignOwnerModal
