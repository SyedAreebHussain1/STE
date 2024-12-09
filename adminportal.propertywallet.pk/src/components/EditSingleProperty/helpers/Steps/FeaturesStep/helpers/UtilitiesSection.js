import { Checkbox, Divider, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import SectionContainer from '../../../../../../utils/components/SectionContainer'
import {
  createPropertyWalletUtilApi,
  deletePropertyWalletUtilApi,
  getPropertyWalletUtilApi,
} from '../../../../../../redux/api/SingleProperty'

const UtilitiesSection = ({ current }) => {
  const [state, setState] = useState()
  const updatePropertyWalletProductStepOne = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )
  const getPropertyWalletUtil = useSelector(
    (state) => state.getPropertyWalletUtil
  )
  const dispatch = useDispatch()

  useEffect(() => {
    setState(getPropertyWalletUtil?.data?.data)
  }, [getPropertyWalletUtil.data])
  useEffect(() => {
    if (current === 2 && updatePropertyWalletProductStepOne?.data !== null) {
      getPropertyWalletUtilApi(
        dispatch,
        updatePropertyWalletProductStepOne?.data?.data?.id
      )
    }
  }, [current, updatePropertyWalletProductStepOne?.data])
  return (
    <>
      <SectionContainer
        title="Utilities"
        subtitle="Set the Utilities according to your property"
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
                    propertyWalletUtilId: e.target.id,
                  }
                  // if (e.target.checked) {
                  //   createPropertyWalletUtilApi(dispatch, body);
                  // } else {
                  //   deletePropertyWalletUtilApi(dispatch, body);
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
                    createPropertyWalletUtilApi(dispatch, body)
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
