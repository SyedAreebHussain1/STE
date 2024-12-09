import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table, Select, Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TablePagination from '../../../utils/components/TablePagination'
import humanResourcesColumns from './../../../tableColumns/humanResourcesColumns'
import FilterIcon from '../../assest/icon/filter.png'
import { getAllFreelancersForHRApi } from '../../../redux/api/HR'
import HumanResourcesFilter from './HumanResourcesFilter'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../utils/utils'
import { nanoid } from 'nanoid'

const HumanResourcesTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [search, setSearch] = useState('')
  const [isVerified, setIsVerified] = useState('Verified')
  const [range, setRange] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const getAllFreelancersForHR = useSelector(
    (state) => state.getAllFreelancersForHR
  )

  const debouncedGetAllFreelancersForHRApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter, isVerified) => {
      getAllFreelancersForHRApi(
        dispatch,
        pageLimit,
        search,
        selectedFilter,
        isVerified
      )
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetAllFreelancersForHRApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter,
      isVerified
    )
  }, [pageLimit])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search, range, isVerified])

  useEffect(() => {
    setSearch('')
    setRange([])
  }, [selectedFilter, isVerified])

  useEffect(() => {
    if (getAllFreelancersForHR?.data) {
      const data = getAllFreelancersForHR?.data?.data?.items?.map((item) => {
        return {
          freelancerName: item?.freeLancerProfile?.name,
          address: item?.freeLancerProfile?.address,
          referralCode: item?.refCode,
          totalSubscription: item?.subscriberCount,
          signupCount: item?.signupCount,
          phoneNo: item?.phone,
          email: item?.email,
          isSuspendid: (
            <Tag
              style={{ padding: '8px', borderRadius: '28px' }}
              color={item?.isSuspend ? 'red' : 'green'}
            >
              {item?.isSuspend ? 'Suspended' : 'Not Suspended'}
            </Tag>
          ),
          isVerified: item?.isVerified ? (
            <span className="text-[#fff] p-1 border-2 border-[#0BBC64] bg-[#0BBC64] rounded-[67px] text-[12px] text-center">
              Verified
            </span>
          ) : (
            <span className="text-[#fff] border-2 border-[#E23442] bg-[#E23442] rounded-[67px] text-[12px] p-1">
              UnVerified
            </span>
          ),
          action: (
            <Button
              className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[30px] flex-shrink-0"
              onClick={() => {
                navigator(`/dashboard/hr/${item?.id}`)
              }}
            >
              <span>View Subscriptions</span>
            </Button>
          ),
        }
      })

      setDataSource(data)
    }
  }, [getAllFreelancersForHR?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Freelancers
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Select
                onChange={(e) => setIsVerified(e)}
                className="w-full lg:w-[268px] h-[43px]"
                value={isVerified}
              >
                {['Verified', 'UnVerified']?.map((item) => {
                  return <Select.Option key={item}>{item}</Select.Option>
                })}
              </Select>
              {selectedFilter === 'Name' ? (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
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
              <Popover
                placement="bottomRight"
                content={
                  <HumanResourcesFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Name', 'Referral Code', 'Email']}
                  />
                }
                trigger="click"
              >
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
            columns={humanResourcesColumns}
            scroll={{ x: true }}
            loading={getAllFreelancersForHR.loading}
            pagination={{
              total:
                getAllFreelancersForHR?.data?.data?.meta?.totalPages *
                getAllFreelancersForHR?.data?.data?.meta?.itemsPerPage,
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

export default HumanResourcesTable
