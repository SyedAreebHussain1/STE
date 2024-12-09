import React from 'react'
import { useLocation } from 'react-router-dom'
import PageContainer from '../../../../utils/components/PageContainer'
import PageHeader from '../../../../utils/components/PageHeader'
import UserAssignToLeadTable from './UserAssignToLeadTable'

const ViewUserAssignToLead = () => {
  const location = useLocation()
  return (
    <PageContainer>
      <PageHeader
        title={`${location?.state?.LeadName} Assign Users`}
        subTitle={'List of all assign Users and their details'}
      />
      <UserAssignToLeadTable />
    </PageContainer>
  )
}

export default ViewUserAssignToLead
