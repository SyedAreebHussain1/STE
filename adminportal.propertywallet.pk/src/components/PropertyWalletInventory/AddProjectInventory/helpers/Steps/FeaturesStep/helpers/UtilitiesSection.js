import { Checkbox, Divider, Row } from 'antd'
import React, { useEffect } from 'react'
import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import { useSelector } from 'react-redux'
import {
  createProjectInventoryUtilsApi,
  deleteProjectInventoryUtilsApi,
  getProjectInventoryUtilsApi,
} from '../../../../../../../redux/api/Project/ProjectInventory'
import { useDispatch } from 'react-redux'

const UtilitiesSection = ({ current }) => {
  const createProjectInventoryStepOne = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const getProjectInventoryUtils = useSelector(
    (state) => state.getProjectInventoryUtils
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (current === 1 && createProjectInventoryStepOne?.data !== null) {
      getProjectInventoryUtilsApi(
        dispatch,
        createProjectInventoryStepOne?.data?.data?.id
      )
    }
  }, [current, createProjectInventoryStepOne?.data])
  return (
    <>
      <SectionContainer
        title="Utilities"
        subtitle="Set the Utilities according to your property"
      >
        <Row gutter={16}>
          {getProjectInventoryUtils?.data?.data?.map((field) => (
            <Checkbox
              key={field.title}
              id={field.id}
              onChange={(e) => {
                const body = {
                  propertyWalletInventoryId:
                    createProjectInventoryStepOne?.data?.data?.id,
                  propertyWalletUtilId: e.target.id,
                }
                if (e.target.checked) {
                  createProjectInventoryUtilsApi(dispatch, body)
                } else {
                  deleteProjectInventoryUtilsApi(dispatch, body)
                }
              }}
            >
              {field.title}
            </Checkbox>
          ))}
        </Row>
      </SectionContainer>
      <Divider />
    </>
  )
}

export default UtilitiesSection
