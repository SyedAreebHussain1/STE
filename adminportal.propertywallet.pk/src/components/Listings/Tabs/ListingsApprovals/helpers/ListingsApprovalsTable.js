import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Row, Space, Table } from 'antd'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import listingsApprovalsColumns from '../../../../../tableColumns/listingsApprovalsColumns.json'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllListingsApprovalsApi,
  updateListingsApprovalsApi,
} from '../../../../../redux/api/ListingsApprovals'
import TablePagination from '../../../../../utils/components/TablePagination'
import moment from 'moment'

const ListingsApprovalsTable = () => {
  const [dataSource, setDataSource] = useState([])
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  const getAllListingsApprovals = useSelector(
    (state) => state.getAllListingsApprovals
  )
  const updateListingsApprovals = useSelector(
    (state) => state.updateListingsApprovals
  )

  useEffect(() => {
    getAllListingsApprovalsApi(dispatch, pageLimit)
  }, [updateListingsApprovals?.data, pageLimit])

  useEffect(() => {
    if (getAllListingsApprovals?.data) {
      const data = getAllListingsApprovals?.data?.data?.items?.map(
        (item, i) => {
          return {
            agencyName: item?.agency?.agencyName,
            pwSubPackage: item?.PwSubPackage?.pwPackage?.title,
            saleCommission: item?.saleCommission,
            date: moment(item?.createdAt).format('DD/MM/YYYY'),
            action:
              item?.status === 'Approved' ? (
                <Space>
                  <>
                    <Button className="text-[#fff] flex items-center border-2 border-[#0BBC64] bg-[#0BBC64] rounded-[67px] text-[12px] btn-primary">
                      <CheckCircleOutlined />
                      <span>Accepted</span>
                    </Button>
                  </>
                </Space>
              ) : item?.status === 'Rejected' ? (
                <Space>
                  <>
                    <Button className="text-[#fff] flex items-center border-2 border-[#E23442] bg-[#E23442] rounded-[67px] text-[12px] btn-primary">
                      <CloseCircleOutlined />
                      <span>Rejected</span>
                    </Button>
                  </>
                </Space>
              ) : (
                <Space>
                  <>
                    <Button
                      className="text-[#0BBC64] flex items-center border-2 border-[#0BBC64] rounded-[67px] text-[12px]"
                      onClick={() => {
                        updateListingsApprovalsApi(
                          dispatch,
                          { status: 'Approved' },
                          item?.id
                        )
                      }}
                    >
                      <CheckCircleOutlined />
                      <span>Accept</span>
                    </Button>
                    <Button
                      className="text-[#E23442] flex items-center border-2 border-[#E23442] rounded-[67px] text-[12px]"
                      onClick={() => {
                        updateListingsApprovalsApi(
                          dispatch,
                          { status: 'Rejected' },
                          item?.id
                        )
                      }}
                    >
                      <CloseCircleOutlined />
                      <span>Reject</span>
                    </Button>
                  </>
                </Space>
              ),
          }
        }
      )

      setDataSource(data)
    }
  }, [getAllListingsApprovals?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Listings Requests
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search Phone`}
                prefix={<SearchOutlined />}
                //   onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                //   value={search}
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault()
                  }
                }}
              />
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={listingsApprovalsColumns}
            scroll={{ x: true }}
            loading={
              getAllListingsApprovals.loading ||
              updateListingsApprovals?.loading
            }
            pagination={{
              total:
                getAllListingsApprovals?.data?.data?.meta?.totalPages *
                getAllListingsApprovals?.data?.data?.meta?.itemsPerPage,
              // onChange: onShowSizeChange,
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

export default ListingsApprovalsTable
