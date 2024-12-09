import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import InventoryTable from './helpers/InventoryTable'
const Inventory = () => {
  return (
    <PageContainer>
      <PageHeader
        title="All Inventory"
        subTitle="Manage all the Inventory and their listing"
      />
      <InventoryTable />
    </PageContainer>
  )
}

export default Inventory
