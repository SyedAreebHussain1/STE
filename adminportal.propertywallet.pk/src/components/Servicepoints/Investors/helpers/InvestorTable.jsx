import React, { useEffect, useState } from 'react'
import { CalendarOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Space, Table, Tag } from 'antd'
import investorsColumns from '../../../../tableColumns/investorsColumns.json'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPromotionsApi } from '../../../../redux/api/Advertisement/Promotion'

import FilterIcon from '../../../assest/icon/filter.png'

import NoTableData from '../../../../utils/components/NoTableData'
import TablePagination from '../../../../utils/components/TablePagination'
import { getInvestorsList } from '../../../../redux/api/Investors'
import { scrollToTop } from '../../../../utils/utils'

const InvestorTable = () => {
  const [dataSource, setDataSource] = useState([])
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
    search: '',
  })
  const getAllInvestor = useSelector((state) => state?.getAllInvestor)
  const addNewInvestor = useSelector((state) => state.addnewInvestor)

  useEffect(() => {
    scrollToTop()
    getInvestorsList(dispatch, pageLimit)
  }, [pageLimit, addNewInvestor?.data])

  useEffect(() => {
    if (getAllInvestor?.data?.data !== null) {
      const data = getAllInvestor?.data?.data?.items.map((item, i) => {
        return {
          name: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.fullName}
            </span>
          ),
          cnic: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.cnic}
            </span>
          ),
          email: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.email}
            </span>
          ),
          phone: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.phone}
            </span>
          ),
        }
      })

      setDataSource(data)
    }
  }, [getAllInvestor?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                Investors List
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
              {/* <Popover
                placement="bottomRight"
                // content={<ProjectTabelFilter filterTitle={filterTitle} />}
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                  // onClick={showDrawer}
                >
                  <img
                    src={FilterIcon}
                    style={{ filter: "brightness(4)" }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover> */}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={investorsColumns}
            //   loading={loading}
            scroll={{ x: true }}
            // loading={getRoles.loading}
            loading={getAllInvestor.loading}
            pagination={{
              total: getAllInvestor?.data?.data?.meta?.totalItems,
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

export default InvestorTable
