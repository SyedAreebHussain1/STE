import React from 'react'

import PageContainer from '../../../utils/components/PageContainer'

import TokenRequestPageHead from './helpers/TokenRequestPageHead'
import TokensTable from './helpers/TokenTable'

const Token = () => {
  return (
    <>
      <PageContainer>
        <TokenRequestPageHead
          title={'Tokens Requests'}
          subTitle={'Find all of your tokens'}
        />
        <TokensTable />
      </PageContainer>
    </>
  )
}

export default Token
