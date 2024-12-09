import React, { useState } from 'react'
import { PageContainer } from '../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../utils/helpers/PageHeader/PageHeader'
import { Button } from 'antd'
import QuestionTable from './helpers/QuestionTable'
import QuestionModal from './helpers/QuestionModal'

const Question = () => {
    const [modal, setModal] = useState<boolean>(false);
    return (
        <React.Fragment>
            {modal && <QuestionModal open={modal} close={setModal} />}
            <PageContainer>
                <PageHeader
                    title="Question"
                    subTitle="Manage all your question"
                    extra={<Button onClick={() => setModal(true)}>Add new Question</Button>}
                />
                <QuestionTable />
            </PageContainer>
        </React.Fragment>
    )
}

export default Question