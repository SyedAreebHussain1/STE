import React, { useEffect, useState, useRef } from 'react'
import { Button, Col, Input, Row, Table, Popover, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'
import allInventoryColumns from '../../../tableColumns/allInventoryColumns.json'
import TablePagination from '../../../utils/components/TablePagination'
import EyeView from '../../assest/icon/eyeview.png'
import InventoryFilter from './InventoryFilter'
import { getAllInventoriesApi } from '../../../redux/api/InventoryManagment'
import { scrollToTop } from '../../../utils/utils'
import FilterIcon from '../../assest/icon/filter.png'
import usePageLimit from '../../../utils/hooks/usePageLimit'

const InventoryTable = () => {
  const [dataSource, setDataSource] = useState([])
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Inventory Name')
  const navigate = useNavigate()
  const [pageLimit, setPageLimit] = usePageLimit()
  const getAllInventories = useSelector((state) => state?.getAllInventories)

  const debouncedGetAllInventoriesApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllInventoriesApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllInventoriesApi(dispatch, pageLimit, search, selectedFilter)
  }, [search, pageLimit])
  // useEffect(() => {
  //   setPageLimit({
  //     page: 1,
  //     limit: 10,
  //   })
  // }, [selectedFilter])
  useEffect(() => {
    setSearch('')
  }, [selectedFilter])

  useEffect(() => {
    if (getAllInventories?.data) {
      const data = getAllInventories?.data?.data?.items?.map((item, i) => {
        return {
          key: i,
          inventoryName: (
            <div className="flex gap-2">
              <img
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '5px',
                  marginTop: '2%',
                  objectFit: 'cover',
                }}
                alt=""
                src={item?.project?.projectPhotos?.[0]?.photo}
              />
              <p>{item?.title}</p>
            </div>
          ),
          singleProject: item?.project?.isIndividual ? 'Single' : 'Project',
          agencyName: item?.createdByUser?.profile?.agency?.agencyName,
          inventoryType: item?.projectType?.title,
          inventorySubType: item?.projectSubType?.title,
          grade: item?.inventoryGrading[0]?.grade || '-',
          price: item?.price,
          areaSize: `${item?.landSize} ${item?.landArea?.title}`,
          sellRent: item?.inVentoryType,
          action: (
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] flex-shrink-0 btn-primary-1"
                onClick={() => {
                  navigate(`/dashboard/inventory/${item?.id}`)
                }}
              >
                <img src={EyeView} alt="" />
                <span>View Details</span>
              </Button>
              {/* <div className="flex flex-wrap  gap-2">
                <div className="cursor-pointer">
                  <img src={ViewDetailDeleteIcon} alt="" />
                </div>
              </div> */}
            </div>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getAllInventories?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div className="flex gap-2 items-center">
              <div className="shrink-0">
                <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                  All Inventories
                </h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Inventory Status' ? (
                <Select
                  onChange={(e) => setSearch(e)}
                  value={search}
                  className="w-full lg:w-[268px] h-[43px]"
                >
                  {['ForRent', 'ForSell']?.map((item, i) => {
                    return <Select.Option key={item}>{item}</Select.Option>
                  })}
                </Select>
              ) : (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    navigate(`?page=1&limit=10`)
                  }}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              )}
              <Popover
                placement="bottomRight"
                content={
                  <InventoryFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={[
                      'Inventory Name',
                      'Agency Name',
                      'Inventory Status',
                    ]}
                    onChange={() => {
                      navigate(`?page=1&limit=10`)
                    }}
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
            columns={allInventoryColumns}
            scroll={{ x: true }}
            loading={getAllInventories?.loading}
            pagination={{
              total:
                getAllInventories?.data?.data?.meta?.totalPages *
                getAllInventories?.data?.data?.meta?.itemsPerPage,
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

export default InventoryTable
