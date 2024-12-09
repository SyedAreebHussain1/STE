import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import CatalogueAgentReviewTable from './helpers/CatalogueAgentReviewsTable'

const CatalogueAgentReviews = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'Agent Review'}
        subTitle={'Search Agent Review'}
        // extra={extra}
      />
      <CatalogueAgentReviewTable />
    </PageContainer>
  )
}
export default CatalogueAgentReviews
