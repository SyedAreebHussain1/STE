import React, { useState } from 'react'
import { PageContainer } from '../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../utils/helpers/PageHeader/PageHeader'
import { Button } from 'antd'
import ChatperTable from './helpers/ChapterTable'
import ChapterModal from './helpers/ChapterModal'

const Chatper = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <React.Fragment>
            {modal && <ChapterModal open={modal} close={setModal} />}
            <PageContainer>
                <PageHeader
                    title="Chapter"
                    subTitle="Manage all your chapter"
                    extra={<Button onClick={() => setModal(true)}>Add new Chapter</Button>}
                />
                <ChatperTable />
            </PageContainer>
        </React.Fragment>
    )
}

export default Chatper