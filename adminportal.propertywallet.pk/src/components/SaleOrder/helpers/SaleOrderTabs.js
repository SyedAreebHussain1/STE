import { Tabs } from 'antd'
import React from 'react'
import ProjectTab from './SaleOrderTabs/ProjectTab/ProjectTab'
import ProductTab from './SaleOrderTabs/ProductTab/ProductTab'

const SaleOrderTabs = () => {
  const items = [
    {
      label: 'Projects',
      key: '1',
      children: <ProjectTab />,
    },
    {
      label: 'Products',
      key: '2',
      children: <ProductTab />,
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

export default SaleOrderTabs
