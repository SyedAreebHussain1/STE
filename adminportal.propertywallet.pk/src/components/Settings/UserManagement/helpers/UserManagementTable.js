import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Select, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash'
import userManagementTableColumns from '../../../../tableColumns/userManagementTableColumns.json'
import TablePagination from '../../../../utils/components/TablePagination'
import UserManagementModal from './UserManagementModal'
import { useModal } from '../../../../utils/hooks/useModal'
import Status from '../../../../utils/components/Status'
import { getUserManagementListApi } from '../../../../redux/api/Settings/UserManagement'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import UserManagementFilter from './UserManagementFilter'
import { getRolesApi } from '../../../../redux/api/Settings/Roles'

// btn icon
import FilterIcon from '../../../assest/icon/filter.png'
import UserImage from './../../../assest/img/user-1.png'
import deleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'
import editIcon from '../../../assest/icon/ViewDetailEditIcon.png'
import { scrollToTop } from '../../../../utils/utils'

const UserManagementTable = () => {
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [isAddModalVisible, toggleAdd] = useModal()
  const dispatch = useDispatch()
  const [dataSource, setDataSource] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const getUserManagementList = useSelector(
    (state) => state.getUserManagementList
  )
  // const [range, setRange] = useState(null);
  const editUsersRole = useSelector((state) => state.editUsersRole)
  const getRoles = useSelector((state) => state.getRoles)

  const [search, setSearch] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Full Name')

  const debouncedGetUserManagementListApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getUserManagementListApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetUserManagementListApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter
    )
    getRolesApi(dispatch, { page: 1, limit: 1000 })
  }, [dispatch, pageLimit, editUsersRole?.data])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])
  useEffect(() => {
    setSearch('')
  }, [selectedFilter])
  useEffect(() => {
    if (getUserManagementList?.data) {
      const data = getUserManagementList?.data?.data?.items?.map((item, i) => {
        return {
          key: i,
          name: (
            <div className="flex items-center gap-2 justify-center">
              {/* <img src={UserImage} alt="" /> */}
              <span>{item?.profile?.fullName}</span>
            </div>
          ),
          phoneNo: item?.phone || '-',
          email: item?.email || '-',
          // status: <Status type="active" />,
          assignedRoles: (
            <div className="flex gap-[12px] flex-wrap">
              <span className="text-[#3D4350] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[38px] font-medium">
                {item?.adminRole?.title}
              </span>
            </div>
          ),
          action: (
            <>
              <div className="flex flex-wrap gap-2">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedUser(item)
                    toggleAdd()
                  }}
                >
                  <img src={editIcon} alt="" />{' '}
                </div>
                {/* <div className="cursor-pointer">
                  <img src={deleteIcon} alt="" />
                </div> */}
              </div>
            </>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getUserManagementList?.data])
  return (
    <>
      <UserManagementModal
        visible={isAddModalVisible}
        toggleAdd={toggleAdd}
        selectedUser={selectedUser}
      />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[25px] px-[18px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold text-[#101010]">
                Users Management
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Role' ? (
                <Select
                  onChange={(e) => setSearch(e)}
                  value={search}
                  className="w-full lg:w-[268px] h-[43px]"
                  allowClear
                >
                  {getRoles?.data?.data?.items?.map((item, i) => {
                    return (
                      <Select.Option value={item?.title} key={i}>
                        {item?.title}
                      </Select.Option>
                    )
                  })}
                </Select>
              ) : selectedFilter === 'Phone' ? (
                <Input
                  placeholder={`Search Phone`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                  onKeyPress={(event) => {
                    if (!/[0-9,.]/.test(event.key)) {
                      event.preventDefault()
                    }
                  }}
                />
              ) : (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              )}
              <Popover
                placement="bottomRight"
                content={
                  <UserManagementFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Full Name', 'Email', 'Phone', 'Role']}
                  />
                }
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                  // onClick={showDrawer}
                >
                  <img
                    src={FilterIcon}
                    style={{ filter: 'brightness(4)' }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={userManagementTableColumns}
            //   loading={loading}
            scroll={{ x: true }}
            pagination={{
              total:
                getUserManagementList?.data?.data?.meta?.totalPages *
                pageLimit.limit,
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

export default UserManagementTable
