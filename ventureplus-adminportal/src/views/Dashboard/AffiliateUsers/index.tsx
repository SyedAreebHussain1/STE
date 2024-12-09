import React, { useState } from 'react'
import { PageContainer } from '../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../utils/helpers/PageHeader/PageHeader'
import { Button } from 'antd'
import TopicTable from './helpers/AffiliateTable'
import TopicModal from './helpers/AffiliateModal'

const AffiliateUsers = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <React.Fragment>
            {modal && <TopicModal open={modal} close={setModal} />}
            <PageContainer>
                <PageHeader
                    title="Affiliate Users"
                    subTitle="Manage all your affiliate users"
                    extra={<Button onClick={() => setModal(true)}>Add new Affiliate User</Button>}
                />
                <TopicTable />
            </PageContainer>
        </React.Fragment>
    )
}

export default AffiliateUsers