import React, { useEffect, useState, useRef } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Table, Tooltip } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import SurveyListColumns from './../../../tableColumns/SurveyListColumns.json'

import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import { useModal } from '../../../utils/hooks/useModal'
import { allSurveyApi } from '../../../redux/api/Survey'
import AddModal from './AddSurveyModal'
import moment from 'moment/moment'
import EditModal from './EditSurveyModal'

const SurveyTable = ({ isAddModalVisible, toggle, current }) => {
  const dispatch = useDispatch()
  const [isUpdateModalVisible, updateToggle] = useModal()
  const [updateData, setUpdateData] = useState({})
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getSurvey = useSelector((state) => state?.getSurvey)
  const CreateSurvey = useSelector((state) => state?.CreateSurvey)
  const EditSurvey = useSelector((state) => state?.EditSurvey)

  useEffect(() => {
    if (current == 1) {
      allSurveyApi(dispatch, pageLimit)
    }
  }, [pageLimit, CreateSurvey, EditSurvey, current])

  useEffect(() => {
    if (getSurvey?.data) {
      const data = getSurvey?.data?.data?.items?.map((val, i) => {
        return {
          key: i,
          projectTitle: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.projectTitle || '-'}
            </span>
          ),
          projectSize: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.projectSize || '-'}
            </span>
          ),
          projectCompleteTime: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.projectCompleteTime || '-'}
            </span>
          ),
          projectCategory: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.projectCategory || '-'}
            </span>
          ),
          location: (
            <Tooltip placement="topLeft" title={val?.location}>
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.location ? `${val?.location?.substring(0, 18)}...` : '-'}
              </span>
            </Tooltip>
          ),
          createdAt: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {moment(val?.createdAt).format('DD-MM-YYYY') || '-'}
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
            </div>
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getSurvey?.data])
  return (
    <>
      {isAddModalVisible && (
        <AddModal visible={isAddModalVisible} toggle={toggle} />
      )}
      {isUpdateModalVisible && (
        <EditModal
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
                All Survey
              </h3>
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder={`Search `}
                prefix={<SearchOutlined />}
                // onChange={(e) => setSearch(e.target.value)}
                classNa me="w-full lg:w-[268px] h-[43px]"
                // value={search}
              />
            </div> */}
          </div>
          <Table
            dataSource={dataSource}
            columns={SurveyListColumns}
            scroll={{ x: true }}
            loading={getSurvey?.loading}
            pagination={{
              total:
                getSurvey?.data?.data?.meta?.totalPages *
                getSurvey?.data?.data?.meta?.itemsPerPage,
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

export default SurveyTable
