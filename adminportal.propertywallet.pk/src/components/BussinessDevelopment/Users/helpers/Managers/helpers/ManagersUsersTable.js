import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TablePagination from '../../../../../../utils/components/TablePagination'
import BDUsersManagerColumns from './../../../../../../tableColumns/BDUsersManagerColumns'
import FilterIcon from '../../../../../assest/icon/filter.png'
import { getAllBDUsersManagerApi } from '../../../../../../redux/api/BDUsers'
import { useModal } from '../../../../../../utils/hooks/useModal'
import AssignAffiliate from './AssignAffiliateUserToManagerModal'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../../../utils/utils'
import ManagersUsersFilter from './ManagersUsersFilter'

const ManagersUsersTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Manager Name')
  const [search, setSearch] = useState('')
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [userValue, setUserValue] = useState(null)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const navigator = useNavigate()
  const getAllManagerInBDUsers = useSelector(
    (state) => state.getAllManagerInBDUsers
  )
  const assignAffiliate = useSelector(
    (state) => state?.AssignAffiliateToManager
  )
  const [isAssignVisible, toggleAssign] = useModal()
  const createUser = useSelector((state) => state.createUser)

  const debouncedGetAllBDUsersManagerApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllBDUsersManagerApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllBDUsersManagerApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter
    )
  }, [search, pageLimit, createUser, assignAffiliate])

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
    if (getAllManagerInBDUsers?.data) {
      const data = getAllManagerInBDUsers?.data?.data?.items?.map((item) => {
        return {
          managerName: item?.fullName || '-',
          referralCode: item?.refCode || '-',
          totalSubscription: item?.subscribersCount,
          salary: item?.salary,
          phoneNo: item?.phone || '-',
          email: item?.email || '-',
          isactive: item?.isActive ? (
            <span className="text-[#fff] py-[9px] px-[12px] border-2  border-[#0BBC64] bg-[#0BBC64]  rounded-[67px] text-[12px] text-center">
              Active
            </span>
          ) : (
            <span className="text-[#fff] border-2 border-[#E23442] bg-[#E23442] rounded-[67px] text-[12px] py-[9px] px-[12px]">
              Deactive
            </span>
          ),
          action: (
            <div className=" flex gap-3">
              <Button
                className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[40px] flex-shrink-0 "
                onClick={() => {
                  navigator(
                    `/bussiness-development/users/manager-details/${item?.id}`
                  )
                }}
              >
                <span>View More details</span>
              </Button>
              <Button
                onClick={() => {
                  toggleAssign()
                  setUserValue(item)
                }}
                className="flex items-center font-medium text-[12px] gap-2 border-[#27A3A3] text-[#27A3A3] rounded-[41px] h-[38px] flex-shrink-0"
              >
                <span>Assign Affiliate</span>
              </Button>
            </div>
          ),
        }
      })

      setDataSource(data)
    }
  }, [getAllManagerInBDUsers?.data])
  return (
    <>
      {isAssignVisible && (
        <AssignAffiliate
          visible={isAssignVisible}
          toggle={toggleAssign}
          value={userValue}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Managers
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
                  <ManagersUsersFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Manager Name', 'Ref Code', 'Email']}
                    // onChange={() => {
                    //   navigate(`?page=1&limit=10`)
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
            columns={BDUsersManagerColumns}
            scroll={{ x: true }}
            loading={getAllManagerInBDUsers.loading}
            pagination={{
              total:
                getAllManagerInBDUsers?.data?.data?.meta?.totalPages *
                getAllManagerInBDUsers?.data?.data?.meta?.itemsPerPage,
              showTotal: (total, range) => (
                <TablePagination
                  total={total}
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

export default ManagersUsersTable
