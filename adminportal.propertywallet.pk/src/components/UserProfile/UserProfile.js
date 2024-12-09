import React from 'react'
import { Col, Row } from 'antd'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import Activities from './helpers/Activities'
import Client from './helpers/Client'
import ClientDetail from './helpers/ClientDetail'

const UserProfile = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'User Profile'}
        subTitle={'Find all of details about user'}
      />
      <div className="flex" style={{ border: '' }}>
        <ClientDetail />
        <Activities />
      </div>
    </PageContainer>
  )
}

export default UserProfile
