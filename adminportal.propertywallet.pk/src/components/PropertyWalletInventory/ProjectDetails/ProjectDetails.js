import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import ProjectDetailsTabel from './helpers/ProjectDetailsTabel'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

// icon
import addIcon from '../../../components/assest/icon/addicon.png'
const ProjectDetails = () => {
  const navigate = useNavigate()
  const handleNavigatee = () => {
    navigate('/property-wallet-inventory/project')
  }
  const extra = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={handleNavigatee}
      >
        <img src={addIcon} alt="" />
        <span>Add new Project</span>
      </Button>
    </div>
  )
  return (
    <div>
      <PageContainer>
        <PageHeader
          title={'All Project'}
          subTitle={'Find all of your projects'}
          extra={extra}
        />
        <ProjectDetailsTabel />
      </PageContainer>
    </div>
  )
}

export default ProjectDetails
