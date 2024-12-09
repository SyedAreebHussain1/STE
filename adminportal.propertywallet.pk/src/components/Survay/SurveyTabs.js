import { Button, Tabs } from 'antd'
import React, { useState } from 'react'
import Survey from './Survey'
import InterestedSurveys from './InterestedSurveys'
import PageContainer from '../../utils/components/PageContainer'
import { useModal } from '../../utils/hooks/useModal'
import addIcon from '../assest/icon/addicon.png'
import PageHeader from '../../utils/components/PageHeader'

const SurveyTabs = () => {
  const [isAddModalVisible, toggle] = useModal()
  const [current, setCurrent] = useState(1)
  const extra = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={toggle}
      >
        <img src={addIcon} alt="" />
        <span>Add Survey</span>
      </Button>
    </div>
  )
  const items = [
    {
      label: 'Surveys',
      key: '1',
      children: (
        <Survey
          isAddModalVisible={isAddModalVisible}
          toggle={toggle}
          current={current}
        />
      ),
    },
    {
      label: 'Surveys Logs',
      key: '2',
      children: <InterestedSurveys current={current} />,
    },
  ]
  return (
    <PageContainer>
      {current == 1 && (
        <PageHeader
          title={'Survey'}
          subTitle={'Manage all Survey'}
          extra={extra}
        />
      )}
      {current == 2 && (
        <PageHeader title={'Survey'} subTitle={'Manage all Survey'} />
      )}
      <Tabs
        className="mt-[1%] "
        size="large"
        defaultActiveKey="1"
        items={items}
        onChange={(e) => setCurrent(e)}
      />
    </PageContainer>
  )
}

export default SurveyTabs
