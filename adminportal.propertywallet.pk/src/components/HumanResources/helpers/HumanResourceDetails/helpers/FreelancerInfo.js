import { Button, Divider, Input } from 'antd'
import Status from '../../../../../utils/components/Status'
import UserInfoField from '../../../../AppUser/UserDetail/heplers/UserInfoField'
import moment from 'moment'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deleteFreelancerApi } from '../../../../../redux/api/HR'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ReasonModal from './ReasonModal'
import { useModal } from '../../../../../utils/hooks/useModal'

const FreelancerInfo = () => {
  const [suspendData, setSuspendData] = useState({
    id: null,
    isSuspendid: null,
  })
  const [showReasonModal, toggleReasonModal] = useModal()
  const getAllFreelancersById = useSelector(
    (state) => state.getAllFreelancersById
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onSuccess() {
    navigate(-1)
  }

  function deleteFreelancer() {
    deleteFreelancerApi(
      dispatch,
      getAllFreelancersById?.data?.data?.freeLancer?.id,
      onSuccess
    )
  }
  useEffect(() => {
    // console.log("getAllFreelancersById", getAllFreelancersById);
    setSuspendData({
      ...suspendData,
      id: getAllFreelancersById?.data?.data?.freeLancer?.id,
      isSuspendid: getAllFreelancersById?.data?.data?.freeLancer?.isSuspend,
    })
    return () => {
      setSuspendData({
        ...suspendData,
        id: null,
        isSuspendid: null,
      })
    }
  }, [getAllFreelancersById])
  const handleToggle = () => {
    toggleReasonModal()
  }
  return (
    <>
      {suspendData.id !== null && suspendData.isSuspendid !== null && (
        <ReasonModal
          visible={showReasonModal}
          toggle={toggleReasonModal}
          data={suspendData}
        />
      )}
      <div className="bg-white rounded-lg row-span-2">
        <div className="pt-[20px] px-[24px] pb-[58px]">
          <div className="flex justify-between items-center pb-5">
            <h4 className="text-[15px] text-[#3D4350]">Basic Details</h4>
            {getAllFreelancersById?.data?.data?.freeLancer?.isActive && (
              <Status type="active" />
            )}
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
              <img
                src={
                  getAllFreelancersById?.data?.data?.freeLancer
                    ?.freeLancerProfile?.profileUrl ||
                  'https://placehold.co/90x90'
                }
                alt=""
                className="h-full object-fill"
              />
            </div>
            <span>
              <h3 className="text-[23px] text-[#1F2228] font-semibold">
                {
                  getAllFreelancersById?.data?.data?.freeLancer
                    ?.freeLancerProfile?.name
                }
              </h3>
            </span>
            <span className="text-[15px] px-3 py-2 border border-[#C2C6CE] !rounded-full">
              {'Freelancer'}
            </span>
          </div>
          <UserInfoField title="" />
          <Divider />
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
              <UserInfoField
                title="Refferal Code"
                value={getAllFreelancersById?.data?.data?.freeLancer?.refCode}
              />
              <UserInfoField
                title="Joining Data"
                value={moment(
                  getAllFreelancersById?.data?.data?.freeLancer?.createdAt
                ).format('DD MMMM.YYYY')}
              />
              <UserInfoField
                title="Phone No"
                value={getAllFreelancersById?.data?.data?.freeLancer?.phone}
              />
              <div>
                <span className="text-[#667085] text-xs font-medium">
                  Email Address
                </span>
                <div>
                  <span>
                    {' '}
                    <h4 className="text-[#1F2228] break-words">
                      {getAllFreelancersById?.data?.data?.freeLancer?.email}
                    </h4>
                  </span>{' '}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              // backgroundColor: "green",
              // width: "100%",
            }}
          >
            <Button
              className="text-sm px-[20px] py-[14px] rounded-[34px] border-2 border-[#E23442] text-[#E23442] mt-[38px] flex items-center h-[41px]"
              onClick={deleteFreelancer}
            >
              Delete Freelancer
            </Button>
            <Button
              className="text-sm px-[20px] py-[14px] rounded-[34px] border-2 border-[#34ACE0] text-[#34ACE0] bg-[#34ACE00D] mt-[38px] flex items-center h-[41px]"
              onClick={() => {
                handleToggle()
              }}
            >
              {/* Suspend Freelancer */}
              {suspendData?.isSuspendid ? 'Un suspend' : 'Suspend Freelancer'}
            </Button>
          </div>
          {getAllFreelancersById?.data?.data?.freeLancer?.isSuspend &&
            getAllFreelancersById?.data?.data?.freeLancer?.freeLancerReason !==
              null && (
              <div
                style={{
                  marginTop: '6%',
                  borderColor: '#E8EAED',
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  borderRadius: '5px',
                  padding: '5px',
                }}
              >
                <h2 style={{ fontSize: '14px' }}>Freelancer Request</h2>
                <span style={{ color: 'grey', wordBreak: 'break-word' }}>
                  {
                    getAllFreelancersById?.data?.data?.freeLancer
                      ?.freeLancerReason
                  }
                </span>
              </div>
            )}
        </div>
      </div>
    </>
  )
}

export default FreelancerInfo
