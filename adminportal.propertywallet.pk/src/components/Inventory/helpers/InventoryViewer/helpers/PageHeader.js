import { Button } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const PageHeader = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function onSuccess() {
    navigate(-1)
  }
  return (
    <div className="flex items-center justify-between py-[34px] px-[24px]">
      <h2 className="text-[15px] text-[#3D4350]">Listing Details</h2>
    </div>
  )
}

export default PageHeader
