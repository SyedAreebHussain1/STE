import {
  Button,
  Col,
  DatePicker,
  Input,
  Popover,
  Row,
  Table,
  Tooltip,
} from 'antd'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import usePageLimit from '../../../../utils/hooks/usePageLimit'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AppUserFilter from '../../../AppUser/helpers/AppUserFilter'
import TablePagination from '../../../../utils/components/TablePagination'
import moment from 'moment'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import FilterIcon from '../../../assest/icon/filter.png'
import { scrollToTop } from '../../../../utils/utils'
import { GetAllMarketingRequirmentApi } from '../../../../redux/api/MarketingRequirements'
import MarketingRequirementListColumns from '../../../../tableColumns/MarketingRequirementListColumns.json'
const MarketingRequirementTable = () => {
  const [pageLimit, setPageLimit] = usePageLimit()
  const [startDate, setStartDate] = useState(null)
  const [range, setRange] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const GetAllMarketingRequirment = useSelector(
    (state) => state.GetAllMarketingRequirment
  )
  const [selectedFilter, setSelectedFilter] = useState('Subject')
  const [search, setSearch] = useState('')
  const [dataSource, setDataSource] = useState([])

  const debouncedGetAllMarketingRequirmentApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter, range) => {
      GetAllMarketingRequirmentApi(
        dispatch,
        pageLimit,
        search,
        selectedFilter,
        range
      )
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllMarketingRequirmentApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter,
      range
    )
  }, [search, range, pageLimit])
  useEffect(() => {
    setSearch('')
    setRange([])
  }, [selectedFilter])
  useEffect(() => {
    if (GetAllMarketingRequirment?.data) {
      const data = GetAllMarketingRequirment?.data?.data?.items?.map(
        (item, i) => {
          return {
            key: item.id,
            name: (
              <span className="text-[12px] font-medium text-[#3D4350] cursor-pointer">
                {item?.elounge?.name}
              </span>
            ),

            description: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {item?.description.length > 40 ? (
                  <Tooltip
                    placement="topLeft"
                    className="cursor-pointer"
                    title={item?.description}
                  >
                    {`${item?.description.substr(0, 40)}...`}
                  </Tooltip>
                ) : (
                  item?.description
                )}
              </span>
            ),
            subject: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {item?.subject}
              </span>
            ),

            date: (
              <span className="text-[12px] font-medium text-[#444B54]">
                {moment(item.createdAt).format('DD-MM-YYYY')}
              </span>
            ),
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [GetAllMarketingRequirment?.data])

  // EXPORT EXCEL

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div className="flex gap-2 items-center">
              <div className="shrink-0">
                <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                  Requirement List
                </h3>
              </div>
              {/* <div className="h-[23px] w-[23px] bg-[#147ad60d] rounded-[50%] inline-block ">
                {' '}
                <span className="text-[#147AD6] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[32px]">
                  {GetAllMarketingRequirment?.data?.data?.totalItems || 0}
                </span>
              </div> */}
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Date' ? (
                <DatePicker
                  className="w-full h-[45px]"
                  // style={{ width: "",height:"100px" }}
                  separator={false}
                  onChange={(value, dateString) => {
                    if (value === null) {
                      setStartDate(null)
                    }
                    setRange(dateString)
                    navigate(`?page=1&limit=10`)
                  }}
                  // disabledDate={(current) => {
                  //   let customDate = moment().format("YYYY-MM-DD");
                  //   return (
                  //     current && current < moment(customDate, "YYYY-MM-DD")
                  //   );
                  // }}
                  onCalendarChange={(value, dateString) => {
                    if (value && value[0] === null && value[1] === null) {
                      return
                    }
                    setStartDate(value && value[0])
                  }}
                />
              ) : (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    navigate(`?page=1&limit=10`)
                  }}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              )}
              <Popover
                placement="bottomRight"
                content={
                  <AppUserFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Subject', 'Date']}
                    onChange={() => {
                      navigate(`?page=1&limit=10`)
                    }}
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
            columns={MarketingRequirementListColumns}
            // onRow={(record, rowIndex) => {
            //   return {
            //     onClick: (event) => handleNavigate(record), // click row
            //   };
            // }}
            //   loading={loading}
            scroll={{ x: true }}
            loading={GetAllMarketingRequirment?.loading}
            pagination={{
              total:
                GetAllMarketingRequirment?.data?.data?.meta?.totalPages *
                pageLimit.limit,
              // onChange: onShowSizeChange,
              showTotal: (total, range) => (
                <TablePagination
                  total={total}
                  range={range}
                  setPageLimit={setPageLimit}
                  pageLimit={pageLimit}
                  query
                />
              ),
            }}
          />
        </Col>
      </Row>
    </>
  )
}

export default MarketingRequirementTable
