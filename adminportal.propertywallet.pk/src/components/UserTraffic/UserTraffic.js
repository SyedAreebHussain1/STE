import { Tabs } from 'antd'
import React from 'react'
import StepInventoryAnalysis from './helpers/StepsInventoryAnalysis/StepInventoryAnalysis'
import StepUserAnaysis from './helpers/StepsUserAnalysis/StepUserAnaysis'
import StepAgencyAnalysis from './helpers/StepsAgencyAnalysis/StepAgencyAnalysis'

const UserTraffic = () => {
  const items = [
    {
      label: 'User Analysis',
      key: '1',
      children: <StepUserAnaysis />,
    },
    {
      label: 'Inventories Analysis',
      key: '2',
      children: <StepInventoryAnalysis />,
    },
    {
      label: 'Agencies Analysis',
      key: '3',
      children: <StepAgencyAnalysis />,
    },
  ]
  return (
    <>
      <Tabs
        className="mt-[1%] "
        size="large"
        defaultActiveKey="1"
        items={items}
      />
    </>
  )
}

export default UserTraffic
