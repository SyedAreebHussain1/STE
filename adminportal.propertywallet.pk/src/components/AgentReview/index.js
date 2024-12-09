import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import AllAgencyTable from './helpers/AllAgencyTable'
import { Button } from 'antd'
import { useModal } from './../../utils/hooks/useModal'
import AssignAgenciesToSaleUserModal from './helpers/AssignAgenciesToSaleUserModal'

const AgentReview = () => {
  const [assignModal, toggle] = useModal()
  const [removeAssignModal, toggleRemoveAssign] = useModal()
  const extra = (
    <div className="flex flex-col gap-2 justify-center">
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={toggle}
      >
        <span>Assign Agencies to Sale Users</span>
      </Button>
      <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        onClick={toggleRemoveAssign}
      >
        <span>Remove Agencies from Sale Users</span>
      </Button>
    </div>
  )
  return (
    <PageContainer>
      {assignModal && (
        <AssignAgenciesToSaleUserModal
          toggle={toggle}
          visible={assignModal}
          type={'assign'}
        />
      )}
      {removeAssignModal && (
        <AssignAgenciesToSaleUserModal
          toggle={toggleRemoveAssign}
          visible={removeAssignModal}
          type={'remove'}
        />
      )}
      <PageHeader
        title={'Agency Review'}
        subTitle={'Search Agency Review'}
        extra={extra}
      />
      <AllAgencyTable />
    </PageContainer>
  )
}
export default AgentReview
