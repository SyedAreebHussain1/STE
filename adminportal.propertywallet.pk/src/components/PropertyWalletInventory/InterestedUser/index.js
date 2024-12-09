import React from 'react'
import InterestedUserTable from './helpers/InterestedUserTable'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'

const InterestedUser = () => {
  return (
    <>
      <PageContainer>
        <PageHeader
          title={'Interested User'}
          subTitle={'Details of Interested User'}
        />
        <InterestedUserTable />
      </PageContainer>
    </>
  )
}

export default InterestedUser
