import React from 'react'
import { useParams } from 'react-router-dom'
import AgencyReviewTable from './AgencyReviewTable'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
const AgencyReviewComponent = () => {
  const param = useParams()
  return (
    <>
      <PageContainer>
        <PageHeader
          title={'Agency Review'}
          subTitle={'All Agency Review'}
          // extra={extra}
        />
        <AgencyReviewTable id={param.id} />
      </PageContainer>
    </>
  )
}
export default AgencyReviewComponent
