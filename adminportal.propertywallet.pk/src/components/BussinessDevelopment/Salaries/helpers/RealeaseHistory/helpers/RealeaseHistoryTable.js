import React, { useEffect, useRef, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import TablePagination from '../../../../../../utils/components/TablePagination'
import FilterIcon from '../../../../../assest/icon/filter.png'
import BDReleaseHistoryColumns from './../../../../../../tableColumns/BDReleaseHistoryColumns.json'

import { allBDReleaseHistoryApi } from '../../../../../../redux/api/BDSalary'
import moment from 'moment'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../../../utils/utils'
import AffiliateUsersFilter from '../../../../Users/helpers/AffiliateUser/helpers/AffiliateUsersFilter'
import { Select } from 'antd/es'

const RealeaseHistoryTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [search, setSearch] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const getReleaseHistory = useSelector((state) => state?.getReleaseHistory)
  const postReleaseSalaries = useSelector((state) => state?.postReleaseSalaries)

  // useEffect(() => {
  //   allBDReleaseHistoryApi(dispatch, pageLimit)
  // }, [pageLimit, postReleaseSalaries])

  // useEffect(() => {
  //   setPageLimit({
  //     page: 1,
  //     limit: 10,
  //   })
  // }, [search])

  const debouncedAllBDReleaseHistoryApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      allBDReleaseHistoryApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedAllBDReleaseHistoryApi(dispatch, pageLimit, search, selectedFilter)
  }, [search, pageLimit, postReleaseSalaries])

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
    if (getReleaseHistory?.data) {
      const data = getReleaseHistory?.data?.data?.items?.map((item, i) => {
        return {
          key: item?.id,
          sno: i + 1 || '-',
          name: item?.bdUser?.fullName || '-',
          amount: item?.amount,
          refCode: item?.bdUser?.refCode || '-',
          accountNumber: item?.bdUser?.accountNumber || '-',
          bankName: item?.bankName || '-',
          date: moment(item.createdAt).format('DD-MM-YYYY') || '-',
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getReleaseHistory?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Release History
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
                    filterTitle={['Ref Code', 'Name']}
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
            columns={BDReleaseHistoryColumns}
            scroll={{ x: true }}
            loading={getReleaseHistory.loading}
            pagination={{
              total:
                getReleaseHistory?.data?.data?.meta?.totalPages *
                getReleaseHistory?.data?.data?.meta?.itemsPerPage,
              showTotal: (total) => (
                <TablePagination
                  total={total}
                  // range={range}
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

export default RealeaseHistoryTable
