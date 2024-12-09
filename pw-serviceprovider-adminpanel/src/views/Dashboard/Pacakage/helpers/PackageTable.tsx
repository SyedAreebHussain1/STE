import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import getServicePackagesColumns from "../../../../utils/tableColumns/getServicePackagesColumns.json"
import { deleteServicePackagesApi, getServicePackagesApi } from '../../../../services/api/Dashboard/Packages'
import deleteIcon from "../../../../assets/deleteIcon.png"
import penIcon from "../../../../assets/editIcon.png"

const PackageTable: React.FC = () => {
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getServicePackages = useSelector((state: any) => state?.getServicePackages)
    const deleteServicePackages = useSelector((state: any) => state?.deleteServicePackages)
    const createPackage = useSelector((state: any) => state?.createPackage)


    useEffect(() => {
        getServicePackagesApi(dispatch, pageLimit)
    }, [pageLimit, deleteServicePackages, createPackage])

    useEffect(() => {
        if (getServicePackages?.data) {
            const data = getServicePackages?.data?.data?.items?.map((val: any) => {
                return {
                    key: val?.id,
                    title: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.title || '-'}
                        </span>
                    ),
                    numberOfMonth: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val.numberOfMonth || '-'}
                        </span>
                    ),
                    packagePlans : (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val.packagePlans}
                        </span>
                    ),
                    charges: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.charges || '-'}
                        </span>
                    ),
                    comissionPercentage: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.comissionPercentage || '-'}
                        </span>
                    ),
                    createdAt: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.createdAt ? moment(val?.createdAt).format('DD-MM-YYYY') : "-"}
                        </span>
                    ),
                    action: (
                        <div className='flex gap-2'>
                            <div
                                className="cursor-pointer"
                            >
                                <img src={penIcon} alt="" />{' '}
                            </div>
                            <div
                                onClick={() =>
                                    deleteServicePackagesApi(dispatch, Number(val.id))
                                }
                                className="cursor-pointer"
                            >
                                <img src={deleteIcon} alt="" />{' '}
                            </div>
                        </div>
                    ),
                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getServicePackages?.data])

    return (
        <Row className="bg-white">
            <Col lg={24} xs={24}>
                <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                    <div>
                        <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                            All Package details
                        </h3>
                    </div>
                </div>
                <Table
                    scroll={{ x: true }}
                    columns={getServicePackagesColumns}
                    loading={getServicePackages?.loading}
                    dataSource={dataSource}
                    pagination={{
                        total: getServicePackages?.data?.data?.meta?.totalItems,
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

export default PackageTable
