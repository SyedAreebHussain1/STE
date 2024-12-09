import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Input, Row, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import tokenRequestColumns from '../../../../../tableColumns/tokenRequestColumns.json'
import TablePagination from '../../../../../utils/components/TablePagination'
import { getAllSupportPaymentRequestsApi } from '../../../../../redux/api/Support/PaymentRequest'
import { useModal } from '../../../../../utils/hooks/useModal'
import moment from 'moment'
import { debounce } from 'lodash'
import PayBillModal from './PayBillModal'
import { useReactToPrint } from 'react-to-print'
import VoucherToken from '../../Voucher/VoucherToken'
import Voucher from '../../Voucher/Voucher'

// icon
import payBillIcon from '../../../../assest/icon/pay.png'
import voucherIcon from '../../../../assest/icon/voucher.png'
import { scrollToTop } from '../../../../../utils/utils'

const TokenTable = () => {
  let componentRef = useRef()
  const [dataSource, setDataSource] = useState([])
  const getAllSupportPaymentRequests = useSelector(
    (state) => state.getAllSupportPaymentRequests
  )
  const dispatch = useDispatch()
  const [voucherData, setVoucherData] = useState(null)
  const [isAddModalVisible, toggleAdd] = useModal()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const debouncedGetAllSupportPaymentRequestsApi = useRef(
    debounce((dispatch, pageLimit) => {
      getAllSupportPaymentRequestsApi(dispatch, pageLimit)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllSupportPaymentRequestsApi(dispatch, pageLimit)
  }, [pageLimit])
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    pageStyle: `
      @page
        {
    size: A4 !important;
    margin: 0px;
    
        }`,
  })

  useEffect(() => {
    if (getAllSupportPaymentRequests?.data) {
      const data = getAllSupportPaymentRequests?.data?.data?.items.map(
        (items, i) => {
          const item = items?.tokenLockInventory
          return {
            key: i,
            inventory: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {item?.propertyWalletProductSaleQuotation?.propertyWalletProduct
                  ?.title || 'N/A'}
              </span>
            ),
            propertySize: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350] flex gap-1">
                <p>
                  {' '}
                  {item?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.landSize ||
                    item?.propertyWalletProductSaleQuotation
                      ?.propertyWalletProduct?.landSize}
                </p>
                <p>
                  {item?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.landArea.title ||
                    item?.propertyWalletProductSaleQuotation
                      ?.propertyWalletProduct?.landArea?.title}
                </p>
              </span>
            ),
            clientName: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {item?.propertyWalletInventorySaleQuotation?.clientName ||
                  item?.propertyWalletProductSaleQuotation?.clientName}
              </span>
            ),
            phoneNo: (
              <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
                {item?.propertyWalletInventorySaleQuotation?.phone ||
                  item?.propertyWalletProductSaleQuotation?.phone}
              </span>
            ),
            projectName: (
              <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
                {item?.propertyWalletInventorySaleQuotation
                  ?.propertyWalletInventoryPlot?.propertyWalletInventory
                  ?.propertyWalletProject?.projectName || 'N/A'}
              </span>
            ),
            date: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {moment(item.createdAt).format('DD/MM/YYYY')}
              </span>
            ),
            amount: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {item?.amount}
              </span>
            ),
            action: (
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={() => {
                    setVoucherData(item)
                    setTimeout(handlePrint, 500)
                  }}
                  className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[30px] flex-shrink-0"
                >
                  <img src={voucherIcon} alt="" />
                  <span>Genterate Voucher</span>
                </Button>
                <Button
                  onClick={(e) => {
                    // toggleAdd();

                    window.open(item?.blinqInvoice?.ClickToPayUrl, '_blank')
                  }}
                  className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[30px] flex-shrink-0"
                >
                  <img src={payBillIcon} alt="" />
                  <span>Pay Now</span>
                </Button>
              </div>
            ),
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllSupportPaymentRequests?.data])

  return (
    <>
      <div ref={componentRef} className="hidden d-print-block">
        <VoucherToken voucherData={voucherData} token={true} />
      </div>
      <PayBillModal visible={isAddModalVisible} toggleAdd={toggleAdd} />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Token Requests
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search Phone`}
                prefix={<SearchOutlined />}
                //   onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                //   value={search}
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault()
                  }
                }}
              />
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={tokenRequestColumns}
            scroll={{ x: true }}
            loading={getAllSupportPaymentRequests.loading}
            pagination={{
              total:
                getAllSupportPaymentRequests?.data?.data?.meta?.totalPages *
                getAllSupportPaymentRequests?.data?.data?.meta?.itemsPerPage,
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

export default TokenTable
