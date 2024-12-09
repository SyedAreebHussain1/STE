import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Select, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import ProjectTabelFilter from '../../../PropertyWalletInventory/ProjectDetails/helpers/ProjectTabelFilter'
import hotListingColumns from '../../../../tableColumns/hotListingColumns.json'
import FilterIcon from '../../../assest/icon/filter.png'
import NoTableData from '../../../../utils/components/NoTableData'
import { getAllHotListingApi } from '../../../../redux/api/Advertisement/HotListing'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import ListingFilter from './ListingFilter'
import moment from 'moment'
import { debounce } from 'lodash'
import Eyeview from '../../../assest/icon/eyeview.png'
import { scrollToTop } from '../../../../utils/utils'

const ListingsTable = ({ modal, setHotListingIdToState }) => {
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const [dataSource, setDataSource] = useState([])
  const [search, setSearch] = useState('')
  // const [range, setRange] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('Listing Name')

  const createHotListing = useSelector((state) => state.createHotListing)
  const getAllHotListing = useSelector((state) => state.getAllHotListing)
  const deleteHotListing = useSelector((state) => state.deleteHotListing)
  const updateHotListing = useSelector((state) => state.updateHotListing)

  const debouncedGetAllHotListingApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllHotListingApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetAllHotListingApi(dispatch, pageLimit, search, selectedFilter)
  }, [
    dispatch,
    createHotListing?.data,
    pageLimit,
    deleteHotListing?.data,
    updateHotListing?.data,
  ])
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])
  useEffect(() => {
    setSearch('')
    // setRange([]);
  }, [selectedFilter])

  useEffect(() => {
    if (getAllHotListing?.data) {
      if (
        getAllHotListing?.data?.data?.items?.length === 0 &&
        pageLimit.page !== 1
      ) {
        setPageLimit((prev) => {
          return {
            page: prev.page - 1,
            limit: prev.limit,
          }
        })
        return
      }
      const data = getAllHotListing?.data?.data?.items?.map((item, i) => {
        return {
          listingNames: item.title,
          status:
            item.status === 'ACTIVE' ? (
              <span className="text-[#34ACE0] bg-[#34ACE00D] py-[3px] px-[8px] rounded-[21px]">
                Active
              </span>
            ) : (
              <span className="text-[#ED870B] bg-[#ED870B0D] py-[3px] px-[8px] rounded-[21px]">
                In-Active
              </span>
            ),
          dateCreated: moment(item.createdAt).format('DD-MM-YYYY'),
          action: (
            <Button
              onClick={() => {
                setHotListingIdToState(item.id)
                modal.toggleEdit()
              }}
              className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] px-[12px] py-[10px]"
            >
              <img src={Eyeview} alt="" />
              <span>Edit</span>
            </Button>
          ),
        }
      })

      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllHotListing?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                Hot Listings
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Status' ? (
                <Select
                  onChange={(e) => setSearch(e)}
                  value={search}
                  allowClear
                  className="w-full lg:w-[268px] h-[43px]"
                >
                  {['ACTIVE', 'INACTIVE']?.map((item, i) => {
                    return <Select.Option key={item}>{item}</Select.Option>
                  })}
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
                  <ListingFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Status', 'Listing Name']}
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
            columns={hotListingColumns}
            //   loading={loading}
            scroll={{ x: true }}
            locale={{
              emptyText: (
                <NoTableData
                  handleOnClick={modal.toggleAdd}
                  text="No Listings Added"
                  buttonText="Add New Listing"
                />
              ),
            }}
            loading={getAllHotListing.loading}
            pagination={{
              total:
                getAllHotListing?.data?.data?.meta?.totalPages *
                getAllHotListing?.data?.data?.meta?.itemsPerPage,
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

export default ListingsTable
