import React, { useEffect, useRef, useState } from 'react'
import { CalendarOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Space, Table, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import queriesColumns from '../../../../tableColumns/queriesColumns.json'

// icon
import FilterIcon from '../../../assest/icon/filter.png'
import Eyeview from '../../../assest/icon/eyeview.png'

import TablePagination from '../../../../utils/components/TablePagination'
import { useModal } from '../../../../utils/hooks/useModal'
import QueriesViewDetailModal from './QueriesViewDetailModal'
import { getAllQueriesApi } from '../../../../redux/api/Support/Queries'
// import usePageLimit from "../../../../utils/hooks/usePageLimit";
import QueriesFilter from './QueriesFilter'
import moment from 'moment'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../utils/utils'

const QueriesTable = () => {
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const [isAddModalVisible, toggleAdd] = useModal()
  const [selectedData, setSelectedData] = useState(null)
  // const [pageLimit, setPageLimit] = usePageLimit();
  const [dataSource, setDataSource] = useState([])
  const getAllQueries = useSelector((state) => state.getAllQueries)
  const [selectedFilter, setSelectedFilter] = useState('Full Name')
  const [search, setSearch] = useState('')
  const [range, setRange] = useState(null)
  const handleClick = (e, data) => {
    toggleAdd()
    setSelectedData(data)
  }
  const debouncedGetAllQueriesApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter, range) => {
      getAllQueriesApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetAllQueriesApi(dispatch, pageLimit, search, selectedFilter)
  }, [pageLimit])
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
    if (getAllQueries?.data) {
      const data = getAllQueries?.data?.data?.items?.map((item, i) => {
        return {
          key: i,
          name: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.name}
            </span>
          ),
          phoneNo: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.phoneNo}
            </span>
          ),
          email: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.email}
            </span>
          ),
          subject: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.subject}
            </span>
          ),
          message: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.message.length >= 30
                ? `${item.message.substring(0, 30)}...`
                : item.message}
            </span>
          ),
          date: (
            <span className="text-[12px] font-medium text-[#444B54]">
              {moment(item.createdAt).format('DD-MM-YYYY')}
            </span>
          ),
          time: (
            <span className="text-[12px] font-medium text-[#444B54]">
              {moment(item.createdAt).format('h:mm A')}
            </span>
          ),
          action: (
            <Button
              // onClick={toggleAdd}
              onClick={(e) => handleClick(e, item)}
              className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] w-max"
            >
              <img src={Eyeview} alt="" />
              <span>View Details</span>
            </Button>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllQueries?.data])

  return (
    <>
      <QueriesViewDetailModal
        modal={{ isAddModalVisible, toggleAdd }}
        selectedData={selectedData}
      />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Queries
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
                  <QueriesFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Email', 'Phone', 'Full Name']}
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
                    // style={{ filter: "brightness(4)" }}
                    className="brightness-4"
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={queriesColumns}
            scroll={{ x: true }}
            loading={getAllQueries.loading}
            pagination={{
              total: getAllQueries?.data?.data?.meta?.totalItems,
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

export default QueriesTable
