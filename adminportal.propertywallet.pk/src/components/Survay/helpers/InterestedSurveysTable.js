import React, { useEffect, useState } from 'react'
import { Col, Row, Table, Tooltip, Rate, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../utils/components/TablePagination'
import interestedSurveyColumn from './../../../tableColumns/interestedSurveyColumn.json'

import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import { useModal } from '../../../utils/hooks/useModal'
import {
  allSurveyApi,
  getAllInterestedSurveyApi,
} from '../../../redux/api/Survey'
import AddModal from './AddSurveyModal'
import moment from 'moment/moment'
import EditModal from './EditSurveyModal'
import { nanoid } from 'nanoid'
import { SelectField } from '../../../utils/components/InputFields/SelectField'

const InterestedSurveysTable = ({ current }) => {
  const dispatch = useDispatch()
  const [showInterested, setShowInterested] = useState('')
  const [dataSource, setDataSource] = useState([])
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getAllInterestedSurvey = useSelector(
    (state) => state?.getAllInterestedSurvey
  )

  useEffect(() => {
    if (current == 2) {
      getAllInterestedSurveyApi(dispatch, pageLimit, showInterested)
    }
  }, [pageLimit, current, showInterested])

  useEffect(() => {
    if (getAllInterestedSurvey?.data) {
      const data = getAllInterestedSurvey?.data?.data?.items?.map((val, i) => {
        const rating = [
          val?.veryUnlikely,
          val?.unlikely,
          val?.neturalandModerate,
          val?.likely,
          val?.highLikely,
        ].indexOf(true)
        return {
          key: nanoid(),
          name: val?.user?.profile?.fullName,
          status: val?.interestedProject ? 'Interested' : 'Not Interested',
          projectTitle: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.surveyForm?.projectTitle || '-'}
            </span>
          ),
          projectSize: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.surveyForm?.projectSize || '-'}
            </span>
          ),
          projectCompleteTime: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.surveyForm?.projectCompleteTime || '-'}
            </span>
          ),
          projectCategory: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {val?.surveyForm?.projectCategory || '-'}
            </span>
          ),
          location: (
            <Tooltip placement="topLeft" title={val?.surveyForm?.location}>
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.surveyForm?.location?.length > 18
                  ? `${val?.surveyForm?.location?.substring(0, 18)}...`
                  : val?.surveyForm?.location}
              </span>
            </Tooltip>
          ),
          createdAt: (
            <span className="text-[12px] font-medium text-[#3D4350]">
              {moment(val?.surveyForm?.createdAt).format('DD-MM-YYYY') || '-'}
            </span>
          ),
          description: (
            <Tooltip placement="topLeft" title={val?.comments}>
              <span className="text-[12px] font-medium text-[#3D4350]">
                {val?.comments?.length > 18
                  ? `${val?.comments?.substring(0, 18)}...`
                  : val?.comments}
              </span>
            </Tooltip>
          ),
          rating: (
            <Rate
              className="flex flex-nowrap"
              value={rating + 1 > 0 ? rating + 1 : 0}
              disabled
            />
          ),
        }
      })
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [getAllInterestedSurvey?.data])
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Survey Logs
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Select
                className="rounded-[8px] w-[200px]"
                size="large"
                allowClear
                onChange={(e) => {
                  setShowInterested(e)
                }}
              >
                {[
                  { label: 'interested', value: 'true' },
                  { label: 'Not Interested', value: 'false' },
                ]?.map((opt, i) => (
                  <Select.Option key={i} value={opt.value}>
                    {opt.label}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={interestedSurveyColumn}
            scroll={{ x: true }}
            loading={getAllInterestedSurvey?.loading}
            pagination={{
              total:
                getAllInterestedSurvey?.data?.data?.meta?.totalPages *
                getAllInterestedSurvey?.data?.data?.meta?.itemsPerPage,
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

export default InterestedSurveysTable
