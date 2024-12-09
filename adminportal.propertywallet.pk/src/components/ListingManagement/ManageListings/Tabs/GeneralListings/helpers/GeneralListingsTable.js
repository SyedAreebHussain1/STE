import React, { useEffect, useState, useRef } from 'react'
import { Button, Col, Input, Row, Space, Spin, Table } from 'antd'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import {
  deleteListingsApprovalApi,
  getAllListingsApprovalsApi,
  updateListingsApprovalsApi,
} from '../../../../../../redux/api/ListingsApprovals'
import listingsApprovalsColumns from '../../../../../../tableColumns/listingsApprovalsColumns.json'
import TablePagination from '../../../../../../utils/components/TablePagination'
import EyeView from '../../../../../assest/icon/eyeview.png'
import ViewDetailDeleteIcon from '../../../../../assest/icon/ViewDetailDeleteIcon.png'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'
import { useModal } from '../../../../../../utils/hooks/useModal'
import RemarksModal from '../../../../../../utils/components/Modals/RemarksModal'
import { scrollToTop } from '../../../../../../utils/utils'

const GeneralListingsTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [allListings, setAllListings] = useState([])
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [isModalVisible, toggle] = useModal()
  const [rejectId, setRejectId] = useState(null)
  const navigate = useNavigate()
  const getAllListingsApprovals = useSelector(
    (state) => state.getAllListingsApprovals
  )
  const updateListingsApprovals = useSelector(
    (state) => state.updateListingsApprovals
  )
  const deleteListingsApproval = useSelector(
    (state) => state.deleteListingsApproval
  )

  const debouncedGetAllListingsApprovalsApi = useRef(
    debounce((dispatch, pageLimit, search) => {
      getAllListingsApprovalsApi(dispatch, pageLimit, search)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetAllListingsApprovalsApi(dispatch, pageLimit, search)
  }, [pageLimit, deleteListingsApproval?.data])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])

  function onSuccessApproval(id, status) {
    const newListings = allListings.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          loading: false,
          status: 'Approved',
        }
      }
      return item
    })
    setAllListings(newListings)
  }

  function onFailureApproval(id) {
    const newListings = allListings.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          loading: false,
        }
      }
      return item
    })
    setAllListings(newListings)
  }

  function handleListingApprovals(body, id) {
    const newListings = allListings.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          loading: true,
        }
      }
      return item
    })
    setAllListings(newListings)
    updateListingsApprovalsApi(
      dispatch,
      body,
      id,
      onSuccessApproval,
      onFailureApproval
    )
  }

  useEffect(() => {
    if (getAllListingsApprovals?.data) {
      const data = getAllListingsApprovals?.data?.data?.items?.map(
        (item, i) => {
          return {
            inventory:
              item?.inventory?.title || item?.inventory?.project?.projectName,
            areaSize:
              item?.inventory?.landSize +
              ' ' +
              item?.inventory?.landArea?.title,
            propertyType: item?.inventory?.projectType?.title,
            SubpropertyType: item?.inventory?.projectSubType?.title,
            inventoryType: item?.inventory?.inVentoryType,
            price: item?.inventory?.price,
            agencyName: item?.agency?.agencyName,
            pwSubPackage: item?.PwSubPackage?.pwPackage?.title,
            saleCommission: item?.saleCommission,
            date: moment(item?.createdAt).format('DD/MM/YYYY'),
            status: item?.status,
            id: item?.id,
            inventoryId: item?.inventoryId,
            loading: false,
          }
        }
      )

      setAllListings(data)
    }
  }, [getAllListingsApprovals?.data])

  useEffect(() => {
    if (allListings?.length > 0) {
      const data = allListings?.map((item) => {
        return {
          inventory: item?.inventory,
          areaSize: item?.areaSize,
          propertyType: item?.propertyType,
          SubpropertyType: item?.SubpropertyType,
          inventoryType: item?.inventoryType,
          price: item?.price,
          agencyName: item?.agencyName,
          pwSubPackage: item?.pwSubPackage,
          saleCommission: item?.saleCommission,
          date: item?.date,
          status:
            item?.status === 'Approved' ? (
              <Space className="flex gap-2 flex-wrap justify-center">
                <>
                  <Button className="text-[#fff] flex items-center border-2 border-[#0BBC64] bg-[#0BBC64] rounded-[67px] text-[12px] btn-primary">
                    <CheckCircleOutlined />
                    <span>Accepted</span>
                  </Button>
                </>
              </Space>
            ) : item?.status === 'Rejected' ? (
              <Space className="flex gap-2 flex-wrap justify-center">
                <>
                  <Button className="text-[#fff] flex items-center border-2 border-[#E23442] bg-[#E23442] rounded-[67px] text-[12px] btn-primary">
                    <CloseCircleOutlined />
                    <span>Rejected</span>
                  </Button>
                </>
              </Space>
            ) : (
              <Space>
                <Spin spinning={item.loading}>
                  <div className="flex gap-2 flex-wrap justify-center">
                    <Button
                      className="text-[#0BBC64] flex items-center border-2 border-[#0BBC64] rounded-[67px] text-[12px]"
                      onClick={() => {
                        handleListingApprovals({ status: 'Approved' }, item?.id)
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
                  </div>
                </Spin>
              </Space>
            ),
          action: (
            <div className="flex items-center gap-2">
              <Button
                className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] flex-shrink-0 btn-primary-1"
                onClick={() => {
                  navigate(
                    `/dashboard/listing-management/listings/${item?.inventoryId}`,
                    {
                      state: { listingId: item?.id, type: 'listing' },
                    }
                  )
                }}
              >
                <img src={EyeView} alt="" />
                <span>View Details</span>
              </Button>
              <div
                className="flex flex-wrap  gap-2"
                onClick={() => {
                  deleteListingsApprovalApi(dispatch, item?.id, () => {})
                }}
              >
                <div className="cursor-pointer flex-shrink-0">
                  <img src={ViewDetailDeleteIcon} alt="" />
                </div>
              </div>
            </div>
          ),
        }
      })

      setDataSource(data)
    }
  }, [allListings])

  function onSuccess(id) {
    const newListings = allListings.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: 'Rejected',
        }
      }
      return item
    })
    setAllListings(newListings)
    toggle()
    setRejectId(null)
  }

  function onSubmitModal(e) {
    const body = {
      status: 'Rejected',
      statusRemarks: e.remarks,
    }

    updateListingsApprovalsApi(dispatch, body, rejectId, onSuccess)
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
      <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto mb-[18px] mt-[32px]">
        <Input
          placeholder={`Search Agency Name`}
          prefix={<SearchOutlined />}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full lg:w-[293px] h-[43px]  border-2 border-[#667085] rounded-[8px]"
          value={search}
        />
      </div>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Listings Requests
              </h3>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={listingsApprovalsColumns}
            scroll={{ x: true }}
            loading={
              getAllListingsApprovals.loading || deleteListingsApproval?.loading
            }
            pagination={{
              total:
                getAllListingsApprovals?.data?.data?.meta?.totalPages *
                getAllListingsApprovals?.data?.data?.meta?.itemsPerPage,
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

export default GeneralListingsTable
