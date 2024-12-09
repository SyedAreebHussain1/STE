import React from 'react'
import PageHeader from '../../../utils/components/PageHeader'
import PageContainer from '../../../utils/components/PageContainer'
import AllTicketTable from './helpers/AllTicketTable'

const AllTicket = () => {
  return (
    <PageContainer>
      <PageHeader title={'Ticket'} subTitle={'Manage all ticket'} />
      <AllTicketTable />
    </PageContainer>
  )
}

export default AllTicket
