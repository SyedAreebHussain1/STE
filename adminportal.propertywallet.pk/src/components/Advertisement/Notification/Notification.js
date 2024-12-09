import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import NotificationTable from './helpers/NotificationTable'

const Notification = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Notifications"
        subTitle="Seemlessly Integrating Push Notications Settings"
      />
      <NotificationTable />
    </PageContainer>
  )
}

export default Notification
