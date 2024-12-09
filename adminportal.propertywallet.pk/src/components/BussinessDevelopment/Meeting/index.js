import { Button } from 'antd'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import { useModal } from '../../../utils/hooks/useModal'
import addIcon from '../../assest/icon/addicon.png'
import MeetingsTable from './helpers/MeetingsTable'
import AddMeetingsModal from './helpers/AddMeetingsModal'
import AddMeetingsBDModal from './helpers/AddMeetingsModal'
import MeetingsBDTable from './helpers/MeetingsTable'

const MeetingsBD = () => {
  const [addModal, toggle] = useModal()
  return (
    <PageContainer>
      <PageHeader
        title={'Manage Meetings'}
        subTitle={'Manage all the BD and their meetings'}
        extra={
          <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={() => {
              toggle()
            }}
          >
            <img src={addIcon} alt="" />
            Add Meeting
          </Button>
        }
      />
      {addModal && <AddMeetingsBDModal visible={addModal} toggle={toggle} />}
      <MeetingsBDTable />
    </PageContainer>
  )
}

export default MeetingsBD
