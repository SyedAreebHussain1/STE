import React from 'react'
import { Divider, Modal } from 'antd'
import payBillSuccess from '../../../../assest/icon/paybillSuccess.png'
const PayBillModal = ({ visible, toggleAdd }) => {
  function onCancel() {
    toggleAdd()
  }
  return (
    <Modal
      width={'790px'}
      title={
        <h3 className="text-[15px] font-semibold text-[#000000]">
          Pay by Client
        </h3>
      }
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />
      <div className="text-center m-[20px] p-[10px]">
        <div className="flex justify-center">
          <img src={payBillSuccess} alt="" />
        </div>
        <div className="mt-[20px]">
          <p className="text-[#455A64] font-medium text-[16px] tracking-tighter m-[]">
            Details Has Been Sent Successfully to the Client for the Payment
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default PayBillModal
