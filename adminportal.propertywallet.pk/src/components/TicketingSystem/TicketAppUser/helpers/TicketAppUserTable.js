import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Table, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import ticketUsersColumn from './../../../../tableColumns/ticketUsersColumn.json'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../../utils/utils'
import {
  getAllTicketUsersApi,
  suspendTicketUserApi,
} from '../../../../redux/api/TicketingSystem/TicketAppUser'

const TicketAppUserTable = () => {
  const dispatch = useDispatch()
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [search, setSearch] = useState('')
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getAllTicketUsers = useSelector((state) => state.getAllTicketUsers)
  const suspendTicketUser = useSelector((state) => state.suspendTicketUser)
  const debouncedgetAllTicketUsersApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllTicketUsersApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedgetAllTicketUsersApi(dispatch, pageLimit, search, selectedFilter)
  }, [dispatch, pageLimit, suspendTicketUser?.data])
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
    if (getAllTicketUsers?.data) {
      const data = getAllTicketUsers?.data?.data?.items?.map((item, i) => {
        return {
          key: i,
          name: item?.fullName,
          email: item?.email,
          phone: item?.phone,
          department: item?.department?.title,
          action: item?.isSuspend ? (
            <Button className="text-[#fff] flex items-center border-2 border-[orange] bg-[orange] rounded-[67px] text-[12px] btn-primary">
              <span>Suspended</span>
            </Button>
          ) : (
            <Button
              className="text-[orange] flex items-center border-2 border-[orange] rounded-[67px] text-[12px]"
              onClick={() => {
                suspendTicketUserApi(dispatch, { customerSupportId: item?.id })
              }}
            >
              <span>Suspend</span>
            </Button>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllTicketUsers?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All App User Ticket
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Name' ? (
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
            columns={ticketUsersColumn}
            scroll={{ x: true }}
            loading={getAllTicketUsers?.loading || suspendTicketUser?.loading}
            pagination={{
              total:
                getAllTicketUsers?.data?.data?.meta?.totalPages *
                getAllTicketUsers?.data?.data?.meta?.itemsPerPage,
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

export default TicketAppUserTable
