import React from 'react'
import PageContainer from '../../utils/components/PageContainer'

import { Button } from 'antd'
import LeadsPageHead from './helpers/LeadsPageHead'
import { useModal } from '../../utils/hooks/useModal'
import addIcon from '../../components/assest/icon/addicon.png'
import LeadsTable from './helpers/LeadsTable'
import AddNewLeadsModal from './helpers/AddNewLeadsModal'

const Leads = () => {
  const [isAddModalVisible, toggleAdd] = useModal()
  const handleOnClick = () => {
    toggleAdd()
  }
  const addNewLeads = (
    <div>
      {' '}
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={handleOnClick}
      >
        {' '}
        <img src={addIcon} alt="" /> <span>Add New Lead</span>{' '}
      </Button>
    </div>
  )
  return (
    <>
      <AddNewLeadsModal visible={isAddModalVisible} toggleAdd={toggleAdd} />
      <PageContainer>
        <LeadsPageHead
          title={'Leads'}
          subTitle={'Find all of your  leads'}
          toggleAdd={toggleAdd}
          addNewLeads={addNewLeads}
        />
        <LeadsTable handleOnClick={handleOnClick} />
      </PageContainer>
    </>
  )
}

export default Leads
