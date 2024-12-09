import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table, Select, Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TablePagination from '../../../../../../utils/components/TablePagination'
import BDUsersAffiliateColumns from './../../../../../../tableColumns/BDUsersAffiliateColumns'
import FilterIcon from '../../../../../assest/icon/filter.png'
import { getAllBDUsersAffiliateApi } from '../../../../../../redux/api/BDUsers'
import AffiliateUsersFilter from './AffiliateUsersFilter'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../../../utils/utils'

const AffiliateUsersTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Affiliate Name')
  const [search, setSearch] = useState('')
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const getAllAffiliateInBDUsers = useSelector(
    (state) => state.getAllAffiliateInBDUsers
  )
  const createUser = useSelector((state) => state.createUser)

  const debouncedGetAllBDUsersAffiliateApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllBDUsersAffiliateApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllBDUsersAffiliateApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter
    )
  }, [search, pageLimit, createUser])

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
    if (getAllAffiliateInBDUsers?.data) {
      const data = getAllAffiliateInBDUsers?.data?.data?.items?.map((item) => {
        return {
          affiliateName: item?.fullName || '-',
          referralCode: item?.refCode || '-',
          totalSubscription: item.subscribersCount,
          signupTarget: item?.signupTarget || '-',
          salary: item?.salary,
          signupcount: item?.signupCount,
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
            <Button
              className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[40px] flex-shrink-0"
              onClick={() => {
                navigator(
                  `/bussiness-development/users/affiliate-user-details/${item?.id}`
                )
              }}
            >
              <span>View More details</span>
            </Button>
          ),
        }
      })

      setDataSource(data)
    }
  }, [getAllAffiliateInBDUsers?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Affiliate Users
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
                />
              )}

              <Popover
                placement="bottomRight"
                content={
                  <AffiliateUsersFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Affiliate Name', 'Ref Code', 'Email']}
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
            columns={BDUsersAffiliateColumns}
            scroll={{ x: true }}
            loading={getAllAffiliateInBDUsers.loading}
            pagination={{
              total:
                getAllAffiliateInBDUsers?.data?.data?.meta?.totalPages *
                getAllAffiliateInBDUsers?.data?.data?.meta?.itemsPerPage,
              showTotal: (total) => (
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

export default AffiliateUsersTable
