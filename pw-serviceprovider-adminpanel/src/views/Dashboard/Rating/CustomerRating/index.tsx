import React from 'react'
import { PageContainer } from '../../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../../utils/helpers/PageHeader/PageHeader'
import CustomerRatingTable from './helpers/CustomerRatingTable'

const CustomerRating = () => {
    return (
        <React.Fragment>
            <CustomerRatingTable />
        </React.Fragment>
    )
}

export default CustomerRating