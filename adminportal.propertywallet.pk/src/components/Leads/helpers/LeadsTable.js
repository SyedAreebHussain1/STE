import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Input, Row, Table, Button, Popover } from 'antd'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import leadColumns from '../../../tableColumns/leadColumns.json'
import NoTableData from '../../../utils/components/NoTableData'
import { useModal } from '../../../utils/hooks/useModal'
import TablePagination from '../../../utils/components/TablePagination'
import EditLeadsModal from './EditLeadsModal'
import { getAllLeadsForAdminApi } from '../../../redux/api/Leads'
import FilterIcon from '../../assest/icon/filter.png'
import LeadFilter from './LeadFilter'
import Eyeview from '../../assest/icon/eyeview.png'
import LeadViewDetailModal from './LeadViewDetailModal'
import { scrollToTop } from '../../../utils/utils'

const LeadsTable = ({ handleOnClick }) => {
  const dispatch = useDispatch()
  const [isEditModalVisible, toggleEdit] = useModal()
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Lead Name')
  const [selectedData, setSelectedData] = useState(null)
  const [isAddModalVisible, toggleAdd] = useModal()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [search, setSearch] = useState('')
  const getAllLeadsForAdmin = useSelector((state) => state?.getAllLeadsForAdmin)
  const handleClick = (e, data) => {
    toggleAdd()
    setSelectedData(data)
  }
  const debouncedGetAllLeadsForAdminApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllLeadsForAdminApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllLeadsForAdminApi(dispatch, pageLimit, search, selectedFilter)
  }, [dispatch, pageLimit])
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])
  useEffect(() => {
    setSearch('')
  }, [selectedFilter])
  useEffect(() => {
    if (getAllLeadsForAdmin?.data?.data?.items) {
      const data = getAllLeadsForAdmin?.data?.data?.items?.map((val, i) => {
        return {
          key: i,
          product: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.leadInventoryOne?.propertyWalletProduct?.title || '-'}
            </span>
          ),
          agency: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.createdByUser?.profile?.agency?.agencyName || '-'}
            </span>
          ),
          projectName: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.leadInventoryOne?.propertyWalletInventoryPlot
                ?.propertyWalletInventory?.propertyWalletProject?.projectName ||
                '-'}
            </span>
          ),
          leadName: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.client?.name || '-'}
            </span>
          ),
          CNIC: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.propertyWalletProductSaleQuotation
                ?.propertyWalletProductFinalizeSale?.cnic ||
                val?.propertyWalletInventorySaleQuotation
                  ?.propertyWalletInventoryFinalizeSale?.cnic ||
                '-'}
            </span>
          ),
          phoneNo: (
            <span className="text-[12px] font-medium text-[#444B54]">
              {val?.client?.phone}
            </span>
          ),
          addedBy: (
            <span className="text-[12px] font-medium text-[#444B54]">
              {val?.createdByUser?.profile?.fullName || '-'}
            </span>
          ),
          action: (
            <Button
              onClick={(e) => handleClick(e, val)}
              className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] w-max"
            >
              <img src={Eyeview} alt="" />
              <span>View Description</span>
            </Button>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllLeadsForAdmin?.data])
  return (
    <>
      <EditLeadsModal visible={isEditModalVisible} toggleAdd={toggleEdit} />
      <LeadViewDetailModal
        modal={{ isAddModalVisible, toggleAdd }}
        selectedData={selectedData}
      />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold">All Leads</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Location' ? (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              ) : (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              )}
              <Popover
                placement="bottomRight"
                content={
                  <LeadFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Agency', 'Lead Name', 'Project Name']}
                  />
                }
                trigger="click"
              >
                <Button className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px] flex-shrink-0">
                  <img
                    src={FilterIcon}
                    style={{ filter: 'brightness(4)' }}
                    className="brightness-4"
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={leadColumns}
            loading={getAllLeadsForAdmin?.loading}
            scroll={{ x: true }}
            locale={{
              emptyText: (
                <NoTableData
                  handleOnClick={handleOnClick}
                  text="No Leads Added"
                  buttonText="Add New Leads"
                />
              ),
            }}
            pagination={{
              total: getAllLeadsForAdmin.data?.data?.meta?.totalItems,
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

export default LeadsTable
