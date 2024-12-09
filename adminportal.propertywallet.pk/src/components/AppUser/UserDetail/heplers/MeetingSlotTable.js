import React, { useEffect, useState, useRef } from 'react'
import { RightCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Col, Input, Popover, Row, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import meetingSlotColumns from '../../../../tableColumns/meetingSlotColumns.json'
import { useNavigate } from 'react-router-dom'
import { getMeetingSlotApi } from '../../../../redux/api/AppUsers'
import moment from 'moment'

const MeetingSlotTable = ({ id }) => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const meetingSlot = useSelector((state) => state?.meetingSlot)

  useEffect(() => {
    getMeetingSlotApi(dispatch, id, pageLimit)
  }, [dispatch, id, pageLimit])

  useEffect(() => {
    if (meetingSlot?.data) {
      const data = meetingSlot?.data?.data?.items?.map((val, i) => {
        return {
          key: i + 1,
          sno: i + 1,
          name: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.name || '-'}
            </span>
          ),
          email: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.email || '-'}
            </span>
          ),
          phone: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.phone || '-'}
            </span>
          ),
          meetingSubject: (
            <span className="text-[#3D4350]  py-[3px] text-center rounded-[21px]">
              {val?.meetingSubject || '-'}
            </span>
          ),
          description:
            val?.description?.length > 20 ? (
              <Popover
                content={
                  <p className="text-[12px] font-medium text-[#3D4350] max-w-[250px] break-words">
                    {val?.description}
                  </p>
                }
              >
                <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[150px]">
                  {val?.description}
                </p>
              </Popover>
            ) : (
              <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[150px]">
                {val?.description || '-'}
              </p>
            ),
          date: (
            <div className="text-[#3D4350]  py-[3px] px-[8px] rounded-[21px] w-[100px]">
              {val?.meetingEndDateTime
                ? moment(val?.meetingEndDateTime).format('DD-MM-YYYY')
                : '-'}
            </div>
          ),
          startTime: (
            <div className="text-[12px] font-medium text-[#3D4350] w-[80px]">
              {val?.meetingStartDateTime
                ? moment(val?.meetingStartDateTime).format('hh:mm A ')
                : '-'}
            </div>
          ),

          endTime: (
            <div className="text-[#3D4350]  py-[3px] px-[8px] rounded-[21px] w-[80px]">
              {val?.meetingEndDateTime
                ? moment(val?.meetingEndDateTime).format('hh:mm A')
                : '-'}
            </div>
          ),
          feedBack: (
            <span className="text-[#3D4350]  py-[3px] px-[8px] rounded-[21px]">
              {val?.publicMeetingFeedBack?.remarks || '-'}
            </span>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [meetingSlot?.data])
  return (
    <>
      <Row className="bg-white px-[10px] rounded-[5px] w-[100%]">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                Meeting Slot{' '}
              </h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={meetingSlotColumns}
            scroll={{ x: true }}
            loading={meetingSlot?.loading}
            pagination={{
              total:
                meetingSlot?.data?.data?.meta?.totalPages *
                meetingSlot?.data?.data?.meta?.itemsPerPage,
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

export default MeetingSlotTable
