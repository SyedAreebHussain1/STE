import React from 'react'
import ImgLogo from '../../../../assest/img/hello.png'
import UserInfoField from './UserInfoField'
import LeadGenerated from '../../../../assest/icon/leadGeneration.png'
import TotalReferal from '../../../../assest/icon/totalReferal.png'
import QuotationsCreated from '../../../../assest/icon/noOfStaff.png'
import SaleOrderCreated from '../../../../assest/icon/saleOrderCreated.png'
import BrochureCreated from '../../../../assest/icon/brocherCreated.png'
import PostCreated from '../../../../assest/icon/postCreated.png'
import BusinessCard from '../../../../assest/icon/business.png'
import PaymentPlanCreated from '../../../../assest/icon/paymentPlanCreated.png'

const Activities = () => {
  return (
    <div className="bg-white rounded-lg h-[474px]">
      <div className="pt-[20px] px-[24px] pb-[58px]">
        <div className="flex justify-between items-center pb-[40px]">
          <h4 className="text-[15px] text-[#3D4350]">All Activities</h4>
        </div>
        <div className="flex justify-between">
          <div className=" flex flex-col justify-between gap-[37px]">
            <UserInfoField
              title="Leads Generated"
              value="253"
              img={LeadGenerated}
            />
            <UserInfoField
              title="Payment plans Created"
              value="150"
              img={PaymentPlanCreated}
            />
          </div>
          <div className=" flex flex-col justify-between gap-[37px]">
            <UserInfoField
              title="Total Referrals"
              value="25"
              img={TotalReferal}
            />
            <UserInfoField
              title="Brochure Created"
              value="60"
              img={BrochureCreated}
            />
          </div>
          <div className=" flex flex-col justify-between gap-[37px]">
            <UserInfoField
              title="Quotations Created"
              value="08"
              img={QuotationsCreated}
            />
            <UserInfoField title="Post Created" value="125" img={PostCreated} />
          </div>
          <div className=" flex flex-col justify-between gap-[37px]">
            <UserInfoField
              title="Sale Order Created"
              value="02"
              img={SaleOrderCreated}
            />
            <UserInfoField
              title="Business Card"
              value="02"
              img={BusinessCard}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
