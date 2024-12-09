import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import CrmRequestsTable from './helpers/CrmRequestsTable'

const CrmRequest = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'Request List'}
        subTitle={'Find all of your projects'}
      />
      <CrmRequestsTable />
    </PageContainer>
  )
}

export default CrmRequest
