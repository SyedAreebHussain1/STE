import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import orderRequestsColumns from "../../../../../utils/tableColumns/orderRequestsColumns.json"
import { ordersRequestsApi } from '../../../../../services/api/Dashboard/Order'

const OrderTable: React.FC = () => {
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const [customerTransaction, setCustomerTransaction] = useState<any>(null)
    const [spTransaction, setSpTransaction] = useState<any>(null)
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const ordersRequests = useSelector((state: any) => state?.ordersRequests)


    useEffect(() => {
        ordersRequestsApi(dispatch, pageLimit)
    }, [pageLimit])


    useEffect(() => {
        if (ordersRequests?.data) {
            const data = ordersRequests?.data?.data?.items?.map((val: any) => {
                return {
                    key: val?.id,
                    customerName: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.customer?.customerProfile?.fullName || '-'}
                        </span>
                    ),
                    phoneNo: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.customer?.phone || '-'}
                        </span>
                    ),

                    email: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.customer?.email || '-'}
                        </span>
                    ),
                    serviceTitle: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.services?.title || "-"}
                        </span>
                    ),
                    createdAt: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.createdAt ? moment(val?.createdAt).format("L") : "-"}
                        </span>
                    ),
                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [ordersRequests?.data])

    return (
        <React.Fragment>
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Order Requests
                            </h3>
                        </div>
                    </div>
                    <Table
                        scroll={{ x: true }}
                        columns={orderRequestsColumns}
                        loading={ordersRequests?.loading}
                        dataSource={dataSource}
                        pagination={{
                            total: ordersRequests?.data?.data?.meta?.totalItems,
                            onChange: (total: number, range: number) => {
                                setPageLimit({
                                    page: total,
                                    limit: range,
                                });
                            },
                        }}
                    />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default OrderTable
