import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import CatalogueMeetingSlotsColumns from '../../../../tableColumns/CatalogueMeetingSlotsColumns.json'
import moment from 'moment'
import { GetAllCatalogueMeetingSlotsApi } from '../../../../redux/api/CatalogueMeetingSlots'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../utils/utils'
import ListingFilter from '../../../Advertisement/Listings/helpers/ListingFilter'
import FilterIcon from '../../../assest/icon/filter.png'
import { SearchOutlined } from '@ant-design/icons'

const CatalogueBookedMeetingslotsTable = () => {
  const dispatch = useDispatch()
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Agent Name')
  const [search, setSearch] = useState('')
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const navigate = useNavigate()
  const GetAllCatalogueMeetingSlots = useSelector(
    (state) => state?.GetAllCatalogueMeetingSlots
  )

  const debouncedGetAllCatalogueMeetingSlotsApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      GetAllCatalogueMeetingSlotsApi(
        dispatch,
        pageLimit,
        search,
        selectedFilter
      )
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllCatalogueMeetingSlotsApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter
    )
  }, [dispatch, pageLimit])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])

  useEffect(() => {
    setSearch('')
  }, [selectedFilter])

  const handleNavigate = (item) => {
    if (item) {
      navigate(`/dashboard/app-user/${item?.userId}`, {
        state: item?.profile,
      })
    }
  }

  useEffect(() => {
    if (GetAllCatalogueMeetingSlots?.data) {
      const data = GetAllCatalogueMeetingSlots?.data?.data?.items?.map(
        (val, i) => {
          return {
            key: i + 1,
            sno: i + 1,
            name: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.name || '-'}
              </span>
            ),
            agencyname: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.user?.profile?.agency?.agencyName || '-'}
              </span>
            ),
            agentname: (
              <span
                className="text-[12px] font-medium text-[#3D4350] cursor-pointer"
                onClick={() => {
                  handleNavigate(val?.user?.profile)
                }}
              >
                {val?.user?.profile?.fullName || '-'}
              </span>
            ),
            email: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.email || '-'}
              </span>
            ),
            phone: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.phone || '-'}
              </span>
            ),
            meetingSubject: (
              <span className="text-[#3D4350]  py-[3px] text-center rounded-[21px]">
                {val?.meetingSubject || '-'}
              </span>
            ),
            meetingType: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.meetingType || '-'}
              </span>
            ),
            meetingUrl: val?.meetingUrl ? (
              <a
                className="text-[12px] font-medium text-[#3D4350]"
                href={val?.meetingUrl}
              >
                {val?.meetingUrl}
              </a>
            ) : (
              <span className="text-[12px] font-medium text-[#3D4350]">-</span>
            ),
            description:
              val?.description?.length > 20 ? (
                <Popover
                  content={
                    <p className="text-[12px] font-medium text-[#3D4350] max-w-[250px] break-words">
                      {val?.description}
                    </p>
                  }
                >
                  <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[150px]">
                    {val?.description}
                  </p>
                </Popover>
              ) : (
                <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[150px]">
                  {val?.description || '-'}
                </p>
              ),
            date: (
              <div className="text-[#3D4350]  py-[3px] px-[8px] rounded-[21px] w-[100px]">
                {val?.meetingEndDateTime
                  ? moment(val?.meetingEndDateTime).format('DD-MM-YYYY')
                  : '-'}
              </div>
            ),
            startTime: (
              <div className="text-[12px] font-medium text-[#3D4350] w-[80px]">
                {val?.meetingStartDateTime
                  ? moment(val?.meetingStartDateTime).format('hh:mm A ')
                  : '-'}
              </div>
            ),

            endTime: (
              <div className="text-[#3D4350]  py-[3px] px-[8px] rounded-[21px] w-[80px]">
                {val?.meetingEndDateTime
                  ? moment(val?.meetingEndDateTime).format('hh:mm A')
                  : '-'}
              </div>
            ),
            feedBack: (
              <span className="text-[#3D4350]  py-[3px] px-[8px] rounded-[21px]">
                {val?.publicMeetingFeedBack?.remarks || '-'}
              </span>
            ),
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [GetAllCatalogueMeetingSlots?.data])
  return (
    <>
      <Row className="bg-white px-[10px] rounded-[5px] w-[100%]">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                Meeting Slot{' '}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search ${selectedFilter}`}
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              />
              <Popover
                placement="bottomRight"
                content={
                  <ListingFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Agent Name', 'Agency Name']}
                  />
                }
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center justify-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                  // onClick={showDrawer}
                >
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
            columns={CatalogueMeetingSlotsColumns}
            scroll={{ x: true }}
            loading={GetAllCatalogueMeetingSlots?.loading}
            pagination={{
              total:
                GetAllCatalogueMeetingSlots?.data?.data?.meta?.totalPages *
                GetAllCatalogueMeetingSlots?.data?.data?.meta?.itemsPerPage,
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

export default CatalogueBookedMeetingslotsTable
