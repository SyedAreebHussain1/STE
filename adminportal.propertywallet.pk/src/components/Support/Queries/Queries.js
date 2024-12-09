import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import QueriesPageHead from './heplers/QueriesPageHead'
import QueriesTable from './heplers/QueriesTable'

const Queries = () => {
  return (
    <PageContainer>
      <QueriesPageHead title={'Queries'} subTitle={'Find all of Queries'} />
      <QueriesTable />
    </PageContainer>
  )
}

export default Queries
