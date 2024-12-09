import { Button } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  deleteHotListingsApprovalApi,
  deleteListingsApprovalApi,
} from '../../../../../../../../redux/api/ListingsApprovals'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const PageHeader = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { state } = useLocation()
  function onSuccess() {
    navigate(-1)
  }
  const deleteListingsApproval = useSelector(
    (state) => state.deleteListingsApproval
  )
  return (
    <div className="flex items-center justify-between py-[34px] px-[24px]">
      <h2 className="text-[15px] text-[#3D4350]">Listing Details</h2>
      <Button
        loading={deleteListingsApproval?.loading}
        className="text-sm px-[45px] py-[10px] rounded-[8px] border-2 border-[#E23442] text-[#E23442] flex items-center h-[41px]"
        onClick={() => {
          if (state?.type === 'listing') {
            deleteListingsApprovalApi(dispatch, state?.listingId, onSuccess)
          } else {
            deleteHotListingsApprovalApi(dispatch, state?.listingId, onSuccess)
          }
        }}
      >
        Delete Listing
      </Button>
    </div>
  )
}

export default PageHeader
