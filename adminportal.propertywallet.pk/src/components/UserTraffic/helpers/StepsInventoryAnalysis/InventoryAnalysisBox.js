import { Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import boxOneIcon from '../../../../components/assest/icon/inventories-1.png'
import boxTwoIcon from '../../../../components/assest/icon/inventories-2.png'
import boxThreeIcon from '../../../../components/assest/icon/inventories-3.png'
import boxFourIcon from '../../../../components/assest/icon/inventories-4.png'
import AnalysisBox from '../AnalysisBox'
import {
  allPropertiesCountApi,
  allPropertiesLastDayCountApi,
  soldPropertiesCountApi,
  soldPropertiesLastDayCountApi,
} from '../../../../redux/api/Dashboard'
import {
  getNoOfUnitsApi,
  getTotalSaleOrderApi,
} from '../../../../redux/api/Traffic'
import { getRevenueApi } from '../../../../redux/api/Traffic'

const InventoryAnalysisBox = () => {
  const dispatch = useDispatch()

  // const soldPropertiesCount = useSelector((state) => state.soldPropertiesCount);
  // const soldPropertiesLastDayCount = useSelector(
  //   (state) => state.soldPropertiesLastDayCount
  // );
  const allPropertiesCount = useSelector((state) => state.allPropertiesCount)
  // const allPropertiesLastDayCount = useSelector(
  //   (state) => state.allPropertiesLastDayCount
  // );
  const getTotalSaleOrder = useSelector((state) => state.getTotalSaleOrder)
  const getRevenue = useSelector((state) => state.getRevenue)
  const getNoOfUnits = useSelector((state) => state.getNoOfUnits)

  const arr = [
    {
      img: boxOneIcon,
      text: 'No of Inventories',
      // num: allPropertiesCount?.data?.data?.AllInventory,
      num: getNoOfUnits?.data?.data?.NoOfUnits?.sum,
      type: 'new',
      new: getNoOfUnits?.data?.data?.NoOfUnit24Hours?.sum,
      cardBottom: [
        { name: 'PW Inventories', value: '455' },
        {
          name: 'Other Inventories',
          value: allPropertiesCount?.data?.data?.AllInventory,
        },
      ],
    },
    // {
    //   img: boxTwoIcon,
    //   text: "No of Sold Inventories",
    //   num: soldPropertiesCount?.data?.data?.AllSoldInventory,
    //   type: "sale",
    //   sale: soldPropertiesLastDayCount?.data?.data?.SoldInventoryLastDay,
    //   cardBottom: [
    //     { name: "Starting Price", value: "PKR 40M" },
    //     { name: "Max Price", value: "PKR 850M" },
    //   ],
    // },
    {
      img: boxTwoIcon,
      text: 'Average Inventory Price',
      num: 'PKR 450M',
      type: 'sale',
      sale: '20',
      cardBottom: [
        { name: 'Starting Price', value: 'PKR 40M' },
        { name: 'Max Price', value: 'PKR 850M' },
      ],
    },
    {
      img: boxThreeIcon,
      text: 'Revenue Generate',
      // num:'hello' ,
      num: getRevenue?.data?.data?.Revenue?.sum,
      type: 'sale',
      sale: getRevenue?.data?.data?.last24Hours?.sum,
      rev: true,
      cardBottom: [
        { name: 'Last Month', value: 'PKR 12M' },
        { name: 'Current Month', value: 'PKR 45M' },
      ],
    },
    {
      img: boxFourIcon,
      text: 'No of Sale Orders',
      num: getTotalSaleOrder?.data?.data?.saleOrder,
      type: 'new',
      new: getTotalSaleOrder?.data?.data?.last24hours,
      cardBottom: [{ name: 'No of  Quotations Created', value: '899' }],
    },
  ]
  useEffect(() => {
    soldPropertiesCountApi(dispatch)
    soldPropertiesLastDayCountApi(dispatch)
    allPropertiesCountApi(dispatch)
    allPropertiesLastDayCountApi(dispatch)
    getTotalSaleOrderApi(dispatch)
    getRevenueApi(dispatch)
    getNoOfUnitsApi(dispatch)
  }, [])

  return (
    <div>
      <Row style={{ marginTop: '1%' }} gutter={16}>
        {arr.map((val, i) => {
          return <AnalysisBox key={i} val={val} lg={6} />
        })}
      </Row>
    </div>
  )
}

export default InventoryAnalysisBox
