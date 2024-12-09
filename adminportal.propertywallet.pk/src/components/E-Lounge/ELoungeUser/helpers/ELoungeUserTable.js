import React, { useEffect, useState, useRef } from 'react'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table, Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import FilterIcon from '../../../assest/icon/filter.png'
import { debounce } from 'lodash'
import ELoungeUserColumns from '../../../../tableColumns/ELoungeUserColumns.json'
import { scrollToTop } from '../../../../utils/utils'
import TableFilter from '../../../../utils/components/TableFilter'
import moment from 'moment'
import activesignIcon from '../../../assest/icon/activesign.png'
import AddnewELoungeUserModal from './AddnewELoungeUserModal'
import {
  getELoungeUserApi,
  suspendELoungeUserApi,
} from '../../../../redux/api/ELoungeUser'
import UpdateELoungeUserModal from './UpdateELoungeUserModal'
import editIcon from '../../../assest/icon/ViewDetailEditIcon.png'
import { useModal } from '../../../../utils/hooks/useModal'

const ELoungeUserTable = ({ isAddModalVisible, toggle }) => {
  const [dataSource, setDataSource] = useState([])
  // const [selectedFilter, setSelectedFilter] = useState('Lounge Name')
  const [search, setSearch] = useState('')
  const [isUpdateModalVisible, toggleUpdate] = useModal()
  const [updateData, setUpdateData] = useState('')

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()

  const GetELoungeUser = useSelector((state) => state?.GetELoungeUser)

  // const debouncedGetELoungeApi = useRef(
  //   debounce((dispatch, pageLimit, search, selectedFilter) => {
  //     getELoungeUserApi(dispatch, pageLimit, search, selectedFilter)
  //   }, 500)
  // ).current
  useEffect(() => {
    // scrollToTop()
    getELoungeUserApi(dispatch, pageLimit, search)
  }, [dispatch, pageLimit])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])

  function onSuccess() {
    getELoungeUserApi(dispatch, pageLimit, search)
  }

  // useEffect(() => {
  //   setSearch('')
  // }, [selectedFilter])

  useEffect(() => {
    if (GetELoungeUser?.data) {
      const data = GetELoungeUser?.data?.data?.items?.map((val, i) => {
        return {
          key: i,
          name: (
            <div>
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                {val?.fullName ? val?.fullName : '-'}
              </span>{' '}
            </div>
          ),

          phone: (
            <div>
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                {val?.phone ? val?.phone : '-'}
              </span>{' '}
            </div>
          ),
          email: (
            <div>
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                {val?.email ? val?.email : '-'}
              </span>{' '}
            </div>
          ),
          role: (
            <div>
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                {val?.eloungeRole?.title ? val?.eloungeRole?.title : '-'}
              </span>{' '}
            </div>
          ),
          roleType: (
            <div>
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                {val?.eloungeRole?.roleType ? val?.eloungeRole?.roleType : '-'}
              </span>{' '}
            </div>
          ),
          subroleType: (
            <div>
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                {val?.eloungeRole?.subRoleType
                  ? val?.eloungeRole?.subRoleType
                  : '-'}
              </span>{' '}
            </div>
          ),
          eLounge: (
            <div>
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                {val?.assignUserElounge?.elounge?.name
                  ? val?.assignUserElounge?.elounge?.name
                  : '-'}
              </span>{' '}
            </div>
          ),
          createDate: (
            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
              {val?.createdAt
                ? moment(val?.createdAt).format('MM/DD/YYYY')
                : '-'}
            </span>
          ),
          isactive: (
            <div className="flex font-semibold text-[12px] leading-[18px] text-[#667085] gap-1">
              {
                <>
                  <span>
                    <img src={val?.isSuspend ? '' : activesignIcon} alt="" />
                  </span>
                  <span>{val?.isSuspend ? 'Suspend' : 'Active'}</span>
                </>
              }
            </div>
          ),
          action: (
            <div className="cursor-pointer flex space-around flex-wrap  gap-2 w-[150px]">
              <div
                onClick={() => {
                  setUpdateData(val)
                  toggleUpdate()
                }}
                className="cursor-pointer"
              >
                <img src={editIcon} alt="" />{' '}
              </div>
              {val?.isSuspend ? (
                <>
                  <Button
                    onClick={() =>
                      suspendELoungeUserApi(
                        dispatch,
                        val?.id,
                        {
                          isSuspend: false,
                        },
                        onSuccess
                      )
                    }
                    className="text-[#fff] flex items-center border-2 border-[#0BBC64] bg-[#0BBC64] rounded-[67px] text-[12px] btn-primary"
                  >
                    <CheckCircleOutlined />
                    <span>Active</span>
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() =>
                    suspendELoungeUserApi(
                      dispatch,
                      val?.id,
                      {
                        isSuspend: true,
                      },
                      onSuccess
                    )
                  }
                  className="text-[#fff] flex items-center border-2 border-[#E23442] bg-[#E23442] rounded-[67px] text-[12px] btn-primary"
                >
                  <CloseCircleOutlined />
                  <span>Suspend</span>
                </Button>
              )}
            </div>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [GetELoungeUser?.data])

  return (
    <>
      {isAddModalVisible && (
        <AddnewELoungeUserModal visible={isAddModalVisible} toggle={toggle} />
      )}
      {isUpdateModalVisible && (
        <UpdateELoungeUserModal
          visible={isUpdateModalVisible}
          toggle={toggleUpdate}
          data={updateData}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All User
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {/* <Input
                placeholder={`Search User`}
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              /> */}

              {/* <Popover
                placement="bottomRight"
                content={
                  <TableFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Lounge Name', 'Lounge Owner']}
                  />
                }
                trigger="click"
              >
                <Button className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[40px]">
                  <img
                    src={FilterIcon}
                    style={{ filter: 'brightness(4)' }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover> */}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={ELoungeUserColumns}
            scroll={{ x: true }}
            loading={GetELoungeUser?.loading}
            pagination={{
              total:
                GetELoungeUser?.data?.data?.meta?.totalPages *
                GetELoungeUser?.data?.data?.meta?.itemsPerPage,
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

export default ELoungeUserTable
