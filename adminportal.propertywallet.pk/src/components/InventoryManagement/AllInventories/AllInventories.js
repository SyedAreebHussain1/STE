import React from 'react'
import TopAllInventories from './helpers/TopAllInventories'
import { Tabs } from 'antd'
import IndividualPropertiesTab from './helpers/AllInventoriesTabs/IndividualPropertiesTab'
import ProjectTab from './helpers/AllInventoriesTabs/ProjectTab'

const AllInventories = () => {
  const items = [
    {
      label: 'Individual Properties',
      key: '1',
      children: <IndividualPropertiesTab />,
    },
    {
      label: 'Projects',
      key: '2',
      children: <IndividualPropertiesTab />,
    },
  ]
  return (
    <div className="p-[16px]">
      <TopAllInventories />
      <Tabs
        className="mt-[1%] "
        size="large"
        defaultActiveKey="1"
        items={items}
      />
    </div>
  )
}

export default AllInventories
