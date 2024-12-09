import { Button, Col, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import vouchersListColumns from '../../../tableColumns/vouchersListColumns.json'
import { useModal } from '../../../utils/hooks/useModal'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import { scrollToTop } from '../../../utils/utils'
import { getAllVouchersApi } from '../../../redux/api/Vouchers'
import VoucherFeatureModal from './VoucherFeatureModal'

const VouchersTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [isModalVisible, toggle] = useModal()
  const [modalData, setModalData] = useState(null)
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  // getAllCustomDataVoucherApi(dispatch, pageLimit)

  const getAllVouchers = useSelector((state) => state.getAllVouchers)

  useEffect(() => {
    scrollToTop()
    getAllVouchersApi(dispatch, pageLimit)
  }, [pageLimit])

  useEffect(() => {
    if (getAllVouchers?.data) {
      const data = getAllVouchers?.data?.data?.items?.map((item, key) => {
        return {
          clientName: item?.fullName,
          email: item?.email,
          phone: item?.phone,
          vouchersCode: item?.voucherCode,
          checkoutAmount: item?.PwSubPackage?.charges,
          packageFeature: (
            <div className="cursor-pointer">
              <>
                <Button
                  onClick={() => {
                    setModalData(item)
                    toggle()
                  }}
                  className="flex items-center border-2 rounded-[67px] text-[12px] btn-secondary"
                >
                  <span>More Details</span>
                </Button>
              </>
            </div>
          ),
          refCode: item?.refCode,
          isRedeem: item?.isRedeem ? 'True' : 'False',
        }
      })

      setDataSource(data)
    }
  }, [getAllVouchers?.data])
  return (
    <>
      {isModalVisible && (
        <VoucherFeatureModal
          visible={isModalVisible}
          toggle={toggle}
          data={modalData}
        />
      )}

      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Vouchers
              </h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={vouchersListColumns}
            loading={getAllVouchers?.loading}
            scroll={{ x: true }}
            pagination={{
              total:
                getAllVouchers?.data?.data?.meta?.totalPages *
                getAllVouchers?.data?.data?.meta?.itemsPerPage,

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

export default VouchersTable
