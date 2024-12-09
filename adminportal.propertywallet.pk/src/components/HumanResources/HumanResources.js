import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import HumanResourcesTable from './helpers/HumanResourcesTable'
import { Button } from 'antd'
import cloudIcon from '../../components/assest/icon/cloud.png'
import { downloadExcelFile } from '../../utils/utils'
import { useSelector } from 'react-redux'

const HumanResources = () => {
  const getAllFreelancersForHR = useSelector(
    (state) => state.getAllFreelancersForHR
  )

  return (
    <PageContainer>
      <PageHeader
        title={'Human Resources'}
        subTitle={'Manage all the freelancers and their subscription'}
        extra={
          <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={() => {
              downloadExcelFile(
                getAllFreelancersForHR?.data?.data?.items.map((item) => {
                  return {
                    id: item?.id,
                    freelancerName: item?.freeLancerProfile?.name,
                    address: item?.freeLancerProfile?.address,
                    referralCode: item?.refCode,
                    totalSubscription: item?.subscriberCount,
                    signupCount: item?.signupCount,
                    phoneNo: item?.phone,
                    email: item?.email,
                    isVerified: item?.isVerified,
                    isSuspendid: item?.isSuspend,
                  }
                }),
                'freelancers'
              )
            }}
            disabled={
              getAllFreelancersForHR?.data?.data?.items?.length > 0
                ? false
                : true
            }
          >
            <img src={cloudIcon} alt="" />
            <button>Export</button>
          </Button>
        }
      />
      <HumanResourcesTable />
    </PageContainer>
  )
}

export default HumanResources
