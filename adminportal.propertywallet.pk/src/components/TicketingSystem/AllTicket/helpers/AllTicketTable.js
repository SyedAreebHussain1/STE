import React, { useEffect, useState, useRef } from 'react'
import { RightCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import allTicketColumns from './../../../../tableColumns/allTicketColumns.json'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../utils/utils'
import { useNavigate } from 'react-router-dom'
import { getAllTicketsForAdminSideApi } from '../../../../redux/api/TicketingSystem/AllTicket'

const AllTicketTable = () => {
  const dispatch = useDispatch()
  const [selectedFilter, setSelectedFilter] = useState('Ticket Subject')
  const [search, setSearch] = useState('')
  const navigator = useNavigate()
  const [range, setRange] = useState([])
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getAllTicketsForAdminSide = useSelector(
    (state) => state?.getAllTicketsForAdminSide
  )
  const debouncedGetAllTicketsForAdminSideApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllTicketsForAdminSideApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllTicketsForAdminSideApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter
    )
  }, [dispatch, pageLimit])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search, range])

  useEffect(() => {
    setSearch('')
    setRange([])
  }, [selectedFilter])

  useEffect(() => {
    if (getAllTicketsForAdminSide?.data) {
      const data = getAllTicketsForAdminSide?.data?.data?.items?.map(
        (val, i) => {
          return {
            key: i + 1,
            sno: i + 1,
            ticketSubject: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.ticketSubject || '-'}
              </span>
            ),
            priority: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.priority || '-'}
              </span>
            ),
            status: (
              <span className="text-[#3D4350] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[21px]">
                {val?.status || '-'}
              </span>
            ),
            date: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.createdAt.split('T')[0] || '-'}
              </span>
            ),

            action: (
              <div className="flex flex-wrap  gap-2">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    if (val?.id) {
                      navigator(`/ticket-system/all-ticket/${val?.id}`)
                    }
                  }}
                >
                  <RightCircleOutlined style={{ fontSize: '1.5rem' }} />
                </div>
              </div>
            ),
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllTicketsForAdminSide?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Tickets{' '}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Ticket Subject' ? (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              ) : (
                ''
              )}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={allTicketColumns}
            scroll={{ x: true }}
            loading={getAllTicketsForAdminSide?.loading}
            pagination={{
              total:
                getAllTicketsForAdminSide?.data?.data?.meta?.totalPages *
                getAllTicketsForAdminSide?.data?.data?.meta?.itemsPerPage,
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

export default AllTicketTable
