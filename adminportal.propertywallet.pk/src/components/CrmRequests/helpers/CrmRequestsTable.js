import { Button, Col, Input, Popover, Row, Space, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import {
  PlusCircleOutlined,
  SearchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { debounce } from 'lodash'
import TablePagination from '../../../utils/components/TablePagination'
import crmRequestsColumns from './../../../tableColumns/crmRequestsColumns.json'
import CrmFilter from './CrmFilter'

// icon
import FilterIcon from '../../assest/icon/filter.png'
import { useModal } from '../../../utils/hooks/useModal'
import CommisionAndDiscountModal from './CommisionAndDiscountModal'
import {
  getCrmRequestsApi,
  updateCrmRequestsApi,
} from '../../../redux/api/CrmRequests'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import usePageLimit from '../../../utils/hooks/usePageLimit'

const CrmRequestsTable = () => {
  const [isAddModalVisible, toggleAdd] = useModal()
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = usePageLimit()
  const getCrmRequests = useSelector((state) => state.getCrmRequests)
  const updateCrmRequests = useSelector((state) => state.updateCrmRequests)
  const dispatch = useDispatch()
  const [updateId, setUpdateId] = useState(null)
  const [status, setStatus] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Project Name')
  const [search, setSearch] = useState('')
  const [range, setRange] = useState(null)

  const debouncedGetCrmRequestsApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getCrmRequestsApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    debouncedGetCrmRequestsApi(dispatch, pageLimit, search, selectedFilter)
  }, [updateCrmRequests, pageLimit])
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
    if (getCrmRequests?.data?.data?.items) {
      const data = getCrmRequests?.data?.data?.items.map((item, i) => {
        return {
          key: i,
          projectName: item.projectName,
          builderName: item.builderName,
          price: item.price,
          units: item.noOfUnit,
          location: item.address,
          totalAreaSize: item.landArea,
          action: (
            <Space>
              {item.status === 'Approved' ? (
                <Button className="text-[#fff] flex items-center border-2 bg-[#0BBC64] border-[#0BBC64] rounded-[67px] text-[12px] btn-primary">
                  <CheckCircleOutlined />
                  <span>Accepted</span>
                </Button>
              ) : item.status === 'Rejected' ? (
                <Button className="bg-[#E23442] text-[#fff] flex items-center border-2 border-[#E23442] rounded-[67px] text-[12px] btn-primary">
                  <CloseCircleOutlined />
                  <span>Rejected</span>
                </Button>
              ) : (
                <>
                  <Button
                    className="text-[#0BBC64] flex items-center border-2 border-[#0BBC64] rounded-[67px] text-[12px]"
                    onClick={() => {
                      setUpdateId(item.id)
                      setStatus('Approved')
                      toggleAdd()
                    }}
                  >
                    <CheckCircleOutlined />
                    <span>Accept</span>
                  </Button>
                  <Button
                    className="text-[#E23442] flex items-center border-2 border-[#E23442] rounded-[67px] text-[12px]"
                    onClick={() => {
                      updateCrmRequestsApi(
                        dispatch,
                        { status: 'Rejected' },
                        item.id
                      )
                    }}
                  >
                    <CloseCircleOutlined />
                    <span>Reject</span>
                  </Button>
                </>
              )}
            </Space>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getCrmRequests?.data])
  return (
    <>
      <CommisionAndDiscountModal
        modal={{ isAddModalVisible, toggleAdd }}
        updateId={updateId}
        status={status}
      />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold">All Projects</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Location' ? (
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
                  <CrmFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Location', 'Builder Name', 'Project Name']}
                  />
                }
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px] flex-shrink-0"
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
            columns={crmRequestsColumns}
            //   loading={loading}
            scroll={{ x: true }}
            loading={getCrmRequests?.loading}
            pagination={{
              total: getCrmRequests?.data?.data?.meta?.totalItems,
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

export default CrmRequestsTable
