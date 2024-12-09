import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import MarketingRequirementTable from './helpers/MarketingRequirementsTable'

const MarketingRequirements = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'Marketing Requirement'}
        subTitle={'List of all Requirement'}
      />
      <MarketingRequirementTable />
    </PageContainer>
  )
}
export default MarketingRequirements
