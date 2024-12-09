import { Button } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteHotListingsApprovalApi } from '../../../../../../../../redux/api/ListingsApprovals'
import { useSelector } from 'react-redux'

const PageHeader = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function onSuccess() {
    navigate(-1)
  }
  const deleteHotListingsApproval = useSelector(
    (state) => state.deleteHotListingsApproval
  )
  return (
    <div className="flex items-center justify-between py-[34px] px-[24px]">
      <h2 className="text-[15px] text-[#3D4350]">Listing Details</h2>
      <Button
        loading={deleteHotListingsApproval?.loading}
        className="text-sm px-[45px] py-[10px] rounded-[8px] border-2 border-[#E23442] text-[#E23442] flex items-center h-[41px]"
        onClick={() => {
          deleteHotListingsApprovalApi(dispatch, params?.id, onSuccess)
        }}
      >
        Delete Listing
      </Button>
    </div>
  )
}

export default PageHeader
