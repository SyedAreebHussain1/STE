import { Button, Col, Input, Popover, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import TablePagination from '../../../utils/components/TablePagination'
import ManageMeetingsColumns from '../../../tableColumns/ManageMeetingsColumns.json'
import deleteIcon from '../../assest/icon/ViewDetailDeleteIcon.png'
import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import FilterIcon from '../../assest/icon/filter.png'
import { useModal } from '../../../utils/hooks/useModal'
import EditMeetingModal from './EditMeetingModal'
import { useNavigate } from 'react-router-dom'
import {
  deleteMeetingApi,
  getAllMeetingsApi,
} from '../../../redux/api/ManageMeetings'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { SearchOutlined } from '@ant-design/icons'

const ManageMeetingsTable = () => {
  const [dataSource, setDataSource] = useState()
  const [editModal, toggleEdit] = useModal()
  const [editData, setEditData] = useState(null)
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getAllMeetings = useSelector((state) => state.getAllMeetings)
  const updateMeetings = useSelector((state) => state.updateMeetings)
  const createMeeting = useSelector((state) => state.createMeeting)
  const deleteMeeting = useSelector((state) => state.deleteMeeting)

  useEffect(() => {
    getAllMeetingsApi(dispatch, pageLimit)
  }, [
    pageLimit,
    createMeeting?.data,
    updateMeetings?.data,
    deleteMeeting?.data,
  ])
  useEffect(() => {
    if (getAllMeetings?.data) {
      const data = getAllMeetings?.data?.data?.items?.map((item, key) => {
        return {
          key: nanoid(),
          title: item?.title,
          slots: `${item?.bookedSlots}/${item?.totalSlots}`,
          date: moment(item?.startTime).format('DD/MM/YYYY'),
          time: moment(item?.startTime).format('LT'),
          url: item?.meetingUrl,
          participants: (
            <Button
              className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[30px] flex-shrink-0"
              onClick={() => {
                navigator(`/dashboard/manage-meetings/${item?.id}`)
              }}
            >
              <span>View</span>
            </Button>
          ),
          action: (
            <div className="flex  gap-2">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setEditData(item)
                  toggleEdit()
                }}
              >
                <img src={editIcon} alt="" />{' '}
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  deleteMeetingApi(dispatch, item?.id)
                }}
              >
                <img src={deleteIcon} alt="" />
              </div>
            </div>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getAllMeetings?.data])
  return (
    <>
      {editModal && (
        <EditMeetingModal
          visible={editModal}
          toggle={toggleEdit}
          editData={editData}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Meetings
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search`}
                prefix={<SearchOutlined />}
                className="w-full lg:w-[268px] h-[43px]"
              />
              <Popover placement="bottomRight" trigger="click">
                <Button className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[40px]">
                  <img
                    src={FilterIcon}
                    style={{ filter: 'brightness(4)' }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={ManageMeetingsColumns}
            scroll={{ x: true }}
            loading={getAllMeetings.loading || deleteMeeting.loading}
            pagination={{
              total:
                getAllMeetings?.data?.data?.meta?.totalPages *
                getAllMeetings?.data?.data?.meta?.itemsPerPage,
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
    </>
  )
}

export default ManageMeetingsTable
