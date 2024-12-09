import { Button, Modal } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import Cropper from 'react-cropper'
import { urltoFile } from '../../../../utils/utils'
import { useDispatch } from 'react-redux'
import { uploadAdvertisementApi } from '../../../../redux/api/Advertisement/Promotion'

const PromotionCropImageModal = ({ visible, toggle, img }) => {
  const cropperRef = useRef()
  const dispatch = useDispatch()
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const fileObj = urltoFile(
        cropperRef.current?.cropper.getCroppedCanvas().toDataURL(),
        'promotion.jpg',
        'image/jpeg'
      )
      fileObj.then(function (file) {
        const formData = new FormData()
        formData.append('advertisement', file)
        uploadAdvertisementApi(dispatch, formData, onSuccess)
      })
      // setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  }
  function onSuccess() {
    toggle()
  }
  function onCancel() {
    toggle()
  }
  const defaultCropWidth = 340
  const defaultCropHeight = 155
  return (
    <Modal
      width={'600px'}
      title={<h3 className="text-[18px] font-semibold">Crop</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Cropper
        ref={cropperRef}
        style={{ height: 400, width: '100%' }}
        zoom={false}
        zoomTo={0.5}
        dragMode={'move'}
        initialAspectRatio={1}
        preview=".img-preview"
        src={img[0]?.url}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
        ready={(e) => {
          const cropperInstance = e.target.cropper
          const cropBoxData = cropperInstance.getCropBoxData()

          // Set the new crop box data with the default dimensions
          const newCropBoxData = {
            ...cropBoxData,
            width: defaultCropWidth,
            height: defaultCropHeight,
          }
          cropperInstance.setCropBoxData(newCropBoxData)
        }}
      />
      <h2 className="text-lg mt-4">
        <b>Dimensions:</b>{' '}
        <span
          className="cursor-pointer hover:text-blue-700 transition-all"
          onClick={() => {
            const cropperInstance = cropperRef.current.cropper
            const cropBoxData = cropperInstance.getCropBoxData()

            // Set the new crop box data with the default dimensions
            const newCropBoxData = {
              ...cropBoxData,
              width: defaultCropWidth,
              height: defaultCropHeight,
            }
            cropperInstance.setCropBoxData(newCropBoxData)
          }}
        >
          340 X 155
        </span>
      </h2>
      <div className="flex justify-end mt-[55px]">
        <Button
          size="middle"
          key="1"
          // type="primary"
          className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
          htmlType="submit"
          onClick={getCropData}
        >
          Complete Crop
        </Button>
      </div>
    </Modal>
  )
}

export default PromotionCropImageModal
