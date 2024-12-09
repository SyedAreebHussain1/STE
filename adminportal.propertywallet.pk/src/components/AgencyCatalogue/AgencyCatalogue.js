import React from 'react'
import { useLocation } from 'react-router-dom'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import AgentCatalogueTable from './helpers/AgentCatalogueTable'

const AgencyCatalogue = () => {
  const location = useLocation()
  return (
    <PageContainer>
      <PageHeader
        title={`Agency Catalogue`}
        subTitle={'List of all Agency and Catalogue'}
      />
      <AgentCatalogueTable />
    </PageContainer>
  )
}

export default AgencyCatalogue
