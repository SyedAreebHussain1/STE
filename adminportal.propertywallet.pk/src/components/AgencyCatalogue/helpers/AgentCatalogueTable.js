import React, { useEffect, useState, useRef } from 'react'

import { Button, Col, Input, Popover, Row, Table, Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import AgencyCatalogueColumns from '../../../tableColumns/AgencyCatalogueColumns.json'
import { getAgencyCatalogueApi } from '../../../redux/api/AgencyCatalogue'

const AgentCatalogueTable = () => {
  const [dataSource, setDataSource] = useState('')

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const weburl = process.env.REACT_APP_WEBURL

  const AgencyCatalogue = useSelector((state) => state?.AgencyCatalogue)

  useEffect(() => {
    getAgencyCatalogueApi(dispatch, pageLimit)
  }, [dispatch, pageLimit])

  useEffect(() => {
    if (AgencyCatalogue?.data) {
      const data = AgencyCatalogue?.data?.data?.items?.map((item, i) => {
        return {
          key: i,
          agencyName: <p>{item?.agency?.agencyName}</p>,
          catalogueLink: (
            <div>
              <a
                className="text-[12px] font-medium text-[blue] leading-[18px]"
                href={`${weburl}/${item?.agency?.agencyName}/${item?.agency?.id}`}
                target="_blank"
                rel="noreferrer"
              >
                {item?.agency?.agencyName
                  ? `${weburl}/${item?.agency?.agencyName}/${item?.agency?.id}`
                  : '-'}
              </a>{' '}
            </div>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [AgencyCatalogue?.data])

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
              {/* <Input
                placeholder={`Search `}
                prefix={<SearchOutlined />}
                // onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                // value={search}
              /> */}

              {/* <Button className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[40px]">
                <img
                  src={FilterIcon}
                  style={{ filter: 'brightness(4)' }}
                  alt=""
                />
                <span>Filter</span>
              </Button> */}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={AgencyCatalogueColumns}
            scroll={{ x: true }}
            loading={AgencyCatalogue?.loading}
            pagination={{
              total:
                AgencyCatalogue?.data?.data?.meta?.totalPages *
                AgencyCatalogue?.data?.data?.meta?.itemsPerPage,
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

export default AgentCatalogueTable
