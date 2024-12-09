import { Divider } from 'antd'
import React from 'react'
import UserInfoField from '../../../../AppUser/UserDetail/heplers/UserInfoField'

const OwnerInfo = ({ getAllInventory }) => {
  return (
    <div className="bg-white rounded-lg row-span-2 min-h-[62%]">
      <div className="py-[16px] px-[16px]">
        <div className="flex justify-between items-center pb-5">
          <h4 className="text-[15px] text-[#3D4350]">Basic Details</h4>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[54px] h-[54px] overflow-hidden rounded-full">
            <img
              src={
                getAllInventory?.createdByUser?.profile?.profile_picture_url ||
                'https://placehold.co/54x54'
              }
              alt=""
              className="h-full object-fill"
            />
          </div>
          <span>
            <h3 className="text-[18px] text-[#1F2228] font-semibold">
              {getAllInventory?.createdByUser?.profile?.fullName}
            </h3>
          </span>
          <span className="text-[12px] px-3 py-2 border border-[#C2C6CE] !rounded-full">
            {getAllInventory?.createdByUser?.role?.title}
          </span>
        </div>
        <Divider />
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-3">
            <UserInfoField
              title="Agency"
              value={
                getAllInventory?.createdByUser?.profile?.agency?.agencyName
              }
              img={
                getAllInventory?.createdByUser?.profile?.agency?.logo_Url ||
                'https://placehold.co/50x42'
              }
            />

            <UserInfoField
              title="Email Address"
              value={getAllInventory?.createdByUser?.email}
            />
            <UserInfoField
              title="Country"
              value={getAllInventory?.createdByUser?.profile?.country || '-'}
            />

            <UserInfoField
              title="Phone No"
              value={getAllInventory?.createdByUser?.phone}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerInfo
