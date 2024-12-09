import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Table, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import TablePagination from '../../../../../../../utils/components/TablePagination'
import { scrollToTop } from '../../../../../../../utils/utils'
import projectLogsColumns from '../../../../../../../tableColumns/projectLogsColumns.json'
import { getLogsByProjectIdForAdminApi } from '../../../../../../../redux/api/ProjectCoordinator'
import { debounce } from 'lodash'

const LogsDetailTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Client Name')
  const [search, setSearch] = useState('')
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const { id } = params
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  const getLogsByProjectIdForAdmin = useSelector(
    (state) => state.getLogsByProjectIdForAdmin
  )

  const debouncedGetLogsByProjectIdForAdminApi = useRef(
    debounce((dispatch, id, pageLimit, search, selectedFilter) => {
      getLogsByProjectIdForAdminApi(
        dispatch,
        id,
        pageLimit,
        search,
        selectedFilter
      )
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetLogsByProjectIdForAdminApi(
      dispatch,
      id,
      pageLimit,
      search,
      selectedFilter
    )
  }, [dispatch, pageLimit, id])

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
    if (getLogsByProjectIdForAdmin?.data?.data?.items.length > 0) {
      const data = getLogsByProjectIdForAdmin?.data?.data?.items.map(
        (item, i) => {
          return {
            key: i,
            agentName: item?.agency?.createdByUser?.profile?.fullName || '-',
            clientName: item?.clientName || '-',
            projectName: item?.propertyWalletProject?.projectName || '-',
            attendantName: item?.attendantName || '-',
            date: item?.createdAt?.split('T')?.[0] || '-',
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getLogsByProjectIdForAdmin?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Logs
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Status' ? (
                <Select
                  onChange={(e) => setSearch(e)}
                  value={search}
                  className="w-full lg:w-[268px] h-[43px]"
                  allowClear
                >
                  <Select.Option>Active</Select.Option>
                  <Select.Option>In Active</Select.Option>
                </Select>
              ) : (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              )}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={projectLogsColumns}
            scroll={{ x: true }}
            loading={getLogsByProjectIdForAdmin?.loading}
            pagination={{
              total:
                getLogsByProjectIdForAdmin?.data?.data?.meta?.totalPages *
                getLogsByProjectIdForAdmin?.data?.data?.meta?.itemsPerPage,
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

export default LogsDetailTable
