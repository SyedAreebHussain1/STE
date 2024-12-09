import React, { useEffect, useState, useRef } from 'react'
import { debounce } from 'lodash'
import {
  CalendarOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Space, Table, Tag } from 'antd'
import cashRequestsColumns from '../../../../tableColumns/cashRequestsColumns.json'
import voucherIcon from '../../../assest/icon/voucher.png'
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print'
import FilterIcon from '../../../assest/icon/filter.png'

import NoTableData from '../../../../utils/components/NoTableData'
import TablePagination from '../../../../utils/components/TablePagination'

import { getAllOnlineUsers } from '../../../../redux/api/OnlineUsers'
import moment from 'moment'
import { updateWithdrawRequestsUserApi } from '../../../../redux/api/WithdrawRequests'
import BankSlip from '../../Print/BankSlip'
import CRFilter from './CRFilter'
import { useModal } from '../../../../utils/hooks/useModal'
import RemarksModal from '../../../../utils/components/Modals/RemarksModal'
import { scrollToTop } from '../../../../utils/utils'
const CashRequests = () => {
  const [isModalVisible, toggle] = useModal()
  const [rejectId, setRejectId] = useState(null)
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Voucher No.')
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
    search: '',
  })
  const getAllUsers = useSelector((state) => state?.getAllOnlineUsers)
  const { data, loading } = useSelector(
    (state) => state?.updateWithdrawRequests
  )
  const debouncedgetAllOnlineUsers = useRef(
    debounce((dispatch, pageLimit, data, search, selectedFilter) => {
      getAllOnlineUsers(dispatch, pageLimit, data, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedgetAllOnlineUsers(dispatch, pageLimit, search, selectedFilter)
  }, [pageLimit, data])
  const handleRequest = (req, id) => {
    updateWithdrawRequestsUserApi(dispatch, { status: req }, id, onSuccess)
  }
  const onSuccess = () => {}
  // Print module start
  const [printdata, setPrintData] = useState(null)
  const customPrintRef = React.useRef(null)

  const handlePrint = useReactToPrint({
    content: () => customPrintRef.current,
    onAfterPrint: () => setPrintData(null),
    copyStyles: true,
    pageStyle: `
    @page
      {
  size: a4 !important;
  margin: 0px;
  
      }`,
  })

  useEffect(() => {
    if (printdata !== null) {
      handlePrint()
    }
  }, [printdata])
  // Print module end
  useEffect(() => {
    if (getAllUsers?.data?.data !== null) {
      const data = getAllUsers?.data?.data?.items.map((item, i) => {
        return {
          merchandizerName: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.createdByUser?.profile?.fullName}
            </span>
          ),
          merchandizerNo: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.merchandiserRegNo}
            </span>
          ),
          merchandizerLicenceno: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.merchandiserLicenseNo}
            </span>
          ),

          voucherNo: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.receiptNo !== null && item?.receiptNo !== ''
                ? item?.receiptNo
                : '-'}
            </span>
          ),
          phoneNo: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.phone}
            </span>
          ),
          amount: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.amount}
            </span>
          ),
          location: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.location ? item?.location : '-'}
            </span>
          ),
          date: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {moment(item?.createdAt).format('DD/MM/YYYY')}
            </span>
          ),
          action: (
            <Space>
              {item.status === 'Approved' ? (
                <>
                  <Button className="text-[#fff] flex items-center border-2 bg-[#0BBC64] border-[#0BBC64] rounded-[67px] text-[12px] btn-primary">
                    <CheckCircleOutlined />
                    <span>Accepted</span>
                  </Button>
                  <Button
                    onClick={() => {
                      setPrintData(item)
                    }}
                    className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[30px] flex-shrink-0"
                  >
                    <img src={voucherIcon} alt="" />
                    <span>Genterate Voucher</span> &nbsp;&nbsp;
                  </Button>
                </>
              ) : item.status === 'Rejected' ? (
                <Button className="bg-[#E23442] text-[#fff] flex items-center border-2 border-[#E23442] rounded-[67px] text-[12px] btn-primary">
                  <CloseCircleOutlined />
                  <span>Rejected</span>
                </Button>
              ) : (
                <>
                  <Button
                    disabled={loading}
                    loading={loading}
                    className="text-[#0BBC64] flex items-center border-2 border-[#0BBC64] rounded-[67px] text-[12px]"
                    onClick={() => {
                      handleRequest('Approved', item?.id)
                    }}
                  >
                    <CheckCircleOutlined />
                    <span>Accept</span>
                  </Button>
                  <Button
                    disabled={loading}
                    loading={loading}
                    className="text-[#E23442] flex items-center border-2 border-[#E23442] rounded-[67px] text-[12px]"
                    onClick={() => {
                      setRejectId(item?.id)
                      toggle()
                    }}
                  >
                    <CloseCircleOutlined />
                    <span>Reject</span>
                  </Button>
                </>
              )}
            </Space>
          ),
        }
      })

      setDataSource(data)
    }
  }, [getAllUsers?.data])
  useEffect(() => {
    setSearch('')
  }, [selectedFilter])
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])

  function onSuccessModal() {
    toggle()
    setRejectId(null)
    onSuccess()
  }

  function onSubmitModal(e) {
    const body = {
      status: 'Rejected',
      statusRemarks: e.remarks,
    }

    updateWithdrawRequestsUserApi(dispatch, body, rejectId, onSuccessModal)
  }
  return (
    <>
      {isModalVisible && (
        <RemarksModal
          visible={isModalVisible}
          toggle={toggle}
          onSubmit={onSubmitModal}
        />
      )}
      <div className="hidden d-print-block" ref={customPrintRef}>
        {printdata !== null && <BankSlip data={printdata} />}
      </div>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Requests
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                className="w-full lg:w-[300px] h-[40px]"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />

              <Popover
                placement="bottomRight"
                content={
                  <CRFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Voucher No.']}
                  />
                }
                trigger="click"
              >
                <Button className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]">
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
            columns={cashRequestsColumns}
            scroll={{ x: true }}
            // locale={{
            //   emptyText: (
            //     <NoTableData
            //       text="No requests Added"
            //       buttonText="Add New requests"
            //     />
            //   ),
            // }}
            pagination={{
              total: getAllUsers?.data?.data?.meta.totalItems,
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

export default CashRequests
