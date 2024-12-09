import React from 'react'
import PageContainer from '../../../../../../../utils/components/PageContainer'
import { Button, Col, Row } from 'antd'
import PageHeader from './helpers/PageHeader'
import GalleryImageContainer from './helpers/GalleryImageContainer'
import ListingInfoContainer from './helpers/ListingInfoContainer'
import ListingLocationMap from './helpers/ListingLocationMap'
import ListingMainFeatures from './helpers/ListingMainFeatures'
import OwnerInfo from './helpers/OwnerInfo'
import PackageInfo from './helpers/PackageInfo'

const HotListingViewer = () => {
  return (
    <PageContainer>
      <div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-[80%_minmax(20%,_1fr)] gap-5">
            <div className="bg-white">
              <PageHeader />
              <Row gutter={24} className="px-[24px] mb-[24px]" align="middle">
                <Col lg={8} sm={24}>
                  <GalleryImageContainer />
                </Col>
                <Col lg={16} sm={24}>
                  <ListingInfoContainer />
                </Col>
              </Row>
              <Row gutter={24} className="px-[24px] mb-[24px]">
                <Col lg={14} sm={24}>
                  <ListingLocationMap />
                </Col>
                <Col lg={10} sm={24}>
                  <ListingMainFeatures />
                </Col>
              </Row>
            </div>

            <div sm={24} lg={19}>
              <OwnerInfo />
              <PackageInfo />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default HotListingViewer
