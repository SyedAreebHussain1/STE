import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from '../../../../../../hooks/useModal'
import { getAllCategoriesApi } from '../../../../../../services/api/Dashboard/Category'
import getAllCategoriesColumns from "../../../../../../utils/tableColumns/getAllCategoriesColumns.json"
import pen from "../../../../../../assets/editPenIcon.png"
import UpdateCatgoryModal from './UpdateServicesModal'
import { getAllServicesApi } from '../../../../../../services/api/Dashboard/Services'

const ServicesTable: React.FC = () => {
    const [updateModal, toggle]: any = useModal()
    const dispatch = useDispatch()
    const [updateCategory, setUpdateCategory] = useState(null)
    const [dataSource, setDataSource] = useState([])
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getAllServices = useSelector((state: any) => state?.getAllServices)
    const createServiceWithCategoryId = useSelector((state: any) => state?.createServiceWithCategoryId)

    useEffect(() => {
        getAllServicesApi(dispatch, pageLimit)
    }, [pageLimit, createServiceWithCategoryId])

    useEffect(() => {
        if (getAllServices?.data) {
            const data = getAllServices?.data?.data?.items?.map((val: any) => {
                return {
                    key: val?.id,
                    title: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.title || '-'}
                        </span>
                    ),
                    createdAt: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.createdAt ? moment(val?.createdAt).format('DD-MM-YYYY') : "-"}
                        </span>
                    ),
                    action: (
                        <div
                            className="cursor-pointer"
                        >
                            <img src={pen} alt="" />{' '}
                        </div >
                    ),
                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getAllServices?.data])

    return (
        <>
            {updateModal && updateCategory !== null && (
                <UpdateCatgoryModal
                    visible={updateModal}
                    toggle={toggle}
                    data={updateCategory}
                />
            )}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Services details
                            </h3>
                        </div>
                    </div>
                    <Table
                        scroll={{ x: true }}
                        columns={getAllCategoriesColumns}
                        loading={getAllServices?.loading}
                        dataSource={dataSource}
                        pagination={{
                            total: getAllServices?.data?.data?.meta?.totalItems,
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
