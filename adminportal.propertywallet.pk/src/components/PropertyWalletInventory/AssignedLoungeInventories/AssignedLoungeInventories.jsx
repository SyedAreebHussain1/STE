import React from 'react'

import PageContainer from '../../../utils/components/PageContainer'

import AssignedLoungeTable from './helpers/AssignedLoungeTable'
import PageHeader from '../../../utils/components/PageHeader'

const AssignedLoungeInventories = () => {
  return (
    <>
      <PageContainer>
        <PageHeader
          title={'Lounge inventories'}
          subTitle={'All assigned inventories to lounge'}
        />
        <AssignedLoungeTable />
      </PageContainer>
    </>
  )
}

export default AssignedLoungeInventories
