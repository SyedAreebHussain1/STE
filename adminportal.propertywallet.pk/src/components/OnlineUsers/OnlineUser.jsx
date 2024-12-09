import React from 'react'

import TabIndex from './Tabs/TabIndex'
import PageContainer from '../../utils/components/PageContainer'

const OnlineUser = () => {
  return (
    <>
      <PageContainer>
        {/* header start */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="pb-[20px] md:pb-[55px]">
            <h2 className="text-[18px] text-textcolor2 font-semibold">
              Online Users
            </h2>
            <p className="text-textColor">Find all of your online users</p>
          </div>
        </div>
        {/* header end*/}

        {/* Tabs start */}
        <TabIndex />
        {/* Tabs end */}
      </PageContainer>
    </>
  )
}

export default OnlineUser
