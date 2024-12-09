import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
  getLoungeApi,
  getLoungeAssignedInventoriesApi,
} from '../../../../redux/api/Lounge'
import { Col, Row, Table } from 'antd'
import TablePagination from '../../../../utils/components/TablePagination'
import loungeInventoryColumns from '../../../../tableColumns/loungeInventoryColumns.json'

const AssignedLoungeTable = () => {
  const dispatch = useDispatch()
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getLounge = useSelector((state) => state?.getLounge)
  useEffect(() => {
    if (getLounge?.data) {
      const data = getLounge?.data?.data?.items?.map((val, i) => {
        return {
          key: i,
          loungeName: (
            <div className="relative" style={{ display: 'flex' }}>
              <img
                style={{ height: '42px', width: '49px' }}
                src={val?.lounge?.logo && val?.lounge?.logo}
                alt=""
              />
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px] absolute left-[30%]">
                {val?.lounge?.name}
              </span>{' '}
            </div>
          ),
          loungeOwner: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {val?.lounge?.assignLounge?.loungeUser?.fullName || '-'}
            </span>
          ),

          Owneremail: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {val?.lounge?.assignLounge?.loungeUser?.email || '-'}
            </span>
          ),
          Ownerphone: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {val?.lounge?.assignLounge?.loungeUser?.phone || '-'}
            </span>
          ),
          projectName: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {val?.propertyWalletProject?.projectName.length >= 20
                ? `${val?.propertyWalletProject?.projectName.substring(
                    0,
                    20
                  )}...`
                : val?.propertyWalletProject?.projectName}
            </span>
          ),
          builderName: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {val?.propertyWalletProject?.builderName
                ? val?.propertyWalletProject?.builderName
                : '-'}
            </span>
          ),

          createDate: (
            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
              {moment(val?.createdAt).format('MM/DD/YYYY')}
            </span>
          ),
        }
      })

      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getLounge?.data])

  useEffect(() => {
    getLoungeAssignedInventoriesApi(dispatch, pageLimit)
  }, [dispatch, pageLimit])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All inventories
              </h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={loungeInventoryColumns}
            scroll={{ x: true }}
            loading={getLounge.loading}
            pagination={{
              total: getLounge?.data?.data?.meta?.totalItems,

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

export default AssignedLoungeTable
