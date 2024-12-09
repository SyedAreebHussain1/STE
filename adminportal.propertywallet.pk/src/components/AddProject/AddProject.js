import React, { useEffect, useState } from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import AddProjectSteps from './helpers/AddProjectSteps'
import { useDispatch } from 'react-redux'
import { clearCreateProjectStepOne } from '../../redux/slices/Project/createProjectStepOneSlice'
import { clearCreateProjectStepTwo } from '../../redux/slices/Project/createProjectStepTwoSlice'
import { clearUpdateProjectStepOne } from '../../redux/slices/Project/updateProjectStepOneSlice'
import { clearUpdateProjectStepTwo } from '../../redux/slices/Project/updateProjectStepTwoSlice'
import { cleargetProjectDetailsStepTwo } from '../../redux/slices/Project/getProjectDetailsStepTwoSlice'

const AddProject = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(clearCreateProjectStepOne())
      dispatch(clearCreateProjectStepTwo())
      dispatch(clearUpdateProjectStepOne())
      dispatch(clearUpdateProjectStepTwo())
      dispatch(cleargetProjectDetailsStepTwo())
    }
  }, [])
  return (
    <PageContainer>
      <PageHeader
        title={'Add Inventory'}
        subTitle={'Add/Update your property or project'}
      />
      <AddProjectSteps />
    </PageContainer>
  )
}

export default AddProject
