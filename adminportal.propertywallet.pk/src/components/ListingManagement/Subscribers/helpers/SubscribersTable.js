import React, { useEffect, useState, useRef } from 'react'
import { Button, Col, Input, Popover, Row, Space, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import subscribersColumns from '../../../../tableColumns/subscriberColumns.json'
import { useDispatch, useSelector } from 'react-redux'
import FilterIcon from '../../../assest/icon/filter.png'
import ViewDetailDeleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'
import { useModal } from '../../../../utils/hooks/useModal'
import DeleteSubscriberModal from './DeleteSubscriberModal'
import { getAllSubscriptionApi } from '../../../../redux/api/ManageSubscription'
import { debounce } from 'lodash'
import moment from 'moment'
import TablePagination from '../../../../utils/components/TablePagination'
import SubscribersFilter from './SubscribersFilter'
import { scrollToTop } from '../../../../utils/utils'
import MoreInfoModal from './MoreInfoModal'

const SubscribersTable = () => {
  const [dataSource, setDataSource] = useState([])
  const dispatch = useDispatch()
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [search, setSearch] = useState('')
  const [range, setRange] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [moreData, setMoreData] = useState(null)
  const [isInfoModalVisible, toggleInfoModal] = useModal()
  const [isAddModalVisible, toggle] = useModal()
  const getAllSubscription = useSelector((state) => state?.getAllSubscription)

  const debouncedGetAllSubscriptionApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllSubscriptionApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current

  // useEffect(() => {
  //   getAllSubscriptionApi(dispatch, pageLimit)
  // }, [pageLimit])
  useEffect(() => {
    scrollToTop()
    debouncedGetAllSubscriptionApi(dispatch, pageLimit, search, selectedFilter)
  }, [pageLimit])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search, range])

  useEffect(() => {
    setSearch('')
    setRange([])
  }, [selectedFilter])

  useEffect(() => {
    if (getAllSubscription?.data) {
      const data = getAllSubscription?.data?.data?.items?.map((item) => {
        return {
          name: item?.agency?.createdByUser?.profile?.fullName,
          location: item?.agency?.address || '-',
          agencyName: item?.agency?.agencyName,
          packages: item?.pwSubPackage?.title,
          billings: item?.charges,
          subscriberDate: moment(item?.subscribeDate).format('DD MMMM, YYYY'),
          action: (
            <div className="flex flex-wrap  gap-2">
              <Button
                className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[40px] flex-shrink-0"
                onClick={() => {
                  setMoreData(item)
                  toggleInfoModal()
                }}
              >
                <span>View More details</span>
              </Button>
              <div
                className="cursor-pointer"
                onClick={() => {
                  toggle()
                }}
              >
                <img src={ViewDetailDeleteIcon} alt="" />
              </div>
            </div>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getAllSubscription?.data])

  return (
    <>
      {isAddModalVisible && (
        <DeleteSubscriberModal visible={isAddModalVisible} toggle={toggle} />
      )}
      {moreData !== null && isInfoModalVisible && (
        <MoreInfoModal
          visible={isInfoModalVisible}
          toggleMoreInfoModal={toggleInfoModal}
          data={moreData}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Subscribers
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search ${selectedFilter}`}
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
                // onKeyPress={(event) => {
                //   if (!/[0-9,.]/.test(event.key)) {
                //     event.preventDefault();
                //   }
                // }}
              />
              <Popover
                placement="bottomRight"
                content={
                  <SubscribersFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Name', 'Package', 'Billing']}
                  />
                }
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
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
            columns={subscribersColumns}
            scroll={{ x: true }}
            loading={getAllSubscription?.loading}
            pagination={{
              total:
                getAllSubscription?.data?.data?.meta?.totalPages *
                getAllSubscription?.data?.data?.meta?.itemsPerPage,
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

export default SubscribersTable
