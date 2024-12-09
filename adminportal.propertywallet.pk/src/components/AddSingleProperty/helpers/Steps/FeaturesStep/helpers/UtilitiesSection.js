import { Checkbox, Divider, Row } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import SectionContainer from '../../../../../../utils/components/SectionContainer'
import {
  createPropertyWalletUtilApi,
  deletePropertyWalletUtilApi,
  getPropertyWalletUtilApi,
} from '../../../../../../redux/api/SingleProperty'

const UtilitiesSection = ({ current }) => {
  const createPropertyWalletProductStepOne = useSelector(
    (state) => state.createPropertyWalletProductStepOne
  )
  const getPropertyWalletUtil = useSelector(
    (state) => state.getPropertyWalletUtil
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (current === 2 && createPropertyWalletProductStepOne?.data !== null) {
      getPropertyWalletUtilApi(
        dispatch,
        createPropertyWalletProductStepOne?.data?.data?.id
      )
    }
  }, [current, createPropertyWalletProductStepOne?.data])
  return (
    <>
      <SectionContainer
        title="Utilities"
        subtitle="Set the Utilities according to your property"
      >
        <Row gutter={16}>
          {getPropertyWalletUtil?.data?.data?.map((field) => (
            <Checkbox
              key={field.title}
              id={field.id}
              onChange={(e) => {
                const body = {
                  propertyWalletProductId:
                    createPropertyWalletProductStepOne?.data?.data?.id,
                  propertyWalletUtilId: e.target.id,
                }
                if (e.target.checked) {
                  createPropertyWalletUtilApi(dispatch, body)
                } else {
                  deletePropertyWalletUtilApi(dispatch, body)
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
