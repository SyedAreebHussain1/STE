import React, { useEffect, useRef, useState } from 'react'
// import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Input, Popover, Row, Select, Table } from 'antd'
import ViewDetailsTableColumns from '../../../../../tableColumns/ViewDetailsTableColumns.json'
import { useDispatch } from 'react-redux'
import TablePagination from '../../../../../utils/components/TablePagination'
import { inventoriesByProjectApi } from '../../../../../redux/api/Project'
import { useSelector } from 'react-redux'
import { debounce } from 'lodash'
import { useNavigate, useParams } from 'react-router-dom'

// icon
// import FilterIcon from "../../../../assest/icon/filter.png";
import ProjectTabelFilter from '../../helpers/ProjectTabelFilter'
import deleteIcon from '../../../../assest/icon/ViewDetailDeleteIcon.png'
import editIcon from '../../../../assest/icon/ViewDetailEditIcon.png'
// import InputLabel from "../../../../../utils/components/InputFields/InputLabel";
// import NumberField from "../../../../../utils/components/InputFields/NumberField";
// import { SelectField } from "../../../../../utils/components/InputFields/SelectField";
// import TextAreaField from "../../../../../utils/components/InputFields/TextAreaField";
import { getLandAreaApi } from '../../../../../redux/api/SingleProperty'

const ViewDetailsTabel = () => {
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inventoriesByProject = useSelector(
    (state) => state.inventoriesByProject
  )
  const getLandArea = useSelector((state) => state.getLandArea)

  let params = useParams()
  const paramsId = params.id
  const [dataSource, setDataSource] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('Land Size')
  const [search, setSearch] = useState({
    landArea: '',
  })
  const [disabledBtn, setDisabledBtn] = useState(true)

  const debouncedInventoriesByProjectApi = useRef(
    debounce((dispatch, paramsId, pageLimit, search, selectedFilter) => {
      inventoriesByProjectApi(
        dispatch,
        paramsId,
        pageLimit,
        search,
        selectedFilter
      )
    }, 500)
  ).current

  useEffect(() => {
    if (search.landArea == '')
      debouncedInventoriesByProjectApi(
        dispatch,
        paramsId,
        pageLimit,
        search,
        selectedFilter
      )
    getLandAreaApi(dispatch, pageLimit)
  }, [pageLimit, dispatch])
  useEffect(() => {
    if (search.landArea !== '') {
      debouncedInventoriesByProjectApi(
        dispatch,
        paramsId,
        pageLimit,
        search,
        selectedFilter
      )
    }
  }, [search])
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search])
  useEffect(() => {
    setSearch({
      landArea: '',
    })
  }, [selectedFilter])

  useEffect(() => {
    if (inventoriesByProject?.data) {
      const data = inventoriesByProject?.data?.data?.items.map((val, i) => {
        return {
          projectName: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {/* {val?.propertyWalletProject?.projectName} */}
              {val?.propertyWalletProject?.projectName.length >= 30
                ? `${val?.propertyWalletProject?.projectName.substring(
                    0,
                    15
                  )}...`
                : val?.propertyWalletProject?.projectName}
            </span>
          ),
          status: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {/* {val?.propertyWalletProject?.projectName} */}
              {val?.inventoryStatus}
            </span>
          ),
          location: (
            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
              {val?.propertyWalletProject?.address}
            </span>
          ),
          city: (
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              {val?.propertyWalletProject?.city}
            </span>
          ),
          totalAreaSize: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {val?.landSize} {val?.landArea?.title}
            </span>
          ),
          action: (
            <div className="flex flex-wrap  gap-2">
              <div
                className="cursor-pointer"
                onClick={() =>
                  navigate(
                    `/property-wallet-inventory/update-project-inventory/${val?.id}`
                  )
                }
              >
                <img src={editIcon} alt="" />{' '}
              </div>
              <div className="cursor-pointer">
                <img src={deleteIcon} alt="" />
              </div>
            </div>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [inventoriesByProject?.data])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B font-medium ">
                All projects
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Land Size' ? (
                <Row gutter={16}>
                  {/* <Col lg={12} xs={24}>
                    <Input value={search.landSize} className="w-full lg:w-[200px] h-[35px]" onChange={(e) => {

                      setSearch({ landSize: e.target.value, landArea: "" })
                    }
                    } placeholder="Land Size"
                      name='landSize'
                    />
                  </Col> */}
                  <Col lg={12} xs={24}>
                    <Select
                      className="w-full lg:w-[200px] h-[35px]"
                      size="small"
                      allowClear
                      placeholder="Select Land Area"
                      value={search.landArea}
                      onChange={(e) => setSearch({ ...search, landArea: e })}
                    >
                      {getLandArea?.data?.data?.items?.map((opt, i) => (
                        <Select.Option key={opt.title} value={opt.title}>
                          {opt.title}
                        </Select.Option>
                      ))}
                    </Select>
                  </Col>
                </Row>
              ) : (
                ''
              )}
              <Popover
                placement="bottomRight"
                content={
                  <ProjectTabelFilter
                    setSelectedFilter={setSelectedFilter}
                    selectedFilter={selectedFilter}
                    filterTitle={['Land Area', 'Land Size']}
                  />
                }
                trigger="click"
              >
                {/* <Button
                  className="btn-primary flex items-center justify-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                // onClick={showDrawer}
                >
                  <img
                    src={FilterIcon}
                    style={{ filter: "brightness(4)" }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button> */}
              </Popover>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={ViewDetailsTableColumns}
            scroll={{ x: true }}
            loading={inventoriesByProject.loading}
            pagination={{
              total:
                inventoriesByProject?.data?.data?.meta?.totalPages *
                inventoriesByProject?.data?.data?.meta?.itemsPerPage,
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

export default ViewDetailsTabel
