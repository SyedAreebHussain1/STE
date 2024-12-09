import React from 'react'
import SurveyTable from './helpers/SurvayTable'
import PageHeader from '../../utils/components/PageHeader'
import PageContainer from '../../utils/components/PageContainer'
import { Button, Tabs } from 'antd'
import { useModal } from '../../utils/hooks/useModal'
import addIcon from '../assest/icon/addicon.png'

const Survey = ({ isAddModalVisible, toggle, current }) => {
  return (
    <>
      <SurveyTable
        isAddModalVisible={isAddModalVisible}
        toggle={toggle}
        current={current}
      />
    </>
  )
}
export default Survey
