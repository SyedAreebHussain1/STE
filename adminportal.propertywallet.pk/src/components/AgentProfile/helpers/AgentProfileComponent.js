import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Input, Row } from 'antd'

import DetailsComponent from './DetailsComponent'
import AssignFreeTrialModal from './AssignFreeTrialModal'
import { useModal } from '../../../utils/hooks/useModal'
import { errorMessage } from '../../../utils/message'
import { searchForAgencyProfileApi } from '../../../redux/api/AgentProfile'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { clearSearchForAgencyProfile } from '../../../redux/slices/AgencyProfile/SearchForAgencyProfileSlice'

const AgentProfileComponent = () => {
  const [isAddModalVisible, toggle] = useModal()
  const [search, setSearch] = useState(null)
  const dispatch = useDispatch()
  // console.log(isAddModalVisible)
  const getSearchForAgencyProfile = useSelector(
    (state) => state.getSearchForAgencyProfile
  )
  const [agentId, setAgentId] = useState(null)

  useEffect(() => {
    dispatch(clearSearchForAgencyProfile())
  }, [])

  const handleApiCall = () => {
    if (!search) {
      errorMessage('Please Enter Number')
      return
    }
    const seachInput = `92${search}`
    searchForAgencyProfileApi(dispatch, seachInput)
  }
  const assignHandlerThisApiCall = () => {
    const seachInput = `92${search}`
    searchForAgencyProfileApi(dispatch, seachInput)
  }
  return (
    <>
      {isAddModalVisible && (
        <AssignFreeTrialModal
          visible={isAddModalVisible}
          toggle={toggle}
          agentId={agentId}
          ApiCallOnAssign={assignHandlerThisApiCall}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search Agent By Phone No`}
                prefix={'+92'}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              />
              <Button
                onClick={() => handleApiCall()}
                loading={getSearchForAgencyProfile.loading}
                className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[40px]"
              >
                {/* <img
                  // src={FilterIcon}
                  style={{ filter: 'brightness(4)' }}
                  alt=""
                /> */}
                <span>Search</span>
              </Button>
            </div>
            <div className="flex ">
              <Button
                disabled={
                  getSearchForAgencyProfile.data === null ||
                  getSearchForAgencyProfile?.data?.data?.profile?.agency
                    ?.pwAssignPackage?.pwSubPackage?.pwPackage?.isFree === false
                }
                className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[40px]"
              >
                <span
                  onClick={() => {
                    toggle()
                    setAgentId(
                      getSearchForAgencyProfile?.data?.data?.profile?.agency?.id
                    )
                  }}
                >
                  Assign Free Trial
                </span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <DetailsComponent />
    </>
  )
}

export default AgentProfileComponent
