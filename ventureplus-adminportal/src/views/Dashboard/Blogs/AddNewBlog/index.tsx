import React, { useEffect, useState } from 'react'
import { PageContainer } from '../../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../../utils/helpers/PageHeader/PageHeader'
import NewBlogScreen from './helpers/NewBlogScreen'
import BeePluginStarter from './helpers/BeePluginStarter'

const NewBlog = () => {
    const [htmlString, setHtmlString] = useState<string>('')
    return (
        <React.Fragment>
            <PageContainer>
                <PageHeader
                    title="Blog"
                    subTitle="Add New Blog"

                />
                <NewBlogScreen htmlString={htmlString} />
                <BeePluginStarter setHtmlString={setHtmlString} />
            </PageContainer>
        </React.Fragment>
    )
}

export default NewBlog