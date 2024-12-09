import React, { useEffect } from 'react'
import PageContainer from '../../../../utils/components/PageContainer'
import { Button, Col, Row, Spin } from 'antd'
import PageHeader from './helpers/PageHeader'
import GalleryImageContainer from './helpers/GalleryImageContainer'
import ListingInfoContainer from './helpers/ListingInfoContainer'
import ListingLocationMap from './helpers/ListingLocationMap'
import ListingMainFeatures from './helpers/ListingMainFeatures'
import OwnerInfo from './helpers/OwnerInfo'
import PackageInfo from './helpers/PackageInfo'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import backimg from '../../../assest/icon/back.png'
import AssignLead from './helpers/AssignLead'
import { useSelector } from 'react-redux'
import { getInventoryByIdApi } from '../../../../redux/api/InventoryManagment'

const InventoryViewer = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigate = (route) => {
    navigate(route)
  }
  const getInventoryById = useSelector((state) => state.getInventoryById)
  useEffect(() => {
    if (params?.id) {
      getInventoryByIdApi(dispatch, params?.id)
    }
  }, [params])

  return (
    <PageContainer>
      <span className="cursor-pointer" onClick={() => handleNavigate(-1)}>
        <img src={backimg} alt="" className="mb-3" />
      </span>
      <Spin spinning={false}>
        <div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-[70%_minmax(20%,_1fr)] 2xl:grid-cols-[minmax(65%,_1fr)_minmax(20%,_1fr)_minmax(14%,_1fr)] gap-5">
              <div className="bg-white">
                <PageHeader route={-1} titleHeadBtn={backimg} />
                <Row gutter={24} className="px-[24px] mb-[24px]">
                  <Col lg={8} sm={24}>
                    <GalleryImageContainer
                      getAllInventory={getInventoryById?.data?.data}
                    />
                  </Col>
                  <Col lg={16} sm={24}>
                    <ListingInfoContainer
                      getAllInventory={getInventoryById?.data?.data}
                    />
                  </Col>
                </Row>
                <Row gutter={24} className="px-[24px] mb-[24px]">
                  <Col lg={14} sm={24}>
                    <ListingLocationMap
                      getAllInventory={getInventoryById?.data?.data}
                    />
                  </Col>
                  <Col lg={10} sm={24}>
                    <ListingMainFeatures
                      getAllInventory={getInventoryById?.data?.data}
                    />
                  </Col>
                </Row>
              </div>

              <div sm={24} lg={19}>
                <OwnerInfo getAllInventory={getInventoryById?.data?.data} />
                <PackageInfo getAllInventory={getInventoryById?.data?.data} />
              </div>

              <div>
                <AssignLead getAllInventory={getInventoryById?.data?.data} />
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </PageContainer>
  )
}

export default InventoryViewer
