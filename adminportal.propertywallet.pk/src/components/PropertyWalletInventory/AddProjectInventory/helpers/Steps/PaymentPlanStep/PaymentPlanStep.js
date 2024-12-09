import React, { useEffect, useState } from 'react'
import ArrowRight from '../../../../../assest/icon/arrow-right.png'
import { Button, Divider, Form } from 'antd'
import CashSection from './heplers/CashSection'
import InstallmentSection from './heplers/InstallmentSection'
import { useForm } from 'antd/es/form/Form'
import { createPropertyWalletInventoryStep3CashPlanApi } from '../../../../../../redux/api/Project/ProjectInventory'
import { updatePropertyWalletInventoryStep3CashPlanApi } from '../../../../../../redux/api/Project/ProjectInventory'

import { useDispatch, useSelector } from 'react-redux'
import { errorMessage } from '../../../../../../utils/message'

const PaymentPlanStep = ({ next, prev, current }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [form] = useForm()
  const dispatch = useDispatch()
  const [tokenPayment, setTokenPayment] = useState()
  const createProjectInventoryStepOne = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const updateProjectInventoryStepOne = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )
  const createPropertyWalletInventoryStep3CashPlan = useSelector(
    (state) => state.createPropertyWalletInventoryStep3CashPlan
  )
  const updatePropertyWalletInventoryStep3CashPlan = useSelector(
    (state) => state.updatePropertyWalletInventoryStep3CashPlan
  )

  function onFinish(val) {
    if (selectedOptions.length === 0) {
      errorMessage('Select atleast 1 token amount')
      return
    }
    const createBody = {
      propertyWalletInventoryId: createProjectInventoryStepOne?.data?.data?.id,
      createPropertyWalletCashPaymentPlanDto: {
        discountPercentage: val.discountPercentage,
        discountAmount: val.discountAmount,
        commissionPercentage: val.commissionPercentage,
        spCommissionPercentage: val.spCommissionPercentage,
        minimumPrice: val.minimumPrice,
        tokenAmount: selectedOptions.map((item) => Number(item)),
        lgCommissionPercentage: val.lgCommissionPercentage,
        agentCommissiion: val.agentCommissiion,
        freeLancerCommissiion: val.freeLancerCommissiion,
        agentELoungeSaleCommissiion: val.agentELoungeSaleCommissiion,
        freelancerELoungeSaleCommissiion: val.freelancerELoungeSaleCommissiion,
        outdoorComission: val.outdoorComission,
        extraCommissiion: val.extraCommissiion,
        agencyIncrementCommission: val.consecutive,
        freeLancerExtraCommissiion: val.flextc,
        premiumAgencyExtraCommissiion: val.paextc,
        outdoorAgencyEloungeComission: val.outdoorAgencyEloungeComission,
        outdoorFreelancerEloungeComission: Number(
          val.outdoorFreelancerEloungeComission
        ),
        outdoorPremiumAgencyEloungeComission: Number(
          val?.outdoorPremiumAgencyEloungeComission
        ),
        eloungeOtherCommission: Number(val.eloungeOtherCommission),
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
      propertyWalletInventoryId: createProjectInventoryStepOne?.data?.data?.id,
      updatePropertyWalletCashPaymentPlanDto: {
        discountPercentage: val.discountPercentage,
        discountAmount: val.discountAmount,
        commissionPercentage: val.commissionPercentage,
        spCommissionPercentage: val.spCommissionPercentage,
        minimumPrice: val.minimumPrice,
        tokenAmount: selectedOptions.map((item) => Number(item)),
        lgCommissionPercentage: val.lgCommissionPercentage,
        agentCommissiion: val.agentCommissiion,
        freeLancerCommissiion: val.freeLancerCommissiion,
        agentELoungeSaleCommissiion: val.agentELoungeSaleCommissiion,
        freelancerELoungeSaleCommissiion: val.freelancerELoungeSaleCommissiion,
        outdoorComission: val.outdoorComission,
        extraCommissiion: val.extraCommissiion,
        agencyIncrementCommission: val.consecutive,
        freeLancerExtraCommissiion: val.flextc,
        premiumAgencyExtraCommissiion: val.paextc,
        outdoorAgencyEloungeComission: val.outdoorAgencyEloungeComission,
        outdoorFreelancerEloungeComission: Number(
          val.outdoorFreelancerEloungeComission
        ),
        outdoorPremiumAgencyEloungeComission: Number(
          val?.outdoorPremiumAgencyEloungeComission
        ),
        eloungeOtherCommission: Number(val.eloungeOtherCommission),
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
    if (createPropertyWalletInventoryStep3CashPlan?.data !== null) {
      updatePropertyWalletInventoryStep3CashPlanApi(
        dispatch,
        updateBody,
        onSuccessupdate,
        createProjectInventoryStepOne?.data?.data?.id
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
            createPropertyWalletInventoryStep3CashPlan.loading ||
            updatePropertyWalletInventoryStep3CashPlan.loading
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
