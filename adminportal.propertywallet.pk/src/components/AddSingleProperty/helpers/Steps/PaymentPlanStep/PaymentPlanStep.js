import React, { useState } from 'react'
import ArrowRight from '../../../../assest/icon/arrow-right.png'

import { Button, Divider, Form } from 'antd'
import CashSection from './heplers/CashSection'
import InstallmentSection from './heplers/InstallmentSection'
import { useForm } from 'antd/es/form/Form'
import { useDispatch } from 'react-redux'
import {
  createPropertyWalletProductStep3CashPlanApi,
  updatePropertyWalletProductStep3CashPlanApi,
} from '../../../../../redux/api/SingleProperty'
import { useSelector } from 'react-redux'
import { errorMessage } from '../../../../../utils/message'

const PaymentPlanStep = ({ next, prev, current }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [form] = useForm()
  const dispatch = useDispatch()
  const [tokenPayment, setTokenPayment] = useState()
  const [body, setBody] = useState({})
  const createPropertyWalletProductStepOne = useSelector(
    (state) => state.createPropertyWalletProductStepOne
  )
  const updatePropertyWalletProductStepOne = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )
  const createPropertyWalletProductStep3CashPlan = useSelector(
    (state) => state.createPropertyWalletProductStep3CashPlan
  )
  const updatePropertyWalletProductStep3CashPlan = useSelector(
    (state) => state.updatePropertyWalletProductStep3CashPlan
  )

  function onFinish() {
    if (selectedOptions.length === 0) {
      errorMessage('Select atleast 1 token amount')
      return
    }
    const bodyUpdate = {
      propertyWalletProductId: body.propertyWalletProductId,
      updatePropertyWalletProductCashPaymentPlanDto: {
        ...body.createPropertyWalletProductCashPaymentPlanDto,
      },
    }
    if (createPropertyWalletProductStep3CashPlan?.data !== null) {
      delete body.createPropertyWalletProductCashPaymentPlanDto.token
      body.updatePropertyWalletProductCashPaymentPlanDto.tokenAmount =
        selectedOptions.map((item) => Number(item))
      updatePropertyWalletProductStep3CashPlanApi(
        dispatch,
        bodyUpdate,
        onSuccessupdate,
        createPropertyWalletProductStepOne?.data?.data?.id
      )
      return
    }
    delete body.createPropertyWalletProductCashPaymentPlanDto.token
    body.createPropertyWalletProductCashPaymentPlanDto.tokenAmount =
      selectedOptions.map((item) => Number(item))
    createPropertyWalletProductStep3CashPlanApi(dispatch, onSuccess, body)
  }

  const onSuccessupdate = () => {
    next()
  }
  const onSuccess = () => {
    next()
  }
  return (
    <Form
      name="add-single-property-step-three"
      className="projects-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
    >
      <CashSection
        setTokenPayment={setTokenPayment}
        setBody={setBody}
        body={body}
        form={form}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />

      <Divider />
      <InstallmentSection
        tokenPayment={tokenPayment}
        current={current}
        form={form}
      />

      <div className="flex gap-[20px] justify-end pt-[35px]">
        <Button
          className="py-[10px] px-[50px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          //   disabled={current === 0}
          onClick={prev}
        >
          <span>Back</span>
        </Button>
        <Button
          className="btn-primary py-[10px] px-[50px] flex items-center justify-center bg-[#27A3A3] border-[#27A3A3] text-[#fff] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          // disabled={current === steps.length - 1}
          // onClick={next}
          htmlType="submit"
          loading={
            createPropertyWalletProductStep3CashPlan.loading ||
            updatePropertyWalletProductStep3CashPlan.loading
          }
        >
          <span>Next</span>
          <img src={ArrowRight} alt="" style={{ filter: 'brightness(10)' }} />
        </Button>
      </div>
    </Form>
  )
}

export default PaymentPlanStep
