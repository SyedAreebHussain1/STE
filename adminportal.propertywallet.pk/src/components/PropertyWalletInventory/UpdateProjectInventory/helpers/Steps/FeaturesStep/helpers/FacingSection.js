import { Checkbox, Divider, Row } from 'antd'
import React, { useEffect } from 'react'
import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import { useSelector } from 'react-redux'
import {
  createProjectInventoryFacingApi,
  createProjectInventoryUtilsApi,
  deleteProjectInventoryFacingApi,
  deleteProjectInventoryUtilsApi,
  getProjectInventoryFacingApi,
  getProjectInventoryUtilsApi,
} from '../../../../../../../redux/api/Project/ProjectInventory'
import { useDispatch } from 'react-redux'

const FacingSection = ({ current }) => {
  const createProjectInventoryStepOne = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const getProjectInventoryFacing = useSelector(
    (state) => state.getProjectInventoryFacing
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (current === 1 && createProjectInventoryStepOne?.data !== null) {
      getProjectInventoryFacingApi(
        dispatch,
        createProjectInventoryStepOne?.data?.data?.id
      )
    }
  }, [current, createProjectInventoryStepOne?.data])
  return (
    <>
      <SectionContainer
        title="Facing"
        subtitle="Set the Facings according to your property"
      >
        <Row gutter={16}>
          {getProjectInventoryFacing?.data?.data?.map((field) => (
            <Checkbox
              key={field.title}
              id={field.id}
              onChange={(e) => {
                const body = {
                  propertyWalletInventoryId:
                    createProjectInventoryStepOne?.data?.data?.id,
                  propertyWalletFacingId: e.target.id,
                }
                if (e.target.checked) {
                  createProjectInventoryFacingApi(dispatch, body)
                } else {
                  deleteProjectInventoryFacingApi(dispatch, body)
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

export default FacingSection
