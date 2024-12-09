import { Tabs } from 'antd'
import React from 'react'

import BankTransfers from './BankTransfers/BankTransfers'
import CashRequests from './CashRequests/CashRequests'

const TabIndex = () => {
  const items = [
    {
      label: 'Cash Requests',
      key: '1',
      children: <CashRequests />,
    },
    {
      label: 'Bank Transfer Requests',
      key: '2',
      children: <BankTransfers />,
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

export default TabIndex
