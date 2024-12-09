import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import { Tabs } from 'antd'
import ListingsApprovals from './Tabs/ListingsApprovals/ListingsApprovals'
import HotListingsApprovals from './Tabs/HotListingsApprovals/helpers/HotListingsApprovalsTable'

const Listings = () => {
  const items = [
    {
      label: 'Listings',
      key: '1',
      children: <ListingsApprovals />,
    },
    {
      label: 'Hot Listings',
      key: '2',
      children: <HotListingsApprovals />,
    },
  ]
  return (
    <PageContainer>
      <PageHeader
        title="Hot Listings/Listings Approvals"
        subTitle="Find all listings approval"
      />
      <Tabs size="large" defaultActiveKey="1" items={items} />
    </PageContainer>
  )
}

export default Listings
