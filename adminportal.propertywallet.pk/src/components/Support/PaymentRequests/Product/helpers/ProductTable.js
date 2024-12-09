import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Input, Row, Table } from 'antd'
import moment from 'moment'
import { SearchOutlined } from '@ant-design/icons'
import productColums from '../../../../../tableColumns/productColums.json'
import TablePagination from '../../../../../utils/components/TablePagination'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'
import { useModal } from '../../../../../utils/hooks/useModal'
import PayBillModal from './PayBillModal'
import { getPWPAdminPaymentAssistanceRequestApi } from '../../../../../redux/api/Support/PaymentRequest'

// icon
import payBillIcon from '../../../../assest/icon/pay.png'
import voucherIcon from '../../../../assest/icon/voucher.png'
import Voucher from '../../Voucher/Voucher'
import { useReactToPrint } from 'react-to-print'
import { scrollToTop } from '../../../../../utils/utils'

const ProductTable = () => {
  let componentRef = useRef()
  const [isAddModalVisible, toggleAdd] = useModal()
  const dispatch = useDispatch()
  const [voucherData, setVoucherData] = useState(null)
  const [dataSource, setDataSource] = useState([])
  const getPWPAdminPaymentAssistanceRequest = useSelector(
    (state) => state.getPWPAdminPaymentAssistanceRequest
  )
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const debouncedGetPWPAdminPaymentAssistanceRequestApi = useRef(
    debounce((dispatch, pageLimit) => {
      getPWPAdminPaymentAssistanceRequestApi(dispatch, pageLimit)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetPWPAdminPaymentAssistanceRequestApi(dispatch, pageLimit)
  }, [pageLimit])

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    pageStyle: `
      @page
        {
    size: a4 !important;
    margin: 0px;
    
        }`,
  })

  useEffect(() => {
    if (getPWPAdminPaymentAssistanceRequest?.data) {
      const data = getPWPAdminPaymentAssistanceRequest?.data?.data?.items?.map(
        (item, i) => {
          return {
            clientName: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {
                  item?.propertyWalletProductFinalizeSaleStage
                    ?.propertyWalletProductFinalizeSale
                    ?.propertyWalletProductSaleQuotation?.clientName
                }
              </span>
            ),
            phoneNo: (
              <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
                {item?.phoneNo}
              </span>
            ),
            propertyName: (
              <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
                {
                  item?.propertyWalletProductFinalizeSaleStage
                    ?.propertyWalletProductFinalizeSale
                    ?.propertyWalletProductSaleQuotation?.propertyWalletProduct
                    ?.title
                }
              </span>
            ),
            dealType: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {
                  item?.propertyWalletProductFinalizeSaleStage
                    ?.propertyWalletProductFinalizeSale
                    ?.propertyWalletProductSaleQuotation?.dealType
                }
              </span>
            ),
            payment: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {item?.propertyWalletProductFinalizeSaleStage?.stageType}
              </span>
            ),
            date: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {moment(item?.createdAt).format('MM/DD/YYYY')}
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
  }, [getPWPAdminPaymentAssistanceRequest?.data])

  return (
    <>
      <div ref={componentRef} className="hidden d-print-block">
        <Voucher voucherData={voucherData} />
      </div>
      <PayBillModal visible={isAddModalVisible} toggleAdd={toggleAdd} />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Product Requests
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
            columns={productColums}
            scroll={{ x: true }}
            loading={getPWPAdminPaymentAssistanceRequest.loading}
            pagination={{
              total:
                getPWPAdminPaymentAssistanceRequest?.data?.data?.meta
                  ?.totalPages *
                getPWPAdminPaymentAssistanceRequest?.data?.data?.meta
                  ?.itemsPerPage,
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

export default ProductTable
