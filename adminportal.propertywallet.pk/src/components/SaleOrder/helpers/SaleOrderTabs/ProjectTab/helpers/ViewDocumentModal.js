import { Divider, Modal } from 'antd'
import React from 'react'

const ViewDocumentModal = ({ visible, toggle, data }) => {
  function onCancel() {
    toggle()
  }
  console.log(data)
  return (
    <Modal
      //   width={"1102px"}
      title={<h3 className="text-[18px] font-semibold">Document</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '100%' }}>
          <img
            src={data?.cnicFront}
            alt=""
            height={200}
            className="h-[400px] w-[100%] object-fill mb-[40px]"
          />
        </div>
        <div style={{ width: '100%' }}>
          <img
            src={data?.cnicBack}
            alt=""
            height={200}
            className="h-[400px] w-[100%] object-fill mb-[40px]"
          />
        </div>
      </div>
    </Modal>
  )
}

export default ViewDocumentModal
