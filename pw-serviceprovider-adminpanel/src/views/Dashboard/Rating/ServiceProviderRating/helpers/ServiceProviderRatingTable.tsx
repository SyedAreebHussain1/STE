import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import serviceProviderRatingColumns from "../../../../../utils/tableColumns/serviceProviderRatingColumns.json"
import { getServiceProviderRatingApi } from '../../../../../services/api/Dashboard/Rating/ServiceProviderRating'

const ServiceProviderRatingTable: React.FC = () => {
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getServiceProviderRating = useSelector((state: any) => state?.getServiceProviderRating)


    useEffect(() => {
        getServiceProviderRatingApi(dispatch, pageLimit)
    }, [pageLimit])

    useEffect(() => {
        if (getServiceProviderRating?.data) {
            const data = getServiceProviderRating?.data?.data?.items?.map((val: any) => {
                return {
                    key: val?.id,
                    email: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.serviceProviders?.email || '-'}
                        </span>
                    ),
                    name: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.serviceProviders?.ServiceProviderProfile?.name || '-'}
                        </span>
                    ),
                    phoneNo: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.serviceProviders?.phoneNo || '-'}
                        </span>
                    ),
                    comment: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.comment || '-'}
                        </span>
                    ),
                    createdAt: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.createdAt ? moment(val?.createdAt).format('DD-MM-YYYY') : "-"}
                        </span>
                    ),

                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getServiceProviderRating?.data])
    return (
        <Row className="bg-white">
            <Col lg={24} xs={24}>
                <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                    <div>
                        <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                            All Service Provider Rating
                        </h3>
                    </div>
                </div>
                <Table
                    scroll={{ x: true }}
                    columns={serviceProviderRatingColumns}
                    loading={getServiceProviderRating?.loading}
                    dataSource={dataSource}
                    pagination={{
                        total: getServiceProviderRating?.data?.data?.meta?.totalItems,
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

export default ServiceProviderRatingTable
