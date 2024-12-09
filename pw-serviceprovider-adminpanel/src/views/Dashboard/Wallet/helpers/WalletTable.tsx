import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import withdrawRequestColumns from "../../../../utils/tableColumns/withdrawRequestColumns.json"
import { getWithdrawRequestApi } from '../../../../services/api/Dashboard/Wallet'
import ApprovedrejectModal from './ApprovedrejectModal'
import { useModal } from '../../../../hooks/useModal'

const WalletTable: React.FC = () => {
    const dispatch = useDispatch()
    const [addModal, toggle]: any = useModal();
    const [dataSource, setDataSource] = useState([])
    const [spWallet, setSpWallet] = useState<any>(null)
    const getWithdrawRequest = useSelector((state: any) => state?.getWithdrawRequest)
    const requestApprovalForWallet = useSelector((state: any) => state?.requestApprovalForWallet)
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    useEffect(() => {
        getWithdrawRequestApi(dispatch, pageLimit)
    }, [pageLimit, requestApprovalForWallet])

    useEffect(() => {
        if (getWithdrawRequest?.data) {
            const data = getWithdrawRequest?.data?.data?.items?.map((item: any) => {
                return {
                    key: item?.id,
                    sno: item?.id,
                    amount: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {item?.amount || '-'}
                        </span>
                    ),
                    accountNumber: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {item?.accountNo || '-'}
                        </span>
                    ),
                    accountTitle: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {item?.accountTitleName || '-'}
                        </span>
                    ),
                    bankName: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {item?.bankName}
                        </span>
                    ),
                    withdrawDate: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {item?.createdAt ? moment(item?.createdAt).format("l") : "-"}
                        </span>
                    ),
                    action: (
                        <div>
                            {item.spAdddWalletRequestStatus === "Pending" && <div className='flex gap-2'>
                                <Button onClick={() => setSpWallet({ id: item?.id, status: "Approved" })}>Approve</Button>
                                <Button danger onClick={() => setSpWallet({ id: item?.id, status: "Rejected" })}>Reject</Button>
                            </div>}
                            <div>
                                {item.spAdddWalletRequestStatus !== "Pending" && item.spAdddWalletRequestStatus}
                            </div>
                        </div>
                    ),
                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getWithdrawRequest?.data])

    return (
        <React.Fragment>
            {spWallet !== null && <ApprovedrejectModal toggle={setSpWallet} visible={spWallet} />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Request List
                            </h3>
                        </div>
                    </div>
                    <Table
                        scroll={{ x: true }}
                        columns={withdrawRequestColumns}
                        loading={getWithdrawRequest?.loading}
                        dataSource={dataSource}
                        pagination={{
                            total: getWithdrawRequest?.data?.data?.meta?.totalItems,
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

export default WalletTable
