import { Button, Modal } from 'antd'
import assignImage from '../../../components/assest/img/assignFreeModal.png'
import { assignFreeTrialApi } from '../../../redux/api/AppUsers'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const AssignFreeTrialModal = ({
  visible,
  toggle,
  agentId,
  ApiCallOnAssign,
}) => {
  const assignFreeTrialSlice = useSelector(
    (state) => state.assignFreeTrialSlice
  )

  function onCancel() {
    toggle()
  }

  const dispatch = useDispatch()

  const onSuccess = () => {
    toggle()
    ApiCallOnAssign()
  }
  const handleClick = () => {
    const body = {
      agencyId: agentId,
    }
    assignFreeTrialApi(dispatch, body, onSuccess)
  }
  return (
    <>
      <Modal
        title={<h3 className="text-[18px] font-semibold">Assign Free Trial</h3>}
        open={visible}
        onCancel={onCancel}
        footer={null}
        centered={true}
        width={600}
      >
        <div className="flex justify-center align-middle mt-[30px] mb-[30px] flex-col items-center">
          <img src={assignImage} style={{ width: '150px', height: '120px' }} />
          <p className="mt-[20px]">Are you sure want to assign free trial.</p>
        </div>
        <div className="flex justify-end mt-[55px]">
          <Button
            size="middle"
            key="3"
            className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
            onClick={toggle}
          >
            Close
          </Button>
          <Button
            size="middle"
            key="1"
            // type="primary"

            onClick={() => {
              handleClick()
            }}
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            htmlType="submit"
            loading={assignFreeTrialSlice?.loading}
          >
            Assign Now
          </Button>
        </div>
      </Modal>
    </>
  )
}
export default AssignFreeTrialModal
