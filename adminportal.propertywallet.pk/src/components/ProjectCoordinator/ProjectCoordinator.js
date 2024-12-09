import React from 'react'
import { Button } from 'antd'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import addIcon from '../assest/icon/addicon.png'
import { useModal } from '../../utils/hooks/useModal'
import ProjectCoordinatorTable from './helpers/ProjectCoordinatorTable'

const ProjectCoodinator = () => {
  const [isAddModalVisible, toggle] = useModal()
  const extra = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={toggle}
      >
        <img src={addIcon} alt="" />
        <span>New Users</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      <PageHeader title={'Users'} subTitle={'Manage all Users'} extra={extra} />
      <ProjectCoordinatorTable
        isAddModalVisible={isAddModalVisible}
        toggle={toggle}
      />
    </PageContainer>
  )
}

export default ProjectCoodinator
