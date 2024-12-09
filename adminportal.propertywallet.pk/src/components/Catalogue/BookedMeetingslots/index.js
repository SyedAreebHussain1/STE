import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import CatalogueBookedMeetingslotsTable from './helpers/CatalogueBookedMeetingslotsTable'

const CatalogueBookedMeetingslots = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'Booked Meeting slots'}
        subTitle={'Search Booked Meeting slots'}
        // extra={extra}
      />
      <CatalogueBookedMeetingslotsTable />
    </PageContainer>
  )
}
export default CatalogueBookedMeetingslots
