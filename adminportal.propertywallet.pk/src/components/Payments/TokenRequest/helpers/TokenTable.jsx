import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Input,
  Popover,
  Row,
  Space,
  Table,
  Tag,
  Select,
} from 'antd'
import tokenColumns from '../../../../tableColumns/tokenColumns.json'
import TablePagination from '../../../../utils/components/TablePagination'
import { useModal } from '../../../../utils/hooks/useModal'
import ExtendDayModal from './ExtendDayModal'
import { getPaymentTokenRequestsApi } from '../../../../redux/api/Payment'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { debounce } from 'lodash'
import TokenRequestFilter from './TokenRequestFilter'
// icon
import CalcendarIcon from '../../../assest/icon/calendar.png'
import FilterIcon from '../../../assest/icon/filter.png'
import { scrollToTop } from '../../../../utils/utils'

const TokensTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [isAddModalVisible, toggleAdd] = useModal()
  const [idToExtend, setIdtoExtend] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState('Project Name')
  const [search, setSearch] = useState('')
  const [isVerified, setIsVerified] = useState('')
  const [range, setRange] = useState([])
  const [startDate, setStartDate] = useState(null)
  const getPaymentTokenRequests = useSelector(
    (state) => state.getPaymentTokenRequests
  )
  const tokenUpdateExpiry = useSelector((state) => state?.tokenUpdateExpiry)
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  const debouncedGetPaymentTokenRequestsApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getPaymentTokenRequestsApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetPaymentTokenRequestsApi(
      dispatch,
      pageLimit,
      search,
      selectedFilter
    )
  }, [pageLimit, tokenUpdateExpiry?.data])
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
    if (getPaymentTokenRequests?.data) {
      const data = getPaymentTokenRequests?.data?.data?.items?.map(
        (item, i) => {
          const expireDate = moment(
            moment(item?.createdAt).format('YYYY-MM-DD')
          ).add(item?.expireAt, 'days')
          const todayDate = moment().format('YYYY-MM-DD')
          return {
            key: i,
            inventory: item?.propertyWalletProductSaleQuotation
              ?.propertyWalletProduct?.propertyWalletProductPhoto?.[0]
              ?.photo ? (
              <div className="flex gap-2">
                <img
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '5px',
                    marginTop: '2%',
                    objectFit: 'cover',
                  }}
                  alt=""
                  src={
                    item?.propertyWalletProductSaleQuotation
                      ?.propertyWalletProduct?.propertyWalletProductPhoto?.[0]
                      ?.photo
                  }
                />
                <p>
                  {item?.propertyWalletProductSaleQuotation
                    ?.propertyWalletProduct?.title || 'N/A'}
                </p>
              </div>
            ) : (
              'N/A'
            ),
            projectName: item?.propertyWalletInventorySaleQuotation
              ?.propertyWalletInventoryPlot?.propertyWalletInventory
              ?.propertyWalletProject?.projectName ? (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {
                  item?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.propertyWalletProject?.projectName
                }
              </span>
            ) : (
              'N/A'
            ),
            propertySize: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350] gap-1 flex">
                <p>
                  {' '}
                  {item?.propertyWalletProductSaleQuotation
                    ?.propertyWalletProduct?.landSize ||
                    item?.propertyWalletInventorySaleQuotation
                      ?.propertyWalletInventoryPlot?.propertyWalletInventory
                      ?.landSize}
                </p>
                <p>
                  {item?.propertyWalletProductSaleQuotation
                    ?.propertyWalletProduct?.landArea?.title ||
                    item?.propertyWalletInventorySaleQuotation
                      ?.propertyWalletInventoryPlot?.propertyWalletInventory
                      ?.landArea?.title}
                </p>
              </span>
            ),
            agentName: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {item?.createdByUser?.profile?.fullName}
              </span>
            ),
            InventoryPrice: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {item?.propertyWalletInventorySaleQuotation
                  ?.propertyWalletInventoryPlot?.propertyWalletInventory
                  ?.price ||
                  item?.propertyWalletProductSaleQuotation
                    ?.propertyWalletProduct?.price}
              </span>
            ),
            TokenAmount: (
              <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                {item?.amount}
              </span>
            ),
            Status: (
              <>
                {expireDate.diff(todayDate, 'days') > 0 ? (
                  <Tag
                    style={{ borderRadius: '24px', padding: '6px' }}
                    color={'blue'}
                  >
                    {`${expireDate.diff(todayDate, 'days')} days remaining`}
                  </Tag>
                ) : (
                  <Tag
                    style={{ borderRadius: '24px', padding: '6px' }}
                    color={'red'}
                  >
                    expired
                  </Tag>
                )}
              </>
            ),
            action: (
              <Space>
                <Button
                  className="flex items-center"
                  type="default"
                  style={{ borderColor: '#053B5C', color: '#053B5C' }}
                  shape="round"
                  block
                  // disabled={item?.paymentStatus === 'PAID'}
                  disabled={expireDate.diff(todayDate, 'days') < 0}
                  onClick={() => {
                    toggleAdd()
                    setIdtoExtend({
                      id: item?.id,
                      expireAt: item?.expireAt,
                    })
                  }}
                >
                  {' '}
                  <img src={CalcendarIcon} alt="" /> &nbsp;&nbsp;Extend &nbsp;
                  &nbsp;
                </Button>
              </Space>
            ),
          }
        }
      )
      setDataSource(data)
    }
  }, [getPaymentTokenRequests?.data])
  return (
    <>
      <ExtendDayModal
        visible={isAddModalVisible}
        toggleAdd={toggleAdd}
        idToExtend={idToExtend}
      />
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Tokens
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Land Area' ? (
                <Select
                  onChange={(e) => setSearch(e)}
                  value={search}
                  allowClear
                  className="w-full lg:w-[268px] h-[43px]"
                >
                  {['agentManager', 'agentStaff', 'agentOwner']?.map(
                    (item, i) => {
                      return <Select.Option key={item}>{item}</Select.Option>
                    }
                  )}
                </Select>
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
                  <TokenRequestFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Agent Name', 'Project Name']}
                  />
                }
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center justify-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
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
            columns={tokenColumns}
            loading={getPaymentTokenRequests?.loading}
            scroll={{ x: true }}
            pagination={{
              total:
                getPaymentTokenRequests?.data?.data?.meta?.totalPages *
                getPaymentTokenRequests?.data?.data?.meta?.itemsPerPage,
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

export default TokensTable
