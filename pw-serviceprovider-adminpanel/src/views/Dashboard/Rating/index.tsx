import React from 'react'
import { Tabs, TabsProps } from "antd";
import ServiceProviderRating from './ServiceProviderRating';
import CustomerRating from './CustomerRating';
import SpaceWrapper from '../../../utils/helpers/wrappers/SpaceWrapper';

const Rating = () => {
    const tabs: TabsProps["items"] = [
        {
            key: "1",
            label: <b>Service Provider Rating</b>,
            children: <ServiceProviderRating />,
        },
        {
            key: "2",
            label: <b>Customer Rating</b>,
            children: <CustomerRating />,
        },
    ];
    return (
        <SpaceWrapper>
            <Tabs defaultActiveKey="1" items={tabs} size="large" />
        </SpaceWrapper>
    )
}

export default Rating