import React, { useEffect, useState, useRef } from 'react'
import {
  SearchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table, Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import FilterIcon from '../../assest/icon/filter.png'
import { debounce } from 'lodash'
import EloungeColumns from '../../../tableColumns/EloungeColumns.json'
import { scrollToTop } from '../../../utils/utils'
import TableFilter from '../../../utils/components/TableFilter'
import moment from 'moment'
import { useModal } from '../../../utils/hooks/useModal'

// icons
import activesignIcon from '../../assest/icon/activesign.png'
import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import AddNewELoungeModal from './AddNewELoungeModal'
import UpdateELoungeModal from './updateEloungeModal'
import {
  eLoungeActiveStatusApi,
  getELoungeApi,
} from '../../../redux/api/ELounge'
import AssignELoungeModal from './AssignELoungeModal'
import { useNavigate } from 'react-router-dom'

const ELoungeTable = ({ isAddModalVisible, toggle }) => {
  const [dataSource, setDataSource] = useState([])
  const [updateData, setUpdateData] = useState()
  const [assignData, setAssignData] = useState()

  const [isUpdateModalVisible, toggleUpdate] = useModal()
  const [isAssignModalVisible, toggleAssign] = useModal()
  const [selectedFilter, setSelectedFilter] = useState('Lounge Name')
  const [search, setSearch] = useState('')
  const [isActive, setIsActive] = useState({
    isActive: true,
  })
  const [deActive, setDeActive] = useState({
    isActive: false,
  })
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()

  const getElounge = useSelector((state) => state?.getElounge)
  // const ELoungeActiveStatus = useSelector((state) => state?.ELoungeActiveStatus)
  const navigate = useNavigate()
  const debouncedGetELoungeApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getELoungeApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetELoungeApi(dispatch, pageLimit, search, selectedFilter)
  }, [dispatch, pageLimit])

  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])

  // useEffect(() => {
  //   setSearch('')
  // }, [selectedFilter])
  function onSuccess() {
    getELoungeApi(dispatch, pageLimit, search, selectedFilter)
  }

  useEffect(() => {
    if (getElounge?.data) {
      const data = getElounge?.data?.data?.items?.map((val, i) => {
        return {
          key: i,
          loungeName: (
            <div className="relative flex flex-wrap gap-2 items-center">
              <img
                style={{ height: '42px', width: '49px' }}
                src={val?.logo && val?.logo}
                alt=""
              />
              <span className="text-[12px] font-medium text-[#444B54] leading-[18px]">
                {val?.name}
              </span>{' '}
            </div>
          ),
          createDate: (
            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
              {moment(val?.createdAt).format('MM/DD/YYYY')}
            </span>
          ),
          description:
            val?.shortDescription?.length > 40 ? (
              <Popover
                content={
                  <p className="text-[12px] font-medium text-[#3D4350] max-w-[240px] break-words">
                    {val?.shortDescription}
                  </p>
                }
              >
                <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[240px]">
                  {val?.shortDescription}
                </p>
              </Popover>
            ) : (
              <p className="text-[12px] font-medium text-[#3D4350] text-ellipsis overflow-hidden h-[1.5rem] leading-[1.5rem] whitespace-nowrap max-w-[240px]">
                {val?.shortDescription || '-'}
              </p>
            ),

          status: (
            <div className="flex font-semibold text-[12px] leading-[18px] text-[#667085] gap-1">
              {
                <>
                  <span>
                    <img src={val?.isActive ? activesignIcon : ''} alt="" />
                  </span>
                  <span>{val?.isActive ? 'Active' : 'Deactive'}</span>
                </>
              }
            </div>
          ),
          action: (
            <Space>
              <div className="flex space-around flex-wrap  gap-2">
                <div
                  onClick={() => {
                    setUpdateData(val)
                    toggleUpdate()
                  }}
                  className="cursor-pointer"
                >
                  <img src={editIcon} alt="" />{' '}
                </div>

                <div className="cursor-pointer">
                  <>
                    <Button
                      onClick={() => {
                        setAssignData(val)
                        toggleAssign()
                      }}
                      className="flex items-center border-2 rounded-[67px] text-[12px] btn-secondary"
                    >
                      <span>Assign</span>
                    </Button>
                  </>
                </div>
                <div className="cursor-pointer">
                  <>
                    <Button
                      onClick={() => {
                        navigate(`/elounge-assign-users/${val?.id}`, {
                          state: { eLoungeName: `${val?.name}` },
                        })
                      }}
                      className="flex items-center border-2 rounded-[67px] text-[12px] btn-secondary"
                    >
                      <span>View Assign Users</span>
                    </Button>
                  </>
                </div>
              </div>
            </Space>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getElounge?.data])

  return (
    <>
      {isAddModalVisible && (
        <AddNewELoungeModal visible={isAddModalVisible} toggle={toggle} />
      )}
      {isUpdateModalVisible && (
        <UpdateELoungeModal
          visible={isUpdateModalVisible}
          toggle={toggleUpdate}
          updateData={updateData}
        />
      )}
      {isAssignModalVisible && (
        <AssignELoungeModal
          visible={isAssignModalVisible}
          toggle={toggleAssign}
          data={assignData}
        />
      )}

      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Lounges
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {/* <Input
                placeholder={`Search E-Lounge`}
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-[268px] h-[43px]"
                value={search}
              /> */}

              {/* <Popover
                placement="bottomRight"
                content={
                  <TableFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Lounge Name', 'Lounge Owner']}
                  />
                }
                trigger="click"
              >
                <Button className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[40px]">
                  <img
                    src={FilterIcon}
                    style={{ filter: 'brightness(4)' }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover> */}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={EloungeColumns}
            scroll={{ x: true }}
            loading={getElounge?.loading}
            pagination={{
              total:
                getElounge?.data?.data?.meta?.totalPages *
                getElounge?.data?.data?.meta?.itemsPerPage,
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

export default ELoungeTable
