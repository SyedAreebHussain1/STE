import React, { useEffect } from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import UpdateProjectInventorySteps from './helpers/UpdateProjectInventorySteps'
import { useDispatch } from 'react-redux'
import { clearCreateProjectInventoryStepOne } from '../../../redux/slices/Project/ProjectInventory/createProjectInventoryStepOneSlice'
import { clearcreateProjectInventoryStepTwo } from '../../../redux/slices/Project/ProjectInventory/createProjectInventoryStepTwoSlice'
import { clearupdateProjectInventoryStepOne } from '../../../redux/slices/Project/ProjectInventory/updateProjectInventoryStepOneSlice'
import { clearupdateProjectInventoryStepTwo } from '../../../redux/slices/Project/ProjectInventory/updateProjectInventoryStepTwoSlice'
import { clearCreatePropertyWalletInventoryStep3CashPlan } from '../../../redux/slices/Project/ProjectInventory/createPropertyWalletInventoryStep3CashPlanSlice'
import { clearupdatePropertyWalletInventoryStep3CashPlan } from '../../../redux/slices/Project/ProjectInventory/updatePropertyWalletInventoryStep3CashPlanSlice'
import { cleargetPropertyWalletInventoryStep3CashPlan } from '../../../redux/slices/Project/ProjectInventory/getPropertyWalletInventoryStep3CashPlanSlice'
import { cleargetgetInventoryDetailStepTwo } from '../../../redux/slices/Project/getInventoryDetailStepTwoSlice'
import { cleargetProjectInventoryStepOne } from '../../../redux/slices/Project/ProjectInventory/getProjectInventoryStepOneSlice'
import { cleargeneratePlotDetailUpdateExel } from '../../../redux/slices/Project/ProjectInventory/GeneratePlotDetailUpdateExelSlice'

const UpdateProjectInventory = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(clearCreateProjectInventoryStepOne())
      dispatch(clearcreateProjectInventoryStepTwo())
      dispatch(clearupdateProjectInventoryStepOne())
      dispatch(clearupdateProjectInventoryStepTwo())
      dispatch(clearCreatePropertyWalletInventoryStep3CashPlan())
      dispatch(clearupdatePropertyWalletInventoryStep3CashPlan())
      dispatch(cleargetPropertyWalletInventoryStep3CashPlan())
      dispatch(cleargetgetInventoryDetailStepTwo())
      dispatch(cleargetProjectInventoryStepOne())
      dispatch(cleargeneratePlotDetailUpdateExel())
    }
  }, [])
  return (
    <PageContainer>
      <PageHeader
        title={'Update Inventory'}
        subTitle={'Add/Update your property or project'}
      />
      <UpdateProjectInventorySteps />
    </PageContainer>
  )
}

export default UpdateProjectInventory
