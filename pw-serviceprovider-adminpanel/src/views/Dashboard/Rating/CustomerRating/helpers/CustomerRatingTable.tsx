import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import customerRatingColumns from "../../../../../utils/tableColumns/customerRatingColumns.json"
import { getServiceProviderRatingApi } from '../../../../../services/api/Dashboard/Rating/ServiceProviderRating'
import { getCustomerRatingApi } from '../../../../../services/api/Dashboard/Rating/CustomerRating'

const CustomerRatingTable: React.FC = () => {
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getCustomerRating = useSelector((state: any) => state?.getCustomerRating)


    useEffect(() => {
        getCustomerRatingApi(dispatch, pageLimit)
    }, [pageLimit])

    useEffect(() => {
        if (getCustomerRating?.data) {
            const data = getCustomerRating?.data?.data?.items?.map((val: any) => {
                return {
                    key: val?.id,
                    customerName: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.customer?.customerProfile?.fullName || '-'}
                        </span>
                    ),
                    email: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.customer?.email || '-'}
                        </span>
                    ),
                    phoneNo: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.customer?.phone || '-'}
                        </span>
                    ),
                    orderStatus: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.orderStatus || '-'}
                        </span>
                    ),
                    serviceProviderName: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.serviceProvider?.ServiceProviderProfile?.name || "-"}
                        </span>
                    ),

                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getCustomerRating?.data])
    return (
        <Row className="bg-white">
            <Col lg={24} xs={24}>
                <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                    <div>
                        <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                            All Customer Rating
                        </h3>
                    </div>
                </div>
                <Table
                    scroll={{ x: true }}
                    columns={customerRatingColumns}
                    loading={getCustomerRating?.loading}
                    dataSource={dataSource}
                    pagination={{
                        total: getCustomerRating?.data?.data?.meta?.totalItems,
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
    )
}

export default CustomerRatingTable
