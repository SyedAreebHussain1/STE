import React from 'react'
import backimg from '../../../assest/icon/back.png'
import addIcon from '../../../assest/icon/addicon.png'
import MeetingsDetailsTable from './helpers/MeetingsDetailsTable'
import { useModal } from '../../../../utils/hooks/useModal'
import PageContainer from '../../../../utils/components/PageContainer'
import PageHeader from '../../../../utils/components/PageHeader'
import AddMeetingDetailsModal from './helpers/AddMeetingDetailsModal'
import { Button } from 'antd'

const ManageMeetingsDetails = () => {
  const [addModal, toggle] = useModal()
  return (
    <PageContainer>
      <PageHeader
        title={'Manage Meetings'}
        subTitle={'Manage all the freelancers and their meetings'}
        route={-1}
        titleHeadBtn={backimg}
        extra={
          <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={() => {
              toggle()
            }}
          >
            <img src={addIcon} alt="" />
            <button>Add Custom</button>
          </Button>
        }
      />
      {addModal && (
        <AddMeetingDetailsModal visible={addModal} toggle={toggle} />
      )}
      <MeetingsDetailsTable />
    </PageContainer>
  )
}

export default ManageMeetingsDetails
