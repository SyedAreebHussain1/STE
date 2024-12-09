import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table, Select, Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import TablePagination from '../../../../../../../../utils/components/TablePagination'
import SignupListColumns from './../../../../../../../../tableColumns/SignupListColumns'

import {
  getAffiliateListApi,
  getSignupListApi,
} from '../../../../../../../../redux/api/BDUsers'

const SignupList = ({ id }) => {
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
    getSignupListApi(dispatch, pageLimit, id)
    return () => {
      // console.log('COMPONENT UNMOUNT')
    }
  }, [pageLimit, id])

  useEffect(() => {
    if (getAllAffiliateInBDUsers?.data) {
      const data = getAllAffiliateInBDUsers?.data?.data?.items?.map((item) => {
        return {
          name: item?.user?.profile?.fullName,
          email: item?.user?.email,
          phone: item?.user?.phone,
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
                Signup list
              </h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={SignupListColumns}
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

export default SignupList
