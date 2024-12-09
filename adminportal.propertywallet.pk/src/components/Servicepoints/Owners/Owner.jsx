import React from 'react'

import PageContainer from '../../../utils/components/PageContainer'

import OwnerRequestPageHead from './helpers/OwnerRequestPageHead'
import OwnersTable from './helpers/OwnerTable'
import { useModal } from '../../../utils/hooks/useModal'
import AddOwnerModal from './helpers/AddOwnerModal'
import AssignOwnerModal from './helpers/AssignOwnerModal'

const Owner = () => {
  const [isAddModalVisible, toggleAdd] = useModal()
  const [isAssignModalVisible, toggleAssign] = useModal()
  return (
    <>
      <PageContainer>
        <AddOwnerModal visible={isAddModalVisible} toggleAdd={toggleAdd} />
        <AssignOwnerModal
          visible={isAssignModalVisible}
          toggleAdd={toggleAssign}
        />
        <OwnerRequestPageHead
          title={"Investor's Owners"}
          subTitle={"Details of All Investor's Owners"}
          onClick={toggleAdd}
          onClickAssign={toggleAssign}
        />
        <OwnersTable />
      </PageContainer>
    </>
  )
}

export default Owner
