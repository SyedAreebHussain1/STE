import React, { useEffect } from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import AddProjectInventorySteps from './helpers/AddProjectInventorySteps'
import { useDispatch } from 'react-redux'
import { clearCreateProjectInventoryStepOne } from '../../../redux/slices/Project/ProjectInventory/createProjectInventoryStepOneSlice'
import { clearcreateProjectInventoryStepTwo } from '../../../redux/slices/Project/ProjectInventory/createProjectInventoryStepTwoSlice'
import { clearupdateProjectInventoryStepOne } from '../../../redux/slices/Project/ProjectInventory/updateProjectInventoryStepOneSlice'
import { clearupdateProjectInventoryStepTwo } from '../../../redux/slices/Project/ProjectInventory/updateProjectInventoryStepTwoSlice'
import { clearCreatePropertyWalletInventoryStep3CashPlan } from '../../../redux/slices/Project/ProjectInventory/createPropertyWalletInventoryStep3CashPlanSlice'
import { clearupdatePropertyWalletInventoryStep3CashPlan } from '../../../redux/slices/Project/ProjectInventory/updatePropertyWalletInventoryStep3CashPlanSlice'

const AddProjectInventory = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(clearCreateProjectInventoryStepOne())
      dispatch(clearcreateProjectInventoryStepTwo())
      dispatch(clearupdateProjectInventoryStepOne())
      dispatch(clearupdateProjectInventoryStepTwo())
      dispatch(clearCreatePropertyWalletInventoryStep3CashPlan())
      dispatch(clearupdatePropertyWalletInventoryStep3CashPlan())
    }
  }, [])
  return (
    <PageContainer>
      <PageHeader
        title={'Add Inventory'}
        subTitle={'Add/Update your property or project'}
      />
      <AddProjectInventorySteps />
    </PageContainer>
  )
}

export default AddProjectInventory
