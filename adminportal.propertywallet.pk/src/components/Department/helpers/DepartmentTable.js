import React, { useEffect, useRef, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Spin, Table } from 'antd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import { useModal } from '../../../utils/hooks/useModal'
import DepartmentColumns from '../../../tableColumns/DepartmentColumns.json'
import DepartmentAddModal from './DepartmentAddModal'
import {
  DeleteDepartmentApi,
  GetDepartmentApi,
} from '../../../redux/api/Department'
import moment from 'moment'
import deleteIcon from '../../assest/icon/ViewDetailDeleteIcon.png'
import DepartmentEditModal from './DepartmentEditModal'
import editIcon from '../../assest/icon/ViewDetailEditIcon.png'

const DepartmentTable = ({ isAddModalVisible, toggleAdd }) => {
  const dispatch = useDispatch()
  const [editModalVisible, toggleEdit] = useModal()
  const [dataSource, setDataSource] = useState([])
  const [updateData, setUpdateData] = useState(null)
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const GetDepartment = useSelector((state) => state.GetDepartment)
  const AddDepartment = useSelector((state) => state.AddDepartment)
  const DeleteDepartment = useSelector((state) => state.DeleteDepartment)
  const EditDepartment = useSelector((state) => state.EditDepartment)

  useEffect(() => {
    GetDepartmentApi(dispatch, pageLimit)
  }, [pageLimit, AddDepartment, DeleteDepartment, EditDepartment])

  const handleDelete = (id) => {
    DeleteDepartmentApi(dispatch, id)
  }

  useEffect(() => {
    if (GetDepartment?.data) {
      const data = GetDepartment?.data?.data?.items?.map((item, key) => {
        return {
          key: key,
          sno: key + 1,
          title: item?.title || '-',
          createdAt: item?.createdAt
            ? moment(item?.createdAt).format('DD-MM-YYYY')
            : '-',
          action: (
            <>
              <div className="flex flex-wrap  gap-2">
                <div
                  className="cursor-pointer"
                  onClick={() => [setUpdateData(item), toggleEdit()]}
                >
                  <img src={editIcon} alt="" />
                </div>
                {/* {DeleteDepartment?.loading ? (
                  <Spin spinning={DeleteDepartment?.loading} />
                ) : (
                  <div
                    onClick={() => handleDelete(item?.id)}
                    className="cursor-pointer"
                  >
                    <img src={deleteIcon} alt="" />
                  </div>
                )} */}
              </div>
            </>
          ),
        }
      })
      setDataSource(data)
    }
  }, [GetDepartment?.data])

  return (
    <>
      {isAddModalVisible && (
        <DepartmentAddModal visible={isAddModalVisible} toggle={toggleAdd} />
      )}
      {editModalVisible && (
        <DepartmentEditModal
          visible={editModalVisible}
          toggle={toggleEdit}
          data={updateData}
        />
      )}

      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold">All Department</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder="Search Department"
                // prefix={<SearchOutlined />}
                className="w-full lg:w-[300px] h-[41px]"
                // onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={DepartmentColumns}
            scroll={{ x: true }}
            loading={GetDepartment?.loading}
            pagination={{
              total:
                GetDepartment?.data?.data?.meta?.totalPages *
                GetDepartment?.data?.data?.meta?.itemsPerPage,
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
export default DepartmentTable
