import React, { useEffect, useRef, useState } from 'react'
import {
  SearchOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { Button, Col, Input, Row, Table, Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import TablePagination from '../../../utils/components/TablePagination'
import FilterIcon from '../../assest/icon/filter.png'
import { debounce } from 'lodash'
import ProjectCoordinatorColumns from '../../../tableColumns/ProjectCoordinatorColumns.json'
import { scrollToTop } from '../../../utils/utils'
import TableFilter from '../../../utils/components/TableFilter'
import moment from 'moment'

// icons
import activesignIcon from '../../assest/icon/activesign.png'
import AddNewCoordinatorModal from './AddNewCoordinatorModal'
import {
  coodinatorActiveStatusApi,
  getAllCoodinatorApi,
} from '../../../redux/api/ProjectCoordinator'
import { useModal } from '../../../utils/hooks/useModal'
import AssignProject from './AssignProjectModal'
import ViewProjectModal from './ViewProjectModal'

const ProjectCoordinatorTable = ({ isAddModalVisible, toggle }) => {
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [search, setSearch] = useState('')
  const navigator = useNavigate()
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
  const [project, setProject] = useState(null)

  const [isAssignVisible, toggleAssign] = useModal()
  const [isViewVisible, toggleView] = useModal()
  const [viewModalData, setViewModalData] = useState(null)

  const dispatch = useDispatch()
  const getCoodinator = useSelector((state) => state?.GetAllProjectCoodinator)
  const statusChange = useSelector((state) => state?.CoordinatorActiveStatus)
  const createProjectCoordinator = useSelector(
    (state) => state?.CreateProjectCoordinator
  )
  const debouncedGetAllCoodinatorApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllCoodinatorApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetAllCoodinatorApi(dispatch, pageLimit, search, selectedFilter)
  }, [dispatch, pageLimit, statusChange, createProjectCoordinator])

  // &fullName=Habshi%20Habibi

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
    if (getCoodinator?.data?.data?.items?.length > 0) {
      const data = getCoodinator?.data?.data?.items?.map((val, i) => {
        return {
          key: i,
          name: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {val?.fullName}
            </span>
          ),
          phoneNo: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {val?.phone || '-'}
            </span>
          ),
          email: (
            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
              {val?.email}
            </span>
          ),
          date: (
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              {moment(val?.createdAt).format('MM/DD/YYYY') || '-'}
            </span>
          ),
          project: (
            <Button
              onClick={() => {
                if (val?.id) {
                  navigator(`/project-coodinator/project-detail/${val?.id}`, {
                    state: { id: val?.id, data: val },
                  })
                }
              }}
              className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[40px] flex-shrink-0 "
            >
              View Project
            </Button>
          ),
          role: (
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              {val?.projectCoordinatorRole?.title || '-'}
            </span>
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
                <div className="cursor-pointer">
                  {val?.isActive ? (
                    <div className="flex gap-2">
                      <Button
                        onClick={() =>
                          coodinatorActiveStatusApi(dispatch, deActive, val?.id)
                        }
                        className="text-[#fff] flex items-center border-2 border-[#E23442] bg-[#E23442] rounded-[67px] text-[12px] btn-primary h-[38px]"
                      >
                        <CloseCircleOutlined />
                        <span>Suspend</span>
                      </Button>
                      <Button
                        onClick={() => {
                          toggleAssign()
                          setProject(val)
                        }}
                        className="flex items-center font-medium text-[12px] gap-2 border-[#27A3A3] text-[#27A3A3] rounded-[41px] h-[38px] flex-shrink-0"
                      >
                        <span>Assign Project</span>
                      </Button>
                    </div>
                  ) : (
                    <Space>
                      <div className="flex gap-2">
                        <Button
                          onClick={() =>
                            coodinatorActiveStatusApi(
                              dispatch,
                              isActive,
                              val?.id
                            )
                          }
                          className="text-[#fff] flex items-center border-2 border-[#0BBC64] bg-[#0BBC64] rounded-[67px] text-[12px] btn-primary h-[38px]"
                        >
                          <CheckCircleOutlined />
                          <span>Active</span>
                        </Button>
                        <Button
                          onClick={() => {
                            toggleAssign()
                            setProject(val)
                          }}
                          className="flex items-center font-medium text-[12px] gap-2 border-[#27A3A3] text-[#27A3A3] rounded-[41px] h-[38px] flex-shrink-0"
                        >
                          <span>Assign Project</span>
                        </Button>
                      </div>
                    </Space>
                  )}
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
  }, [getCoodinator])

  return (
    <>
      {isAddModalVisible && (
        <AddNewCoordinatorModal visible={isAddModalVisible} toggle={toggle} />
      )}
      {isAssignVisible && (
        <AssignProject
          visible={isAssignVisible}
          toggle={toggleAssign}
          value={project}
        />
      )}
      {
        <ViewProjectModal
          visible={isViewVisible}
          toggle={toggleView}
          value={viewModalData}
        />
      }

      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Users
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Status' ? (
                <Select
                  onChange={(e) => setSearch(e)}
                  value={search}
                  className="w-full lg:w-[268px] h-[43px]"
                  allowClear
                >
                  <Select.Option>Active</Select.Option>
                  <Select.Option>In Active</Select.Option>
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
            columns={ProjectCoordinatorColumns}
            scroll={{ x: true }}
            loading={getCoodinator?.loading}
            pagination={{
              total:
                getCoodinator?.data?.data?.meta?.totalPages *
                getCoodinator?.data?.data?.meta?.itemsPerPage,
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

export default ProjectCoordinatorTable
