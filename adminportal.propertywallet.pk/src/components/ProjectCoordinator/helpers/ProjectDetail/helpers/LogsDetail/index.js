import React from 'react'
import backimg from '../../../../../assest/icon/back.png'
import PageContainer from '../../../../../../utils/components/PageContainer'
import PageHeader from '../../../../../../utils/components/PageHeader'
import LogsDetailTable from './helpers/LogsDetailTable'

const LogsDetail = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'Logs'}
        subTitle={'Manage All Logs'}
        route={-1}
        titleHeadBtn={backimg}
      />
      <LogsDetailTable />
    </PageContainer>
  )
}

export default LogsDetail
