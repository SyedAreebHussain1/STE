import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import eLoungeRoleColumns from '../../../../tableColumns/eLoungeRoleColumns.json'
import AddNewRoleModal from './AddNewRoleModal'
import UpdateRoleModal from './UpdateRoleModal'
import moment from 'moment'
import { useModal } from './../../../../utils/hooks/useModal'

// icon
import deleteIcon from '../../../../components/assest/icon/roles-icon/04.png'
import updateIcon from '../../../assest/icon/ViewDetailEditIcon.png'

import TablePagination from '../../../../utils/components/TablePagination'

import { useDispatch, useSelector } from 'react-redux'
import usePageLimit from '../../../../utils/hooks/usePageLimit'
import { scrollToTop } from '../../../../utils/utils'
import {
  deleteRolesELoungeApi,
  getRolesELoungeApi,
} from '../../../../redux/api/ELoungeRoles'

const RolesTable = () => {
  const [isAddModalVisible, toggleAdd] = useModal()
  const [isUpdateRoleModalVisible, toggleUpdateRoleModal] = useModal()
  const [pageLimit, setPageLimit] = usePageLimit()
  const [updateData, setUpdateData] = useState(null)
  const [dataSource, setDataSource] = useState([])
  const [search, setSearch] = useState('')
  // const [selectedFilter, setSelectedFilter] = useState('Title')

  const dispatch = useDispatch()
  const getRoles = useSelector((state) => state.EloungeGetRoles)
  const updateRoles = useSelector((state) => state.EloungePatchRoles)
  const postRoles = useSelector((state) => state.EloungePostRoles)

  useEffect(() => {
    scrollToTop()
    getRolesELoungeApi(dispatch, pageLimit, search)
  }, [updateRoles?.data, postRoles?.data, pageLimit, dispatch])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])
  // useEffect(() => {
  //   setSearch('')
  // }, [selectedFilter])

  const onSuccess = () => {
    getRolesELoungeApi(dispatch, pageLimit, search)
  }

  const deleteRole = (val) => {
    deleteRolesELoungeApi(dispatch, val?.id, onSuccess)
  }

  useEffect(() => {
    if (getRoles?.data?.data !== null) {
      const data = getRoles?.data?.data?.items.map((item, i) => {
        return {
          key: i,
          sno: i + 1,
          roleType: item.roleType ? item.roleType : '-',
          subroleType: item.subRoleType ? item.subRoleType : '-',
          title: item?.title ? item?.title : '-',
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
                    setUpdateData(item)
                    toggleUpdateRoleModal()
                  }}
                >
                  <img src={updateIcon} alt="" />
                </Button>
                {/* <Button
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
                    deleteRole(item)
                  }}
                >
                  <img src={deleteIcon} alt="" />
                </Button> */}
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

      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold">Role List</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
              {/* {selectedFilter ? ( */}
              {/* <Input
                placeholder={`Search Title`}
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              /> */}
              {/* ) : (
                ''
              )} */}

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
            columns={eLoungeRoleColumns}
            scroll={{ x: true }}
            loading={getRoles.loading}
            pagination={{
              total: getRoles?.data?.data?.meta?.totalItems,
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
