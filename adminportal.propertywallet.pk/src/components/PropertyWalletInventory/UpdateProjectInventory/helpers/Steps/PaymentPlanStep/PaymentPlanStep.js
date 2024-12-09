import React, { useEffect, useState } from 'react'
import ArrowRight from '../../../../../assest/icon/arrow-right.png'
import { Button, Divider, Form } from 'antd'
import CashSection from './heplers/CashSection'
import InstallmentSection from './heplers/InstallmentSection'
import { useForm } from 'antd/es/form/Form'
import {
  createPropertyWalletInventoryStep3CashPlanApi,
  generatePlotDetailUpdateExelApi,
  getPropertyWalletInventoryStep3CashPlanApi,
} from '../../../../../../redux/api/Project/ProjectInventory'
import { updatePropertyWalletInventoryStep3CashPlanApi } from '../../../../../../redux/api/Project/ProjectInventory'

import { useDispatch, useSelector } from 'react-redux'

const PaymentPlanStep = ({ next, prev, current }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [form] = useForm()
  const dispatch = useDispatch()
  const [tokenPayment, setTokenPayment] = useState()
  const [cashState, setCashState] = useState({
    minimumPrice: 0,
    discountAmount: 0,
  })
  const createProjectInventoryStepOne = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const updateProjectInventoryStepOne = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )
  const createPropertyWalletInventoryStep3CashPlan = useSelector(
    (state) => state.createPropertyWalletInventoryStep3CashPlan
  )
  const getPropertyWalletInventoryStep3CashPlan = useSelector(
    (state) => state.getPropertyWalletInventoryStep3CashPlan
  )
  const createPrice = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const updatePrice = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )
  const sellingPrice =
    updatePrice?.data?.data?.price || createPrice?.data?.data?.price
  useEffect(() => {
    if (current === 2) {
      getPropertyWalletInventoryStep3CashPlanApi(
        dispatch,
        updateProjectInventoryStepOne?.data?.data?.id
      )
    }
  }, [current])

  useEffect(() => {
    if (
      getPropertyWalletInventoryStep3CashPlan?.data &&
      getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
    ) {
      form.setFieldsValue({
        discountPercentage:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.discountPercentage,
        discountAmount: cashState.discountAmount,
        minimumPrice: cashState.minimumPrice,
        // minimumPrice: sellingPrice,
        commissionPercentage:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.commissionPercentage,
        spCommissionPercentage:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.spCommissionPercentage,
        token:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan?.token,
        lgCommissionPercentage:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.lgCommissionPercentage,
        agentCommissiion:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.agentCommissiion,
        freeLancerCommissiion:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.freeLancerCommissiion,
        agentELoungeSaleCommissiion:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.agentELoungeSaleCommissiion,
        freelancerELoungeSaleCommissiion:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.freelancerELoungeSaleCommissiion,
        outdoorComission:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.outdoorComission,
        extraCommissiion:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.extraCommissiion,
        consecutive:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.agencyIncrementCommission,
        flextc:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.freeLancerExtraCommissiion,
        paextc:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.premiumAgencyExtraCommissiion,
        eloungeOtherCommission:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.eloungeOtherCommission,
        outdoorAgencyEloungeComission:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.outdoorAgencyEloungeComission,
        outdoorFreelancerEloungeComission:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.outdoorFreelancerEloungeComission,
        outdoorPremiumAgencyEloungeComission:
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.outdoorPremiumAgencyEloungeComission,
        agencyIncrementTimeLimit: Number(
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.agencyIncrementTimeLimit
        ),
        premiumAgencyIncrementCommission: Number(
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.premiumAgencyIncrementCommission
        ),
        premiumAgencyIncrementTimeLimit: Number(
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.premiumAgencyIncrementTimeLimit
        ),
        freeLancerIncrementCommission: Number(
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.freeLancerIncrementCommission
        ),
        freeLancerIncrementTimeLimit: Number(
          getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan
            ?.freeLancerIncrementTimeLimit
        ),
      })
      setTokenPayment(
        getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan?.token
      )
    }
  }, [getPropertyWalletInventoryStep3CashPlan?.data, cashState])
  function onFinish(val) {
    const createBody = {
      propertyWalletInventoryId: updateProjectInventoryStepOne?.data?.data?.id,
      createPropertyWalletCashPaymentPlanDto: {
        discountPercentage: Number(val.discountPercentage),
        discountAmount: Number(val.discountAmount),
        spCommissionPercentage: Number(val.spCommissionPercentage),
        commissionPercentage: Number(val.commissionPercentage),
        minimumPrice: Number(val.minimumPrice),
        tokenAmount: selectedOptions.map((item) => Number(item)),
        lgCommissionPercentage: Number(val.lgCommissionPercentage),
        agentCommissiion: val.agentCommissiion,
        freeLancerCommissiion: val.freeLancerCommissiion,
        agentELoungeSaleCommissiion: val.agentELoungeSaleCommissiion,
        freelancerELoungeSaleCommissiion: val.freelancerELoungeSaleCommissiion,
        // outdoorComission: val.outdoorComission,
        extraCommissiion: val.extraCommissiion,
        agencyIncrementCommission: val.consecutive,
        freeLancerExtraCommissiion: val.flextc,
        premiumAgencyExtraCommissiion: val.paextc,
        eloungeOtherCommission: val?.eloungeOtherCommission,
        outdoorAgencyEloungeComission: val?.outdoorAgencyEloungeComission,
        outdoorFreelancerEloungeComission:
          val?.outdoorFreelancerEloungeComission,
        outdoorPremiumAgencyEloungeComission:
          val?.outdoorPremiumAgencyEloungeComission,
        agencyIncrementTimeLimit: Number(val.agencyIncrementTimeLimit),
        premiumAgencyIncrementCommission: Number(
          val.premiumAgencyIncrementCommission
        ),
        premiumAgencyIncrementTimeLimit: Number(
          val.premiumAgencyIncrementTimeLimit
        ),
        freeLancerIncrementCommission: Number(
          val.freeLancerIncrementCommission
        ),
        freeLancerIncrementTimeLimit: Number(val.freeLancerIncrementTimeLimit),
      },
    }
    const updateBody = {
      propertyWalletInventoryId: updateProjectInventoryStepOne?.data?.data?.id,
      updatePropertyWalletCashPaymentPlanDto: {
        discountPercentage: Number(val.discountPercentage),
        discountAmount: Number(val.discountAmount),
        commissionPercentage: Number(val.commissionPercentage),
        spCommissionPercentage: Number(val.spCommissionPercentage),
        minimumPrice: Number(val.minimumPrice),
        tokenAmount: selectedOptions.map((item) => Number(item)),
        lgCommissionPercentage: Number(val.lgCommissionPercentage),
        agentCommissiion: val.agentCommissiion,
        freeLancerCommissiion: val.freeLancerCommissiion,
        agentELoungeSaleCommissiion: val.agentELoungeSaleCommissiion,
        freelancerELoungeSaleCommissiion: val.freelancerELoungeSaleCommissiion,
        // outdoorComission: val.outdoorComission,
        extraCommissiion: val.extraCommissiion,
        agencyIncrementCommission: val.consecutive,
        freeLancerExtraCommissiion: val.flextc,
        premiumAgencyExtraCommissiion: val.paextc,
        eloungeOtherCommission: val?.eloungeOtherCommission,
        outdoorAgencyEloungeComission: val?.outdoorAgencyEloungeComission,
        outdoorFreelancerEloungeComission:
          val?.outdoorFreelancerEloungeComission,
        outdoorPremiumAgencyEloungeComission:
          val?.outdoorPremiumAgencyEloungeComission,
        agencyIncrementTimeLimit: Number(val.agencyIncrementTimeLimit),
        premiumAgencyIncrementCommission: Number(
          val.premiumAgencyIncrementCommission
        ),
        premiumAgencyIncrementTimeLimit: Number(
          val.premiumAgencyIncrementTimeLimit
        ),
        freeLancerIncrementCommission: Number(
          val.freeLancerIncrementCommission
        ),
        freeLancerIncrementTimeLimit: Number(val.freeLancerIncrementTimeLimit),
      },
    }
    if (
      getPropertyWalletInventoryStep3CashPlan?.data &&
      getPropertyWalletInventoryStep3CashPlan?.data?.data?.cashPlan !== null
    ) {
      updatePropertyWalletInventoryStep3CashPlanApi(
        dispatch,
        updateBody,
        onSuccessupdate
      )
      return
    }
    createPropertyWalletInventoryStep3CashPlanApi(
      dispatch,
      onSuccess,
      createBody
    )
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
        setCashState={setCashState}
        cashState={cashState}
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
          disabled={current === 0}
          onClick={prev}
        >
          <span>Back</span>
        </Button>
        <Button
          className="btn-primary py-[10px] px-[50px] flex items-center justify-center bg-[#27A3A3] border-[#27A3A3] text-[#fff] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          // disabled={current === steps.length - 1}
          // onClick={next}
          htmlType="submit"
        >
          <span>Next</span>
          <img src={ArrowRight} alt="" style={{ filter: 'brightness(10)' }} />
        </Button>
      </div>
    </Form>
  )
}

export default PaymentPlanStep
