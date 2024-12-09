import React, { useEffect, useRef, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import projectDetailsColums from '../../../../tableColumns/projectDetailColums.json'
import TablePagination from '../../../../utils/components/TablePagination'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllProjectsApi } from '../../../../redux/api/Project'
import { debounce } from 'lodash'

// icon
import FilterIcon from '../../../assest/icon/filter.png'
import Eyeview from '../../../assest/icon/eyeview.png'
import ProjectTabelFilter from './ProjectTabelFilter'
import addIcon from '../../../assest/icon/addicon.png'
import usePageLimit from '../../../../utils/hooks/usePageLimit'
import editIcon from '../../../assest/icon/ViewDetailEditIcon.png'
import { updatePropertyWalletProjectIslLiveStatusApi } from '../../../../redux/api/Project/ProjectInventory'
import { scrollToTop } from '../../../../utils/utils'
import { useModal } from '../../../../utils/hooks/useModal'
import AssignToLounge from './AssignToLounge'
import AddPopup from './AddPopup'

const ProjectDetailsTabel = () => {
  const [isAddModalVisible, toggleAdd] = useModal()
  const [isAddPopupVisible, toggleAddPopup] = useModal()
  const [project, setProject] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getAllProjects = useSelector((state) => state.getAllProjects)
  const updatePropertyWalletProjectIslLiveStatus = useSelector(
    (state) => state.updatePropertyWalletProjectIslLiveStatus
  )
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Project Name')
  const [search, setSearch] = useState('')
  const [range, setRange] = useState(null)

  const handle = (project) => {
    // property-wallet-project/getAll/property/wallet/InventoriesByProject
    navigate(`/property-wallet-inventory/project-details/${project.id}`, {
      state: { project: project },
    })
  }

  const handleAdd = (id) => {
    navigate(`/property-wallet-inventory/add-project-inventory/${id}`)
  }
  const debouncedGetAllProjectsApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter, admin) => {
      getAllProjectsApi(dispatch, pageLimit, search, selectedFilter, admin)
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
  }, [pageLimit, updatePropertyWalletProjectIslLiveStatus?.data])
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
    if (getAllProjects?.data) {
      const data = getAllProjects?.data?.data?.items?.map((project, i) => {
        return {
          key: project.projectName + i,
          projectName: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {/* {project.projectName} */}
              {project?.projectName.length >= 20
                ? `${project?.projectName.substring(0, 20)}...`
                : project?.projectName}
            </span>
          ),
          status: project?.projectStatus,
          inventories: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {project.inventoryCount}
            </span>
          ),
          builderName: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {project?.builderName ? project?.builderName : '-'}
            </span>
          ),
          city: (
            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
              {project?.city}
            </span>
          ),
          location: (
            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
              {project?.address}
            </span>
          ),

          action: (
            <div className="flex gap-3 items-center">
              <div
                className="cursor-pointer w-12"
                onClick={() =>
                  navigate(`/property-wallet-inventory/project/${project?.id}`)
                }
              >
                <img src={editIcon} alt="" />
              </div>

              <div
                className="cursor-pointer w-12"
                onClick={(e) => handle(project)}
              >
                <img src={Eyeview} alt="" />
              </div>
              {/* <Button
                    onClick={(e) => handle(project)}
                className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] flex-shrink-0 btn-primary-1"
              >
                <img src={Eyeview} alt="" />
                <span>View Details</span>
              </Button> */}
              <div
                className="cursor-pointer w-12"
                onClick={(e) => handleAdd(project.id)}
              >
                <img src={addIcon} alt="" />
              </div>
              {/* <Button
                onClick={(e) => handleAdd(project.id)}
                className="flex items-center font-medium text-[12px] gap-2 border-[#27A3A3] text-[#27A3A3] rounded-[41px] h-[38px] flex-shrink-0"
              >
                <img src={addIcon} alt="" />

                <span>Add Inventory</span>
              </Button> */}
              <Button
                onClick={() => {
                  toggleAdd()
                  setProject(project)
                }}
                className="flex items-center font-medium text-[12px] gap-2 border-[#27A3A3] text-[#27A3A3] rounded-[41px] h-[38px] flex-shrink-0"
              >
                <span>Assign to lounge</span>
              </Button>
              {/* <Button
                onClick={() => {
                  toggleAddPopup()
                  setProject(project)
                }}
                className="flex items-center font-medium text-[12px] gap-2 border-[#27A3A3] text-[#27A3A3] rounded-[41px] h-[38px] flex-shrink-0"
              >
                <span>Add Popup</span>
              </Button> */}
              {!project?.isLive && (
                <Button
                  onClick={(e) => {
                    updatePropertyWalletProjectIslLiveStatusApi(
                      dispatch,
                      { isLive: true },
                      project?.id
                    )
                  }}
                  className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] flex-shrink-0 btn-primary-1"
                >
                  <span>Live</span>
                </Button>
              )}
            </div>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllProjects?.data])

  return (
    <>
      {isAddModalVisible && (
        <AssignToLounge
          project={project}
          visible={isAddModalVisible}
          toggleAdd={toggleAdd}
        />
      )}
      {isAddPopupVisible && (
        <AddPopup
          project={project}
          visible={isAddPopupVisible}
          toggleAdd={toggleAddPopup}
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
                  <ProjectTabelFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={[
                      'Project Name',
                      'City',
                      'Builder Name',
                      'Location',
                    ]}
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
            columns={projectDetailsColums}
            loading={
              getAllProjects.loading ||
              updatePropertyWalletProjectIslLiveStatus?.loading
            }
            scroll={{ x: true }}
            pagination={{
              total:
                getAllProjects?.data?.data?.meta?.totalPages *
                getAllProjects?.data?.data?.meta?.itemsPerPage,
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

export default ProjectDetailsTabel
