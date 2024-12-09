import React from 'react'

import PageContainer from '../../../utils/components/PageContainer'

import InvestorRequestPageHead from './helpers/InvestorRequestPageHead'
import InvestorsTable from './helpers/InvestorTable'
import { useModal } from '../../../utils/hooks/useModal'
import AddInvestorModal from './helpers/AddInvestorModal'

const Investor = () => {
  const [isAddModalVisible, toggleAdd] = useModal()
  return (
    <>
      <PageContainer>
        <AddInvestorModal visible={isAddModalVisible} toggleAdd={toggleAdd} />
        <InvestorRequestPageHead
          title={'Investors Requests'}
          subTitle={'Find all of your investors'}
          onClick={toggleAdd}
        />
        <InvestorsTable />
      </PageContainer>
    </>
  )
}

export default Investor
