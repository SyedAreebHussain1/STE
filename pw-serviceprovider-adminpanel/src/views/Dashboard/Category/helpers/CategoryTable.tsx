import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from '../../../../hooks/useModal'
import { getAllCategoriesApi } from '../../../../services/api/Dashboard/Category'
import getAllCategoriesColumns from "../../../../utils/tableColumns/getAllCategoriesColumns.json"
import pen from "../../../../assets/editPenIcon.png"
import UpdateCatgoryModal from './UpdateCatgoryModal'

const CategoryTable: React.FC = () => {
    const [updateModal, toggle]: any = useModal()
    const dispatch = useDispatch()
    const [updateCategory, setUpdateCategory] = useState(null)
    const [dataSource, setDataSource] = useState([])
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getAllCategories = useSelector((state: any) => state?.getAllCategories)
    const categoryAndServices = useSelector((state: any) => state?.categoryAndServices)
    const updateCategorySlice = useSelector((state: any) => state?.updateCategory)


    useEffect(() => {
        getAllCategoriesApi(dispatch, pageLimit)
    }, [pageLimit, updateCategorySlice, categoryAndServices])

    useEffect(() => {
        if (getAllCategories?.data) {
            const data = getAllCategories?.data?.data?.items?.map((val: any) => {
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
                            onClick={() => {
                                setUpdateCategory(val),
                                    toggle()
                            }
                            }
                            className="cursor-pointer"
                        >
                            <img src={pen} alt="" />{' '}
                        </div>
                    ),
                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getAllCategories?.data])

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
                                All Category details
                            </h3>
                        </div>
                    </div>
                    <Table
                        scroll={{ x: true }}
                        columns={getAllCategoriesColumns}
                        loading={getAllCategories?.loading}
                        dataSource={dataSource}
                        pagination={{
                            total: getAllCategories?.data?.data?.meta?.totalItems,
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

export default CategoryTable
