import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Popover, Rate, Row, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import CatalogueAgencyReviewColumns from '../../../../tableColumns/CatalogueAgencyReviewColumns.json'
import { GetAllCatalogueAgencyReviewApi } from '../../../../redux/api/CatalogueAgencyReviews'
import { scrollToTop } from '../../../../utils/utils'
import { debounce } from 'lodash'
// import { FilterIcon } from '../../../assest/icon/filter.png'

const CatalogueAgencyReviewsTable = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const GetAllCatalogueAgencyReview = useSelector(
    (state) => state?.GetAllCatalogueAgencyReview
  )

  // const onSuccess = () => {
  //   GetAllCatalogueAgencyReviewApi(dispatch, pageLimit)
  // }

  // const handleDelete = (val) => {
  //   deleteAgencyReviewApi(dispatch, val.id, onSuccess)
  // }

  const debouncedGetAllCatalogueAgencyReviewApi = useRef(
    debounce((dispatch, pageLimit, search) => {
      GetAllCatalogueAgencyReviewApi(dispatch, pageLimit, search)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllCatalogueAgencyReviewApi(dispatch, pageLimit, search)
  }, [dispatch, pageLimit])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])

  useEffect(() => {
    if (GetAllCatalogueAgencyReview?.data) {
      const data = GetAllCatalogueAgencyReview?.data?.data?.items?.map(
        (val, i) => {
          return {
            key: i + 1,
            sno: i + 1,
            name: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.name || '-'}
              </span>
            ),
            agencyname: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.agency?.agencyName || '-'}
              </span>
            ),
            comment:
              val?.comment?.length > 40 ? (
                <Popover
                  content={
                    <p className="text-[12px] font-medium text-[#3D4350] max-w-[300px] break-words">
                      {val?.comment}
                    </p>
                  }
                >
                  <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[235px]">
                    {val?.comment}
                  </p>
                </Popover>
              ) : (
                <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[235px]">
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
            // action: (
            //   <div className="flex flex-wrap  gap-2">
            //     <div
            //       className="cursor-pointer"
            //       onClick={() => {
            //         // handleDelete(val)
            //       }}
            //     >
            //       <img src={ViewDetailDeleteIcon} alt="" />
            //     </div>
            //   </div>
            // ),
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [GetAllCatalogueAgencyReview?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Agency Review{' '}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search Agency Name`}
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              />
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={CatalogueAgencyReviewColumns}
            scroll={{ x: true }}
            loading={GetAllCatalogueAgencyReview?.loading}
            pagination={{
              total:
                GetAllCatalogueAgencyReview?.data?.data?.meta?.totalPages *
                GetAllCatalogueAgencyReview?.data?.data?.meta?.itemsPerPage,
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

export default CatalogueAgencyReviewsTable
