import React from 'react'
import backimg from '../../../assest/icon/back.png'
import addIcon from '../../../assest/icon/addicon.png'
// import MeetingsDetailsTable from './helpers/MeetingsDetailsTable'
import PageContainer from '../../../../utils/components/PageContainer'
import PageHeader from '../../../../utils/components/PageHeader'
// import AddMeetingDetailsModal from './helpers/AddMeetingDetailsModal'
import { Button } from 'antd'
import ProjectDetailTable from './helpers/ProjectDetailTable'
import { useLocation } from 'react-router-dom'

const ProjectDetail = () => {
  const { state } = useLocation()
  const { data } = state
  return (
    <PageContainer>
      <PageHeader
        title={data?.fullName && data?.fullName}
        subTitle={'Manage Project List'}
        route={-1}
        titleHeadBtn={backimg}
      />
      <ProjectDetailTable />
    </PageContainer>
  )
}

export default ProjectDetail
