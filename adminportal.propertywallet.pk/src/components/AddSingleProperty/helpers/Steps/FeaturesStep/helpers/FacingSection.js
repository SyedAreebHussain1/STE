import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import SectionContainer from '../../../../../../utils/components/SectionContainer'
import { Checkbox, Divider, Row } from 'antd'
import {
  createProductFacingApi,
  deleteProductFacingApi,
  getProductFacingApi,
} from '../../../../../../redux/api/SingleProperty'

const FacingSection = ({ current }) => {
  const createPropertyWalletProductStepOne = useSelector(
    (state) => state.createPropertyWalletProductStepOne
  )
  const getProductFacing = useSelector((state) => state.getProductFacing)
  const dispatch = useDispatch()
  useEffect(() => {
    if (current === 2 && createPropertyWalletProductStepOne?.data !== null) {
      getProductFacingApi(
        dispatch,
        createPropertyWalletProductStepOne?.data?.data?.id
      )
    }
  }, [current, createPropertyWalletProductStepOne?.data])
  return (
    <>
      <SectionContainer
        title="Facing"
        subtitle="Set the Facings according to your property"
      >
        <Row gutter={16}>
          {getProductFacing?.data?.data?.map((field) => (
            <Checkbox
              key={field.title}
              id={field.id}
              onChange={(e) => {
                const body = {
                  propertyWalletProductId:
                    createPropertyWalletProductStepOne?.data?.data?.id,
                  propertyWalletFacingId: e.target.id,
                }
                if (e.target.checked) {
                  createProductFacingApi(dispatch, body)
                } else {
                  deleteProductFacingApi(dispatch, body)
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
