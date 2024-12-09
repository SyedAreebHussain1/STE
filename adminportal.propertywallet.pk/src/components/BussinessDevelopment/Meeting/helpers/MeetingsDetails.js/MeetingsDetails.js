import React from 'react'
import backimg from '../../../../assest/icon/back.png'
import addIcon from '../../../../assest/icon/addicon.png'
import { useModal } from '../../../../../utils/hooks/useModal'
import PageContainer from '../../../../../utils/components/PageContainer'
import PageHeader from '../../../../../utils/components/PageHeader'
import { Button } from 'antd'
import AllMeetingsDetailsTable from './helpers/AllMeetingsDetailsTable'
import AddMeetingDetailsBDModal from './helpers/AddMeetingsDetailsModal'
import AllMeetingsDetailsBDTable from './helpers/AllMeetingsDetailsTable'
import AssignTeamMemberModal from './helpers/AssignTeamMemberModal'

const MeetingsBDDetails = () => {
  const [addModal, toggle] = useModal()
  const [toggleAddTeamMember, toggleTeamMember] = useModal()

  return (
    <PageContainer>
      <PageHeader
        title={'Manage Meetings'}
        subTitle={'Manage all the Bussiness Development and their meetings'}
        route={-1}
        titleHeadBtn={backimg}
        extra={
          <>
            <div className="gap-[10px] flex">
              <Button
                className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
                onClick={() => {
                  toggleTeamMember()
                }}
              >
                <img src={addIcon} alt="" />
                <span>Add Team Member</span>
              </Button>
              <Button
                className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
                onClick={() => {
                  toggle()
                }}
              >
                <img src={addIcon} alt="" />
                <span>Add Custom</span>
              </Button>
            </div>
          </>
        }
      />
      {addModal && (
        <AddMeetingDetailsBDModal visible={addModal} toggle={toggle} />
      )}
      {toggleAddTeamMember && (
        <AssignTeamMemberModal
          visible={toggleAddTeamMember}
          toggle={toggleTeamMember}
        />
      )}
      <AllMeetingsDetailsBDTable />
    </PageContainer>
  )
}

export default MeetingsBDDetails
