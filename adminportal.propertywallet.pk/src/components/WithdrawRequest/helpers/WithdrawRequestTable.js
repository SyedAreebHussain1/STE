import { Button, Col, Input, Row, Space, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import {
  SearchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { debounce } from 'lodash'
import TablePagination from '../../../utils/components/TablePagination'
import withDrawRequestsColumns from '../../../tableColumns/withDrawRequestsColumns.json'
import { useModal } from '../../../utils/hooks/useModal'
import CommisionAndDiscountModal from './CommisionAndDiscountModal'
// import {
//   getWithdrawRequestsApi,
//   updateCrmRequestsApi,
// } from "../../../redux/api/CrmRequests";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import usePageLimit from '../../../utils/hooks/usePageLimit'
import {
  getWithdrawRequestsApi,
  updateWithdrawRequestsApi,
} from '../../../redux/api/WithdrawRequests'
import RemarksModal from '../../../utils/components/Modals/RemarksModal'
import { scrollToTop } from '../../../utils/utils'

// icon
import FilterIcon from '../../assest/icon/filter.png'

const WithdrawRequestTable = ({ setExcelSheetData }) => {
  const [isAddModalVisible, toggleAdd] = useModal()
  const [isModalVisible, toggle] = useModal()
  const [rejectId, setRejectId] = useState(null)
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = usePageLimit()
  const getWithdrawRequests = useSelector((state) => state.getWithdrawRequests)
  // const updateCrmRequests = useSelector((state) => state.updateCrmRequests);
  const dispatch = useDispatch()
  const [updateId, setUpdateId] = useState(null)
  const [status, setStatus] = useState('')
  const [search, setSearch] = useState('')

  const debouncedWithdrawRequestApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getWithdrawRequestsApi(dispatch, pageLimit, search)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    handleSearch()
  }, [pageLimit])
  const handleSearch = () => {
    debouncedWithdrawRequestApi(dispatch, pageLimit, search)
  }
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])
  const onSuccess = () => {
    handleSearch()
  }
  const handleRequest = (req, id) => {
    updateWithdrawRequestsApi(dispatch, { status: req }, id, onSuccess)
  }
  useEffect(() => {
    if (getWithdrawRequests?.data?.data?.items) {
      const data = getWithdrawRequests?.data?.data?.items.map((item, i) => {
        const { investorWalletReserveAmount, phoneNo, amount, createdAt, id } =
          item
        return {
          key: i,
          // invoice: "-",
          investorName: investorWalletReserveAmount?.investor?.fullName,
          phoneNo: phoneNo,
          amount: amount,
          location: '-',
          date: createdAt.split('T')[0],
          action: (
            <Space>
              {item.status === 'Approved' ? (
                <Button className="text-[#fff] flex items-center border-2 bg-[#0BBC64] border-[#0BBC64] rounded-[67px] text-[12px] btn-primary">
                  <CheckCircleOutlined />
                  <span>Accepted</span>
                </Button>
              ) : item.status === 'Rejected' ? (
                <Button className="bg-[#E23442] text-[#fff] flex items-center border-2 border-[#E23442] rounded-[67px] text-[12px] btn-primary">
                  <CloseCircleOutlined />
                  <span>Rejected</span>
                </Button>
              ) : (
                <>
                  <Button
                    className="text-[#0BBC64] flex items-center border-2 border-[#0BBC64] rounded-[67px] text-[12px]"
                    onClick={() => {
                      handleRequest('Approved', id)
                    }}
                  >
                    <CheckCircleOutlined />
                    <span>Accept</span>
                  </Button>
                  <Button
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
      let excelArr = getWithdrawRequests?.data?.data?.items.map((item, i) => {
        const { investorWalletReserveAmount, phoneNo, amount, createdAt, id } =
          item
        return {
          SNO: i,
          'Investor Name': investorWalletReserveAmount?.investor?.fullName,
          Status: item.status,
          'Phone Number': phoneNo,
          Amount: amount,
          Date: createdAt.split('T')[0],
        }
      })
      setExcelSheetData(excelArr)
    }
  }, [getWithdrawRequests?.data])

  function onSuccessReject() {
    toggle()
    setRejectId(null)
    onSuccess()
  }

  function onSubmitModal(e) {
    const body = {
      status: 'Rejected',
      statusRemarks: e.remarks,
    }

    updateWithdrawRequestsApi(dispatch, body, rejectId, onSuccessReject)
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
      <CommisionAndDiscountModal
        modal={{ isAddModalVisible, toggleAdd }}
        updateId={updateId}
        status={status}
      />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold">
                All SSP Withdraw Request
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search Investor Name`}
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              />
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={withDrawRequestsColumns}
            scroll={{ x: true }}
            loading={getWithdrawRequests?.loading}
            pagination={{
              total: getWithdrawRequests?.data?.data?.meta?.totalItems,
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

export default WithdrawRequestTable
