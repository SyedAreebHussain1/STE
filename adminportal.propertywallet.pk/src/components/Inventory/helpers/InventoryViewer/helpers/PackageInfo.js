import React from 'react'
import goldIcon from '../../../../assest/icon/gold-icon.png'
import UserInfoField from '../../../../AppUser/UserDetail/heplers/UserInfoField'
import moment from 'moment'

const PackageInfo = ({ getAllInventory }) => {
  return (
    <div className="bg-white rounded-lg row-span-2 mt-[17px] min-h-[36%]">
      <div className="py-[16px] px-[16px]">
        <h4 className="text-[#1F2228] text-[14px] mb-[14px]">Active Package</h4>
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex gap-2">
            <div
              className="flex justify-center items-center border-[#000] rounded-full overflow-hidden w-[50px] h-[50px]"
              style={{ border: '1px solid rgb(0 0 0 / 18%)' }}
            >
              <img
                src={
                  getAllInventory?.createdByUser?.profile?.agency
                    ?.pwAssignPackage?.pwSubPackage?.pwPackage?.iconUrl ||
                  'https://placehold.co/50x50'
                }
                alt=""
                className="max-w-full object-cover"
                width={50}
                height={50}
              />
            </div>
            <div>
              <span className="text-[#000000] text-sm font-medium">
                {
                  getAllInventory?.createdByUser?.profile?.agency
                    ?.pwAssignPackage?.pwSubPackage?.pwPackage?.title
                }
              </span>
              <div className="flex gap-1">
                <span>
                  <h4 className="text-[#5C5C5C] break-words text-xs">
                    RS{' '}
                    {
                      getAllInventory?.createdByUser?.profile?.agency
                        ?.pwAssignPackage?.charges
                    }
                    /
                    {
                      getAllInventory?.createdByUser?.profile?.agency
                        ?.pwAssignPackage?.pwSubPackage?.title
                    }
                  </h4>
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[#706FD3] bg-[#706FD305] text-[12px] rounded-[34px] px-[10px] py-[3px]">
              {
                getAllInventory?.createdByUser?.profile?.agency?.pwAssignPackage
                  ?.pwSubPackage?.title
              }{' '}
              Plan
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap mt-6">
          <UserInfoField
            title="Subscribe Date"
            value={moment(
              getAllInventory?.createdByUser?.profile?.agency?.pwAssignPackage
                ?.subscribeDate
            )?.format('MMMM DD, YYYY')}
          />

          <UserInfoField
            title="Expiry Date"
            value={moment(
              getAllInventory?.createdByUser?.profile?.agency?.pwAssignPackage
                ?.expireAt
            )?.format('MMMM DD, YYYY')}
          />
        </div>
      </div>
    </div>
  )
}

export default PackageInfo
