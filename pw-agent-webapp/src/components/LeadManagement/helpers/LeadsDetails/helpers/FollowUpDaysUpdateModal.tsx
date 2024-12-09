import { Button, Modal, Input, Form, Row, Col } from 'antd';
import { addNewLeadFollowUpApi } from '../../../../../redux/api/LeadManagement';
import { AppDispatch } from '../../../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

const { TextArea } = Input;

type FollowUpDaysUpdateModalProps = {
    toggleId: boolean | number | string | null | any | undefined,
    setToggleId: (e: null | number | string | boolean) => void,
}

const FollowUpDaysUpdateModal = ({ toggleId, setToggleId }: FollowUpDaysUpdateModalProps) => {
    const dispatch: AppDispatch = useDispatch()
    const addNewLeadFollowUp = useSelector((state: any) => state?.addNewLeadFollowUp)
    function onFinish(value: any) {
        const body = {
            "leadId": toggleId,
            "noOfDays": value?.noOfDays
        }
        addNewLeadFollowUpApi(dispatch, body, onSuccess)
    }
    function onSuccess() {
        setToggleId(null)
    }
    return (
        <Modal
            title="Follow up days"
            centered
            width={553}
            open={toggleId}
            onOk={() => setToggleId(null)}
            onCancel={() => setToggleId(null)}
            footer={null}
        >
            <Form
                onFinish={onFinish}
                name='followUpDay'
            >
                <Row gutter={16}>
                    <Col xs={24} sm={24} lg={24} md={24}>
                        <Form.Item name="noOfDays" rules={[
                            {
                                required: true,
                                message: "Please input your Follow up!",
                            },
                        ]}>
                            <Input
                                className="h-[44px] "
                                type='number'
                                placeholder="Enter here..."
                                name='noOfDays' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} lg={24} md={24}>
                        <div className='flex gap-2'>
                            <Button
                                onClick={() => setToggleId(null)}
                                className="border text-[#475467] h-[48px]  text-[1rem] font-semibold w-full">
                                Cancel
                            </Button>
                            <Button
                                loading={addNewLeadFollowUp.loading}
                                type="primary"
                                htmlType="submit"
                                className="bg-primary text-[#fff] border-none h-[48px]  text-[1rem] font-medium  w-full"
                            >
                                Save
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Modal >
    )
}
export default FollowUpDaysUpdateModal