import React from 'react'
import Status from '../../../../../utils/components/Status'
import AdminImg from '../../../../assest/img/client.png'
import ImgLogo from '../../../../assest/img/agencyowner.png'
import { Divider } from 'antd'
import UserInfoField from './UserInfoField'

const ClientDetail = () => {
  return (
    <div className="bg-white rounded-lg h-[805px]">
      <div className="pt-[20px] px-[24px] pb-[58px]">
        <div className="flex justify-between items-center pb-5">
          <h4 className="text-[15px] text-[#3D4350]">Basic Details</h4>
          <Status type="active" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
            <img src={AdminImg} alt="" />
          </div>
          <span>
            <h3 className="text-[23px] text-[#1F2228] font-semibold">
              Pakistan Real Estate
            </h3>
          </span>
          {/* <span className="text-[15px] px-3 py-2 border border-[#C2C6CE] !rounded-full">
            Manager
          </span> */}
        </div>
        <UserInfoField title="" />
        <Divider />
        <div className="flex flex-col gap-8">
          <UserInfoField
            title="Owner"
            value="Theodore T.C. Calvin"
            img={ImgLogo}
          />
          <div className="flex justify-between">
            <div className="flex flex-col gap-8">
              <UserInfoField title="Phone No" value="+92-315-3968946" />
              <UserInfoField title="Address" value="Gulshan e Iqbal" />
              <UserInfoField title="Branches" value="10" />
            </div>
            <div className="flex flex-col  gap-8">
              <UserInfoField title="City" value="Karachi" />
              <UserInfoField title="Website" value="www.Example.com" />
              <UserInfoField title="Joining Date" value="02 May, 2019" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientDetail
