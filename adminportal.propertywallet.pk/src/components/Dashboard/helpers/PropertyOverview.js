import React, { useEffect } from 'react'

import { Row, Spin } from 'antd'
import vector1 from '../../../components/assest/icon/0.1.png'
import vector2 from '../../../components/assest/icon/0.2.png'
import vector3 from '../../../components/assest/icon/0.3.png'
import vector4 from '../../../components/assest/icon/0.4.png'
import '../../../components/assest/css/dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPropertiesOverviewApi } from '../../../redux/api/Dashboard'
import PropertyOverviewCard from './PropertyOverviewCard'

const PropertyOverview = ({ val }) => {
  // GET STATE FROM USE SELECTOR
  const getPropertiesOverview = useSelector(
    (state) => state.getPropertiesOverview
  )
  const dispatch = useDispatch()
  useEffect(() => {
    // CALL API
    getPropertiesOverviewApi(dispatch)
  }, [dispatch])
  return (
    <>
      <Spin spinning={getPropertiesOverview.loading} delay={500}>
        <Row style={{ marginTop: '1%', width: '100%' }}>
          <PropertyOverviewCard
            title={'All Properties'}
            img={vector1}
            count={
              getPropertiesOverview?.data
                ? getPropertiesOverview?.data?.data[0]?.inventoryCount
                : 0
            }
            lastDayCount={
              getPropertiesOverview?.data
                ? getPropertiesOverview?.data?.data[0]?.inventoryCountlast24
                : 0
            }
          />
          <PropertyOverviewCard
            title={'Sold Properties'}
            img={vector2}
            count={
              getPropertiesOverview?.data
                ? getPropertiesOverview?.data?.data[1]?.soldInventoryCount
                : 0
            }
            lastDayCount={
              getPropertiesOverview?.data
                ? getPropertiesOverview?.data?.data[1]
                    ?.soldInventoryCountLast24hours
                : 0
            }
          />
          <PropertyOverviewCard
            title={'No of Agencies'}
            img={vector3}
            count={
              getPropertiesOverview?.data
                ? getPropertiesOverview?.data?.data[2]?.agenciesCount
                : 0
            }
            lastDayCount={
              getPropertiesOverview?.data
                ? getPropertiesOverview?.data?.data[2]?.agenciesCountLast24hours
                : 0
            }
          />
          <PropertyOverviewCard
            title={'Revenue Generated'}
            img={vector4}
            count={
              getPropertiesOverview?.data
                ? getPropertiesOverview?.data?.data[3]?.revenueCount?.sum
                : 0
            }
            lastDayCount={
              getPropertiesOverview?.data
                ? getPropertiesOverview?.data?.data[3]?.revenueCountLast24hours
                    ?.sum
                : 0
            }
            percentage={true}
          />
        </Row>
      </Spin>
    </>
  )
}

export default PropertyOverview
