import React, { useEffect, useState } from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import EditProjectSteps from './helpers/EditProjectSteps'
import { useDispatch } from 'react-redux'
import { clearCreateProjectStepOne } from '../../redux/slices/Project/createProjectStepOneSlice'
import { clearCreateProjectStepTwo } from '../../redux/slices/Project/createProjectStepTwoSlice'
import { clearUpdateProjectStepOne } from '../../redux/slices/Project/updateProjectStepOneSlice'
import { clearUpdateProjectStepTwo } from '../../redux/slices/Project/updateProjectStepTwoSlice'
import { cleargetProjectDetailsStepTwo } from '../../redux/slices/Project/getProjectDetailsStepTwoSlice'
import { cleargetProjectStepOne } from '../../redux/slices/Project/getProjectStepOneSlice'
import { cleargetProjectStepThree } from '../../redux/slices/Project/getProjectStepThreeSlice'

const EditProject = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(clearCreateProjectStepOne())
      dispatch(clearCreateProjectStepTwo())
      dispatch(clearUpdateProjectStepOne())
      dispatch(clearUpdateProjectStepTwo())
      dispatch(cleargetProjectDetailsStepTwo())
      dispatch(cleargetProjectStepOne())
      dispatch(cleargetProjectStepThree())
    }
  }, [])
  return (
    <PageContainer>
      <PageHeader
        title={'Add Inventory'}
        subTitle={'Add/Update your property or project'}
      />
      <EditProjectSteps />
    </PageContainer>
  )
}

export default EditProject
