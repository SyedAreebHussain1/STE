import React, { useState } from 'react'
import { useLocation } from 'react-router'
import Status from '../../../../utils/components/Status'
import { Divider } from 'antd'
import UserInfoField from './UserInfoField'
import moment from 'moment'
import textCopyIcon from '../../../assest/icon/copytext.png'
// import { copy, linkIcon, loader, tick } from "../../../assets";

const ClientDetail = ({ getAuthUser }) => {
  const { state } = useLocation()
  const [copied, setCopied] = useState('')

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    setTimeout(() => setCopied(false), 3000)
  }
  return (
    <div className="bg-white rounded-lg row-span-2">
      <div className="pt-[20px] px-[24px] pb-[58px]">
        <div className="flex justify-between items-center pb-5">
          <h4 className="text-[15px] text-[#3D4350]">Basic Details</h4>
          <Status type="active" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
            <img
              src={
                getAuthUser?.data?.data?.profile?.profile_picture_url ||
                'https://placehold.co/90x90'
              }
              alt=""
              className="h-full object-fill"
            />
          </div>
          <span>
            <h3 className="text-[23px] text-[#1F2228] font-semibold">
              {getAuthUser?.data?.data?.profile?.fullName || '-'}
            </h3>
          </span>
          <span className="text-[15px] px-3 py-2 border border-[#C2C6CE] !rounded-full">
            {getAuthUser?.data?.data?.role?.title || '-'}
          </span>
        </div>
        <UserInfoField title="" />
        <Divider />
        <div className="flex flex-col gap-8">
          <UserInfoField
            title="Agency"
            value={getAuthUser?.data?.data?.profile?.agency?.agencyName || '-'}
            img={
              getAuthUser?.data?.data?.profile?.agency?.logo_Url ||
              'https://placehold.co/50x42'
            }
          />
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
            <UserInfoField
              title="Phone No"
              value={getAuthUser?.data?.data?.phone || '-'}
            />
            <UserInfoField
              title="Email Address"
              value={getAuthUser?.data?.data?.email || '-'}
            />
            <UserInfoField
              title="Whatsapp No"
              value={getAuthUser?.data?.data?.profile?.whatsapp_no || '-'}
            />
            <UserInfoField
              title="City"
              value={getAuthUser?.data?.data?.profile?.city || '-'}
            />
            <UserInfoField
              title="Country"
              value={getAuthUser?.data?.data?.profile?.country || '-'}
            />
            <UserInfoField
              title="Joining Date"
              value={moment(getAuthUser?.data?.data?.profile?.createdAt).format(
                'DD-MM-YYYY'
              )}
            />
            <UserInfoField title="Last time active" value="-" />
            <UserInfoField
              title="Referral Code"
              handleCopy={handleCopy}
              textCopyIcon={textCopyIcon}
              copied={copied}
              value={state?.userCode || 'N/A'}
            />
            <UserInfoField
              title="Referral (if Any)"
              value={getAuthUser?.data?.data?.profile?.referralCode || 'N/A'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientDetail
