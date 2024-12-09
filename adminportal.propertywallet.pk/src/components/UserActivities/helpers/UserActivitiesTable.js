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
import usersActivityColumns from '../../../tableColumns/usersActivityColumns.json'
// icon
import FilterIcon from '../../assest/icon/filter.png'
import usePageLimit from '../../../utils/hooks/usePageLimit'
import {
  SearchOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons'
import {
  getAllActivitiesLogsApi,
  getAllModuleNamesApi,
} from '../../../redux/api/UserActivities'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../utils/utils'
import moment from 'moment'
import TablePagination from '../../../utils/components/TablePagination'
import { nanoid } from 'nanoid'

const UserActivitiesTable = () => {
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [filter, setFilter] = useState({
    moduleName: '',
    screenName: '',
    UserName: '',
    sortByOrder: 'Descending',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getAllUserActivitiesLogs = useSelector(
    (state) => state.getAllUserActivitiesLogs
  )
  const getAllModuleNames = useSelector((state) => state.getAllModuleNames)
  const [dataSource, setDataSource] = useState([])

  const debouncedGetAllActivitiesLogsApi = useRef(
    debounce((dispatch, pageLimit, filter) => {
      getAllActivitiesLogsApi(dispatch, pageLimit, filter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllActivitiesLogsApi(dispatch, pageLimit, filter)
  }, [pageLimit, filter])
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [filter])

  useEffect(() => {
    if (getAllUserActivitiesLogs?.data) {
      const data = getAllUserActivitiesLogs?.data?.data?.items?.map((item) => {
        return {
          user: item?.user?.profile?.fullName,
          activityScreen: item?.screenName,
          activityDate: moment(item?.createdAt).format('ll'),
          activityTime: moment(item?.createdAt).format('LT'),
          activityModule: item?.moduleName,
          phoneNo: item?.user?.phone,
          email: item?.user?.email,
          agencyName: item?.user?.profile?.agency?.agencyName,
        }
      })
      setDataSource(data)
    }
  }, [getAllUserActivitiesLogs?.data])

  function onChangeFilter(name, value) {
    setFilter((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }
  useEffect(() => {
    getAllModuleNamesApi(dispatch)
  }, [])
  return (
    <>
      <Input
        placeholder={`Search User By Name`}
        prefix={<SearchOutlined />}
        className="w-full lg:w-[268px] h-[43px] mb-4"
        onChange={(e) => onChangeFilter('UserName', e.target.value)}
        value={filter.UserName}
      />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div className="flex gap-2 items-center">
              <div className="shrink-0">
                <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                  All Users Activity
                </h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
              <Select
                className="w-full lg:w-[268px] h-[43px]"
                placeholder="Select Module"
                onChange={(e) => onChangeFilter('moduleName', e)}
                value={filter.moduleName || 'Select Module'}
                allowClear
              >
                {getAllModuleNames?.data?.data?.map((item) => {
                  return (
                    <Select.Option key={item?.log_moduleName}>
                      {item?.log_moduleName}
                    </Select.Option>
                  )
                })}
              </Select>
              <Input
                placeholder={`Search Screens`}
                prefix={<SearchOutlined />}
                className="w-full lg:w-[268px] h-[43px]"
                onChange={(e) => onChangeFilter('screenName', e.target.value)}
                value={filter.screenName}
              />
              <Button
                className="btn-primary flex items-center justify-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                // onClick={showDrawer}
                onClick={() => {
                  if (filter.sortByOrder === 'Ascending') {
                    onChangeFilter('sortByOrder', 'Descending')
                  } else {
                    onChangeFilter('sortByOrder', 'Ascending')
                  }
                }}
              >
                {filter.sortByOrder === 'Ascending' ? (
                  <SortDescendingOutlined style={{ fontSize: 20 }} />
                ) : (
                  <SortAscendingOutlined style={{ fontSize: 20 }} />
                )}
                <span>Sorting</span>
              </Button>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={usersActivityColumns}
            scroll={{ x: true }}
            loading={getAllUserActivitiesLogs?.loading}
            pagination={{
              total:
                getAllUserActivitiesLogs?.data?.data?.meta?.totalPages *
                pageLimit.limit,
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
    </>
  )
}

export default UserActivitiesTable
