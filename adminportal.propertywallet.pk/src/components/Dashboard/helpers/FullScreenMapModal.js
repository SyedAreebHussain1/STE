import { Modal } from 'antd'
import React from 'react'
import DashboardMap from './DashboardMap'
import { clearisAgencyWithinRadius } from '../../../redux/slices/Dashboard/isAgencyWithinRadiusSlice'
import { useDispatch } from 'react-redux'

const FullScreenMapModal = ({ visible, toggle }) => {
  const dispatch = useDispatch()
  function onCancel() {
    // dispatch(clearisAgencyWithinRadius())
    toggle()
  }
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={1000}
    >
      <DashboardMap />
    </Modal>
  )
}

export default FullScreenMapModal
