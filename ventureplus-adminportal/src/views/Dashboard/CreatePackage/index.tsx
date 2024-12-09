import React, { useState } from 'react'
import { PageContainer } from '../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../utils/helpers/PageHeader/PageHeader'
import { Button } from 'antd'
import CreatePackageTable from './helpers/CreatePackageTable';
import CreatePackageCard from './helpers/CreatePackageCard'

const CreatePackage = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <React.Fragment>
            {modal && <CreatePackageCard open={modal} close={setModal} />}
            <PageContainer>
                <PageHeader
                    title="Package"
                    subTitle="Manage all your Package"
                    extra={<Button onClick={() => setModal(true)}>Add new Package</Button>}
                />
                <CreatePackageTable />
            </PageContainer>
        </React.Fragment>
    )
}

export default CreatePackage