import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Input, Popover, Row, Space, Table } from 'antd'
import {
  SearchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { useModal } from '../../../utils/hooks/useModal'
import TablePagination from '../../../utils/components/TablePagination'
import commissionRequestsColumns from './../../../tableColumns/commissionRequestsColumns.json'

// icon
import FilterIcon from '../../assest/icon/filter.png'
import ChangeStatusModal from './ChangeStatusModal'
import RejectModal from './RejectModal'
import {
  approveOrRejectCommissionApi,
  getAllCommissionRequestApi,
} from '../../../redux/api/CommissionRequest'
import { debounce } from 'lodash'
import RemarksModal from '../../../utils/components/Modals/RemarksModal'
import { scrollToTop } from '../../../utils/utils'

const CommissionRequestsTable = () => {
  const dispatch = useDispatch()
  const [isAddModalVisible, toggleAdd] = useModal()
  const [isRejectModalVisible, toggleReject] = useModal()
  const [rejectId, setRejectId] = useState(null)
  const [search, setSearch] = useState('')
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const ApproveOrReject = useSelector((state) => state.ApproveOrReject)
  const getAllCommissionRequest = useSelector(
    (state) => state.getAllCommissionRequest
  )

  const debouncedGetAllCommissionRequestApi = useRef(
    debounce((dispatch, pageLimit, search) => {
      getAllCommissionRequestApi(dispatch, pageLimit, search)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllCommissionRequestApi(dispatch, pageLimit, search)
  }, [pageLimit, ApproveOrReject?.data])
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])

  useEffect(() => {
    if (getAllCommissionRequest?.data) {
      const data = getAllCommissionRequest?.data?.data?.items?.map(
        (item, key) => {
          return {
            key: key,
            agentId: item?.createdBy,
            commissionAmount: item?.amount,
            bankName: item?.bankName,
            accountHolderName: item?.accountTitleName,
            accountNo: item?.accountNo,
            action:
              item?.status === 'Approved' ? (
                <Space>
                  <>
                    <Button className="text-[#fff] flex items-center border-2 border-[#0BBC64] bg-[#0BBC64] rounded-[67px] text-[12px] btn-primary">
                      <CheckCircleOutlined />
                      <span>Accepted</span>
                    </Button>
                  </>
                </Space>
              ) : item?.status === 'Rejected' ? (
                <Space>
                  <>
                    <Button className="text-[#fff] flex items-center border-2 border-[#E23442] bg-[#E23442] rounded-[67px] text-[12px] btn-primary">
                      <CloseCircleOutlined />
                      <span>Rejected</span>
                    </Button>
                  </>
                </Space>
              ) : (
                <Space>
                  <>
                    <Button
                      className="text-[#0BBC64] flex items-center border-2 border-[#0BBC64] rounded-[67px] text-[12px]"
                      onClick={() => {
                        approveOrRejectCommissionApi(dispatch, item?.id, {
                          status: 'Approved',
                        })
                      }}
                    >
                      <CheckCircleOutlined />
                      <span>Accept</span>
                    </Button>
                    <Button
                      className="text-[#E23442] flex items-center border-2 border-[#E23442] rounded-[67px] text-[12px]"
                      onClick={() => {
                        setRejectId(item?.id)
                        toggleReject()
                      }}
                    >
                      <CloseCircleOutlined />
                      <span>Reject</span>
                    </Button>
                  </>
                </Space>
              ),
          }
        }
      )
      setDataSource(data)
    }
  }, [getAllCommissionRequest?.data])

  function onSuccess() {
    toggleReject()
    setRejectId(null)
  }

  function onSubmitModal(e) {
    const body = {
      status: 'Rejected',
      statusRemarks: e.remarks,
    }

    approveOrRejectCommissionApi(dispatch, rejectId, body, onSuccess)
  }

  return (
    <>
      <ChangeStatusModal visible={isAddModalVisible} toggleAdd={toggleAdd} />
      {isRejectModalVisible && (
        <RemarksModal
          visible={isRejectModalVisible}
          toggleAdd={toggleReject}
          onSubmit={onSubmitModal}
        />
      )}

      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold">
                All Commission Requests
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder="Search Account No"
                prefix={<SearchOutlined />}
                className="w-full lg:w-[300px] h-[41px]"
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <Popover
                placement="bottomRight"
                // content={<ProjectTabelFilter filterTitle={filterTitle} />}
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                // onClick={showDrawer}
                >
                  <img
                    src={FilterIcon}
                    style={{ filter: "brightness(4)" }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover> */}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={commissionRequestsColumns}
            scroll={{ x: true }}
            loading={getAllCommissionRequest?.loading}
            pagination={{
              total:
                getAllCommissionRequest?.data?.data?.meta?.totalPages *
                getAllCommissionRequest?.data?.data?.meta?.itemsPerPage,
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

export default CommissionRequestsTable
