import React, { useEffect, useState, useRef } from 'react'
import { RightCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Col, Input, Popover, Rate, Row, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import agencyReviewByAgencyIDColumns from '../../../tableColumns/agencyReviewByAgencyIDColumns.json'
import { useNavigate } from 'react-router-dom'
import { GetAllAgencyReviewByAgencyIdApi } from '../../../redux/api/AgencyReview'

const AgencyReviewTable = ({ id }) => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const GetAgencyReviewByAgencyID = useSelector(
    (state) => state?.GetAgencyReviewByAgencyID
  )
  useEffect(() => {
    GetAllAgencyReviewByAgencyIdApi(dispatch, id, pageLimit)
  }, [dispatch, id, pageLimit])

  // const onSuccess = () => {
  //   GetAllAgencyReviewByAgencyIdApi(dispatch, id, pageLimit)
  // }

  // const handleDelete = (val) => {
  //   deleteAgencyReviewApi(dispatch, val.id, onSuccess)
  // }

  useEffect(() => {
    if (GetAgencyReviewByAgencyID?.data) {
      const data = GetAgencyReviewByAgencyID?.data?.data?.items?.map(
        (val, i) => {
          return {
            key: i + 1,
            sno: i + 1,
            name: (
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.name || '-'}
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
                  <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[300px]">
                    {val?.comment}
                  </p>
                </Popover>
              ) : (
                <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[300px]">
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
            //         handleDelete(val)
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
  }, [GetAgencyReviewByAgencyID?.data])
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
          </div>
          <Table
            dataSource={dataSource}
            columns={agencyReviewByAgencyIDColumns}
            scroll={{ x: true }}
            loading={GetAgencyReviewByAgencyID?.loading}
            pagination={{
              total:
                GetAgencyReviewByAgencyID?.data?.data?.meta?.totalPages *
                GetAgencyReviewByAgencyID?.data?.data?.meta?.itemsPerPage,
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

export default AgencyReviewTable
