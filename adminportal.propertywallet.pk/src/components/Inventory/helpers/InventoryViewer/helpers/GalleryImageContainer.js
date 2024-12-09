import React, { useState, useMemo } from 'react'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
import { Button, Divider, Segmented, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

const GalleryImageContainer = ({ getAllInventory }) => {
  const [mainImage, setMainImage] = useState(0)
  const image = getAllInventory?.project?.projectPhotos
    ? [...getAllInventory?.project?.projectPhotos]
    : []
  const [arrow, setArrow] = useState('Show')
  const changeImage = (i) => {
    setMainImage(i)
  }
  const [sliderBtnVisible, setSliderBtnVisible] = useState(false)
  const btnsLeftClasses = {
    initial: 'left-[-50px]',
    final: 'left-[20px]',
  }
  const btnsRightClasses = {
    initial: 'right-[-50px]',
    final: 'right-[20px]',
  }
  function onPrevBtnClick() {
    if (mainImage === 0) {
      setMainImage(image.length - 1)
    } else {
      setMainImage((prev) => prev - 1)
    }
  }
  function onNextBtnClick() {
    if (mainImage === image.length - 1) {
      setMainImage(0)
    } else {
      setMainImage((prev) => prev + 1)
    }
  }
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false
    }
    if (arrow === 'Show') {
      return true
    }
    return {
      pointAtCenter: true,
    }
  }, [arrow])
  return (
    <div
      className="flex flex-col gap-4 cursor-pointer"
      onMouseOver={() => setSliderBtnVisible(true)}
      onMouseLeave={() => setSliderBtnVisible(false)}
    >
      <div className="w-full overflow-hidden h-[230px] rounded-[9px] relative">
        <button
          className={`absolute ${
            sliderBtnVisible ? btnsLeftClasses.final : btnsLeftClasses.initial
          } top-2/4 -translate-y-1/2 transition-all`}
          onClick={onPrevBtnClick}
        >
          <LeftCircleFilled className="text-[30px]" />
        </button>
        <button
          className={`absolute ${
            sliderBtnVisible ? btnsRightClasses.final : btnsRightClasses.initial
          } top-2/4 -translate-y-1/2 transition-all`}
          onClick={onNextBtnClick}
        >
          <RightCircleFilled className="text-[30px]" />
        </button>
        <div className="relative">
          <div className="absolute  top-[3%] left-[4%]">
            <Tooltip
              className="cursor-pointer"
              placement="top"
              title={
                getAllInventory?.inventoryGrading?.[0] &&
                getAllInventory?.inventoryGrading?.[0]?.photosRating
              }
              arrow={mergedArrow}
            >
              <InfoCircleOutlined style={{ fontSize: '16px' }} />
            </Tooltip>
          </div>
          <img
            src={image?.[mainImage]?.photo}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex gap-4 overflow-x-scroll">
        {image?.map((ele, i) => {
          if (i !== mainImage) {
            return (
              <div
                className="w-[79.23px] h-[79.23px] overflow-hidden rounded-[9px] cursor-pointer flex-shrink-0"
                onClick={() => changeImage(i)}
              >
                <img
                  src={ele.photo}
                  id={ele.id}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default GalleryImageContainer
