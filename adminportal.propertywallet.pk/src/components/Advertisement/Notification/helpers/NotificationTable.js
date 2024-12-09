import React, { useEffect, useState } from 'react'
import ModalBox from './ModalBox'
import NoticationIcon from './../../../assest/icon/noti.png'
import SmsIcon from './../../../assest/icon/sms.png'
import { Button, Col, Row, Table } from 'antd'
import notificationColumns from '../../../../tableColumns/notificationColumns.json'
import TablePagination from '../../../../utils/components/TablePagination'
import { useModal } from '../../../../utils/hooks/useModal'
import GenerateNotificationModal from './GenerateNotificationModal'
import SmsNotificationModal from './SmsNotificationModal'
import {
  deleteManualNotificationApi,
  getAllManualNotificationApi,
  mannualPushNotificationApi,
  mannualPushNotificationUnsiginUpApi,
  unverifiedUserNotificationApi,
} from '../../../../redux/api/Advertisement/Notification'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import moment from 'moment'
import ResendIcon from '../../../assest/icon/resend.png'
import eyeview from '../../../assest/icon/eyeview.png'
import ViewDetailDeleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'
import EditNotificationModal from './EditNotificationModal'
import CityFieldModal from './CityFieldModal'
import { scrollToTop } from '../../../../utils/utils'

const NotificationTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [isGenModalVisible, toggleGenModal] = useModal()
  const [isSmsModalVisible, toggleSmsModal] = useModal()
  const [isEditModalVisible, toggleEditModal] = useModal()
  const [isCityModalVisible, toggleCityModal] = useModal()
  const [cityData, setCityData] = useState(null)
  const [editData, setEditData] = useState({
    data: null,
    type: null,
  })
  const statusObj = {
    SMS_FOR_UNVERIFIED_USER: 'Unverified',
    SMS_FOR_VERIFIED_USER: 'Verified',
    FCM_FOR_ALL_USERS: 'All',
    FCM_FOR_UNSIGNUP_USERS: 'Unsigned up',
  }
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const createManualNotification = useSelector(
    (state) => state.createManualNotification
  )
  const updateManualNotification = useSelector(
    (state) => state.updateManualNotification
  )
  const getAllManualNotification = useSelector(
    (state) => state.getAllManualNotification
  )
  const deleteManualNotification = useSelector(
    (state) => state.deleteManualNotification
  )
  const mannualPushNotification = useSelector(
    (state) => state.mannualPushNotification
  )
  const mannualPushNotificationUnsiginUp = useSelector(
    (state) => state.mannualPushNotificationUnsiginUp
  )
  const unverifiedUserNotification = useSelector(
    (state) => state.unverifiedUserNotification
  )
  useEffect(() => {
    scrollToTop()
    getAllManualNotificationApi(dispatch, pageLimit)
  }, [
    createManualNotification?.data,
    updateManualNotification?.data,
    deleteManualNotification?.data,
    pageLimit,
  ])

  useEffect(() => {
    if (getAllManualNotification?.data) {
      const data = getAllManualNotification?.data?.data?.items?.map((item) => {
        return {
          notificationType: item?.status?.includes('FCM')
            ? 'Push Notification'
            : 'Message',
          title: item?.title || '-',
          userGroup: statusObj[item?.status],
          date: moment(item?.createdAt).format('DD/MM/YYYY'),
          time: moment(item?.createdAt).format('LT'),
          action: (
            <div className="flex gap-2">
              <Button
                className="flex gap-[6px] px-3 text-[#3D4350] rounded-[25px] border-2 border-[#3D4350] items-center"
                onClick={() => {
                  if (item?.status === 'FCM_FOR_ALL_USERS') {
                    setCityData(item)
                    toggleCityModal()
                  } else if (item?.status === 'FCM_FOR_UNSIGNUP_USERS') {
                    mannualPushNotificationUnsiginUpApi(dispatch, {
                      message: item?.message,
                      redirectUrl: item?.redirectUrl,
                      imageUrl: item?.imageUrl,
                      referenceId: item?.referenceId,
                      title: item?.title,
                    })
                  } else {
                    setCityData(item)
                    toggleCityModal()
                  }
                }}
              >
                <img src={ResendIcon} alt="" />
                <span>Resend</span>
              </Button>
              <Button
                className="flex gap-[6px] px-3 text-[#3D4350] rounded-[25px] border-2 border-[#3D4350] items-center"
                onClick={() => {
                  setEditData({
                    data: item,
                    type: item?.status?.includes('FCM') ? 'FCM' : 'Message',
                  })
                  toggleEditModal()
                }}
              >
                <img src={eyeview} alt="" />
                <span>Edit</span>
              </Button>
              <div className="flex flex-wrap  gap-2">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    deleteManualNotificationApi(dispatch, item?.id)
                  }}
                >
                  <img src={ViewDetailDeleteIcon} alt="" />
                </div>
              </div>
            </div>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getAllManualNotification?.data])
  return (
    <div>
      {isCityModalVisible && (
        <CityFieldModal
          visible={isCityModalVisible}
          toggle={toggleCityModal}
          data={cityData}
        />
      )}
      {isGenModalVisible && (
        <GenerateNotificationModal
          visible={isGenModalVisible}
          toggle={toggleGenModal}
        />
      )}
      {isSmsModalVisible && (
        <SmsNotificationModal
          visible={isSmsModalVisible}
          toggle={toggleSmsModal}
        />
      )}
      {isEditModalVisible && (
        <EditNotificationModal
          visible={isEditModalVisible}
          toggle={toggleEditModal}
          data={editData?.data}
          type={editData?.type}
        />
      )}
      <Row gutter={18} className="mb-[67px]">
        <Col span={8}>
          <ModalBox
            icon={NoticationIcon}
            title={'Push Notification'}
            subtitle="Delivering Important Updates and Valuable Information via Push Notifications"
            btn={'Generate  Notification'}
            onClick={toggleGenModal}
          />
        </Col>
        <Col span={8}>
          <ModalBox
            icon={SmsIcon}
            title={'Message/SMS'}
            subtitle="Delivering Important Updates and Valuable Information via Push Notifications"
            btn={'Send Message'}
            onClick={toggleSmsModal}
          />
        </Col>
      </Row>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                Notification History
              </h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={notificationColumns}
            loading={
              getAllManualNotification?.loading ||
              mannualPushNotification?.loading ||
              mannualPushNotificationUnsiginUp?.loading ||
              unverifiedUserNotification?.loading ||
              deleteManualNotification?.loading
            }
            scroll={{ x: true }}
            pagination={{
              total:
                getAllManualNotification?.data?.data?.meta?.totalPages *
                getAllManualNotification?.data?.data?.meta?.itemsPerPage,
              // onChange: onShowSizeChange,
              showTotal: (total, range) => (
                <TablePagination
                  total={total}
                  range={range}
                  setPageLimit={setPageLimit}
                  pageLimit={pageLimit}
                />
              ),
            }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default NotificationTable
