import { Button, Col, Divider, Form, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import SectionContainer from '../../../../../utils/components/SectionContainer'
import {
  SelectField,
  SelectFieldOption,
} from '../../../../../utils/components/InputFields/SelectField'
import ArrowRight from '../../../../assest/icon/arrow-right.png'
import InputLabel from '../../../../../utils/components/InputFields/InputLabel'
import TextAreaField from '../../../../../utils/components/InputFields/TextAreaField'
import NumberField from '../../../../../utils/components/InputFields/NumberField'
import TextField from '../../../../../utils/components/InputFields/TextField'
import SelectLatLongMap from './helpers/SelectLatLongMap'
import {
  getProjectSubTypesApi,
  getProjectTypesApi,
  getLandAreaApi,
  createPropertyWalletProductStepOneApi,
  updatePropertyWalletProductStepOneApi,
} from '../../../../../redux/api/SingleProperty'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { getError } from '../../../../../utils/baseApi'

const InventoryDetailsStep = ({ next }) => {
  const [form] = useForm()
  const [markers, setMarkers] = React.useState([])
  const [selectedPlace, setSelectedPlace] = useState({})
  const createPropertyWalletProductStepOne = useSelector(
    (state) => state.createPropertyWalletProductStepOne
  )
  const dispatch = useDispatch()
  const getProjectTypes = useSelector((state) => state.getProjectTypes)
  const getProjectSubTypes = useSelector((state) => state.getProjectSubTypes)
  const getLandArea = useSelector((state) => state.getLandArea)
  const updatePropertyWalletProductStepOne = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  const [state, setState] = useState({
    selectedPropertyType: null,
  })
  function onFinish(values) {
    if (markers.length === 0) {
      getError('Select Long and Lat from map')
      return
    }
    const body = {
      ...values,
      NOC: values.NOC === 'yes',
      latitude: markers[0].lat.toString(),
      longitude: markers[0].lng.toString(),
      landSize: Number(values.landSize),
      ownerPhone:
        values.ownerPhone[0] === '0'
          ? (values.ownerPhone =
              '+92' + values.ownerPhone.split('').splice(1).join(''))
          : (values.ownerPhone = '+92' + values.ownerPhone),
      price: Number(values.price),
      // noOfUnit: Number(values.noOfUnit),
      title: values.title,
    }
    delete body.location
    if (createPropertyWalletProductStepOne?.data === null) {
      createPropertyWalletProductStepOneApi(dispatch, body, onSuccess)
      return
    }
    updatePropertyWalletProductStepOneApi(
      dispatch,
      body,
      onSuccess,
      createPropertyWalletProductStepOne?.data?.data?.id
    )
  }
  const onSuccess = () => {
    next()
  }

  useEffect(() => {
    getProjectTypesApi(dispatch, pageLimit)
    getLandAreaApi(dispatch, pageLimit)
  }, [dispatch, pageLimit])

  useEffect(() => {
    if (state.selectedPropertyType) {
      getProjectSubTypesApi(dispatch, state.selectedPropertyType)
    }
  }, [state.selectedPropertyType])

  useEffect(() => {
    if (selectedPlace.address !== '' && selectedPlace.city !== '') {
      form.setFieldsValue({
        location: selectedPlace.address,
        city: selectedPlace.city,
        address: selectedPlace.address,
      })
    }
  }, [selectedPlace])

  return (
    <Form
      name="add-single-property-step-one"
      className="projects-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
    >
      <SectionContainer
        title={'Inventory Title'}
        subtitle={'Provide the title for the inventory'}
      >
        <Row gutter={16}>
          <Col lg={8} xs={24}>
            <InputLabel>Inventory Title</InputLabel>
            <TextField name={'title'} />
          </Col>
        </Row>
      </SectionContainer>
      <Divider />

      <SectionContainer
        title={'Property Type'}
        subtitle={'Provide the type of property and subtype of Property'}
      >
        <Row gutter={16}>
          <Col lg={8} xs={24}>
            <InputLabel>Property Type</InputLabel>
            <SelectField
              name="projectTypeId"
              options={getProjectTypes?.data?.data?.items?.map((item, i) => ({
                label: item.title,
                value: item.id,
              }))}
              onChange={(val) => {
                form.resetFields(['category'])
                setState((prev) => ({
                  ...prev,
                  selectedPropertyType: val,
                }))
              }}
            />
          </Col>
          <Col lg={8} xs={24}>
            <InputLabel>Category</InputLabel>
            <SelectField
              name="projectSubTypeId"
              options={getProjectSubTypes?.data?.data?.map((item, i) => ({
                label: item.title,
                value: item.id,
              }))}
            />
          </Col>
          <Col lg={8} xs={24}>
            <InputLabel>NOC Approved</InputLabel>
            <SelectField
              name="NOC"
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={8} xs={24}>
            <InputLabel>Plot Measuring</InputLabel>
            <NumberField name={'landSize'} />
          </Col>
          <Col lg={8} xs={24}>
            <InputLabel>Plot Units</InputLabel>
            <SelectField
              name="landAreaId"
              options={getLandArea?.data?.data?.items?.map((val) => ({
                label: val?.title,
                value: val?.id,
              }))}
            />
          </Col>
          <Col lg={8} xs={24}>
            <InputLabel>Description</InputLabel>
            <TextAreaField name={'description'} />
          </Col>
        </Row>
      </SectionContainer>
      <Divider />

      <SectionContainer title={'Owner Details'} subtitle={'Provide the detail'}>
        <Row gutter={16}>
          <Col lg={8} xs={24}>
            <InputLabel>Owner Name</InputLabel>
            <TextField name={'ownerName'} />
          </Col>
          <Col lg={8} xs={24}>
            <InputLabel>Phone</InputLabel>
            <NumberField name={'ownerPhone'} />
          </Col>
          <Col lg={8} xs={24}>
            <InputLabel>Email</InputLabel>

            <TextField name={'ownerEmail'} />
          </Col>
        </Row>
      </SectionContainer>

      <Divider />

      <SectionContainer
        title="Pricing and Commission"
        subtitle="Set the pricing of inventory and staff commision"
      >
        <Row gutter={16}>
          <Col xs={24} lg={8}>
            <InputLabel>Selling Price</InputLabel>
            <NumberField name="price" />
          </Col>
        </Row>
        {/* <Row gutter={16}>
          <Col xs={24} lg={8}>
            <InputLabel>No of Units</InputLabel>
            <NumberField name={"noOfUnit"} />
          </Col>
        </Row> */}
      </SectionContainer>
      <Divider />
      <SectionContainer
        title="Location Details"
        subtitle="Provide the location with address"
      >
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <InputLabel>Address</InputLabel>
            <TextField name="address" />
          </Col>
          <Col xs={24} lg={12}>
            <InputLabel>City</InputLabel>
            <TextField name="city" />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <InputLabel>Location</InputLabel>
            <TextField name="location" />
          </Col>
          <Col xs={24} lg={12}>
            <SelectLatLongMap
              markers={markers}
              setMarkers={setMarkers}
              setSelectedPlace={setSelectedPlace}
            />
          </Col>
        </Row>
      </SectionContainer>
      <div className="flex gap-[20px] justify-end pt-[35px]">
        <Button className="py-[10px] px-[50px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2  w-[189px] h-[43px]">
          <span>Back</span>
        </Button>
        <Button
          className="btn-primary py-[10px] px-[50px] flex items-center justify-center bg-[#27A3A3] border-[#27A3A3] text-[#fff] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          htmlType="submit"
          loading={
            createPropertyWalletProductStepOne.loading ||
            updatePropertyWalletProductStepOne.loading
          }
        >
          <span>Next</span>
          <img src={ArrowRight} alt="" style={{ filter: 'brightness(10)' }} />
        </Button>
      </div>
    </Form>
  )
}

export default InventoryDetailsStep
