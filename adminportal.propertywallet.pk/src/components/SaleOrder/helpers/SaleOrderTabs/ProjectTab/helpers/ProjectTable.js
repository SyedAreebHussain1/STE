import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import TableFilter from '../../../../../../utils/components/TableFilter'
import TablePagination from '../../../../../../utils/components/TablePagination'
import { useDispatch } from 'react-redux'
import FilterIcon from '../../../../../assest/icon/filter.png'
import eyeview from '../../../../../assest/icon/eyeview.png'
import ProjectSaleOrderColumns from './../../../../../../tableColumns/ProjectSaleOrderColumns.json'
import { debounce } from 'lodash'
import { getProjectSaleOrderApi } from '../../../../../../redux/api/SalesOrder'
import { useSelector } from 'react-redux'
import { useModal } from '../../../../../../utils/hooks/useModal'
import ViewDocumentModal from './ViewDocumentModal'
import { scrollToTop } from '../../../../../../utils/utils'

const ProjectTable = () => {
  const [isModalVisible, toggle] = useModal()
  const [modalData, setModalData] = useState(null)
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Project Name')
  const [search, setSearch] = useState('')

  const getProjectSaleOrder = useSelector((state) => state.getProjectSaleOrder)

  const debouncedGetAllProjectsApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter, admin) => {
      getProjectSaleOrderApi(dispatch, pageLimit, search, selectedFilter, admin)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetAllProjectsApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter,
      true
    )
  }, [pageLimit])
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])
  useEffect(() => {
    setSearch('')
    // setRange([]);
  }, [selectedFilter])

  useEffect(() => {
    if (getProjectSaleOrder?.data) {
      const data = getProjectSaleOrder?.data?.data?.items?.map((item, key) => {
        return {
          key,
          projectName:
            item?.propertyWalletInventorySaleQuotation
              ?.propertyWalletInventoryPlot?.propertyWalletInventory
              ?.propertyWalletProject?.projectName,
          clientName: item?.propertyWalletInventorySaleQuotation?.clientName,
          agency: item?.createdByUser?.profile?.agency?.agencyName,
          sellingPrice: 'PKR ' + item?.totalAmount,
          location:
            item?.propertyWalletInventorySaleQuotation
              ?.propertyWalletInventoryPlot?.propertyWalletInventory
              ?.propertyWalletProject?.address,
          action: (
            <Button
              className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[30px] flex-shrink-0"
              onClick={() => {
                setModalData(item)
                toggle()
              }}
            >
              <img src={eyeview} alt="" />
              <span>View Document</span>
            </Button>
          ),
        }
      })

      setDataSource(data)
    }
  }, [getProjectSaleOrder?.data])
  return (
    <>
      {isModalVisible && (
        <ViewDocumentModal
          visible={isModalVisible}
          toggle={toggle}
          data={modalData}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B font-medium ">
                All Projects
              </h3>
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
                  <TableFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Project Name', 'Client Name', 'Agency Name']}
                  />
                }
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[40px]"
                  // onClick={showDrawer}
                >
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
            columns={ProjectSaleOrderColumns}
            loading={getProjectSaleOrder.loading}
            scroll={{ x: true }}
            pagination={{
              total: getProjectSaleOrder?.data?.data?.meta?.totalItems,
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

export default ProjectTable
