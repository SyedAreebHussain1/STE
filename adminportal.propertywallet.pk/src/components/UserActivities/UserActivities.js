import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import { Button } from 'antd'
import couldIcon from '../../components/assest/icon/cloud.png'
import UserActivitiesTable from './helpers/UserActivitiesTable'
const UserActivities = () => {
  const exportExcel = (
    <div>
      <Button className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2">
        <img style={{ filter: 'saturate(3)' }} src={couldIcon} alt="" />
        <span>Export</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      <PageHeader
        title={'User Activity'}
        subTitle={'Detail of All Mobile Users'}
        // extra={exportExcel}
      />
      <UserActivitiesTable />
    </PageContainer>
  )
}

export default UserActivities
