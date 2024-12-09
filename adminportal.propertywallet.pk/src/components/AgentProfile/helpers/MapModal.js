import React, { useEffect, useState } from 'react'
import { Button, Divider, Modal } from 'antd'
import LocationViewMap from './LocationViewMap'

const MapModal = ({ visible, toggle, data }) => {
  function onCancel() {
    toggle()
  }
  const [markers, setMarkers] = useState([])
  useEffect(() => {
    setMarkers([
      {
        lat: data?.lat,
        lng: data?.lng,
      },
    ])
  }, [data])
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Agency Location</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={700}
    >
      <Divider />
      <div>
        <div>
          <LocationViewMap markers={markers} />
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default MapModal
