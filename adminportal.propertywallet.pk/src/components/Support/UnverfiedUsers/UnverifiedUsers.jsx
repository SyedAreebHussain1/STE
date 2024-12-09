import React from 'react'

import PageContainer from '../../../utils/components/PageContainer'

import UnverifiedUsersPageHead from './helpers/UnverifiedUsersPageHead'
import UnverifiedUsersTable from './helpers/UnverifiedUsersTable'
import PageHeader from '../../../utils/components/PageHeader'
import { Button } from 'antd'
import couldIcon from '../../assest/icon/cloud.png'
import { downloadExcelFile } from '../../../utils/utils'
import { useSelector } from 'react-redux'
import moment from 'moment'

const UnverfiedUsers = () => {
  const getAllUnverifiedUsers = useSelector(
    (state) => state.getAllUnverifiedUsers
  )
  const handleOnClick = () => {
    // toggleAdd()
    downloadExcelFile(
      getAllUnverifiedUsers?.data?.data?.items?.map((item) => {
        return {
          agency: item?.profile?.agency?.agencyName,
          name: item?.profile?.fullName,
          phoneNo: item?.phone,
          email: item?.email,
          verficationcode: item?.verificationCode,
          joiningDate: moment(item.createdAt).format('DD-MM-YYYY'),
          joiningTime: moment(item.createdAt).format('h:mm A'),
        }
      }),
      'unverifiedUsers'
    )
  }
  const exportCould = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={handleOnClick}
        disabled={
          getAllUnverifiedUsers?.data?.data?.items?.length > 0 ? false : true
        }
      >
        <img style={{ filter: 'saturate(3)' }} src={couldIcon} alt="" />
        <span>Export</span>
      </Button>
    </div>
  )
  return (
    <>
      <PageContainer>
        <PageHeader
          title={'Unverified Users'}
          subTitle={'Find all of unverified users'}
          extra={exportCould}
        />
        <UnverifiedUsersTable />
      </PageContainer>
    </>
  )
}

export default UnverfiedUsers
