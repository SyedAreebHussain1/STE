import React from 'react'
import { Button } from 'antd'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import addIcon from '../assest/icon/addicon.png'
import MilestoneTable from './helpers/MilestoneTable'
import { useModal } from '../../utils/hooks/useModal'

const Milestone = () => {
  const [isAddModalVisible, toggle] = useModal()
  const extra = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={toggle}
      >
        <img src={addIcon} alt="" />
        <span>Add Milestone</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      <PageHeader
        title={'Milestones'}
        subTitle={'Manage all milestones'}
        extra={extra}
      />
      <MilestoneTable isAddModalVisible={isAddModalVisible} toggle={toggle} />
    </PageContainer>
  )
}

export default Milestone
