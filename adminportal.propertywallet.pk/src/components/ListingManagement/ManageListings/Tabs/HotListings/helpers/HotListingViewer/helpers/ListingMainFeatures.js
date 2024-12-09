import React from 'react'
import electricityIcon from './../../../../../../../assest/icon/electricity-icon.png'
import gasIcon from './../../../../../../../assest/icon/gas-icon.png'
import waterIcon from './../../../../../../../assest/icon/water-icon.png'
import parkingIcon from './../../../../../../../assest/icon/parking-icon.png'
import internetIcon from './../../../../../../../assest/icon/internet-icon.png'
import schoolsIcon from './../../../../../../../assest/icon/schools-icon.png'
import hospitalsIcon from './../../../../../../../assest/icon/hospitals-icon.png'
import securityIcon from './../../../../../../../assest/icon/security-icon.png'

const ListingMainFeatures = () => {
  return (
    <div className="shadow-md p-6">
      <h4 className="pb-[10px] text-[#444B54] font-medium">Main Features</h4>
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={electricityIcon} alt="" />
          <span className="text-xs text-center">Electricity</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={gasIcon} alt="" />
          <span className="text-xs text-center">Gas</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={waterIcon} alt="" />
          <span className="text-xs text-center">Water Supply</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={parkingIcon} alt="" />
          <span className="text-xs text-center">Parking</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={internetIcon} alt="" />
          <span className="text-xs text-center">Internet Access</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={schoolsIcon} alt="" />
          <span className="text-xs text-center">Nearby Schools</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={hospitalsIcon} alt="" />
          <span className="text-xs text-center">Nearby Hospital</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={securityIcon} alt="" />
          <span className="text-xs text-center">Security</span>
        </div>
      </div>
    </div>
  )
}

export default ListingMainFeatures
