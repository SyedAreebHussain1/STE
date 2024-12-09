import { Col, Form, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import InputLabel from '../../../../../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../../../../../utils/components/InputFields/NumberField'
import {
  calculateAmount,
  calculatePercentage,
} from '../../../../../../../utils/utils'

const PlanFields = (data) => {
  const [form] = useForm()
  let [isBalloon, setIsBalloon] = useState(false)
  const [state, setState] = useState({
    discountAmount: 0,
    OnBookingAmount: 0,
    installmentAmount: 0,
    OnPossessionAmount: 0,
    BalloonAmount: 0,
  })
  const createPrice = useSelector(
    (state) => state.createPropertyWalletProductStepOne
  )
  const updatePrice = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )
  const sellingPrice =
    updatePrice?.data?.data?.price || createPrice?.data?.data?.price
  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue({
        token: data.data[0].token,
        discountPercentage: data.data[0].discountPercentage,
        // discountAmount: data.data[0].discountAmount,
        OnBookingPercentage: data.data[0].OnBookingPercentage,
        // OnBookingAmount: data.data[0].OnBookingAmount,
        // minimumPrice: data.data[0].minimumPrice,
        commissionPercentage: data.data[0].commissionPercentage,
        OnPossessionPercentage: data.data[0].OnPossessionPercentage,
        // OnPossessionAmount: data.data[0].OnPossessionAmount,
      })

      if (data?.data[0]?.isBaloon) {
        form.setFieldsValue({
          balloonIndex: data?.data[0]?.balloonIndex
            ?.replace(/[{}'"]/g, '')
            ?.split(','),
          ballonAt: data?.data[0]?.BalloonAt,
        })
      }
    }
  }, [data?.data])
  useEffect(() => {
    const totalAmountToSubtract = state.discountAmount
    form.setFieldValue('minimumPrice', sellingPrice - totalAmountToSubtract)
  }, [state.discountAmount])
  useEffect(() => {
    form.setFieldValue('sellingPrice', sellingPrice)
  }, [sellingPrice])

  useEffect(() => {
    const discountAmount = calculateAmount(
      sellingPrice,
      data.data[0].discountPercentage
    )
    const minimumPrice = sellingPrice - discountAmount
    const OnBookingAmount = calculateAmount(
      sellingPrice,
      data.data[0].OnBookingPercentage
    )
    const installmentAmount = calculateAmount(
      sellingPrice,
      data.data[0].installmentPercentage
    )
    const OnPossessionAmount = calculateAmount(
      sellingPrice,
      data.data[0].OnPossessionPercentage
    )
    const BalloonAmount = calculateAmount(
      sellingPrice,
      data.data[0].BalloonPercentage
    )

    form.setFieldsValue({
      discountAmount: discountAmount,
      minimumPrice: minimumPrice,
      OnBookingAmount: OnBookingAmount,
      installmentAmount: installmentAmount,
      OnPossessionAmount: OnPossessionAmount,
      BalloonAmount: BalloonAmount,
    })
    setState((prev) => ({
      ...prev,
      discountAmount: discountAmount,
      minimumPrice: minimumPrice,
      OnBookingAmount: OnBookingAmount,
      installmentAmount: installmentAmount,
      OnPossessionAmount: OnPossessionAmount,
      BalloonAmount: BalloonAmount,
    }))
  }, [sellingPrice, data.data[0]])
  return (
    <Form
      name="normal_login"
      form={form}
      // className="login-form"
      // onFinish={onFinish}
      initialValues={{ remember: true }}
    >
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <InputLabel>Discount</InputLabel>
          <Row gutter={16}>
            <Col xs={24} lg={7}>
              <NumberField
                placeholder="Percentage"
                name="discountPercentage"
                disabled
                onChange={(e) => {
                  if (Number(e.target.value) > 100) {
                    e.target.value = 100
                    form.setFieldValue('discountPercentage', e.target.value)
                  }
                  const calculatedAmount = calculateAmount(
                    sellingPrice,
                    Number(e.target.value)
                  )
                  form.setFieldsValue({
                    discountAmount: calculatedAmount,
                  })
                  setState((prev) => ({
                    ...prev,
                    discountAmount: calculatedAmount,
                    discountPercentage: Number(e.target.value),
                  }))
                  if (isBalloon) {
                    form.setFieldsValue({})
                  } else {
                    form.setFieldsValue({})
                  }
                }}
              />
            </Col>
            <Col xs={24} lg={12}>
              <NumberField
                placeholder="Amount"
                name="discountAmount"
                disabled
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} lg={10}>
          <InputLabel>Minimum Price</InputLabel>
          <NumberField name="minimumPrice" disabled />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} lg={14}>
          <Row gutter={16}>
            <Col xs={24} lg={6}>
              <InputLabel>Commission</InputLabel>
              <NumberField
                placeholder="Percentage"
                name="commissionPercentage"
                disabled
                onChange={(e) => {
                  if (Number(e.target.value) > 100) {
                    e.target.value = 100
                    form.setFieldValue('commissionPercentage', e.target.value)
                  }
                  const calculatedAmount = calculateAmount(
                    sellingPrice,
                    Number(e.target.value)
                  )
                  form.setFieldsValue({
                    commissionAmount: calculatedAmount,
                  })
                  setState((prev) => ({
                    ...prev,
                    commissionAmount: calculatedAmount,
                    commissionPercentage: Number(e.target.value),
                  }))
                }}
              />
            </Col>
            <Col xs={24} lg={6}>
              <InputLabel>On Booking</InputLabel>
              <NumberField
                placeholder="Percentage"
                name="OnBookingPercentage"
                disabled
                onChange={(e) => {
                  if (Number(e.target.value) > 100) {
                    e.target.value = 100
                    form.setFieldValue('OnBookingPercentage', e.target.value)
                  }
                  const calculatedAmount = calculateAmount(
                    form.getFieldValue('minimumPrice'),
                    Number(e.target.value)
                  )
                  form.setFieldsValue({
                    OnBookingAmount: calculatedAmount,
                  })
                  setState((prev) => ({
                    ...prev,
                    OnBookingAmount: calculatedAmount,
                    OnBookingPercentage: Number(e.target.value),
                  }))
                }}
              />
            </Col>
            <Col xs={24} lg={12}>
              <InputLabel hidden={'hidden'}>-</InputLabel>
              <NumberField
                placeholder="Amount"
                name="OnBookingAmount"
                onChange={(e) => {
                  if (
                    Number(e.target.value) > form.getFieldValue('minimumPrice')
                  ) {
                    e.target.value = form.getFieldValue('minimumPrice')
                    form.setFieldValue('OnBookingAmount', e.target.value)
                  }
                  form.setFieldsValue({
                    OnBookingPercentage: calculatePercentage(
                      form.getFieldValue('minimumPrice'),
                      Number(e.target.value)
                    ),
                  })
                  setState((prev) => ({
                    ...prev,
                    OnBookingAmount: Number(e.target.value),
                  }))
                }}
                disabled
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {data?.data && data?.data[0]?.isBaloon && (
          <Col xs={24} lg={12}>
            <InputLabel>Ballon At</InputLabel>
            <Row gutter={16}>
              <Col xs={24} lg={8}>
                <NumberField placeholder="Months" name="ballonAt" disabled />
              </Col>
              <Col xs={24} lg={14}>
                <Form.Item name="balloonIndex">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Balloon At"
                    // options={element?.map((val) => ({
                    //     label: val,
                    //     value: val,
                    // }))}
                    className="h-[40px] mt-[3%]"
                    disabled
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        )}
        <Col xs={24} lg={12}>
          <InputLabel>On Possession</InputLabel>
          <Row gutter={16}>
            <Col xs={24} lg={8}>
              <NumberField
                placeholder="Percentage"
                name="OnPossessionPercentage"
                disabled
                onChange={(e) => {
                  if (Number(e.target.value) > 100) {
                    e.target.value = 100
                    form.setFieldValue('OnPossessionPercentage', e.target.value)
                  }
                  const calculatedAmount = calculateAmount(
                    form.getFieldValue('minimumPrice'),
                    Number(e.target.value)
                  )
                  form.setFieldsValue({
                    OnPossessionAmount: calculatedAmount,
                  })
                  setState((prev) => ({
                    ...prev,
                    OnPossessionAmount: calculatedAmount,
                    OnPossessionPercentage: Number(e.target.value),
                  }))
                }}
              />
            </Col>
            <Col xs={24} lg={14}>
              <NumberField
                placeholder="Amount"
                name="OnPossessionAmount"
                disabled
                onChange={(e) => {
                  if (
                    Number(e.target.value) > form.getFieldValue('minimumPrice')
                  ) {
                    e.target.value = form.getFieldValue('minimumPrice')
                    form.setFieldValue('OnPossessionAmount', e.target.value)
                  }
                  const calculatedAmount = calculatePercentage(
                    form.getFieldValue('minimumPrice'),
                    Number(e.target.value)
                  )
                  form.setFieldsValue({
                    OnPossessionPercentage: calculatedAmount,
                  })
                  setState((prev) => ({
                    ...prev,
                    OnPossessionAmount: calculatedAmount,
                  }))
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

export default PlanFields
