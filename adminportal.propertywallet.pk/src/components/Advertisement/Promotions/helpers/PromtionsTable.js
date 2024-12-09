import React, { useEffect, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import promotionsColumns from '../../../../tableColumns/promotionsColumns.json'
// import NoPromotionAdd from "./NoOfPromotionAdd";
import { useDispatch, useSelector } from 'react-redux'
import { getAllPromotionsApi } from '../../../../redux/api/Advertisement/Promotion'
import { deleteAdvertisementApi } from '../../../../redux/api/Advertisement/Promotion'
import PromotionsFilter from './PromotionsFilter'
// icon
import FilterIcon from '../../../assest/icon/filter.png'
import ProjectTabelFilter from '../../../PropertyWalletInventory/ProjectDetails/helpers/ProjectTabelFilter'
import deleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'
import editIcon from '../../../assest/icon/ViewDetailEditIcon.png'
import NoTableData from '../../../../utils/components/NoTableData'
import TablePagination from '../../../../utils/components/TablePagination'
import { scrollToTop } from '../../../../utils/utils'

const PromotionsTable = ({ handleOnClick }) => {
  const [dataSource, setDataSource] = useState([])
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const getAllPromotions = useSelector((state) => state?.getAllPromotions)
  const createAdvertisement = useSelector((state) => state?.createAdvertisement)
  const deleteAdvertisement = useSelector((state) => state?.deleteAdvertisement)
  const DeleteIdPromotion = (id) => {
    deleteAdvertisementApi(dispatch, id)
  }
  const EditIdPromotion = (id) => {}

  useEffect(() => {
    scrollToTop()
    getAllPromotionsApi(dispatch, pageLimit)
  }, [pageLimit, createAdvertisement?.data, deleteAdvertisement?.data])

  function daysCalculator(startDate, EndDate) {
    let s = new Date(startDate)
    let e = new Date(EndDate)
    let difference = e.getTime() - s.getTime()
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))
    return TotalDays
  }

  useEffect(() => {
    if (getAllPromotions?.data?.data !== null) {
      const data = getAllPromotions?.data?.data?.items?.map((item, i) => {
        return {
          redirectLink: (
            <span className="text-[12px] font-medium text-[#444B54] leading-[18px] ">
              {item?.redirectLink}
            </span>
          ),
          type: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {item?.type}
            </span>
          ),
          placement: (
            <div className="flex gap-2">
              {item.assignPlacement.map((val, i) => (
                <Button
                  key={i}
                  className="custom-btn border-none flex items-center font-medium text-[12px] bg-[#F0F1F3] gap-2 text-[#3D4350] rounded-[41px] h-[30px]"
                >
                  <span>{val.placement.title}</span>
                </Button>
              ))}
            </div>
          ),
          status:
            item?.status === 'RUNNING' ? (
              <Button className="flex items-center font-medium text-[12px] bg-[#0bbc521a] gap-2 text-[#0BBC52] rounded-[41px] h-[30px]">
                <span>{item?.status}</span>
              </Button>
            ) : (
              <Button className="flex items-center font-medium text-[12px] bg-[#ed38381a] gap-2 text-[#ED3838] rounded-[41px] h-[30px]">
                <span>{item?.status}</span>
              </Button>
            ),
          timePeriod: (
            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
              {/* {Number(moment(item.endDate).format('DD')) - Number(moment(item.startDate).format('DD'))} */}
              {`${daysCalculator(item.startDate, item.endDate)} Days `}
            </span>
          ),
          action: (
            <div className="flex flex-wrap  gap-2">
              {/* <div onClick={() => EditIdPromotion(item?.id)} className="cursor-pointer">
                <img src={editIcon} alt="" />{" "}
              </div> */}
              <div
                onClick={() => DeleteIdPromotion(item?.id)}
                className="cursor-pointer"
              >
                <img src={deleteIcon} alt="" />
              </div>
            </div>
          ),
        }
      })
      setDataSource(data)
    }
  }, [getAllPromotions?.data?.data])

  const filterTitle = [
    {
      title: 'Project Name',
    },
    {
      title: 'Location',
    },
    {
      title: 'Area Size',
    },
    {
      title: 'Builders',
    },
    {
      title: 'Total Inventories',
    },
    {
      title: 'Approved',
    },
    {
      title: 'Genterated Revenue',
    },
  ]
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
            <div>
              <h3 className="text-[15px] text-[#2B2B2B] font-medium p-[10px]">
                All Promotions
              </h3>
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                className="w-full lg:w-[300px] h-[40px]"
              />
              <Popover
                placement="bottomRight"
                content={<PromotionsFilter filterTitle={filterTitle} />}
                trigger="click"
              >
                <Button
                  className="flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                  // onClick={showDrawer}
                >
                  <img
                    src={FilterIcon}
                    style={{ filter: "brightness(4)" }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover>
            </div> */}
          </div>
          <Table
            dataSource={dataSource}
            columns={promotionsColumns}
            //   loading={loading}
            scroll={{ x: true }}
            locale={{
              emptyText: (
                <NoTableData
                  handleOnClick={handleOnClick}
                  text="No Promotions Added"
                  buttonText="Add New Promotions"
                />
              ),
            }}
            // loading={getRoles.loading}
            pagination={{
              total: getAllPromotions?.data?.data?.meta?.totalItems,
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

export default PromotionsTable
