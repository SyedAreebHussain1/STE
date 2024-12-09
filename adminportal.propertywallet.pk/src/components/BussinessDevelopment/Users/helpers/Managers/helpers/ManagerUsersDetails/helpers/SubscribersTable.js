import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import BDsubscribersColumns from '../../../../../../../../tableColumns/BDsubscribersColumns.json'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import TablePagination from '../../../../../../../../utils/components/TablePagination'

const SubscribersTable = ({ pageLimit, setPageLimit }) => {
  const [dataSource, setDataSource] = useState([])
  const ManagerDetails = useSelector((state) => state.ManagerDetails)

  useEffect(() => {
    if (ManagerDetails?.data) {
      const data = ManagerDetails?.data?.data?.items?.map((item) => {
        return {
          Name: item?.agency?.createdByUser?.profile?.fullName,
          address: item?.agency?.city || '-',
          agencyName: <span>{item?.agency?.agencyName}</span>,
          packages: (
            <span className="rounded-[67px] px-[8px] py-[3px] text-[#292D35]">
              {item?.pwSubPackage?.pwPackage?.title}
            </span>
          ),
          billings: (
            <span className="rounded-[67px] px-[8px] py-[3px] text-[#292D35] bg-[#0000000d]">
              {item?.pwSubPackage?.title}
            </span>
          ),
          subscribeDate: moment(item?.subscribeDate).format('DD MMMM.YYYY'),
        }
      })

      setDataSource(data)
    }
  }, [ManagerDetails?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Subscribers
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search Name`}
                prefix={<SearchOutlined />}
                className="w-full lg:w-[268px] h-[43px]"
              />
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={BDsubscribersColumns}
            scroll={{ x: true }}
            loading={ManagerDetails?.loading}
            pagination={{
              total:
                ManagerDetails?.data?.data?.meta?.totalPages *
                ManagerDetails?.data?.data?.meta?.itemsPerPage,
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

export default SubscribersTable
