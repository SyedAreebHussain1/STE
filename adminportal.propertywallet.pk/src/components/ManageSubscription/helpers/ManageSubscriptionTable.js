import { Col, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import subscriptionColumns from '../../../tableColumns/subscriptionColumns.json'
import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import deleteIcon from '../../assest/icon/ViewDetailDeleteIcon.png'
import { useModal } from '../../../utils/hooks/useModal'
import AddSubscriptionModal from './AddSubscriptionModal'
import EditSubscriptionModal from './EditSubscriptionModal'
import { getSubscriptionApi } from '../../../redux/api/ManageSubscription'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import { scrollToTop } from '../../../utils/utils'

const ManageSubscriptionTable = ({ isAddModalVisible, toggleAdd }) => {
  const [dataSource, setDataSource] = useState([])
  const [isEditModalVisible, toggleEdit] = useModal()
  const [editData, setEditData] = useState(null)
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const addSubscription = useSelector((state) => state.addSubscription)
  const getSubscription = useSelector((state) => state.getSubscription)

  useEffect(() => {
    scrollToTop()
    getSubscriptionApi(dispatch, pageLimit)
  }, [addSubscription?.data, pageLimit])

  useEffect(() => {
    if (getSubscription?.data) {
      const data = getSubscription?.data?.data?.items?.map((item, key) => {
        return {
          packageName: item?.title,
          charges: item?.charges,
          userLimits: item?.noOfUserLimit,
          noOfListings: item?.noListing,
          hotListings: item?.hotListing,
          rentalCommission: item?.rentalCommission,
          regCommission: item?.regCommission,
          noCommissionCount: item?.noCommissionCount,
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
              {/* <div className="cursor-pointer">
                <img src={deleteIcon} alt="" />
              </div> */}
            </div>
          ),
        }
      })

      setDataSource(data)
    }
  }, [getSubscription?.data])
  return (
    <>
      {isAddModalVisible && (
        <AddSubscriptionModal visible={isAddModalVisible} toggle={toggleAdd} />
      )}
      {isEditModalVisible && (
        <EditSubscriptionModal
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
                All Subscription Packages
              </h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={subscriptionColumns}
            loading={getSubscription?.loading || addSubscription?.loading}
            scroll={{ x: true }}
            pagination={{
              total:
                getSubscription?.data?.data?.meta?.totalPages *
                getSubscription?.data?.data?.meta?.itemsPerPage,
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

export default ManageSubscriptionTable
