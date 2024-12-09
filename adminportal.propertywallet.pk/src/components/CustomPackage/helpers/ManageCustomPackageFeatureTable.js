import { Col, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import CustomPackageFeatureColumns from '../../../tableColumns/CustomPackageFeatureColumns.json'
import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import { useModal } from '../../../utils/hooks/useModal'
import { getCustomPackageFeatureApi } from '../../../redux/api/ManageSubscription'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import { scrollToTop } from '../../../utils/utils'
import AddPackageFeatureModal from './AddPackageFeatureModal'
import EditPackageFeatureModal from './EditPackageFeatureModal'

const ManageCustomPackageFeatureTable = ({ isAddModalVisible, toggleAdd }) => {
  const [dataSource, setDataSource] = useState([])
  const [isEditModalVisible, toggleEdit] = useModal()
  const [editData, setEditData] = useState(null)
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  const addCustomPackageFeature = useSelector(
    (state) => state.addCustomPackageFeature
  )
  const getAllCustomPackageFeature = useSelector(
    (state) => state.getAllCustomPackageFeature
  )
  const updateCustomPackageFeature = useSelector(
    (state) => state.updateCustomPackageFeature
  )

  useEffect(() => {
    scrollToTop()
    getCustomPackageFeatureApi(dispatch, pageLimit)
  }, [
    addCustomPackageFeature?.data,
    pageLimit,
    updateCustomPackageFeature?.data,
  ])

  useEffect(() => {
    if (getAllCustomPackageFeature?.data) {
      const data = getAllCustomPackageFeature?.data?.data?.items?.map(
        (item, key) => {
          return {
            title: item?.title,
            basePrice: item?.basePrice,
            intervals: item?.intervals,
            action: (
              <div className="flex flex-wrap  gap-2">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setEditData(item)
                    toggleEdit()
                  }}
                >
                  <img src={editIcon} alt="" />{' '}
                </div>
              </div>
            ),
          }
        }
      )

      setDataSource(data)
    }
  }, [getAllCustomPackageFeature?.data])
  return (
    <>
      {isAddModalVisible && (
        <AddPackageFeatureModal
          visible={isAddModalVisible}
          toggle={toggleAdd}
        />
      )}
      {isEditModalVisible && (
        <EditPackageFeatureModal
          visible={isEditModalVisible}
          toggle={toggleEdit}
          editData={editData}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Custom Packages
              </h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={CustomPackageFeatureColumns}
            loading={
              getAllCustomPackageFeature?.loading ||
              addCustomPackageFeature?.loading
            }
            scroll={{ x: true }}
            pagination={{
              total:
                getAllCustomPackageFeature?.data?.data?.meta?.totalPages *
                getAllCustomPackageFeature?.data?.data?.meta?.itemsPerPage,

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

export default ManageCustomPackageFeatureTable
