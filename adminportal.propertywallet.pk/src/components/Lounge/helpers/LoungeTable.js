import React, { useEffect, useState, useRef } from 'react'
import {
  SearchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table, Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import FilterIcon from '../../assest/icon/filter.png'
import { debounce } from 'lodash'
import loungeColumns from '../../../tableColumns/loungeColumns.json'
import { scrollToTop } from '../../../utils/utils'
import TableFilter from '../../../utils/components/TableFilter'
import AddNewLoungeModal from './AddNewLoungeModal'
import { getLoungeApi, loungeActiveStatusApi } from '../../../redux/api/Lounge'
import moment from 'moment'
import { useModal } from '../../../utils/hooks/useModal'
import UpdateLoungeModal from './UpdateLoungeModal'

// icons
import activesignIcon from '../../assest/icon/activesign.png'
import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import deleteIcon from '../../assest/icon/ViewDetailDeleteIcon.png'

const LoungeTable = ({ isAddModalVisible, toggle }) => {
  const [dataSource, setDataSource] = useState([])
  const [updateData, setUpdateData] = useState()
  const [isUpdateModalVisible, toggleUpdate] = useModal()
  const [selectedFilter, setSelectedFilter] = useState('Lounge Name')
  const [search, setSearch] = useState('')
  const [isActive, setIsActive] = useState({
    isActive: true,
  })
  const [deActive, setDeActive] = useState({
    isActive: false,
  })
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const getLounge = useSelector((state) => state?.getLounge)
  const loungeActiveStatus = useSelector((state) => state?.loungeActiveStatus)

  const debouncedGetLoungeApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getLoungeApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetLoungeApi(dispatch, pageLimit, search, selectedFilter)
  }, [dispatch, pageLimit])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])

  useEffect(() => {
    setSearch('')
  }, [selectedFilter])
  function onSuccess() {
    getLoungeApi(dispatch, pageLimit, search, selectedFilter)
  }

  useEffect(() => {
    if (getLounge?.data) {
      const data = getLounge?.data?.data?.items?.map((val, i) => {
        return {
          key: i,
          loungeName: (
            <div className="relative flex flex-wrap gap-2 items-center">
              <img
                style={{ height: '42px', width: '49px' }}
                src={val?.logo && val?.logo}
                alt=""
              />
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                {val?.name}
              </span>{' '}
            </div>
          ),
          loungeOwner: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {val?.assignLounge?.loungeUser?.fullName || '-'}
            </span>
          ),
          createDate: (
            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
              {moment(val?.createdAt).format('MM/DD/YYYY')}
            </span>
          ),
          description: (
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              {val?.shortDescription || '-'}
            </span>
          ),
          status: (
            <div className="flex font-semibold text-[12px] leading-[18px] text-[#667085] gap-1">
              {
                <>
                  <span>
                    <img src={val?.isActive ? activesignIcon : ''} alt="" />
                  </span>
                  <span>{val?.isActive ? 'Active' : 'Deactive'}</span>
                </>
              }
            </div>
          ),
          action: (
            <Space>
              <div className="flex space-around flex-wrap  gap-2">
                <div
                  onClick={() => [setUpdateData(val), toggleUpdate()]}
                  className="cursor-pointer"
                >
                  <img src={editIcon} alt="" />{' '}
                </div>
                <div className="cursor-pointer">
                  {val?.isActive ? (
                    <>
                      <Button
                        onClick={() =>
                          loungeActiveStatusApi(
                            dispatch,
                            deActive,
                            onSuccess,
                            val?.id
                          )
                        }
                        className="text-[#fff] flex items-center border-2 border-[#E23442] bg-[#E23442] rounded-[67px] text-[12px] btn-primary"
                      >
                        <CloseCircleOutlined />
                        <span>Suspend</span>
                      </Button>
                    </>
                  ) : (
                    <Space>
                      <>
                        <Button
                          onClick={() =>
                            loungeActiveStatusApi(
                              dispatch,
                              isActive,
                              onSuccess,
                              val?.id
                            )
                          }
                          className="text-[#fff] flex items-center border-2 border-[#0BBC64] bg-[#0BBC64] rounded-[67px] text-[12px] btn-primary"
                        >
                          <CheckCircleOutlined />
                          <span>Active</span>
                        </Button>
                      </>
                    </Space>
                  )}
                </div>
              </div>
            </Space>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getLounge?.data])

  return (
    <>
      {isAddModalVisible && (
        <AddNewLoungeModal visible={isAddModalVisible} toggle={toggle} />
      )}
      {isUpdateModalVisible && (
        <UpdateLoungeModal
          visible={isUpdateModalVisible}
          toggle={toggleUpdate}
          updateData={updateData}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Lounges
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
              <Popover
                placement="bottomRight"
                content={
                  <TableFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Lounge Name', 'Lounge Owner']}
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
            columns={loungeColumns}
            scroll={{ x: true }}
            loading={getLounge?.loading}
            pagination={{
              total:
                getLounge?.data?.data?.meta?.totalPages *
                getLounge?.data?.data?.meta?.itemsPerPage,
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

export default LoungeTable
