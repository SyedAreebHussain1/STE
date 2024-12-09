import React, { useState } from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import { Button, Tabs } from 'antd'
import addIcon from '../assest/icon/addicon.png'
import { useModal } from '../../utils/hooks/useModal'
import ManageCustomPackageTable from './helpers/ManageCustomPackageTable'
import ManageCustomPackageFeatureTable from './helpers/ManageCustomPackageFeatureTable'

const CustomPackage = () => {
  const [isAddFeatureModalVisible, toggleAddFeature] = useModal()
  const [isAddModalVisible, toggleAdd] = useModal()

  const [tabKey, setTabKey] = useState(1)
  const extra1 = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={() => {
          toggleAdd()
        }}
      >
        <img src={addIcon} alt="" />
        <span>Add new Package Plans</span>
      </Button>
    </div>
  )
  const extra2 = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={() => {
          toggleAddFeature()
        }}
      >
        <img src={addIcon} alt="" />
        <span>Add new Package Features</span>
      </Button>
    </div>
  )

  const items = [
    {
      label: 'Package Plan',
      key: '1',
      children: (
        <ManageCustomPackageTable
          isAddModalVisible={isAddModalVisible}
          toggleAdd={toggleAdd}
        />
      ),
    },
    {
      label: 'Package Features',
      key: '2',
      children: (
        <ManageCustomPackageFeatureTable
          isAddModalVisible={isAddFeatureModalVisible}
          toggleAdd={toggleAddFeature}
        />
      ),
    },
  ]
  return (
    <PageContainer>
      <PageHeader
        title="Custom Packages"
        subTitle="Manage all your custom packages"
        extra={tabKey == 1 ? extra1 : extra2}
      />
      <Tabs
        size="large"
        onChange={(e) => setTabKey(e)}
        defaultActiveKey="1"
        items={items}
      />
    </PageContainer>
  )
}

export default CustomPackage
