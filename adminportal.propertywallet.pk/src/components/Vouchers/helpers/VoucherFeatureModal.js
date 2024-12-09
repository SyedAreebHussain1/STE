import { Checkbox, Col, Divider, Input, Modal, Row } from 'antd'
import React from 'react'
import InputLabel from '../../../utils/components/InputFields/InputLabel'

const VoucherFeatureModal = ({ visible, toggle, data }) => {
  function onCancel() {
    toggle()
  }
  console.log(data?.PwSubPackage)
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Packages Feature </h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={719}
    >
      <Divider />

      <Row gutter={16}>
        <Col sm={24} lg={12}>
          <InputLabel>User Limit</InputLabel>
          <Input
            className={`w-full lg:w-[] h-[] rounded-[8px] my-[10px] `}
            size="large"
            disabled
            value={data?.PwSubPackage?.noOfUserLimit}
          />
        </Col>
        <Col sm={24} lg={12}>
          <InputLabel>General Listing</InputLabel>
          <Input
            className={`w-full lg:w-[] h-[] rounded-[8px] my-[10px] `}
            size="large"
            disabled
            value={data?.PwSubPackage?.noListing}
          />
        </Col>
        <Col sm={24} lg={12}>
          <InputLabel>Hot Listing</InputLabel>
          <Input
            className={`w-full lg:w-[] h-[] rounded-[8px] my-[10px] `}
            size="large"
            disabled
            value={data?.PwSubPackage?.hotListing}
          />
        </Col>
        <Col sm={24} lg={12}>
          <InputLabel>Appointment</InputLabel>
          <Input
            className={`w-full lg:w-[] h-[] rounded-[8px] my-[10px] `}
            size="large"
            disabled
            value={data?.PwSubPackage?.noOfAppt}
          />
        </Col>
        <Col sm={24} lg={12}>
          <div className="mt-[10px] mb-[20px]">
            <Checkbox checked={data?.PwSubPackage?.isSetup} disabled></Checkbox>
            <span className="ml-[5px]">Website Setup</span>
          </div>
        </Col>
        <Col sm={24} lg={12}>
          <div className="mt-[10px] mb-[20px]">
            <Checkbox
              checked={data?.PwSubPackage?.digitalCatlog}
              disabled
            ></Checkbox>
            <span className="ml-[5px]">Digital Catalogue</span>
          </div>
        </Col>
      </Row>
    </Modal>
  )
}

export default VoucherFeatureModal
