import React, { useState, useMemo } from 'react'
import { Button, Divider, Segmented, Tooltip } from 'antd'
import sqydIcon from '../../../../assest/icon/sqyd-icon.png'
import eyeIcon from '../../../../assest/icon/eyeview.png'
import bedIcon from '../../../../assest/icon/bed-icon.png'
import bathsIcon from '../../../../assest/icon/baths-icon.png'
import { InfoCircleOutlined } from '@ant-design/icons'
const ListingInfoContainer = ({ getAllInventory }) => {
  const [arrow, setArrow] = useState('Show')
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
    <div>
      <div className="flex justify-between items-center mb-[16px]">
        <h2 className="text-[18.75px] font-semibold text-[#444B54] max-w-[338px] flex gap-[5px] ">
          <span>
            {' '}
            {getAllInventory?.title || getAllInventory?.project?.projectName}
          </span>{' '}
          <span>
            <Tooltip
              placement="top"
              className="cursor-pointer"
              title={
                getAllInventory?.inventoryGrading?.[0]?.titleRating &&
                getAllInventory?.inventoryGrading?.[0]?.titleRating
              }
              arrow={mergedArrow}
            >
              <InfoCircleOutlined style={{ fontSize: '16px' }} />
            </Tooltip>
          </span>
        </h2>
        <span className="text-[#27A3A3] text-[29.3px] font-semibold">
          PKR {getAllInventory?.price}/
        </span>
      </div>
      <div className="flex gap-6 items-center mb-[24px]">
        {getAllInventory?.landSize && (
          <div className="flex items-center gap-[6px]">
            <img src={sqydIcon} alt="" />
            <span className="text-[14px] text-[#292D35]">
              {getAllInventory?.landSize} {getAllInventory?.landArea?.title}
            </span>
          </div>
        )}

        {getAllInventory?.bedRooms && (
          <div className="flex items-center gap-[6px]">
            <img src={bedIcon} alt="" />
            <span className="text-[14px] text-[#292D35]">{`${getAllInventory?.bedRooms} Bed Rooms`}</span>
          </div>
        )}
        {getAllInventory?.washRooms && (
          <div className="flex items-center gap-[6px]">
            <img src={bathsIcon} alt="" />
            <span className="text-[14px] text-[#292D35]">
              {getAllInventory?.washRooms} Bath Rooms
            </span>
          </div>
        )}
      </div>
      <div>
        <h4 className="text-[15px] text-[#1F2228] mb-[9px]">
          Description{' '}
          <Tooltip
            placement="top"
            className="cursor-pointer"
            title={
              getAllInventory?.inventoryGrading?.[0]?.descriptionRating &&
              getAllInventory?.inventoryGrading?.[0]?.descriptionRating
            }
            arrow={mergedArrow}
          >
            <InfoCircleOutlined style={{ fontSize: '16px' }} />
          </Tooltip>
        </h4>
        <p className="text-[15px] text-[#667085]">
          {getAllInventory?.description}
        </p>
      </div>
    </div>
  )
}

export default ListingInfoContainer
