import React, { useEffect } from 'react'
import { Button, Spin } from 'antd'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import Activities from './heplers/Activities'
import ClientDetail from './heplers/ClientDetail'
import backimg from '../../assest/icon/back.png'
import AgenciesAndInventoryDetails from './heplers/AgenciesAndInventoryDetails'
import { useParams } from 'react-router-dom'
import { assignFreeTrialApi, getAuthUserApi } from '../../../redux/api/AppUsers'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { cleargetAuthUser } from '../../../redux/slices/AppUsers/getAuthUserSlice'
import MeetingSlotTable from './heplers/MeetingSlotTable'
import UserReviewTable from './heplers/UserReviewTable'

const UserDetail = () => {
  const { data, loading } = useSelector((state) => state.assignFreeTrialSlice)
  const params = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    if (params.id) {
      getAuthUserApi(dispatch, params.id)
    }
  }, [params, data])

  const getAuthUser = useSelector((state) => state.getAuthUser)

  useEffect(() => {
    return () => {
      dispatch(cleargetAuthUser())
    }
  }, [])
  const onSuccess = () => {
    return
  }
  const handleAssign = () => {
    if (getAuthUser.data !== null) {
      let body = {
        agencyId: getAuthUser?.data?.data?.profile?.agency?.id,
      }
      assignFreeTrialApi(dispatch, body, onSuccess)
    }
  }
  return (
    <PageContainer>
      <PageHeader
        route={-1}
        titleHeadBtn={backimg}
        title={'User Profile'}
        subTitle={'Details and activities of the user'}
        extra={
          <Button
            onClick={() => {
              handleAssign()
            }}
            disabled={
              getAuthUser.data === null ||
              getAuthUser?.data?.data?.profile?.agency?.pwAssignPackage
                ?.pwSubPackage?.pwPackage?.isFree === false
            }
            loading={loading}
            className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[40px]"
          >
            <span>Assign Free Trial</span>
          </Button>
        }
      />

      <Spin spinning={getAuthUser?.loading}>
        <div className="grid grid-cols-1 lg:grid-cols-[30%_minmax(70%,_1fr)] gap-5">
          <ClientDetail getAuthUser={getAuthUser} />
          <AgenciesAndInventoryDetails getAuthUser={getAuthUser} />
          <Activities getAuthUser={getAuthUser} />
        </div>
        <div className="mt-[20px]">
          <MeetingSlotTable id={params.id} />
        </div>
        <div className="mt-[20px]">
          <UserReviewTable id={params.id} />
        </div>
      </Spin>
    </PageContainer>
  )
}

export default UserDetail
