import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import PageContainer from '../../../../utils/components/PageContainer'
import PageHeader from '../../../../utils/components/PageHeader'
import Activities from './heplers/Activities'
import ClientDetail from './heplers/ClientDetail'
import backimg from '../../../assest/icon/back.png'
import AgenciesAndInventoryDetails from './heplers/AgenciesAndInventoryDetails'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const AgencyUserDetail = () => {
  const route = -1
  const param = useParams()
  const dispatch = useDispatch()
  const {} = useSelector((state) => state)
  useEffect(() => {}, [])
  return (
    <PageContainer>
      <PageHeader
        titleHeadBtn={backimg}
        route={route}
        title={'Agency Profile'}
        subTitle={'Details and activities of the Agency'}
      />
      <Row gutter={16}>
        <Col span={8}>
          <ClientDetail />
        </Col>
        <Col span={16}>
          <Row gutter={16}>
            <Col span={24} className="mb-4">
              <AgenciesAndInventoryDetails />
            </Col>
            <Col span={24}>
              <Activities />
            </Col>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  )
}

export default AgencyUserDetail
