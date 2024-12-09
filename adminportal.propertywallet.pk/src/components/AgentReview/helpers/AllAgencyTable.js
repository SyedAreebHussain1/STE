import React, { useEffect, useState, useRef } from 'react'
import { RightCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import getAllAgencyForAgentReviewColumns from '../../../tableColumns/getAllAgencyForAgentReviewColumns.json'
import { useNavigate } from 'react-router-dom'
import { GetAllAgencyForAgentReviewApi } from '../../../redux/api/AgencyReview'
import { debounce } from 'lodash'
import { scrollToTop } from '../../../utils/utils'
import ListingFilter from '../../Advertisement/Listings/helpers/ListingFilter'
import FilterIcon from '../../assest/icon/filter.png'

const AllAgencyTable = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const [selectedFilter, setSelectedFilter] = useState('Agency Name')
  const [search, setSearch] = useState('')
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const GetAllAgencyForAgentReview = useSelector(
    (state) => state?.GetAllAgencyForAgentReview
  )

  const debouncedGetAllAgencyForAgentReviewApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      GetAllAgencyForAgentReviewApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllAgencyForAgentReviewApi(
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
  }, [search])

  useEffect(() => {
    setSearch('')
  }, [selectedFilter])

  useEffect(() => {
    if (GetAllAgencyForAgentReview?.data) {
      const data = GetAllAgencyForAgentReview?.data?.data?.items?.map(
        (val, i) => {
          return {
            key: i + 1,
            sno: i + 1,
            agencyname: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.agencyName || '-'}
              </span>
            ),
            agencyCode: (
              <span className="text-[#3D4350] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[21px]">
                {val?.agencyCode || '-'}
              </span>
            ),
            city: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {' '}
                {val?.city || '-'}
              </span>
            ),
            country: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.country || '-'}
              </span>
            ),

            address:
              val?.address?.length > 20 ? (
                <Popover
                  content={
                    <p className="text-[12px] font-medium text-[#3D4350] max-w-[250px] break-words">
                      {val?.address}
                    </p>
                  }
                >
                  <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[150px]">
                    {val?.address}
                  </p>
                </Popover>
              ) : (
                <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[150px]">
                  {val?.address || '-'}
                </p>
              ),

            action: (
              <div className="flex flex-wrap  gap-2">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    if (val?.id) {
                      navigator(`/agency-review/${val?.id}`)
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
  }, [GetAllAgencyForAgentReview?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Agency
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search ${selectedFilter}`}
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              />
              <Popover
                placement="bottomRight"
                content={
                  <ListingFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Agency Name', 'Agency Code']}
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
            columns={getAllAgencyForAgentReviewColumns}
            scroll={{ x: true }}
            loading={GetAllAgencyForAgentReview?.loading}
            pagination={{
              total:
                GetAllAgencyForAgentReview?.data?.data?.meta?.totalPages *
                GetAllAgencyForAgentReview?.data?.data?.meta?.itemsPerPage,
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

export default AllAgencyTable
