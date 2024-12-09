import React from 'react'
import RolesTable from './helpers/RolesTable'
import PageHeader from '../../../utils/components/PageHeader'
import PageContainer from '../../../utils/components/PageContainer'

const Roles = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'Roles'}
        subTitle={'Control Access and Responsibilities'}
      />
      <RolesTable />
    </PageContainer>
  )
}

export default Roles
