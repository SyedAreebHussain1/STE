import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import rolesTableCoumns from '../../../../tableColumns/rolesTableCoumns.json'
import AddNewRoleModal from './AddNewRoleModal'
import AddUserModal from './AddUserModal'
import UpdateRoleModal from './UpdateRoleModal'
import moment from 'moment'
import AssignModuleModal from './AssignModuleModal'
import AssignedInfoModal from './AssignedInfoModal'
import { useModal } from './../../../../utils/hooks/useModal'

// icon
import deleteIcon from '../../../../components/assest/icon/roles-icon/04.png'
import assignedIcon from '../../../../components/assest/icon/roles-icon/05.png'
import assigned2Icon from '../../../../components/assest/icon/roles-icon/02.png'
import addIcon from '../../../../components/assest/icon/roles-icon/01.png'
import updateIcon from '../../../../components/assest/icon/roles-icon/03.png'

import TablePagination from '../../../../utils/components/TablePagination'

import { useDispatch, useSelector } from 'react-redux'
import { getRolesApi } from '../../../../redux/api/Settings/Roles'
import usePageLimit from '../../../../utils/hooks/usePageLimit'
import UserManagementFilter from '../../UserManagement/helpers/UserManagementFilter'
import { scrollToTop } from '../../../../utils/utils'

const RolesTable = () => {
  const [isAddModalVisible, toggleAdd] = useModal()
  const [isAssignModuleModalVisible, toggleAssignModuleModal] = useModal()
  const [isAssignedInfoModalVisible, toggleAssignInfoModal] = useModal()
  const [isUpdateRoleModalVisible, toggleUpdateRoleModal] = useModal()
  const [isAddUserModalVisible, toggleAddUserModal] = useModal()
  const [pageLimit, setPageLimit] = usePageLimit()
  const [updateData, setUpdateData] = useState(null)
  const [assignModuleData, setAssignModuleData] = useState(null)
  const [assignModuleInfoData, setAssignModuleInfoData] = useState(null)
  const [userData, setUserData] = useState(null)
  const [dataSource, setDataSource] = useState([])
  const [search, setSearch] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Title')

  const dispatch = useDispatch()
  const getRoles = useSelector((state) => state.getRoles)
  const updateRoles = useSelector((state) => state.updateRoles)
  const postRoles = useSelector((state) => state.postRoles)
  const addUser = useSelector((state) => state.addUser)

  useEffect(() => {
    scrollToTop()
    getRolesApi(dispatch, pageLimit, search)
  }, [updateRoles?.data, postRoles?.data, addUser?.data, pageLimit, dispatch])

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
    if (getRoles?.data?.data !== null) {
      const data = getRoles?.data?.data?.items.map((item, i) => {
        return {
          id: item?.id,
          users: (
            <div className="flex items-center justify-center">
              {item?.user?.length > 0
                ? item?.user.map((userObj, index) => (
                    <div
                      key={index}
                      className="border !rounded-[50%] border-white w-[35px] h-[35px] flex justify-center items-center"
                      style={{
                        position: 'relative',
                      }}
                    >
                      <span className="">
                        {userObj?.profile?.fullName?.split(' ')?.length > 1
                          ? `${userObj?.profile?.fullName
                              ?.split(' ')[0][0]
                              ?.toUpperCase()} ${
                              userObj?.profile?.fullName?.split(' ')[1][0]
                                ? userObj?.profile?.fullName
                                    ?.split(' ')[1][0]
                                    ?.toUpperCase()
                                : ''
                            }`
                          : userObj?.profile?.fullName
                              ?.split(' ')[0][0]
                              ?.toUpperCase()}
                      </span>
                    </div>
                  ))
                : '-'}
            </div>
          ),
          title: item?.title,
          date: moment(item?.createdAt).format('DD-MM-YYYY'),
          action: (
            <>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '200px',
                    padding: '10px',
                    border: 'none',
                  }}
                  shape="round"
                  onClick={() => {
                    setAssignModuleInfoData(item)
                    toggleAssignInfoModal()
                  }}
                >
                  <img src={assigned2Icon} alt="" />
                </Button>
                <Button
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '200px',
                    padding: '10px',
                    border: 'none',
                  }}
                  shape="round"
                  onClick={() => {
                    setUpdateData(item)
                    toggleUpdateRoleModal()
                  }}
                >
                  <img src={updateIcon} alt="" />
                </Button>
                <Button
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '200px',
                    padding: '10px',
                    border: 'none',
                  }}
                  shape="round"
                >
                  <img src={deleteIcon} alt="" />
                </Button>
                <Button
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '200px',
                    padding: '10px',
                    border: 'none',
                  }}
                  shape="round"
                  onClick={() => {
                    setAssignModuleData(item)
                    toggleAssignModuleModal()
                  }}
                >
                  <img src={assignedIcon} alt="" />
                </Button>
                <Button
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '200px',
                    padding: '10px',
                    border: 'none',
                  }}
                  shape="round"
                  onClick={() => {
                    setUserData(item)
                    toggleAddUserModal()
                  }}
                >
                  <img src={addIcon} alt="" />
                </Button>
              </div>
            </>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getRoles?.data?.data])
  return (
    <>
      <AddNewRoleModal visible={isAddModalVisible} toggleAdd={toggleAdd} />
      <UpdateRoleModal
        visible={isUpdateRoleModalVisible}
        toggleAdd={toggleUpdateRoleModal}
        updateData={updateData}
      />
      <AddUserModal
        visible={isAddUserModalVisible}
        toggleAdd={toggleAddUserModal}
        userData={userData}
      />
      <AssignModuleModal
        toggleAssignModuleModal={toggleAssignModuleModal}
        visible={isAssignModuleModalVisible}
        assignModuleData={assignModuleData}
        setAssignModuleData={setAssignModuleData}
      />

      <AssignedInfoModal
        toggleAssignInfoModal={toggleAssignInfoModal}
        visible={isAssignedInfoModalVisible}
        assignModuleInfoData={assignModuleInfoData}
        setAssignModuleInfoData={setAssignModuleInfoData}
      />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold">Role List</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
              {selectedFilter ? (
                <Input
                  placeholder={`Search Title`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              ) : (
                ''
              )}

              <Button
                size="middle"
                icon={<PlusCircleOutlined />}
                key="4"
                // type="primary"
                className="w-full sm:w-auto btn-primary py-[11px] px-[33px] flex items-center justify-center bg-textColorGreen text-white h-[46px]"
                onClick={toggleAdd}
              >
                Add role
              </Button>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={rolesTableCoumns}
            //   loading={loading}
            scroll={{ x: true }}
            loading={getRoles.loading}
            pagination={{
              total: getRoles?.data?.data?.meta?.totalItems,
              // onChange: onShowSizeChange,
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

export default RolesTable
