import React, { useEffect, useState } from 'react'
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
  const [state, setState] = useState()
  const updatePropertyWalletProductStepOne = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )
  const getProductFacing = useSelector((state) => state.getProductFacing)
  const dispatch = useDispatch()

  useEffect(() => {
    setState(getProductFacing?.data?.data)
  }, [getProductFacing.data])
  useEffect(() => {
    if (current === 2 && updatePropertyWalletProductStepOne?.data !== null) {
      getProductFacingApi(
        dispatch,
        updatePropertyWalletProductStepOne?.data?.data?.id
      )
    }
  }, [current, updatePropertyWalletProductStepOne?.data])
  return (
    <>
      <SectionContainer
        title="Facing"
        subtitle="Set the Facings according to your property"
      >
        <Row gutter={16}>
          {state &&
            state?.map((field) => (
              <Checkbox
                key={field.title}
                id={field.id}
                checked={field.isMatching}
                onChange={(e) => {
                  const body = {
                    propertyWalletProductId:
                      updatePropertyWalletProductStepOne?.data?.data?.id,
                    propertyWalletFacingId: e.target.id,
                  }
                  // if (e.target.checked) {
                  //   createProductFacingApi(dispatch, body);
                  // } else {
                  //   deleteProductFacingApi(dispatch, body);
                  // }
                  if (e.target.checked) {
                    const newState = state.map((item) => {
                      if (item.id === e.target.id) {
                        return {
                          ...item,
                          isMatching: true,
                        }
                      }

                      return item
                    })
                    setState(newState)
                    createProductFacingApi(dispatch, body)
                  } else {
                    const newState = state.map((item) => {
                      if (item.id === e.target.id) {
                        return {
                          ...item,
                          isMatching: false,
                        }
                      }

                      return item
                    })
                    setState(newState)
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
