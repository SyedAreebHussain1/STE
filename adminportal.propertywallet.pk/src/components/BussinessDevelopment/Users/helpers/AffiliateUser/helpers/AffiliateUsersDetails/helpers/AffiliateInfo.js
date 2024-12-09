import { Button, Divider, Input } from 'antd'
import Status from '../../../../../../../../utils/components/Status'
import UserInfoField from '../../../../../../../AppUser/UserDetail/heplers/UserInfoField'
import moment from 'moment'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ReasonModal from './ReasonModal'
import { useModal } from '../../../../../../../../utils/hooks/useModal'
import { activeOrDeactiveBDUserApi } from '../../../../../../../../redux/api/BDUsers'

const AffiliateInfo = () => {
  const AffiliateDetails = useSelector((state) => state.AffiliateDetails)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onSuccess() {
    navigate(-1)
  }

  function activeOrDeactiveHandler() {
    activeOrDeactiveBDUserApi(
      dispatch,
      AffiliateDetails?.data?.data?.bdUserResult?.id,
      onSuccess
    )
  }

  return (
    <>
      <div className="bg-white rounded-lg row-span-2">
        <div className="pt-[20px] px-[24px] pb-[58px]">
          <div className="flex justify-between items-center pb-5">
            <h4 className="text-[15px] text-[#3D4350]">Basic Details</h4>
            {AffiliateDetails?.data?.data?.bdUserResult?.isActive && (
              <Status type="active" />
            )}
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
              <img
                src={
                  AffiliateDetails?.data?.data?.bdUserResult?.freeLancerProfile
                    ?.profileUrl || 'https://placehold.co/90x90'
                }
                alt=""
                className="h-full object-fill"
              />
            </div>
            <span>
              <h3 className="text-[23px] text-[#1F2228] font-semibold">
                {AffiliateDetails?.data?.data?.bdUserResult?.fullName}
              </h3>
            </span>
            <span className="text-[15px] px-3 py-2 border border-[#C2C6CE] !rounded-full">
              {AffiliateDetails?.data?.data?.bdUserResult?.bdRole?.title}
            </span>
          </div>
          <UserInfoField title="" />
          <Divider />
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
              <UserInfoField
                title="Refferal Code"
                value={AffiliateDetails?.data?.data?.bdUserResult?.refCode}
              />
              <UserInfoField
                title="Joining Data"
                value={moment(
                  AffiliateDetails?.data?.data?.bdUserResult?.createdAt
                ).format('DD MMMM.YYYY')}
              />
              <UserInfoField
                title="Phone No"
                value={AffiliateDetails?.data?.data?.bdUserResult?.phone}
              />
              <div>
                <span className="text-[#667085] text-xs font-medium">
                  Email Address
                </span>
                <div>
                  <span>
                    {' '}
                    <h4 className="text-[#1F2228] break-words">
                      {AffiliateDetails?.data?.data?.bdUserResult?.email}
                    </h4>
                  </span>{' '}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              // backgroundColor: "green",
              // width: "100%",
            }}
          >
            {AffiliateDetails?.data?.data?.bdUserResult?.isActive ? (
              <Button
                className="text-sm px-[20px] py-[14px] rounded-[34px] border-2 border-[#E23442] text-[#E23442] mt-[38px] flex items-center h-[41px]"
                onClick={activeOrDeactiveHandler}
              >
                Deactive
              </Button>
            ) : (
              <Button
                className="text-sm px-[20px] py-[14px] rounded-[34px] border-2 border-[#34ACE0] text-[#34ACE0] bg-[#34ACE00D] mt-[38px] flex items-center h-[41px]"
                // onClick={activeOrDeactiveHandler}
                disabled={true}
              >
                Deactivated
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AffiliateInfo
