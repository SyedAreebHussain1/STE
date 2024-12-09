import { Checkbox, Divider, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import SectionContainer from '../../../../../../../utils/components/SectionContainer'
import { useSelector } from 'react-redux'
import {
  createProjectInventoryUtilsApi,
  deleteProjectInventoryUtilsApi,
  getProjectInventoryUtilsApi,
} from '../../../../../../../redux/api/Project/ProjectInventory'
import { useDispatch } from 'react-redux'
import CheckboxField from '../../../../../../../utils/components/InputFields/CheckboxField'

const UtilitiesSection = ({ current }) => {
  const [state, setState] = useState()
  const [isMatchingUtilities, setisMatchingUtilities] = useState({})
  const dispatch = useDispatch()
  const updateProjectInventoryStepOne = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )
  const getProjectInventoryUtils = useSelector(
    (state) => state.getProjectInventoryUtils
  )
  // useEffect(() => {
  //   setIsBalloon({
  //     isBa: false,
  //     isId: null
  //   })
  // }, [])
  useEffect(() => {
    setState(getProjectInventoryUtils?.data?.data)
  }, [getProjectInventoryUtils.data])
  useEffect(() => {
    if (current === 1 && updateProjectInventoryStepOne?.data !== null) {
      getProjectInventoryUtilsApi(
        dispatch,
        updateProjectInventoryStepOne?.data?.data?.id
      )
    }
  }, [current, updateProjectInventoryStepOne?.data])

  return (
    <>
      <SectionContainer
        title="Utilities"
        subtitle="Set the Utilities according to your property"
      >
        <Row gutter={16}>
          {state
            ? state?.map((field) => (
                <Checkbox
                  key={field.title}
                  id={field.id}
                  checked={field.isMatching}
                  onChange={(e) => {
                    // setIsBalloon({ isBa: field.isMatching, isId: field.id })
                    const body = {
                      propertyWalletInventoryId:
                        updateProjectInventoryStepOne?.data?.data?.id,
                      propertyWalletUtilId: e.target.id,
                    }
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
                      createProjectInventoryUtilsApi(dispatch, body)
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
                      deleteProjectInventoryUtilsApi(dispatch, body)
                    }
                  }}
                >
                  {field.title}
                </Checkbox>
              ))
            : ''}
          {/* <CheckboxField name="utitlities" options={getProjectInventoryUtils?.data?.data?.map((field) => ({ label: field.title, value: field.id }))} onChange={(e) => {
                const body = {
                  propertyWalletInventoryId:
                  updateProjectInventoryStepOne?.data?.data?.id,
                  propertyWalletUtilId: e.target.value,
                };
                if (e.target.checked) {
                  createProjectInventoryUtilsApi(dispatch, body);
                } else {
                  deleteProjectInventoryUtilsApi(dispatch, body);
                }
              }} /> */}
        </Row>
      </SectionContainer>
      <Divider />
    </>
  )
}

export default UtilitiesSection
