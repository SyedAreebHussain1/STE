import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import AgentProfileComponent from './helpers/AgentProfileComponent'

const AgentProfile = () => {
  const extra = (
    <div>
      {/* <Button
        className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
        // onClick={toggle}
      >
        <img src={addIcon} alt="" />
        <span>new Coordinator</span>
      </Button> */}
    </div>
  )
  return (
    <PageContainer>
      <PageHeader
        title={'Agency Profile'}
        subTitle={'Search Agency Profile'}
        extra={extra}
      />
      <AgentProfileComponent />
    </PageContainer>
  )
}
export default AgentProfile
