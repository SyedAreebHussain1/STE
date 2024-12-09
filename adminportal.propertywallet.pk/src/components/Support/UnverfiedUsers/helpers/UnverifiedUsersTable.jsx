import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CalendarOutlined, SearchOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Input,
  Popover,
  Row,
  Space,
  Table,
  Tag,
  DatePicker,
  Select,
} from 'antd'
import moment from 'moment'
import { debounce } from 'lodash'
import unverfiedUsersColumns from '../../../../tableColumns/unverfiedUsersColumns.json'

// icon
import FilterIcon from '../../../assest/icon/filter.png'

import TablePagination from '../../../../utils/components/TablePagination'
import { useModal } from '../../../../utils/hooks/useModal'
import { getAllUnverifiedUsersApi } from '../../../../redux/api/Support/UnverifiedUsers'
// import usePageLimit from "../../../../utils/hooks/usePageLimit";

import UnverifiedUserFilter from './UnverifiedUserFilter'
import { scrollToTop } from '../../../../utils/utils'

const UnverifiedUsersTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [startDate, setStartDate] = useState(null)
  const [isAddModalVisible, toggleAdd] = useModal()
  // const [pageLimit, setPageLimit] = usePageLimit();
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const { RangePicker } = DatePicker
  const dispatch = useDispatch()
  const getAllUnverifiedUsers = useSelector(
    (state) => state.getAllUnverifiedUsers
  )
  const [selectedFilter, setSelectedFilter] = useState('Full Name')
  const [search, setSearch] = useState('')
  const [range, setRange] = useState(null)
  const debouncedGetAllUnverifiedUsersApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllUnverifiedUsersApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllUnverifiedUsersApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter
    )
  }, [pageLimit])
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])
  useEffect(() => {
    setSearch('')
    // setRange([]);
  }, [selectedFilter])

  useEffect(() => {
    if (getAllUnverifiedUsers?.data) {
      const data = getAllUnverifiedUsers?.data?.data?.items?.map((item, i) => {
        return {
          agency: (
            <div className="flex">
              {/* <img
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "5px",
                  marginTop: "2%",
                }}
                alt=""
                src={
                  item?.profile?.agency?.logo_Url ||
                  "https://placehold.co/30x30"
                }
              /> */}
              <p>{item?.profile?.agency?.agencyName}</p>
            </div>
          ),
          name: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.profile?.fullName}
            </span>
          ),
          phoneNo: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.phone}
            </span>
          ),
          email: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.email}
            </span>
          ),
          verficationcode: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.verificationCode ? item?.verificationCode : '-'}
            </span>
          ),
          joiningDate: (
            <span className="text-[12px] font-medium text-[#444B54]">
              {moment(item.createdAt).format('DD-MM-YYYY')}
            </span>
          ),
          joiningTime: (
            <span className="text-[12px] font-medium text-[#444B54]">
              {moment(item.createdAt).format('h:mm A')}
            </span>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getAllUnverifiedUsers?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Unverfied Users
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Phone' ? (
                <Input
                  placeholder={`Search Phone`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                  onKeyPress={(event) => {
                    if (!/[0-9,.]/.test(event.key)) {
                      event.preventDefault()
                    }
                  }}
                />
              ) : (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              )}
              {/* <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                className="w-full lg:w-[300px] h-[40px]"
              /> */}
              <Popover
                placement="bottomRight"
                content={
                  <UnverifiedUserFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Email', 'Phone', 'Full Name', 'Agency Name']}
                  />
                }
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center justify-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px] flex-shrink-0"
                  // onClick={showDrawer}
                >
                  <img
                    src={FilterIcon}
                    className="brightness-4"
                    // style={{ filter: "brightness(4)" }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={unverfiedUsersColumns}
            scroll={{ x: true }}
            // locale={{
            //   emptyText: (
            //     <NoTableData text="No User Added" buttonText="Add New Users" />
            //   ),
            // }}
            loading={getAllUnverifiedUsers.loading}
            pagination={{
              total: getAllUnverifiedUsers?.data?.data?.meta?.totalItems,
              // onChange: onShowSizeChange,
              showTotal: (total, range) => (
                <TablePagination
                  total={total}
                  range={range}
                  setPageLimit={setPageLimit}
                  pageLimit={pageLimit}
                  // query
                />
              ),
            }}
          />
        </Col>
      </Row>
    </>
  )
}

export default UnverifiedUsersTable
