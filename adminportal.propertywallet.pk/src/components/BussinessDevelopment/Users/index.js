import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
// import HumanResourcesTable from './helpers/HumanResourcesTable'
import { Button, Tabs } from 'antd'
import cloudIcon from '../../../components/assest/icon/cloud.png'
import { downloadExcelFile } from '../../../utils/utils'
import { useSelector } from 'react-redux'
import AffiliateUsers from './helpers/AffiliateUser/AffiliateUser'
import Managers from './helpers/Managers/Managers'
import AddBDUserModal from './helpers/AddBDUserModal'
import { useModal } from '../../../utils/hooks/useModal'
import addIcon from '../../assest/icon/addicon.png'

const Salaries = () => {
  const items = [
    {
      label: 'Affiliate Users',
      key: '1',
      children: <AffiliateUsers />,
    },
    {
      label: 'Managers',
      key: '2',
      children: <Managers />,
    },
  ]
  const [isAddModalVisible, toggle] = useModal()
  const extra = (
    <div>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={toggle}
      >
        <img src={addIcon} alt="" />
        <span>New Users</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      {isAddModalVisible && (
        <AddBDUserModal visible={isAddModalVisible} toggle={toggle} />
      )}
      <PageHeader
        title={'Users'}
        subTitle={'All Bussiness Development Users'}
        extra={extra}
      />
      <Tabs size="large" defaultActiveKey="1" items={items} />
    </PageContainer>
  )
}
export default Salaries
