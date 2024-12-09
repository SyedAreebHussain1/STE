import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import SaleOrderTabs from './helpers/SaleOrderTabs'

const SaleOrder = () => {
  return (
    <>
      <PageContainer>
        <PageHeader
          title={'Sale Order'}
          subTitle={'Check your all inventory Sales Order'}
        />
        <SaleOrderTabs />
      </PageContainer>
    </>
  )
}

export default SaleOrder
