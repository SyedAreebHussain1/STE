import React from 'react'
import TicketAppUserTable from './helpers/TicketAppUserTable'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'

const TicketAppUser = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'App User Ticket'}
        subTitle={'Manage all app user ticket'}
      />
      <TicketAppUserTable />
    </PageContainer>
  )
}

export default TicketAppUser
