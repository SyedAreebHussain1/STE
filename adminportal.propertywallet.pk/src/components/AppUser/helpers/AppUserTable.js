import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Button,
  Col,
  DatePicker,
  Input,
  Popover,
  Row,
  Select,
  Space,
  Table,
} from 'antd'
import { RightCircleOutlined, SearchOutlined } from '@ant-design/icons'
import TablePagination from '../../../utils/components/TablePagination'
import allUserColums from '../../../tableColumns/allUserColums.json'
import Eyeview from '../../assest/icon/eyeview.png'
// icon
import FilterIcon from '../../assest/icon/filter.png'
import activeSignIcon from '../../assest/icon/activesign.png'
import AppUserFilter from './AppUserFilter'
import {
  getAllAppUsersApi,
  getAllAuthUserNoPaginationApi,
} from '../../../redux/api/AppUsers'
import usePageLimit from '../../../utils/hooks/usePageLimit'
import moment from 'moment'
import { getRolesApi } from '../../../redux/api/Settings/Roles'
import { debounce } from 'lodash'
import { downloadExcelFile, scrollToTop } from '../../../utils/utils'

const AppUserTable = ({ exportExcel, setExportExcelFalse }) => {
  const [pageLimit, setPageLimit] = usePageLimit()
  const { RangePicker } = DatePicker
  const [startDate, setStartDate] = useState(null)
  const [range, setRange] = useState([])
  const [isVerified, setIsVerified] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getAllAppUsers = useSelector((state) => state.getAllAppUsers)
  const getRoutes = useSelector((state) => state.getRoutes)
  const [selectedFilter, setSelectedFilter] = useState('Full Name')
  const [search, setSearch] = useState('')
  const [dataSource, setDataSource] = useState([])
  const handleNavigate = (item) => {
    navigate(`/dashboard/app-user/${item?.id}`, {
      state: item?.profile,
    })
  }

  const debouncedGetAllAppUsersApi = useRef(
    debounce(
      (dispatch, pageLimit, search, selectedFilter, range, isVerified) => {
        getAllAppUsersApi(
          dispatch,
          pageLimit,
          search,
          selectedFilter,
          range,
          isVerified
        )
      },
      500
    )
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllAppUsersApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter,
      range,
      isVerified
    )
  }, [search, range, isVerified, pageLimit])
  useEffect(() => {
    setSearch('')
    setRange([])
    setIsVerified('')
  }, [selectedFilter])
  useEffect(() => {
    if (getAllAppUsers?.data) {
      const data = getAllAppUsers?.data?.data?.items?.map((item, i) => {
        return {
          key: item.id,
          name: (
            <span
              className="text-[12px] font-medium text-[#3D4350] cursor-pointer"
              onClick={() => handleNavigate(item)}
            >
              {item?.profile?.fullName}
            </span>
          ),
          status: (
            <div className=" shrink-0">
              {item.isVerified ? (
                <span className="text-[#0BBC64] text-[12px] font-medium bg-[#0BBC640D] py-[3px] px-[8px] rounded-[21px]">
                  {' '}
                  Verified
                </span>
              ) : (
                <span className="text-[#ED870B] text-[12px] font-medium bg-[#ED870B0D] py-[3px] px-[8px] rounded-[21px]">
                  {' '}
                  UnVerified
                </span>
              )}
            </div>
          ),
          phoneNO: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {item?.phone}
            </span>
          ),
          email: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {item?.email}
            </span>
          ),
          designation: (
            <span className="text-[#3D4350] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[21px]">
              {item?.role?.title}
            </span>
          ),
          agencyName: (
            <span className="text-[12px] font-medium text-[#444B54]">
              {item?.profile?.agency?.agencyName}
            </span>
          ),
          agencyLocation: (
            <span className="text-[12px] font-medium text-[#444B54]">
              {item?.profile?.agency?.city}
            </span>
          ),
          referrals: (
            <Button
              onClick={(e) =>
                navigate(`/referrals?refCode=${item?.profile?.userCode}`)
              }
              disabled={
                Number(item?.profile?.refferals) === 0 ||
                !getRoutes?.data?.items
                  ?.map((val) => val.label)
                  ?.includes('Referrals')
              }
              className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[41px] justify-center"
            >
              <span>View {item?.profile?.refferals}</span>
            </Button>
            //   <span className="text-[#3D4350] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[32px]">
            //   {item?.profile?.refferals}
            // </span>
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
          action: (
            <div className="flex flex-wrap  gap-2">
              <div
                className="cursor-pointer"
                onClick={() => handleNavigate(item)}
              >
                <Button shape="round">View Profile</Button>
              </div>
            </div>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllAppUsers?.data])

  // EXPORT EXCEL

  function onSuccessExcel(data) {
    downloadExcelFile(
      data?.data?.map((item) => {
        return {
          id: item?.id,
          name: item?.profile?.fullName,
          status: item.isVerified ? 'verified' : 'unverified',
          phoneNO: item?.phone,
          email: item?.email,
          designation: item?.role?.title,
          agencyName: item?.profile?.agency?.agencyName,
          agencyLocation: item?.profile?.agency?.city,
          referrals: item?.profile?.refferals,
          joiningDate: moment(item.createdAt).format('DD-MM-YYYY'),
          joiningTime: moment(item.createdAt).format('h:mm A'),
        }
      }),
      'app-users'
    )
    setExportExcelFalse()
  }
  useEffect(() => {
    if (exportExcel) {
      getAllAuthUserNoPaginationApi(
        dispatch,
        onSuccessExcel,
        search,
        selectedFilter,
        range,
        isVerified
      )
    }
  }, [exportExcel])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div className="flex gap-2 items-center">
              <div className="shrink-0">
                <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                  All Users
                </h3>
              </div>
              <div className="h-[23px] w-[23px] bg-[#147ad60d] rounded-[50%] inline-block ">
                {' '}
                <span className="text-[#147AD6] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[32px]">
                  {getAllAppUsers?.data?.data?.totalItems || 0}
                </span>
              </div>
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
              ) : selectedFilter === 'Phone' ? (
                <Input
                  placeholder={`Search Phone`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    navigate(`?page=1&limit=10`)
                  }}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                  onKeyPress={(event) => {
                    if (!/[0-9,.]/.test(event.key)) {
                      event.preventDefault()
                    }
                  }}
                />
              ) : selectedFilter === 'Date' ? (
                <RangePicker
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
              ) : selectedFilter === 'isVerified' ? (
                <Select
                  onChange={(e) => {
                    setIsVerified(e)
                    navigate(`?page=1&limit=10`)
                  }}
                  value={isVerified}
                  className="w-full lg:w-[268px] h-[43px]"
                >
                  {['Verified', 'UnVerified']?.map((item, i) => {
                    return <Select.Option key={item}>{item}</Select.Option>
                  })}
                </Select>
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
                    filterTitle={[
                      'Email',
                      'Phone',
                      'Full Name',
                      'Role',
                      'Agency Name',
                      'User Code',
                      'Date',
                      'isVerified',
                    ]}
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
            columns={allUserColums}
            // onRow={(record, rowIndex) => {
            //   return {
            //     onClick: (event) => handleNavigate(record), // click row
            //   };
            // }}
            //   loading={loading}
            scroll={{ x: true }}
            loading={getAllAppUsers?.loading}
            pagination={{
              total:
                getAllAppUsers?.data?.data?.meta?.totalPages * pageLimit.limit,
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

export default AppUserTable
