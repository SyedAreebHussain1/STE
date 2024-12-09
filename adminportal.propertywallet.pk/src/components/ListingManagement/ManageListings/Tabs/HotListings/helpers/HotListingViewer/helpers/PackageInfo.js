import React from 'react'
import goldIcon from '../../../../../../../assest/icon/gold-icon.png'
import UserInfoField from '../../../../../../../AppUser/UserDetail/heplers/UserInfoField'

const PackageInfo = () => {
  return (
    <div className="bg-white rounded-lg row-span-2 mt-[17px] min-h-[36%]">
      <div className="py-[16px] px-[16px]">
        <h4 className="text-[#1F2228] text-[14px] mb-[14px]">Active Package</h4>
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <img
                src={goldIcon}
                alt=""
                className="max-w-full object-contain"
              />
            </div>
            <div>
              <span className="text-[#000000] text-sm font-medium">Gold</span>
              <div className="flex gap-1">
                <span>
                  <h4 className="text-[#5C5C5C] break-words text-xs">
                    RS 800/month
                  </h4>
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[#706FD3] bg-[#706FD305] text-[12px] rounded-[34px] px-[10px] py-[3px]">
              Annual Plan
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap mt-6">
          <UserInfoField title="Subscribe Date" value={'Jan 7, 2023'} />

          <UserInfoField title="Expiry Date" value={'Feb 7, 2023'} />
        </div>
      </div>
    </div>
  )
}

export default PackageInfo
