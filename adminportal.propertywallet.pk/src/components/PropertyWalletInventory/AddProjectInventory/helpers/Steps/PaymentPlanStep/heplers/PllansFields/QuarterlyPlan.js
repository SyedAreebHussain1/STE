import { Col, Row } from 'antd'
import React from 'react'
import InputLabel from '../../../../../../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../../../../../../utils/components/InputFields/NumberField'

const QuarterlyPlan = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <InputLabel>Discount</InputLabel>
          <Row gutter={16}>
            <Col xs={24} lg={7}>
              <NumberField placeholder="Percentage" name="onBooking" />
            </Col>
            <Col xs={24} lg={12}>
              <NumberField placeholder="Amount" name="onBooking" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24} lg={10}>
          <InputLabel>Final Price</InputLabel>
          <NumberField name="finalPrice" />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <InputLabel>On Booking</InputLabel>
          <Row gutter={16}>
            <Col xs={24} lg={7}>
              <NumberField placeholder="Percentage" name="onBooking" />
            </Col>
            <Col xs={24} lg={12}>
              <NumberField placeholder="Amount" name="onBooking" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24} lg={12}>
          <Col xs={24} lg={8}>
            <InputLabel>On Confirmation</InputLabel>
            <NumberField placeholder="Days" name="onConfirmation" />
          </Col>
          {/*  */}
          <Row gutter={16}>
            <Col xs={24} lg={8}>
              <NumberField placeholder="Percentage" name="onBooking" />
            </Col>
            <Col xs={24} lg={12}>
              <NumberField placeholder="Amount" name="onBooking" />
            </Col>
          </Row>
          <Row>
            <InputLabel>Installment Payment</InputLabel>
            <Row gutter={16}>
              <Col xs={24} lg={8}>
                <NumberField placeholder="Percentage" name="onBooking" />
              </Col>
              <Col xs={24} lg={12}>
                <NumberField placeholder="Amount" name="onBooking" />
              </Col>
            </Row>
          </Row>
          {/*  */}
        </Col>
        <Col xs={24} lg={12}>
          <Col xs={24} lg={8}>
            <InputLabel>On Allotment</InputLabel>
            <NumberField placeholder="Days" name="installmentPayment" />
          </Col>
          {/*  */}
          <Row gutter={16}>
            <Col xs={24} lg={8}>
              <NumberField placeholder="Percentage" name="onBooking" />
            </Col>
            <Col xs={24} lg={12}>
              <NumberField placeholder="Amount" name="onBooking" />
            </Col>
          </Row>
          <Row>
            <InputLabel>On Possession</InputLabel>
            <Row gutter={16}>
              <Col xs={24} lg={8}>
                <NumberField placeholder="Percentage" name="onBooking" />
              </Col>
              <Col xs={24} lg={12}>
                <NumberField placeholder="Amount" name="onBooking" />
              </Col>
            </Row>
          </Row>
          {/*  */}
        </Col>
      </Row>
    </div>
  )
}

export default QuarterlyPlan
