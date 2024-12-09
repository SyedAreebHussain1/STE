import React from 'react'
import ELoungeUserAssignTable from './ELoungeUserAssignTable'
import PageContainer from '../../../../utils/components/PageContainer'
import PageHeader from '../../../../utils/components/PageHeader'
import { useLocation } from 'react-router-dom'

const ELoungeUserAssign = () => {
  const location = useLocation()
  return (
    <PageContainer>
      <PageHeader
        title={`${location?.state?.eLoungeName} Assign Users`}
        subTitle={'List of all assign Users and their details'}
      />
      <ELoungeUserAssignTable />
    </PageContainer>
  )
}

export default ELoungeUserAssign
