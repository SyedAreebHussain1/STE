import React from 'react'
import { Tabs, TabsProps } from "antd";
import SpaceWrapper from '../../../utils/helpers/wrappers/SpaceWrapper';
import ServiceOrder from './ServiceOrder';
import OrderRequests from './OrderRequests';

const Order = () => {
    const tabs: TabsProps["items"] = [
        {
            key: "1",
            label: <b>Order</b>,
            children: <ServiceOrder />,
        },
        {
            key: "2",
            label: <b>Order Requests</b>,
            children: <OrderRequests />,
        },
    ];
    return (
        <SpaceWrapper>
            <Tabs defaultActiveKey="1" items={tabs} size="large" />
        </SpaceWrapper>
    )
}

export default Order