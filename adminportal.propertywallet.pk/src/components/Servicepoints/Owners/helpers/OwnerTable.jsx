import React, { useEffect, useState } from 'react'
import { CalendarOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Space, Table, Tag } from 'antd'
import ownersColumns from '../../../../tableColumns/ownersColumns.json'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPromotionsApi } from '../../../../redux/api/Advertisement/Promotion'

import FilterIcon from '../../../assest/icon/filter.png'

import TablePagination from '../../../../utils/components/TablePagination'
import {
  getInvestorsList,
  getOwnersList,
} from '../../../../redux/api/Investors'
import { scrollToTop } from '../../../../utils/utils'

const OwnerTable = () => {
  const [dataSource, setDataSource] = useState([])
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
    search: '',
  })
  const getAllOwners = useSelector((state) => state?.getAllOwners)
  const addNewInvestor = useSelector((state) => state.addnewInvestor)

  useEffect(() => {
    scrollToTop()
    getOwnersList(dispatch, pageLimit)
  }, [pageLimit, addNewInvestor?.data])

  useEffect(() => {
    if (getAllOwners?.data?.data !== null) {
      const data = getAllOwners?.data?.data?.items.map((item, i) => {
        return {
          name: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.profile?.fullName}
            </span>
          ),
          cnic: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.cnic !== null && item.cnic !== undefined ? item.cnic : '-'}
            </span>
          ),
          agencyName: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.profile?.agency?.agencyName}
            </span>
          ),
          email: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.email}
            </span>
          ),
          totinvestor: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.investorUserCount}
            </span>
          ),
          percentage: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.vendorPercentage &&
              item?.vendorPercentage.percentage !== null &&
              item?.vendorPercentage.percentage !== undefined
                ? item?.vendorPercentage.percentage
                : '-'}
            </span>
          ),
        }
      })

      setDataSource(data)
    }
  }, [getAllOwners?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                Owner List
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                onChange={(e) => {
                  setPageLimit({
                    ...pageLimit,
                    search: e.target.value,
                  })
                }}
                value={pageLimit.search}
                className="w-full lg:w-[300px] h-[40px]"
              />
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={ownersColumns}
            //   loading={loading}
            scroll={{ x: true }}
            // loading={getRoles.loading}
            loading={getAllOwners.loading}
            pagination={{
              total: getAllOwners?.data?.data?.meta?.totalItems,
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

export default OwnerTable
