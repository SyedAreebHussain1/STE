import { Col, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import CustomPackagePlanColumns from '../../../tableColumns/CustomPackagePlanColumns.json'
import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import { useModal } from '../../../utils/hooks/useModal'
import { getCustomPackagePlanApi } from '../../../redux/api/ManageSubscription'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import { scrollToTop } from '../../../utils/utils'
import EditPackageModal from './EditPackageModal'
import AddPackageModal from './AddPackageModal'

const ManageCustomPackageTable = ({ isAddModalVisible, toggleAdd }) => {
  const [dataSource, setDataSource] = useState([])
  const [isEditModalVisible, toggleEdit] = useModal()
  const [editData, setEditData] = useState(null)
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  const addCustomPackagePlan = useSelector(
    (state) => state.addCustomPackagePlan
  )
  const getAllCustomPackagePlan = useSelector(
    (state) => state.getAllCustomPackagePlan
  )
  const updateCustomPackagePlan = useSelector(
    (state) => state.updateCustomPackagePlan
  )

  useEffect(() => {
    scrollToTop()
    getCustomPackagePlanApi(dispatch, pageLimit)
  }, [addCustomPackagePlan?.data, pageLimit, updateCustomPackagePlan?.data])

  useEffect(() => {
    if (getAllCustomPackagePlan?.data) {
      const data = getAllCustomPackagePlan?.data?.data?.items?.map(
        (item, key) => {
          return {
            title: item?.title,
            planMonths: item?.planMonths,
            BdFixCommission: item?.BdFixCommission,
            BdNoCommissionCount: item?.BdNoCommissionCount,
            BdRegCommission: item?.BdRegCommission,
            BdRentalCommission: item?.BdRentalCommission,
            discountPercentage: item?.discountPercentage,
            fixCommision: item?.fixCommision,
            monthlyRentCommision: item?.monthlyRentCommision,
            regCommision: item?.regCommision,
            rentalCommission: item?.rentalCommission,
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
  }, [getAllCustomPackagePlan?.data])
  return (
    <>
      {isAddModalVisible && (
        <AddPackageModal visible={isAddModalVisible} toggle={toggleAdd} />
      )}
      {isEditModalVisible && (
        <EditPackageModal
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
            columns={CustomPackagePlanColumns}
            loading={
              getAllCustomPackagePlan?.loading || addCustomPackagePlan?.loading
            }
            scroll={{ x: true }}
            pagination={{
              total:
                getAllCustomPackagePlan?.data?.data?.meta?.totalPages *
                getAllCustomPackagePlan?.data?.data?.meta?.itemsPerPage,

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

export default ManageCustomPackageTable
