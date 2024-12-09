import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TablePagination from '../../../utils/components/TablePagination'
import milestoneColumns from './../../../tableColumns/milestoneColumns.json'
import { debounce } from 'lodash'
import AddMilestoneModal from './AddMilestoneModal'
import { scrollToTop } from '../../../utils/utils'
import {
  getAllMilestonesApi,
  deleteMilestoneApi,
} from '../../../redux/api/Milestones'

import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import deleteIcon from '../../assest/icon/ViewDetailDeleteIcon.png'
import UpdateMilestoneModal from './UpdateMilestoneModal'
import { useModal } from '../../../utils/hooks/useModal'

const MilestoneTable = ({ isAddModalVisible, toggle }) => {
  const dispatch = useDispatch()
  const [isUpdateModalVisible, updateToggle] = useModal()
  const [selectedFilter, setSelectedFilter] = useState('Name')
  const [updateData, setUpdateData] = useState({})
  const [search, setSearch] = useState('')
  const [range, setRange] = useState([])
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getAllMilestones = useSelector((state) => state?.getAllMilestones)

  const debouncedGetAllMilestonesApi = useRef(
    debounce((dispatch, pageLimit, search, selectedFilter) => {
      getAllMilestonesApi(dispatch, pageLimit, search, selectedFilter)
    }, 500)
  ).current
  useEffect(() => {
    scrollToTop()
    debouncedGetAllMilestonesApi(dispatch, pageLimit, search, selectedFilter)
  }, [dispatch, pageLimit])

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

  function handleDelete(id) {
    if (id) {
      deleteMilestoneApi(dispatch, id, onSuccess)
    }
  }
  function onSuccess() {
    getAllMilestonesApi(dispatch, pageLimit)
  }
  useEffect(() => {
    if (getAllMilestones?.data) {
      const data = getAllMilestones?.data?.data?.items?.map((val, i) => {
        return {
          key: i,
          salesRevenue: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.salesRevenue || '-'}
            </span>
          ),
          name: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.name || '-'}
            </span>
          ),
          milestoneCommission: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.milestoneComission || '-'}
            </span>
          ),
          design: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.designUrl || '-'}
            </span>
          ),
          certificate: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.certificate || '-'}
            </span>
          ),
          action: (
            <div className="flex flex-wrap  gap-2">
              <div
                className="cursor-pointer"
                onClick={() => [setUpdateData(val), updateToggle()]}
              >
                <img src={editIcon} alt="" />
              </div>
              {/* <div
                onClick={() => handleDelete(val?.id)}
                className="cursor-pointer"
              >
                <img src={deleteIcon} alt="" />
              </div> */}
            </div>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllMilestones?.data])
  return (
    <>
      {isAddModalVisible && (
        <AddMilestoneModal visible={isAddModalVisible} toggle={toggle} />
      )}
      {isUpdateModalVisible && (
        <UpdateMilestoneModal
          visible={isUpdateModalVisible}
          toggle={updateToggle}
          updateData={updateData}
        />
      )}
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Milestones
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              {selectedFilter === 'Name' ? (
                <Input
                  placeholder={`Search ${selectedFilter}`}
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full lg:w-[268px] h-[43px]"
                  value={search}
                />
              ) : (
                ''
              )}
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={milestoneColumns}
            scroll={{ x: true }}
            loading={getAllMilestones?.loading}
            pagination={{
              total:
                getAllMilestones?.data?.data?.meta?.totalPages *
                getAllMilestones?.data?.data?.meta?.itemsPerPage,
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

export default MilestoneTable
