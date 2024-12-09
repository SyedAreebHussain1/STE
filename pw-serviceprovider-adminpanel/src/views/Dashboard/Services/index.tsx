import React from 'react'
import { Button } from 'antd';
import ServicesTable from './helpers/ServicesTable';
import { PageContainer } from '../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../utils/helpers/PageHeader/PageHeader'
import { useModal } from '../../../hooks/useModal'

const Services = () => {
    return (
        <React.Fragment>
            <PageContainer>
                <PageHeader
                    title="Services"
                    subTitle="All Services"
                />
                <ServicesTable />
            </PageContainer>
        </React.Fragment>
    )
}

export default Services