import React, { useEffect, useState } from 'react'
import ArrowRight from '../../../../assest/icon/arrow-right.png'

import { Button, Divider, Form } from 'antd'
import CashSection from './heplers/CashSection'
import InstallmentSection from './heplers/InstallmentSection'
import { useForm } from 'antd/es/form/Form'
import { useDispatch } from 'react-redux'
import {
  createPropertyWalletProductStep3CashPlanApi,
  getProductDetailForStep4CashPlanApi,
  updatePropertyWalletProductStep3CashPlanApi,
} from '../../../../../redux/api/SingleProperty'
import { useSelector } from 'react-redux'
import { data } from 'autoprefixer'

const PaymentPlanStep = ({ next, prev, current }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [form] = useForm()
  const dispatch = useDispatch()
  const [tokenPayment, setTokenPayment] = useState()
  const [cashState, setCashState] = useState({
    minimumPrice: 0,
    discountAmount: 0,
  })
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
  const getProductDetailForStep4CashPlan = useSelector(
    (state) => state.getProductDetailForStep4CashPlan
  )

  useEffect(() => {
    if (
      getProductDetailForStep4CashPlan?.data &&
      getProductDetailForStep4CashPlan?.data?.data?.cashPlan
    ) {
      form.setFieldsValue({
        discountPercentage:
          getProductDetailForStep4CashPlan?.data?.data?.cashPlan
            ?.discountPercentage,
        discountAmount: cashState.discountAmount,
        minimumPrice: cashState.minimumPrice,
        commissionPercentage:
          getProductDetailForStep4CashPlan?.data?.data?.cashPlan
            ?.commissionPercentage,
        spCommissionPercentage:
          getProductDetailForStep4CashPlan?.data?.data?.cashPlan
            ?.spCommissionPercentage,
        token: getProductDetailForStep4CashPlan?.data?.data?.cashPlan?.token,
        lgCommissionPercentage:
          getProductDetailForStep4CashPlan?.data?.data?.cashPlan
            ?.lgCommissionPercentage,
      })
      setTokenPayment(
        getProductDetailForStep4CashPlan?.data?.data?.cashPlan?.token
      )
    }
  }, [getProductDetailForStep4CashPlan?.data, cashState])

  function onFinish(val) {
    // const bodyUpdate = {
    //   propertyWalletProductId: body.propertyWalletProductId,
    //   updatePropertyWalletProductCashPaymentPlanDto: {
    //     ...body.createPropertyWalletProductCashPaymentPlanDto,
    //   },
    // };
    const createBody = {
      propertyWalletProductId:
        updatePropertyWalletProductStepOne?.data?.data?.id,
      createPropertyWalletProductCashPaymentPlanDto: {
        tokenAmount: selectedOptions.map((item) => Number(item)),
        discountPercentage: val.discountPercentage,
        discountAmount: val.discountAmount,
        commissionPercentage: val.commissionPercentage,
        spCommissionPercentage: val.spCommissionPercentage,
        minimumPrice: val.minimumPrice,
        lgCommissionPercentage: val.lgCommissionPercentage,
      },
    }
    const updateBody = {
      propertyWalletProductId:
        updatePropertyWalletProductStepOne?.data?.data?.id,
      updatePropertyWalletProductCashPaymentPlanDto: {
        tokenAmount: selectedOptions.map((item) => Number(item)),
        discountPercentage: val.discountPercentage,
        discountAmount: val.discountAmount,
        commissionPercentage: val.commissionPercentage,
        spCommissionPercentage: val.spCommissionPercentage,
        minimumPrice: val.minimumPrice,
        lgCommissionPercentage: val.lgCommissionPercentage,
      },
    }

    if (
      getProductDetailForStep4CashPlan?.data &&
      getProductDetailForStep4CashPlan?.data?.data?.cashPlan !== null
    ) {
      updatePropertyWalletProductStep3CashPlanApi(
        dispatch,
        updateBody,
        onSuccessupdate,
        updatePropertyWalletProductStepOne?.data?.data?.id
      )
      return
    }
    createPropertyWalletProductStep3CashPlanApi(dispatch, onSuccess, createBody)
  }

  const onSuccessupdate = () => {
    next()
  }
  const onSuccess = () => {
    next()
  }

  useEffect(() => {
    if (current === 3) {
      getProductDetailForStep4CashPlanApi(
        dispatch,
        updatePropertyWalletProductStepOne?.data?.data?.id
      )
    }
  }, [current])

  useEffect(() => {
    if (
      getProductDetailForStep4CashPlan?.data &&
      getProductDetailForStep4CashPlan?.data?.data?.cashPlan
    ) {
      form.setFieldsValue({
        discountPercentage:
          getProductDetailForStep4CashPlan?.data?.data?.cashPlan
            ?.discountPercentage,
        // discountAmount:
        //   getProductDetailForStep4CashPlan?.data?.data?.cashPlan
        //     ?.discountAmount,
        discountAmount: cashState?.discountAmount,
        // minimumPrice: getProductDetailForStep4CashPlan?.data?.data?.cashPlan?.minimumPrice,
        minimumPrice: cashState?.minimumPrice,
        commissionPercentage:
          getProductDetailForStep4CashPlan?.data?.data?.cashPlan
            ?.commissionPercentage,
        spCommissionPercentage:
          getProductDetailForStep4CashPlan?.data?.data?.spCommissionPercentage,
        token: getProductDetailForStep4CashPlan?.data?.data?.cashPlan?.token,
      })
      setTokenPayment(
        getProductDetailForStep4CashPlan?.data?.data?.cashPlan?.token
      )
    }
  }, [getProductDetailForStep4CashPlan?.data?.data])

  return (
    <Form
      name="add-single-property-step-three"
      className="projects-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
    >
      <CashSection
        setCashState={setCashState}
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
