import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table, Select, Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TablePagination from '../../../../../../utils/components/TablePagination'
import BDReleaseSalaryColumns from './../../../../../../tableColumns/BDReleaseSalaryColumns.json'

import FilterIcon from '../../../../../assest/icon/filter.png'

import { nanoid } from 'nanoid'
import { allBDRealeaseSalariesApi } from '../../../../../../redux/api/BDSalary'
import AffiliateUsersFilter from '../../../../Users/helpers/AffiliateUser/helpers/AffiliateUsersFilter'
import { scrollToTop } from '../../../../../../utils/utils'
import { debounce } from 'lodash'

const ReleaseSalariesTable = ({ rowId, setRowId }) => {
  const [dataSource, setDataSource] = useState([])
  const [search, setSearch] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const getRealeaseSalaries = useSelector((state) => state.getRealeaseSalaries)
  const postReleaseSalaries = useSelector((state) => state?.postReleaseSalaries)

  // useEffect(() => {
  //   allBDRealeaseSalariesApi(dispatch, pageLimit)
  // }, [pageLimit, postReleaseSalaries])

  // useEffect(() => {
  //   setPageLimit({
  //     page: 1,
  //     limit: 10,
  //   })
  // }, [search])
  const debouncedAllBDRealeaseSalariesApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      allBDRealeaseSalariesApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedAllBDRealeaseSalariesApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter
    )
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
    if (getRealeaseSalaries?.data) {
      const data = getRealeaseSalaries?.data?.data?.items?.map((item, i) => {
        return {
          key: item?.id,
          sno: i + 1 || '-',
          name: item?.fullName || '-',
          amount: item?.bdWallet?.amount,
          refCode: item?.refCode || '-',
          accountNumber: item?.accountNumber || '-',
          bankName: item?.bankName || '-',
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getRealeaseSalaries?.data])

  const rowSelection = {
    selectedRowKeys: rowId,
    onChange: (selectedRowKeys, selectedRows) => {
      setRowId(selectedRowKeys)
    },
    getCheckboxProps: (record) => ({
      disabled: record.amount <= 0,
      // Column configuration not to be checked
      amount: record.amount,
    }),
  }
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Release Salaries
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
            rowSelection={rowSelection}
            dataSource={dataSource}
            columns={BDReleaseSalaryColumns}
            scroll={{ x: true }}
            loading={getRealeaseSalaries.loading}
            pagination={{
              total:
                getRealeaseSalaries?.data?.data?.meta?.totalPages *
                getRealeaseSalaries?.data?.data?.meta?.itemsPerPage,
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

export default ReleaseSalariesTable
