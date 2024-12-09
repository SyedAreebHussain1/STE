import React, { useEffect, useRef, useState } from 'react'
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Dropdown, Input, Popover, Row, Select, Table } from 'antd'
// import moment from "moment";
import propertiesdetailsColumns from '../../../../tableColumns/propertiesdetailsColumns.json'
// import TablePagination from "../../../../utils/components/TablePagination";
import { useNavigate, useParams } from 'react-router-dom'
import { debounce } from 'lodash'

import FilterIcon from '../../../assest/icon/filter.png'
import PropertiesTableFilter from './PropertiesTableFilter'
import deleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'
import editIcon from '../../../assest/icon/ViewDetailEditIcon.png'
import {
  getAllProductListApi,
  updatePropertyWalletProductIslLiveStatusApi,
} from '../../../../redux/api/SingleProperty'
import { useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import { useDispatch } from 'react-redux'
import usePageLimit from '../../../../utils/hooks/usePageLimit'
import { scrollToTop } from '../../../../utils/utils'

const PropertiesDetailsTable = () => {
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [dataSource, setDataSource] = useState([])
  // const [pageLimit, setPageLimit] = usePageLimit();
  const getAllProductList = useSelector((state) => state.getAllProductList)
  const updatePropertyWalletProductIslLiveStatus = useSelector(
    (state) => state.updatePropertyWalletProductIslLiveStatus
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  // const [range, setRange] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('Inventory')
  const handle = (product) => {
    // property-wallet-product/getAll/property/wallet/InventoriesByproduct
    navigate(
      `/property-wallet-inventory/properties-details/update-property/${product.id}`,
      {
        state: { product: product },
      }
    )
  }
  const handleAdd = (id) => {
    // navigate(`/dashboard/add-single-property`);
  }

  const debouncedGetAllProductListApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter, status) => {
      getAllProductListApi(dispatch, pageLimit, search, selectedFilter, status)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllProductListApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter,
      true
    )
  }, [pageLimit, updatePropertyWalletProductIslLiveStatus?.data])
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
    if (getAllProductList?.data) {
      const data = getAllProductList?.data?.data?.items?.map((item) => {
        return {
          inventory: (
            <div className="relative" style={{ display: 'flex' }}>
              <img
                style={{ height: '42px', width: '49px' }}
                src={
                  item?.propertyWalletProductPhoto[0]?.photo ||
                  'https://placehold.co/49x42'
                }
                alt=""
              />
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px] absolute left-[30%]">
                {item.title.length >= 30
                  ? `${item.title.substring(0, 30)}...`
                  : item.title}
              </span>{' '}
            </div>
          ),
          status: item?.productStatus,
          ownerName: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.ownerName}
            </span>
          ),
          // paymentPlan: (
          //   <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
          //     123 Maple Street, Willow Creek, CA 90210
          //     { }
          //   </span>
          // ),
          location: (
            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
              {item.address}
            </span>
          ),
          city: (
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              {item.city}
            </span>
          ),
          areaSize: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item.landSize} {item.landArea.title}
            </span>
          ),
          action: (
            <div className="flex  gap-2">
              {!item?.isLive && (
                <Button
                  onClick={(e) => {
                    updatePropertyWalletProductIslLiveStatusApi(
                      dispatch,
                      { isLive: true },
                      item?.id
                    )
                  }}
                  className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] flex-shrink-0 btn-primary-1"
                >
                  <span>Live</span>
                </Button>
              )}
              <div className="cursor-pointer" onClick={() => handle(item)}>
                <img src={editIcon} alt="" />{' '}
              </div>
              <div className="cursor-pointer">
                <img src={deleteIcon} alt="" />
              </div>
            </div>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllProductList?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B font-medium ">
                All Properties
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {/* <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                className="w-full lg:w-[300px] h-[46px]"
              /> */}
              {selectedFilter === 'City' ? (
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
                  <PropertiesTableFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['City', 'Inventory', 'Owner Name']}
                  />
                }
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                  // onClick={showDrawer}
                >
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
            columns={propertiesdetailsColumns}
            loading={
              getAllProductList?.loading ||
              updatePropertyWalletProductIslLiveStatus?.loading
            }
            scroll={{ x: true }}
            // loading={getRoles.loading}
            pagination={{
              total: getAllProductList?.data?.data?.meta?.totalItems,
              showTotal: (total, range) => (
                <TablePagination
                  total={total}
                  range={range}
                  setPageLimit={setPageLimit}
                  pageLimit={pageLimit}
                  // query
                />
              ),
            }}
          />
        </Col>
      </Row>
    </>
  )
}

export default PropertiesDetailsTable
