import React from 'react'
import { Button } from 'antd'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import couldIcon from '../../assest/icon/cloud.png'
import AgenciesDetailTable from './helpers/AgenciesDetailTable'

const AgenciesDetail = () => {
  const exportCould = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        // onClick={handleOnClick}
      >
        <img style={{ filter: 'saturate(3)' }} src={couldIcon} alt="" />
        <span>Export</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      <PageHeader
        title={'All Agencies'}
        subTitle={'Details of All Agencies'}
        extra={exportCould}
      />
      <AgenciesDetailTable />
    </PageContainer>
  )
}

export default AgenciesDetail
