import { Button, Col, Input, Popover, Row, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import TablePagination from '../../../../utils/components/TablePagination'
import ManageMeetingsColumns from '../../../../tableColumns/ManageMeetingsColumns.json'
import deleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'
import editIcon from '../../../assest/icon/ViewDetailEditIcon.png'
import FilterIcon from '../../../assest/icon/filter.png'
import { useModal } from '../../../../utils/hooks/useModal'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { SearchOutlined } from '@ant-design/icons'
import EditMeetingsBDModal from './EditMeetingsModal'
import {
  allBDMeetingsForAdminApi,
  deleteBdMeetingApi,
} from '../../../../redux/api/BDMeeting'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../utils/utils'
import { Select } from 'antd/es'

const MeetingsBDTable = () => {
  const [dataSource, setDataSource] = useState()
  const [editModal, toggleEdit] = useModal()
  const [editData, setEditData] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState('Title')
  const [search, setSearch] = useState('')
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const allBDMeetingsForAdmin = useSelector(
    (state) => state.allBDMeetingsForAdmin
  )
  const updateBdMeeting = useSelector((state) => state?.updateBdMeeting)
  const CreateBDMeeting = useSelector((state) => state.CreateBDMeeting)
  const deleteBdMeeting = useSelector((state) => state.deleteBdMeeting)

  const debouncedAllBDMeetingsForAdminApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      allBDMeetingsForAdminApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedAllBDMeetingsForAdminApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter
    )
  }, [
    pageLimit,
    CreateBDMeeting?.data,
    updateBdMeeting?.data,
    deleteBdMeeting?.data,
    search,
  ])
  useEffect(() => {
    setSearch('')
  }, [selectedFilter])

  // useEffect(() => {
  //   allBDMeetingsForAdminApi(dispatch, pageLimit, search, selectedFilter)
  // }, [
  //   pageLimit,
  //   CreateBDMeeting?.data,
  //   updateBdMeeting?.data,
  //   deleteBdMeeting?.data,
  // ])

  useEffect(() => {
    if (allBDMeetingsForAdmin?.data) {
      const data = allBDMeetingsForAdmin?.data?.data?.items?.map(
        (item, key) => {
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
                  navigator(
                    `/bussiness-development/meetings/details/${item?.id}`
                  )
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
                    deleteBdMeetingApi(dispatch, item?.id)
                  }}
                >
                  <img src={deleteIcon} alt="" />
                </div>
              </div>
            ),
          }
        }
      )
      setDataSource(data)
    }
  }, [allBDMeetingsForAdmin?.data])
  return (
    <>
      {editData !== null && (
        <EditMeetingsBDModal
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
                All BD Meetings
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Status' ? (
                <Select
                  onChange={(e) => setSearch(e)}
                  value={search}
                  className="w-full lg:w-[268px] h-[43px]"
                  allowClear
                >
                  <Select.Option>Active</Select.Option>
                  <Select.Option>In Active</Select.Option>
                </Select>
              ) : (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              )}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={ManageMeetingsColumns}
            scroll={{ x: true }}
            loading={allBDMeetingsForAdmin?.loading || deleteBdMeeting?.loading}
            pagination={{
              total:
                allBDMeetingsForAdmin?.data?.data?.meta?.totalPages *
                allBDMeetingsForAdmin?.data?.data?.meta?.itemsPerPage,
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

export default MeetingsBDTable
