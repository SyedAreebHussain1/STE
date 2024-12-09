import React, { useState } from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import ListingsTable from './helpers/ListingsTable'
import AddListingsModal from './helpers/AddListingsModal'
import { useModal } from '../../../utils/hooks/useModal'
import { Button } from 'antd'
import addIcon from '../../../components/assest/icon/addicon.png'
import EditListingsModal from './helpers/EditListingsModal/EditListingsModal'

const Listings = () => {
  const [isAddModalVisible, toggleAdd] = useModal()
  const [isEditModalVisible, toggleEdit] = useModal()
  const [selectedListingId, setSelectedListingId] = useState(null)

  function setHotListingIdToState(id) {
    setSelectedListingId(id)
  }
  return (
    <PageContainer>
      <AddListingsModal
        isAddModalVisible={isAddModalVisible}
        toggleAdd={toggleAdd}
      />
      <EditListingsModal
        isAddModalVisible={isEditModalVisible}
        toggleAdd={toggleEdit}
        setHotListingIdToState={setHotListingIdToState}
        selectedListingId={selectedListingId}
      />

      <PageHeader
        title="Hot Listings"
        subTitle="Find all of your projects"
        extra={
          <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={toggleAdd}
          >
            <img src={addIcon} alt="" />
            <button>Add new Listings</button>
          </Button>
        }
      />
      <ListingsTable
        modal={{ toggleAdd, toggleEdit }}
        setHotListingIdToState={setHotListingIdToState}
      />
    </PageContainer>
  )
}

export default Listings
