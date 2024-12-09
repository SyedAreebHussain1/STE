import React from 'react'
import { PageContainer } from '../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../utils/helpers/PageHeader/PageHeader'
import WalletTable from './helpers/WalletTable'

const Wallet = () => {
    return (
        <React.Fragment>
            <PageContainer>
                <PageHeader title="Request List" subTitle="Find all of your withdraw requests" />
                <WalletTable />
            </PageContainer>
        </React.Fragment>
    )
}

export default Wallet