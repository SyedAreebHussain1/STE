import React, { useEffect, useState, useRef } from 'react'
import { Col, Input, Popover, Rate, Row, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import AgentReviewColumns from '../../../../tableColumns/AgentReviewColumns.json'
import { useNavigate } from 'react-router-dom'
import { getAgentReviewApi } from '../../../../redux/api/AppUsers'

const UserReviewTable = ({ id }) => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const agentReview = useSelector((state) => state?.agentReview)

  useEffect(() => {
    getAgentReviewApi(dispatch, id, pageLimit)
  }, [dispatch, id, pageLimit])

  useEffect(() => {
    if (agentReview?.data) {
      const data = agentReview?.data?.data?.items?.map((val, i) => {
        return {
          key: i + 1,
          sno: i + 1,
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
                <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[150px]">
                  {val?.comment}
                </p>
              </Popover>
            ) : (
              <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[150px]">
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
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [agentReview?.data])
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
          </div>
          <Table
            dataSource={dataSource}
            columns={AgentReviewColumns}
            scroll={{ x: true }}
            loading={agentReview?.loading}
            pagination={{
              total:
                agentReview?.data?.data?.meta?.totalPages *
                agentReview?.data?.data?.meta?.itemsPerPage,
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

export default UserReviewTable
