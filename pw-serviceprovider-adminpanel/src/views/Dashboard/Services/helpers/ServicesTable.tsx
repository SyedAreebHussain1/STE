import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import getServicesProviderColumns from "../../../../utils/tableColumns/getServicesProviderColumns.json"
import { getServiceProvidersApi } from '../../../../services/api/Dashboard/ServiceProviders'
import UpdateStatusModal from './UpdateStatusModal'

const ServicesTable: React.FC = () => {
    const [statusUpdate, setStatusUpdate] = useState<any>(null)
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getServiceProviders = useSelector((state: any) => state?.getServiceProviders)
    const approveRejectSP = useSelector((state: any) => state?.approveRejectSP)

    useEffect(() => {
        getServiceProvidersApi(dispatch, pageLimit)
    }, [pageLimit, approveRejectSP])
    useEffect(() => {
        if (getServiceProviders?.data?.data?.items.length > 0) {
            const data = getServiceProviders?.data?.data?.items?.map((val: any) => {
                return {
                    key: val?.id,
                    name: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.ServiceProviderProfile?.name || '-'}
                        </span>
                    ),
                    email: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.email || '-'}
                        </span>
                    ),
                    phone: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.phoneNo || '-'}
                        </span>
                    ),
                    city: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.ServiceProviderProfile?.city || '-'}
                        </span>
                    ),
                    country: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.ServiceProviderProfile?.nationality || '-'}
                        </span>
                    ),
                    date: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.createdAt ? moment(val?.createdAt).format('DD-MM-YYYY') : "-"}
                        </span>
                    ),
                    status: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.spStatus || "-"}
                        </span>
                    ),
                    action: (
                        <div>
                            <Button onClick={() => setStatusUpdate(val)}>
                                Update Status
                            </Button>
                        </div>
                    ),
                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getServiceProviders?.data])

    return (
        <>
            {statusUpdate !== null && <UpdateStatusModal toggle={setStatusUpdate} visible={statusUpdate} />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Service Provider
                            </h3>
                        </div>
                    </div>
                    <Table
                        scroll={{ x: true }}
                        columns={getServicesProviderColumns}
                        loading={getServiceProviders?.loading}
                        dataSource={dataSource}
                        pagination={{
                            total: getServiceProviders?.data?.data?.meta?.totalItems,
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
        </>
    )
}

export default ServicesTable
