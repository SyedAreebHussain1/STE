import React from 'react'
import { useLocation } from 'react-router-dom'
import PageContainer from '../../../../utils/components/PageContainer'
import ViewDetailsTable from './heplers/ViewDetailsTable'
import PageHeadViewDetails from './heplers/PageHeadViewDetails'
// import PageHeader from '../../../../utils/components/PageHeader'
// import viewdetails from '../../../assest/img/viewdetails.png'

const ViewDetails = () => {
  const { state } = useLocation()
  return (
    <div>
      <PageContainer>
        <PageHeadViewDetails
          stateGetAllProjects={state.project}
          title={'Project Details'}
        />
        <ViewDetailsTable />
      </PageContainer>
    </div>
  )
}

export default ViewDetails
