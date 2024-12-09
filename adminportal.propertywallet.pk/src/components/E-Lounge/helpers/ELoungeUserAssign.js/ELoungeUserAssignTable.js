import React, { useEffect, useState, useRef } from 'react'

import { Button, Col, Input, Popover, Row, Table, Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import { debounce } from 'lodash'
import ELoungeAssignUserColumns from '../../../../tableColumns/ELoungeAssignUserColumns.json'
import { scrollToTop } from '../../../../utils/utils'
import moment from 'moment'

// icons
import activesignIcon from '../../../assest/icon/activesign.png'
import { SearchOutlined } from '@ant-design/icons'
import FilterIcon from '../../../assest/icon/filter.png'
import {
  deleteELoungeAssignUserApi,
  getELoungeAssignUserApi,
} from '../../../../redux/api/ELoungeAssignUser'
import { useNavigate, useParams } from 'react-router-dom'
import deleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'
import { useModal } from '../../../../utils/hooks/useModal'
import EloungeSaleUserAssignToLeadModal from './EloungeSaleUserAssignToLeadModal'

const ELoungeUserAssignTable = () => {
  // const [search, setSearch] = useState('')
  const [dataSource, setDataSource] = useState('')
  const [isAssignModalVisible, toggleAssign] = useModal()
  const [assignData, setAssignData] = useState()
  const postELoungeSaleUserForAssignToLead = useSelector(
    (state) => state?.PostELoungeSaleUserForAssignToLead
  )
  const param = useParams()

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()

  const GetAllELoungeAssignUser = useSelector(
    (state) => state?.GetAllELoungeAssignUser
  )
  const navigate = useNavigate()

  // const debouncedgetELoungeAssignUserApi = useRef(
  //   debounce((dispatch, pageLimit) => {
  //     getELoungeAssignUserApi(dispatch, pageLimit, param.id)
  //   }, 500)
  // ).current
  useEffect(() => {
    getELoungeAssignUserApi(dispatch, pageLimit, param.id)
  }, [
    dispatch,
    pageLimit,
    param.id,
    postELoungeSaleUserForAssignToLead?.data?.data,
  ])

  // useEffect(() => {
  //   setPageLimit({
  //     page: 1,
  //     limit: 10,
  //   })
  // }, [search])

  // deleteELoungeAssignUserApi(dispatch, id, onSuccess)

  function onSuccess() {
    getELoungeAssignUserApi(dispatch, pageLimit, param.id)
  }

  function deleteRole(val) {
    deleteELoungeAssignUserApi(dispatch, val?.eloungeUser?.id, onSuccess)
  }

  useEffect(() => {
    if (GetAllELoungeAssignUser?.data) {
      const data = GetAllELoungeAssignUser?.data?.data?.items?.map(
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
                {item?.eloungeUser?.eloungeRole?.roleType == 'leaduser' && (
                  <div className="cursor-pointer flex justify-center gap-1">
                    <Button
                      onClick={() => {
                        setAssignData(item)
                        toggleAssign()
                      }}
                      className="flex items-center border-2 rounded-[67px] text-[12px] btn-secondary"
                    >
                      <span>Assign</span>
                    </Button>
                    <Button
                      onClick={() => {
                        navigate(
                          `/lead-assign-sale-users/${item?.eLoungUserId}`,
                          {
                            state: {
                              LeadName: `${item?.eloungeUser?.fullName}`,
                            },
                          }
                        )
                      }}
                      className="flex items-center border-2 rounded-[67px] text-[12px] btn-secondary"
                    >
                      <span>View Assign Users</span>
                    </Button>
                  </div>
                )}
              </div>
            ),
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [GetAllELoungeAssignUser?.data])

  return (
    <>
      {isAssignModalVisible && (
        <EloungeSaleUserAssignToLeadModal
          visible={isAssignModalVisible}
          toggle={toggleAssign}
          eLoungeId={param?.id}
          data={assignData}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Users
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search `}
                prefix={<SearchOutlined />}
                // onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                // value={search}
              />

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
            columns={ELoungeAssignUserColumns}
            scroll={{ x: true }}
            loading={GetAllELoungeAssignUser?.loading}
            pagination={{
              total:
                GetAllELoungeAssignUser?.data?.data?.meta?.totalPages *
                GetAllELoungeAssignUser?.data?.data?.meta?.itemsPerPage,
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

export default ELoungeUserAssignTable
