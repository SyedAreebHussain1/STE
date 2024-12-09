import { Button, Col, Input, Popover, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import meetingDetailsColumns from '../../../../../tableColumns/meetingDetailsColumns.json'
import FilterIcon from '../../../../assest/icon/filter.png'
import { useModal } from '../../../../../utils/hooks/useModal'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllParticipantsApi } from '../../../../../redux/api/ManageMeetings'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../../utils/components/TablePagination'
import { SearchOutlined } from '@ant-design/icons'

const MeetingsDetailsTable = () => {
  const [dataSource, setDataSource] = useState()
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getAllParticipants = useSelector((state) => state.getAllParticipants)
  const createParticipants = useSelector((state) => state.createParticipants)

  const params = useParams()
  const { id } = params
  useEffect(() => {
    if (getAllParticipants?.data) {
      const data = getAllParticipants?.data?.data?.items?.map((item) => {
        return {
          name: item?.name,
          mobileNo: item?.phone,
          email: item?.email,
        }
      })

      setDataSource(data)
    }
  }, [getAllParticipants?.data])

  useEffect(() => {
    getAllParticipantsApi(dispatch, pageLimit, id)
  }, [pageLimit, createParticipants?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Freelancers
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search`}
                prefix={<SearchOutlined />}
                className="w-full lg:w-[268px] h-[43px]"
              />
              <Popover placement="bottomRight" trigger="click">
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
            columns={meetingDetailsColumns}
            scroll={{ x: true }}
            loading={getAllParticipants.loading}
            pagination={{
              total:
                getAllParticipants?.data?.data?.meta?.totalPages *
                getAllParticipants?.data?.data?.meta?.itemsPerPage,
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

export default MeetingsDetailsTable
