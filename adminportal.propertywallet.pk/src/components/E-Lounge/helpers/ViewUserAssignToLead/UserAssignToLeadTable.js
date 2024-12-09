import React, { useEffect, useState, useRef } from 'react'

import { Button, Col, Input, Popover, Row, Table, Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import ELoungeAssignUserToLeadColumns from '../../../../tableColumns/ELoungeAssignUserToLeadColumns.json'
import moment from 'moment'

// icons
import { SearchOutlined } from '@ant-design/icons'

import { useParams } from 'react-router-dom'
import deleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'
import {
  getEloungeAssignUserToLeadApi,
  unAssignEloungeAssignUserToLeadApi,
} from '../../../../redux/api/EloungeAssignUserToLead'

const UserAssignToLeadTable = () => {
  const [dataSource, setDataSource] = useState('')

  const param = useParams()

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()

  const GetEloungeAssignUserToLead = useSelector(
    (state) => state?.GetEloungeAssignUserToLead
  )

  useEffect(() => {
    getEloungeAssignUserToLeadApi(dispatch, pageLimit, param.id)
  }, [dispatch, pageLimit, param.id])

  function onSuccess() {
    getEloungeAssignUserToLeadApi(dispatch, pageLimit, param.id)
  }

  function deleteRole(val) {
    unAssignEloungeAssignUserToLeadApi(
      dispatch,
      val?.eLoungSalesUserId,
      onSuccess
    )
  }

  useEffect(() => {
    if (GetEloungeAssignUserToLead?.data) {
      const data = GetEloungeAssignUserToLead?.data?.data?.items?.map(
        (item, i) => {
          return {
            key: i,
            sno: <p>{i + 1}</p>,
            name: (
              <div>
                <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                  {item?.eloungeUser?.fullName
                    ? item?.eloungeUser?.fullName
                    : '-'}
                </span>{' '}
              </div>
            ),
            phone: item?.eloungeUser?.phone ? item?.eloungeUser?.phone : '-',

            role: item?.eloungeUser?.eloungeRole?.title
              ? item?.eloungeUser?.eloungeRole?.title
              : '-',

            roleType: item?.eloungeUser?.eloungeRole?.roleType
              ? item?.eloungeUser?.eloungeRole?.roleType
              : '-',

            subroleType: item?.eloungeUser?.eloungeRole?.subRoleType
              ? item?.eloungeUser?.eloungeRole?.subRoleType
              : '-',

            createDate: (
              <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
                {item?.createdAt
                  ? moment(item?.createdAt).format('MM/DD/YYYY')
                  : '-'}
              </span>
            ),
            action: (
              <div className="flex justify-center">
                <Button
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    padding: '10px',
                    border: 'none',
                  }}
                  shape="round"
                  onClick={() => {
                    deleteRole(item)
                  }}
                >
                  <img src={deleteIcon} alt="" />
                </Button>
              </div>
            ),
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [GetEloungeAssignUserToLead?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Users
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
            columns={ELoungeAssignUserToLeadColumns}
            scroll={{ x: true }}
            loading={GetEloungeAssignUserToLead?.loading}
            pagination={{
              total:
                GetEloungeAssignUserToLead?.data?.data?.meta?.totalPages *
                GetEloungeAssignUserToLead?.data?.data?.meta?.itemsPerPage,
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

export default UserAssignToLeadTable
