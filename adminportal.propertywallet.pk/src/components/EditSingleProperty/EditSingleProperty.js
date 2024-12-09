import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import EditSinglePropertySteps from './helpers/EditSinglePropertySteps'
import { clearCreatePropertyWalletProductStepOne } from '../../redux/slices/SingleProperty/createPropertyWalletProductStepOneSlice'
import { clearcreatePropertyWalletProductStepTwo } from '../../redux/slices/SingleProperty/createPropertyWalletProductStepTwoSlice'
import { clearupdatePropertyWalletProductStepOne } from '../../redux/slices/SingleProperty/updatePropertyWalletProductStepOneSlice'
import { clearupdatePropertyWalletProductStepTwo } from '../../redux/slices/SingleProperty/updatePropertyWalletProductStepTwoSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { clearCreatePropertyWalletProductStep3CashPlan } from '../../redux/slices/SingleProperty/createPropertyWalletProductStep3CashPlanSlice'
import { clearUpdatePropertyWalletProductStep3CashPlan } from '../../redux/slices/SingleProperty/updatePropertyWalletProductStep3CashPlanSlice'
import { cleargetStepTwoImages } from '../../redux/slices/SingleProperty/getStepTwoImagesSlice'
import { cleargetProductDetailForStep1 } from '../../redux/slices/SingleProperty/getProductDetailForStep1Slice'
import { clearcreateStepTwoImages } from '../../redux/slices/SingleProperty/createStepTwoImagesSlice'
import { cleargetProductDetailForStep3Features } from '../../redux/slices/SingleProperty/getProductDetailForStep3FeaturesSlice'
import { clearGetProductDetailForStep4CashPlan } from '../../redux/slices/SingleProperty/getProductDetailForStep4CashPlanSlice'

const EditSingleProperty = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(clearCreatePropertyWalletProductStepOne())
      dispatch(clearcreatePropertyWalletProductStepTwo())
      dispatch(clearupdatePropertyWalletProductStepOne())
      dispatch(clearupdatePropertyWalletProductStepTwo())
      dispatch(clearCreatePropertyWalletProductStep3CashPlan())
      dispatch(clearUpdatePropertyWalletProductStep3CashPlan())
      dispatch(cleargetStepTwoImages())
      dispatch(cleargetProductDetailForStep1())
      dispatch(clearcreateStepTwoImages())
      dispatch(cleargetProductDetailForStep3Features())
      dispatch(clearGetProductDetailForStep4CashPlan())
    }
  }, [])
  return (
    <PageContainer>
      <PageHeader
        title={'Add Inventory'}
        subTitle={'Add/Update your property or project'}
      />
      <EditSinglePropertySteps />
    </PageContainer>
  )
}

export default EditSingleProperty
