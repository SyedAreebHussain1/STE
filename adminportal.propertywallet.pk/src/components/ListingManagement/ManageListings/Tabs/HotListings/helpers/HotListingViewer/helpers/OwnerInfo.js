import { Divider } from 'antd'
import React from 'react'
import UserInfoField from '../../../../../../../AppUser/UserDetail/heplers/UserInfoField'
import img from '../../../../../../../assest/img/hello.png'

const OwnerInfo = () => {
  return (
    <div className="bg-white rounded-lg row-span-2 min-h-[62%]">
      <div className="py-[16px] px-[16px]">
        <div className="flex justify-between items-center pb-5">
          <h4 className="text-[15px] text-[#3D4350]">Basic Details</h4>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[54px] h-[54px] overflow-hidden rounded-full">
            <img
              src={'https://placehold.co/54x54'}
              alt=""
              className="h-full object-fill"
            />
          </div>
          <span>
            <h3 className="text-[18px] text-[#1F2228] font-semibold">
              Owais Ahmed Ali
            </h3>
          </span>
          <span className="text-[12px] px-3 py-2 border border-[#C2C6CE] !rounded-full">
            {'Owner'}
          </span>
        </div>
        <Divider />
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-3">
            <UserInfoField
              title="Agency"
              value={'Pakistan Real Estate'}
              img={img}
            />

            <UserInfoField
              title="Email Address"
              value={'Zakaullahq@outlook.com'}
            />
            <UserInfoField title="Country" value={'Pakistan'} />

            <UserInfoField title="Phone No" value={'3153968946'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerInfo
