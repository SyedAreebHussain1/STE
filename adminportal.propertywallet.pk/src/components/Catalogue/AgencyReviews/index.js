import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import CatalogueAgencyReviewsTable from './helpers/CatalogueAgencyReviewsTable'

const CatalogueAgencyReviews = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'Agency Review'}
        subTitle={'Search Agency Review'}
        // extra={extra}
      />
      <CatalogueAgencyReviewsTable />
    </PageContainer>
  )
}
export default CatalogueAgencyReviews
