import React from 'react'
import { PageContainer } from '../../../components'
import Profiledetails from './helpers/Profiledetails'
import { Col, Row } from 'antd'
import BankAccountDetails from './helpers/BankAccountDetails'
import ProfileHead from './helpers/ProfileHead'

const Profile = () => {
    return (
        <React.Fragment>
            <PageContainer>
                <ProfileHead />
                <br />
                <Row gutter={16}>
                    <Col sm={24} md={12} lg={12}>
                        <Profiledetails />
                    </Col>
                    <Col sm={24} md={12} lg={12}>
                        <BankAccountDetails />
                    </Col>
                </Row>
            </PageContainer>
        </React.Fragment >
    )
}

export default Profile