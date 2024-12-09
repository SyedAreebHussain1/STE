import React, { useState } from 'react'
import { PageContainer } from '../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../utils/helpers/PageHeader/PageHeader'
import { Button } from 'antd'
import AddOnTable from './helpers/AddOnTable';
import AddOnModal from './helpers/AddOnModal'

const AddOn = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <React.Fragment>
            {modal && <AddOnModal open={modal} close={setModal} />}
            <PageContainer>
                <PageHeader
                    title="Add On"
                    subTitle="Manage all your Add On"
                    extra={<Button onClick={() => setModal(true)}>Add new Add On</Button>}
                />
                <AddOnTable />
            </PageContainer>
        </React.Fragment>
    )
}

export default AddOn