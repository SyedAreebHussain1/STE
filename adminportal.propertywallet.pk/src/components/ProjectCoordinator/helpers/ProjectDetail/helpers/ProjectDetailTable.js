import React, { useEffect, useRef, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Table, Select, Tooltip } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import TablePagination from '../../../../../utils/components/TablePagination'
import projectForProjectCooColumns from '../../../../../tableColumns/projectForProjectCooColumns.json'
import { scrollToTop } from '../../../../../utils/utils'
import { getProjectByIDForModalApi } from '../../../../../redux/api/ProjectCoordinator'
import { debounce } from 'lodash'

const ProjectDetailTable = () => {
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Project Name')
  const [search, setSearch] = useState('')
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const { id } = params
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })

  const getAllProjectForProjectCoo = useSelector(
    (state) => state.getAllProjectForProjectCoo
  )
  const debouncedGetProjectByIDForModalApi = useRef(
    debounce((dispatch, id, pageLimit, search, selectedFilter) => {
      getProjectByIDForModalApi(dispatch, id, pageLimit, search, selectedFilter)
    }, 500)
  ).current

  useEffect(() => {
    scrollToTop()
    debouncedGetProjectByIDForModalApi(
      dispatch,
      id,
      pageLimit,
      search,
      selectedFilter
    )
  }, [dispatch, pageLimit, id])

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
    if (getAllProjectForProjectCoo?.data?.data?.items?.length > 0) {
      const data = getAllProjectForProjectCoo?.data?.data?.items?.map(
        (item, i) => {
          return {
            key: i,
            projectname: item?.projectName || '-',
            description: item?.description ? (
              <Tooltip placement="top" title={item?.description}>
                {item?.description?.substring(0, 18)}...
              </Tooltip>
            ) : (
              '-'
            ),
            address: item?.address ? (
              <Tooltip placement="top" title={item?.address}>
                {item?.address?.substring(0, 18)}...
              </Tooltip>
            ) : (
              '-'
            ),
            city: item?.city || '-',
            builderName: item?.builderName || '-',
            action: (
              <Button
                onClick={() => {
                  if (item?.id) {
                    navigator(
                      `/project-coodinator/project-detail/logs/${item?.id}`,
                      {
                        state: { id: item?.id, data: item },
                      }
                    )
                  }
                }}
                className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[40px] flex-shrink-0 "
              >
                View Logs
              </Button>
            ),
          }
        }
      )
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllProjectForProjectCoo?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Projects
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
            columns={projectForProjectCooColumns}
            scroll={{ x: true }}
            loading={getAllProjectForProjectCoo?.loading}
            pagination={{
              total:
                getAllProjectForProjectCoo?.data?.data?.meta?.totalPages *
                getAllProjectForProjectCoo?.data?.data?.meta?.itemsPerPage,
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

export default ProjectDetailTable
