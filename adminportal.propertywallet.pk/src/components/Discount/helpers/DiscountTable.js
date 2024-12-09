import React, { useEffect, useState, useRef } from 'react'
import { Button, Col, Input, Popover, Row, Table, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import TablePagination from '../../../utils/components/TablePagination'
import discoutColumns from '../../../tableColumns/discountColumns.json'
import ViewDetailDeleteIcon from '../../assest/icon/ViewDetailDeleteIcon.png'
import ViewDetailEditIcon from '../../assest/icon/ViewDetailEditIcon.png'
import AddDiscountModal from './AddDiscountModal'
import {
  deleteDiscountApi,
  getAllDiscountsApi,
} from '../../../redux/api/Discount'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import DiscountFilter from './DiscountFilter'
import FilterIcon from '../../assest/icon/filter.png'
import { useModal } from '../../../utils/hooks/useModal'
import { debounce } from 'lodash'

import EditDiscountModal from './EditDiscountModal'
import { scrollToTop } from '../../../utils/utils'

const DiscountTable = ({ isAddModalVisible, toggle }) => {
  const [isEditModalVisible, toggleEdit] = useModal()
  const [dataSource, setDataSource] = useState([])
  const [editData, setEditData] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState('Discount Code')
  const [search, setSearch] = useState('')
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const getAllDiscounts = useSelector((state) => state.getAllDiscounts)
  const updateDiscount = useSelector((state) => state.updateDiscount)
  const deleteDiscount = useSelector((state) => state.deleteDiscount)
  const addDiscount = useSelector((state) => state.addDiscount)

  const debouncedGetAllDiscountsApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllDiscountsApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetAllDiscountsApi(dispatch, pageLimit, search, selectedFilter)
  }, [pageLimit, updateDiscount?.data, deleteDiscount?.data, addDiscount?.data])

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
    if (getAllDiscounts?.data) {
      const data = getAllDiscounts?.data?.data?.items?.map((item, i) => {
        return {
          key: i,
          discountCode: item?.discountCode,
          discountPercentage: item?.discountPercentage,
          startDate: item?.startDate?.split('T')?.[0],
          discountUsage: `${item?.usedCounter}/${item?.noOfUsage}`,
          expiresDate: item?.expiresOn?.split('T')?.[0],
          action: (
            <div className="flex  gap-2">
              <div className="cursor-pointer">
                <img
                  src={ViewDetailEditIcon}
                  alt=""
                  onClick={() => {
                    setEditData(item)
                    toggleEdit()
                  }}
                />{' '}
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  deleteDiscountApi(dispatch, item?.id)
                }}
              >
                <img src={ViewDetailDeleteIcon} alt="" />
              </div>
            </div>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getAllDiscounts?.data])
  return (
    <>
      {isAddModalVisible && (
        <AddDiscountModal visible={isAddModalVisible} toggle={toggle} />
      )}
      {isEditModalVisible && (
        <EditDiscountModal
          editData={editData}
          visible={isEditModalVisible}
          toggle={toggleEdit}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Discount Codes
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Discount Code' ? (
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
              <Popover
                placement="bottomRight"
                content={
                  <DiscountFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Discount Code']}
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
            columns={discoutColumns}
            loading={getAllDiscounts?.loading || deleteDiscount?.loading}
            scroll={{ x: true }}
            pagination={{
              total:
                getAllDiscounts?.data?.data?.meta?.totalPages *
                getAllDiscounts?.data?.data?.meta?.itemsPerPage,
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

export default DiscountTable
