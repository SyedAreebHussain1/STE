import { Button, Col, Input, Popover, Row, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import meetingDetailsColumns from '../../../../../../tableColumns/meetingDetailsColumns.json'
import FilterIcon from '../../../../../assest/icon/filter.png'
import { useParams } from 'react-router-dom'
import { getAllBDMeetingSessionByBDMeetingIdApi } from '../../../../../../redux/api/BDMeeting/index'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../../../utils/components/TablePagination'
import { SearchOutlined } from '@ant-design/icons'
import ManagersUsersFilter from '../../../../Users/helpers/Managers/helpers/ManagersUsersFilter'
import AffiliateUsersFilter from '../../../../Users/helpers/AffiliateUser/helpers/AffiliateUsersFilter'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../../../utils/utils'
import { Select } from 'antd/es'

const AllMeetingsDetailsBDTable = () => {
  const [dataSource, setDataSource] = useState()
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const params = useParams()
  const { id } = params
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getAllBDMeetingSessionByBDMeetingId = useSelector(
    (state) => state.getAllBDMeetingSessionByBDMeetingId
  )
  const createBDMeetingSession = useSelector(
    (state) => state.createBDMeetingSession
  )

  const debouncedGetAllBDMeetingSessionByBDMeetingIdApi = useRef(
    debounce((dispatch, pageLimit, id, search, selectedFilter) => {
      getAllBDMeetingSessionByBDMeetingIdApi(
        dispatch,
        pageLimit,
        id,
        search,
        selectedFilter
      )
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllBDMeetingSessionByBDMeetingIdApi(
      dispatch,
      pageLimit,
      id,
      search,
      selectedFilter
    )
  }, [search, pageLimit, createBDMeetingSession?.data])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])
  useEffect(() => {
    setSearch('')
  }, [selectedFilter])

  useEffect(() => {
    if (getAllBDMeetingSessionByBDMeetingId?.data?.data) {
      const data = getAllBDMeetingSessionByBDMeetingId?.data?.data?.items?.map(
        (item) => {
          return {
            name: item?.name,
            mobileNo: item?.phone,
            email: item?.email,
          }
        }
      )
      setDataSource(data)
    }
  }, [getAllBDMeetingSessionByBDMeetingId?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Bussiness Development
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Role' ? (
                <Select
                  onChange={(e) => setSearch(e)}
                  value={search}
                  className="w-full lg:w-[268px] h-[43px]"
                >
                  {['agentManager', 'agentStaff', 'agentOwner']?.map(
                    (item, i) => {
                      return <Select.Option key={item}>{item}</Select.Option>
                    }
                  )}
                </Select>
              ) : (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                  // onKeyPress={(event) => {
                  //   if (!/[0-9,.]/.test(event.key)) {
                  //     event.preventDefault()
                  //   }
                  // }}
                />
              )}
              <Popover
                placement="bottomRight"
                content={
                  <AffiliateUsersFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Name', 'Phone no', 'Email']}
                    // onChange={() => {
                    //   // navigate(`?page=1&limit=10`)
                    // }}
                  />
                }
                trigger="click"
              >
                <Button className="btn-primary flex items-center justify-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]">
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
            columns={meetingDetailsColumns}
            scroll={{ x: true }}
            loading={getAllBDMeetingSessionByBDMeetingId?.loading}
            pagination={{
              total:
                getAllBDMeetingSessionByBDMeetingId?.data?.data?.meta
                  ?.totalPages *
                getAllBDMeetingSessionByBDMeetingId?.data?.data?.meta
                  ?.itemsPerPage,
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

export default AllMeetingsDetailsBDTable
