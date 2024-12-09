import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table, Select, Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import TablePagination from '../../../../../../../../utils/components/TablePagination'
import AffiliateListColumns from './../../../../../../../../tableColumns/AffiliateListColumns'

import { getAffiliateListApi } from '../../../../../../../../redux/api/BDUsers'

const AffiliateList = ({ id }) => {
  const [dataSource, setDataSource] = useState([])

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()

  const getAllAffiliateInBDUsers = useSelector(
    (state) => state.getAllAffiliateInBDUsers
  )

  useEffect(() => {
    getAffiliateListApi(dispatch, pageLimit, id)
    return () => {
      // console.log('COMPONENT UNMOUNT')
    }
  }, [pageLimit, id])

  useEffect(() => {
    if (getAllAffiliateInBDUsers?.data) {
      const data = getAllAffiliateInBDUsers?.data?.data?.items?.map((item) => {
        return {
          affiliateName: item?.affiliate?.fullName || '-',
          referralCode: item?.affiliate?.refCode || '-',
          totalSubscription: item.affiliate?.subscribersCount,
          signupTarget: item?.affiliate?.signupTarget || '-',
          salary: item?.affiliate?.salary || '-',
          phoneNo: item?.affiliate?.phone || '-',
          email: item?.affiliate?.email || '-',

          isactive: item?.affiliate?.isActive ? (
            <span className="text-[#fff] py-[9px] px-[12px] border-2  border-[#0BBC64] bg-[#0BBC64]  rounded-[67px] text-[12px] text-center">
              Active
            </span>
          ) : (
            <span className="text-[#fff] border-2 border-[#E23442] bg-[#E23442] rounded-[67px] text-[12px] py-[9px] px-[12px]">
              Deactive
            </span>
          ),
        }
      })

      setDataSource(data)
    }
  }, [getAllAffiliateInBDUsers?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                Affiliates
              </h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={AffiliateListColumns}
            scroll={{ x: true }}
            loading={getAllAffiliateInBDUsers.loading}
            pagination={{
              total:
                getAllAffiliateInBDUsers?.data?.data?.meta?.totalPages *
                getAllAffiliateInBDUsers?.data?.data?.meta?.itemsPerPage,
              showTotal: (total) => (
                <TablePagination
                  total={total}
                  // range={range}
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

export default AffiliateList
