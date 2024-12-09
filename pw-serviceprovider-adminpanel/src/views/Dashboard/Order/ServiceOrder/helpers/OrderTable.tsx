import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import getOrderColumns from "../../../../../utils/tableColumns/getOrderColumns.json"
import { deleteServicePackagesApi, getServicePackagesApi } from '../../../../../services/api/Dashboard/Packages'
import deleteIcon from "../../../../assets/deleteIcon.png"
import penIcon from "../../../../assets/editIcon.png"
import { getServiceOrderApi } from '../../../../../services/api/Dashboard/Order'
import SpTransactionModal from './SpTransactionModal'
import CustomerTranstionModal from './CustomerTranstionModal'
import { PageContainer } from '../../../../../utils/helpers/PageContainer/PageContainer'
import { PageHeader } from '../../../../../utils/helpers/PageHeader/PageHeader'

const OrderTable: React.FC = () => {
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const [customerTransaction, setCustomerTransaction] = useState<any>(null)
    const [spTransaction, setSpTransaction] = useState<any>(null)
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getServiceOrders = useSelector((state: any) => state?.getServiceOrders)


    useEffect(() => {
        getServiceOrderApi(dispatch, pageLimit)
    }, [pageLimit])

    useEffect(() => {
        if (getServiceOrders?.data?.data?.items.length > 0) {
            const data = getServiceOrders?.data?.data?.items?.map((val: any) => {
                return {
                    key: val?.id,
                    customerName: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.orderRequest?.customer?.customerProfile?.fullName || '-'}
                        </span>
                    ),
                    serviceProviderName: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.serviceProvider?.ServiceProviderProfile?.name || '-'}
                        </span>
                    ),

                    orderStatus: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.orderStatus || '-'}
                        </span>
                    ),
                    craetedAt: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.createdAt ? moment(val?.createdAt).format('DD-MM-YYYY') : "-"}
                        </span>
                    ),
                    action: (
                        <div className='flex gap-1'>
                            <Button disabled={!val?.customerSideOTransaction} onClick={() => {
                                setCustomerTransaction(val?.customerSideOTransaction)
                            }}>Customer Transaction</Button>
                            <Button disabled={!val?.spSideOrderTransaction} onClick={() => setSpTransaction(val?.spSideOrderTransaction)}>Service Provider Transaction</Button>
                        </div>
                    ),

                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getServiceOrders?.data])

    return (
        <React.Fragment>
            {spTransaction !== null && <SpTransactionModal visible={spTransaction} toggle={setSpTransaction} />}
            {customerTransaction !== null && <CustomerTranstionModal visible={customerTransaction} toggle={setCustomerTransaction} />}

            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Orders details
                            </h3>
                        </div>
                    </div>
                    <Table
                        scroll={{ x: true }}
                        columns={getOrderColumns}
                        loading={getServiceOrders?.loading}
                        dataSource={dataSource}
                        pagination={{
                            total: getServiceOrders?.data?.data?.meta?.totalItems,
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
