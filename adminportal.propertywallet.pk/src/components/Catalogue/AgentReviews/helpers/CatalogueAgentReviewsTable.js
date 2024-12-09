import React, { useEffect, useState, useRef } from 'react'
import { Button, Col, Divider, Input, Popover, Rate, Row, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import CatalogueAgentReviewColumns from '../../../../tableColumns/CatalogueAgentReviewColumns.json'
import { useNavigate } from 'react-router-dom'
import { GetAllCatalogueAgentReviewApi } from '../../../../redux/api/CatalogueAgentReview'
import FilterIcon from '../../../assest/icon/filter.png'
import { scrollToTop } from '../../../../utils/utils'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import ListingFilter from '../../../Advertisement/Listings/helpers/ListingFilter'

const CatalogueAgentReviewTable = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const [selectedFilter, setSelectedFilter] = useState('Agent Name')
  const [search, setSearch] = useState('')
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const navigate = useNavigate()

  const GetAllCatalogueAgentReview = useSelector(
    (state) => state?.GetAllCatalogueAgentReview
  )

  const debouncedGetAllCatalogueAgentReviewApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      GetAllCatalogueAgentReviewApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllCatalogueAgentReviewApi(
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

  const handleNavigate = (item) => {
    navigate(`/dashboard/app-user/${item?.userId}`, {
      state: item?.profile,
    })
  }

  useEffect(() => {
    if (GetAllCatalogueAgentReview?.data) {
      const data = GetAllCatalogueAgentReview?.data?.data?.items?.map(
        (val, i) => {
          return {
            key: i + 1,
            sno: i + 1,
            agentName: (
              <span
                className="text-[12px] font-medium text-[#3D4350] cursor-pointer"
                onClick={() => handleNavigate(val)}
              >
                {val?.user?.profile?.fullName || '-'}
              </span>
            ),
            agencyName: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.user?.profile?.agency?.agencyName || '-'}
              </span>
            ),
            name: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.name || '-'}
              </span>
            ),
            comment:
              val?.comment?.length > 20 ? (
                <Popover
                  content={
                    <p className="text-[12px] font-medium text-[#3D4350] max-w-[250px] break-words">
                      {val?.comment}
                    </p>
                  }
                >
                  <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap !max-w-[150px]">
                    {val?.comment}
                  </p>
                </Popover>
              ) : (
                <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap !max-w-[150px]">
                  {val?.comment || '-'}
                </p>
              ),
            email: (
              <span className="text-[#3D4350]  py-[3px] px-[8px] rounded-[21px]">
                {val?.email || '-'}
              </span>
            ),
            phone: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.phone || '-'}
              </span>
            ),
            rateStar: (
              <div className="text-[12px] font-medium text-[#3D4350] !w-[150px]">
                <Rate disabled value={val?.rateStar || 0} />
              </div>
            ),
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [GetAllCatalogueAgentReview?.data])
  return (
    <>
      <Row className="bg-white px-[10px] rounded-[5px] w-[100%]">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                Agent Review{' '}
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
                    filterTitle={['Agent Name', 'Agency Name']}
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
            columns={CatalogueAgentReviewColumns}
            scroll={{ x: true }}
            loading={GetAllCatalogueAgentReview?.loading}
            pagination={{
              total:
                GetAllCatalogueAgentReview?.data?.data?.meta?.totalPages *
                GetAllCatalogueAgentReview?.data?.data?.meta?.itemsPerPage,
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

export default CatalogueAgentReviewTable
