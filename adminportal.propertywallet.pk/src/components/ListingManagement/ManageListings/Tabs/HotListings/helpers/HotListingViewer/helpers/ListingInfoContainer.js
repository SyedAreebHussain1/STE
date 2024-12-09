import React from 'react'
import sqydIcon from '../../../../../../../assest/icon/sqyd-icon.png'
import bedIcon from '../../../../../../../assest/icon/bed-icon.png'
import bathsIcon from '../../../../../../../assest/icon/baths-icon.png'

const ListingInfoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-[16px]">
        <h2 className="text-[18.75px] font-semibold text-[#444B54] max-w-[338px]">
          Stunning 3-Bedroom Home with High-End Finishes
        </h2>
        <span className="text-[#27A3A3] text-[29.3px] font-semibold">
          PKR 30,000,000/
        </span>
      </div>
      <div className="flex gap-6 items-center mb-[24px]">
        <div className="flex items-center gap-[6px]">
          <img src={sqydIcon} alt="" />
          <span className="text-[14px] text-[#292D35]">778 Sq. Yards</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <img src={sqydIcon} alt="" />
          <span className="text-[14px] text-[#292D35]">2 Beds</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <img src={sqydIcon} alt="" />
          <span className="text-[14px] text-[#292D35]">3 Baths</span>
        </div>
      </div>
      <div>
        <h4 className="text-[15px] text-[#1F2228] mb-[9px]">Description</h4>
        <p className="text-[15px] text-[#667085]">
          Offering residential Plots of 125, 250, 500, and 1000 square Yards,
          Palm Dreams is a Community Intellectually Planned to conform to the
          highly sophisticated living standards. Offering residential Plots of
          125, 250, 500, and 1000 square Yards, Palm Dreams is a Community
          Intellectually Planned to conform to the highly sophisticated living
          standards. Yards, Palm Dreams is a Community Intellectually Planned to
          conform to the highly sophisticated living standards.{' '}
        </p>
      </div>
    </div>
  )
}

export default ListingInfoContainer
