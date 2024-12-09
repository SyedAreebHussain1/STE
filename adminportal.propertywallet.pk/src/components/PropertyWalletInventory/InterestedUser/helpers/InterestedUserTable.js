import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Table, Tooltip } from 'antd'
import TablePagination from '../../../../utils/components/TablePagination'
import interestedUserColumns from '../../../../tableColumns/interestedUserColumns.json'
import usePageLimit from '../../../../utils/hooks/usePageLimit'
import moment from 'moment'
import { debounce } from 'lodash'
import { getAllInterestedLogsApi } from '../../../../redux/api/SingleProperty'

const InterestedUserTable = () => {
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = usePageLimit()
  const getAllInterestedLogs = useSelector(
    (state) => state?.getAllInterestedLogs
  )
  const [dataSource, setDataSource] = useState([])
  const debouncedGetAllInterestedLogsApi = useRef(
    debounce((dispatch, pageLimit) => {
      getAllInterestedLogsApi(dispatch, pageLimit)
    }, 500)
  ).current
  useEffect(() => {
    debouncedGetAllInterestedLogsApi(dispatch, pageLimit)
  }, [pageLimit])

  useEffect(() => {
    if (getAllInterestedLogs?.data) {
      const data = getAllInterestedLogs?.data?.data?.items?.map((item) => {
        return {
          key: item.id,
          projectName: (
            <span className="text-[12px] font-medium text-[#3D4350] cursor-pointer">
              {item?.propertyWalletProject?.projectName}
            </span>
          ),
          phone: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {item?.propertyWalletProject?.phoneNo}
            </span>
          ),
          builderName: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {item?.propertyWalletProject?.builderName}
            </span>
          ),
          city: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {item?.propertyWalletProject?.city}
            </span>
          ),
          description: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {item?.propertyWalletProject?.description.length > 40 ? (
                <Tooltip
                  placement="topLeft"
                  className="cursor-pointer"
                  title={item?.propertyWalletProject?.description}
                >
                  {`${item?.propertyWalletProject?.description.substr(
                    0,
                    40
                  )}...`}
                </Tooltip>
              ) : (
                item?.propertyWalletProject?.description
              )}
            </span>
          ),
          projectStatus: (
            <span className="text-[#3D4350] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[21px]">
              {item?.propertyWalletProject?.projectStatus}
            </span>
          ),
          createdAt: (
            <span className="text-[12px] font-medium text-[#444B54]">
              {moment(item.createdAt).format('DD-MM-YYYY')}
            </span>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllInterestedLogs?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[25px] px-[20px] flex items-center justify-between flex-col lg:flex-row">
            <div className="flex gap-2 items-center">
              <div className="shrink-0">
                <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                  Interested Users
                </h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
              {/* <Input
                placeholder={`Search ${selectedFilter}`}
                prefix={<SearchOutlined />}
                onChange={(e) => {
                  setSearch(e.target.value)
                  navigate(`?page=1&limit=10`)
                }}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              /> */}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={interestedUserColumns}
            scroll={{ x: true }}
            loading={getAllInterestedLogs?.loading}
            pagination={{
              total:
                getAllInterestedLogs?.data?.data?.meta?.totalPages *
                pageLimit.limit,
              showTotal: (total, range) => (
                <TablePagination
                  total={total}
                  range={range}
                  setPageLimit={setPageLimit}
                  pageLimit={pageLimit}
                  query
                />
              ),
            }}
          />
        </Col>
      </Row>
    </>
  )
}

export default InterestedUserTable
