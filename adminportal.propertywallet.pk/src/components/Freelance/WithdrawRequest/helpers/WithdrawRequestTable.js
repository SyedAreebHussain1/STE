import { Button, Col, Input, Popover, Row, Space, Table, Tag } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

import TablePagination from '../../../../utils/components/TablePagination'
import withdrawAmountColumns from '../../../../tableColumns/withdrawAmountColumns.json'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { GetWithdrawListApi } from '../../../../redux/api/Freelance'
import AppRejModal from './AppRejModal'
import { useModal } from '../../../../utils/hooks/useModal'
import { scrollToTop } from '../../../../utils/utils'

const WithdrawRequestTable = ({ setExcelSheetData }) => {
  const [showAppRejModal, toggleAppRejModal] = useModal()
  const [request, setRequest] = useState({
    id: null,
    status: null,
  })
  const [dataSource, setDataSource] = useState([])
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const { data: WithdrawList, loading: WithdrawLoading } = useSelector(
    (state) => state.withdrawList
  )
  const { data: Withdraw } = useSelector((state) => state.withdrawAmount)

  const handleToggle = (status, id) => {
    setRequest({
      ...request,
      id: id,
      status: status,
    })
    toggleAppRejModal()
  }
  useEffect(() => {
    if (WithdrawList?.data?.items?.length > 0) {
      const dataArr = []
      WithdrawList.data.items.map((item, i) => {
        const { amount, createdAt, id } = item
        return dataArr.push({
          sno: i + 1,
          amount: amount,
          refCode: item?.freeLancer?.refCode,
          // status: (
          //   <Tag
          //     style={{ borderRadius: "24px", padding: "6px" }}
          //     color={item.status === "Approved" ? "green" : "red"}
          //   >
          //     {item.status}
          //   </Tag>
          // ),
          accountTitle: item?.accountTitle,
          accountNumber: item?.accountNumber,
          bankName: item?.bankName,
          date: createdAt?.split('T')[0],
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
                      handleToggle('Approved', id)
                    }}
                  >
                    <CheckCircleOutlined />
                    <span>Accept</span>
                  </Button>
                  <Button
                    className="text-[#E23442] flex items-center border-2 border-[#E23442] rounded-[67px] text-[12px]"
                    onClick={() => {
                      handleToggle('Rejected', id)
                    }}
                  >
                    <CloseCircleOutlined />
                    <span>Reject</span>
                  </Button>
                </>
              )}
            </Space>
          ),
        })
      })
      setDataSource(dataArr)
      let excelArr = WithdrawList.data.items.map((item, i) => {
        const { amount, createdAt, id } = item
        return {
          SNO: i,
          Amount: amount,
          'Ref Code': item?.freeLancer?.refCode,
          'Account Title': item?.freeLancer?.freeLancerProfile?.accountTitle,
          AccountNumber: item?.freeLancer?.freeLancerProfile?.accountNumber,
          'Bank Name': item?.freeLancer?.freeLancerProfile?.bankName,
          Date: createdAt?.split('T')[0],
        }
      })
      setExcelSheetData(excelArr)
    }
  }, [WithdrawList])
  useEffect(() => {
    scrollToTop()
    GetWithdrawListApi(dispatch, pageLimit)
  }, [pageLimit, Withdraw])
  return (
    <>
      {request.id !== null && request.status !== null && (
        <AppRejModal
          visible={showAppRejModal}
          toggle={toggleAppRejModal}
          data={request}
        />
      )}

      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold">All Requests</h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={withdrawAmountColumns}
            scroll={{ x: true }}
            loading={WithdrawLoading}
            pagination={{
              total: WithdrawList?.data?.meta?.totalItems,

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

export default WithdrawRequestTable
