import React, { useEffect } from 'react'
import PageContainer from '../../../../../../../utils/components/PageContainer'
import { Button, Col, Row, Spin } from 'antd'
import PageHeader from './helpers/PageHeader'
import GalleryImageContainer from './helpers/GalleryImageContainer'
import ListingInfoContainer from './helpers/ListingInfoContainer'
import ListingLocationMap from './helpers/ListingLocationMap'
import ListingMainFeatures from './helpers/ListingMainFeatures'
import OwnerInfo from './helpers/OwnerInfo'
import PackageInfo from './helpers/PackageInfo'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllInventoryApi } from '../../../../../../../redux/api/ManageSubscription'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import backimg from '../../../../../../assest/icon/back.png'

const GeneralListingViewer = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigate = (route) => {
    navigate(route)
  }
  useEffect(() => {
    if (params?.id) {
      getAllInventoryApi(dispatch, params?.id)
    }
  }, [params])

  const getAllInventory = useSelector((state) => state.getAllInventory)
  return (
    <PageContainer>
      <span className="cursor-pointer" onClick={() => handleNavigate(-1)}>
        <img src={backimg} alt="" className="mb-3" />
      </span>
      <Spin spinning={getAllInventory?.loading}>
        <div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-[80%_minmax(20%,_1fr)] gap-5">
              <div className="bg-white">
                <PageHeader route={-1} titleHeadBtn={backimg} />
                <Row gutter={24} className="px-[24px] mb-[24px]">
                  <Col lg={8} sm={24}>
                    <GalleryImageContainer
                      getAllInventory={getAllInventory?.data?.data?.[0]}
                    />
                  </Col>
                  <Col lg={16} sm={24}>
                    <ListingInfoContainer
                      getAllInventory={getAllInventory?.data?.data?.[0]}
                    />
                  </Col>
                </Row>
                <Row gutter={24} className="px-[24px] mb-[24px]">
                  <Col lg={14} sm={24}>
                    <ListingLocationMap
                      getAllInventory={getAllInventory?.data?.data?.[0]}
                    />
                  </Col>
                  <Col lg={10} sm={24}>
                    <ListingMainFeatures
                      getAllInventory={getAllInventory?.data?.data?.[0]}
                    />
                  </Col>
                </Row>
              </div>

              <div sm={24} lg={19}>
                <OwnerInfo getAllInventory={getAllInventory?.data?.data?.[0]} />
                <PackageInfo
                  getAllInventory={getAllInventory?.data?.data?.[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </PageContainer>
  )
}

export default GeneralListingViewer
