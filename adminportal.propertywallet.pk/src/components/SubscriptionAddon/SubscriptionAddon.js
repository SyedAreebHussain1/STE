import React from 'react'
import PageHeader from '../../utils/components/PageHeader'
import { Button } from 'antd'
import addIcon from '../../components/assest/icon/addicon.png'
import PageContainer from '../../utils/components/PageContainer'
import AddonsMain from './helpers/AddonsMain'
import { useModal } from '../../utils/hooks/useModal'

const SubscriptionAddon = () => {
  const [addModal, toggleAddModal] = useModal()
  const extra = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={() => {
          toggleAddModal()
        }}
      >
        <img src={addIcon} alt="" />
        <span>Add New Add-On</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      <PageHeader
        title={'Add- ons'}
        subTitle={'Manage your mobile app Add-Ons'}
        extra={extra}
        className="bg-white pt-6 pl-6 pr-6"
      />
      <AddonsMain addModal={addModal} toggleAddModal={toggleAddModal} />
    </PageContainer>
  )
}

export default SubscriptionAddon
