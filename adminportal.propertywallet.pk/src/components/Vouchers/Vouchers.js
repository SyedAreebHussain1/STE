import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import VouchersTable from './helpers/VouchersTable'

const Vouchers = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Vouchers"
        subTitle="Manage all your Vouchers"
        // extra={extra}
      />
      <VouchersTable />
    </PageContainer>
  )
}

export default Vouchers
