import { Button, Divider, Form, Modal, Row, Col } from 'antd'
import { InputLabel } from '../../../../../components'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { requestApprovalForWalletApi } from '../../../../../services/api/Dashboard/Wallet'
import moment from 'moment'

const SpTransactionModal = ({ visible, toggle }: any) => {
    const [form] = useForm()
    function onCancel() {
        toggle(null)
    }

    return (
        <Modal
            width={'600px'}
            title={<h3 className="text-[18px] font-semibold">Service Provider Transaction</h3>}
            open={visible ? true : false}
            onCancel={onCancel}
            footer={null}
            centered={true}
        >
            <Divider />
            <div className='flex justify-center'>
                <div className='w-full' >
                    <Form autoComplete='off' form={form}>
                        <Row gutter={16}>
                            <Col sm={24} md={24} lg={24}>
                                <InputLabel>Inventory Charges</InputLabel>
                                <p>{visible?.inventoryCharges}</p>
                            </Col>
                            <Col sm={24} md={24} lg={24}>
                                <InputLabel>Labor Charges</InputLabel>
                                <p>{visible?.laborCharges}</p>
                            </Col>
                            <Col sm={24} md={24} lg={24}>
                                <InputLabel>Transaction Type</InputLabel>
                                <p>{visible?.transactionType}</p>
                            </Col>
                            <Col sm={24} md={24} lg={24}>
                                <InputLabel>Created At</InputLabel>
                                <p>{visible?.createdAt ? moment(visible?.createdAt).format("l") : "-"}</p>
                            </Col>
                        </Row>
                        <div className="flex justify-end mt-[30px] gap-2">
                            <Button
                                size="middle"
                                key="1"
                                type="primary"
                                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                                onClick={onCancel}
                            >
                                Close
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}

export default SpTransactionModal
