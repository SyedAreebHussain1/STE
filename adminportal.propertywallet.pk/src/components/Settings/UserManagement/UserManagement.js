import React from 'react'
import { Button } from 'antd'
import UserManagementTable from './helpers/UserManagementTable'
import PageHeader from '../../../utils/components/PageHeader'
import PageContainer from '../../../utils/components/PageContainer'
import couldIcon from '../../assest/icon/cloudicongreen.png'

const UserManagement = () => {
  return (
    <PageContainer>
      <PageHeader
        title={'User Management'}
        subTitle={
          'Find all of your company’s administrator account and their associated roles.'
        }
      />
      <UserManagementTable />
    </PageContainer>
  )
}

export default UserManagement
