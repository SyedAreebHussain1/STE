import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import SubscribersTable from './helpers/SubscribersTable'

const Subscribers = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Subscribers"
        subTitle="Details and activities of the Subscribers"
      />
      <SubscribersTable />
    </PageContainer>
  )
}

export default Subscribers
