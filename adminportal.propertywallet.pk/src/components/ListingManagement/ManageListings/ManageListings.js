import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import { Tabs } from 'antd'
import GeneralListings from './Tabs/GeneralListings/GeneralListings'
import HotListings from './Tabs/HotListings/HotListings'

const ManageListings = () => {
  const items = [
    {
      label: 'General Listings',
      key: '1',
      children: <GeneralListings />,
    },
    {
      label: 'Hot Listings',
      key: '2',
      children: <HotListings />,
    },
  ]
  return (
    <PageContainer>
      <PageHeader
        title="Listing Management"
        subTitle="Manage all the freelancers and their Listings"
      />
      <Tabs size="large" defaultActiveKey="1" items={items} />
    </PageContainer>
  )
}

export default ManageListings
