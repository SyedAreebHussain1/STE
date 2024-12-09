import { Button } from 'antd'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import ManageMeetingsTable from './helpers/ManageMeetingsTable'
import { useModal } from '../../utils/hooks/useModal'
import AddMeetingModal from './helpers/AddMeetingModal'
import addIcon from '../assest/icon/addicon.png'

const ManageMeetings = () => {
  const [addModal, toggle] = useModal()
  return (
    <PageContainer>
      <PageHeader
        title={'Manage Meetings'}
        subTitle={'Manage all the freelancers and their meetings'}
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
      {addModal && <AddMeetingModal visible={addModal} toggle={toggle} />}
      <ManageMeetingsTable />
    </PageContainer>
  )
}

export default ManageMeetings
