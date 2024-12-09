import { Button, Divider, Form, Modal, Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import { TextAreaField } from '../../../../components'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { AppDispatch } from '../../../../store/store'
import { requestApprovalForWalletApi } from '../../../../services/api/Dashboard/Wallet'

const ApprovedrejectModal = ({ visible, toggle }: any) => {
    const [form] = useForm()
    const dispatch: AppDispatch = useDispatch()
    const requestApprovalForWallet = useSelector((state: any) => state?.requestApprovalForWallet)
    function onFinish(values: any) {
        if (visible?.status && visible?.status) {
            const body = {
                ...values,
                "status": visible?.status,
            }
            requestApprovalForWalletApi(dispatch, body, Number(visible.id), onSuccess)
        }
    }
    function onSuccess() {
        onCancel()
        form.resetFields()
    }
    function onCancel() {
        toggle(null)
    }
    return (
        <Modal
            width={'600px'}
            title={<h3 className="text-[18px] font-semibold">Withdraw</h3>}
            open={visible ? true : false}
            onCancel={onCancel}
            footer={null}
            centered={true}
        >
            <Divider />
            <div className='flex justify-center'>
                <div className='w-full' >
                    <Form onFinish={onFinish} autoComplete='off' form={form}>
                        <Row gutter={16}>
                            <Col sm={24} md={24} lg={24} xl={24}>
                                <h4
                                    style={{ textAlign: 'start' }}
                                    className="text-[14px] text-[#344054] font-medium "
                                >
                                    Enter your remarks
                                </h4>
                                <TextAreaField name="statusRemarks" />
                            </Col>
                        </Row>
                        <div className="flex justify-end mt-[30px] gap-2">
                            <Button
                                size="middle"
                                key="1"
                                loading={requestApprovalForWallet.loading}
                                type="primary"
                                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                                htmlType="submit"
                            >
                                Confirm
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}

export default ApprovedrejectModal
