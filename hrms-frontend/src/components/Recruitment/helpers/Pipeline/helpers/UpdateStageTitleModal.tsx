import { Button, Col, Form, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { useEffect } from "react";

type Props = {
    open: boolean;
    close: any;
    column: any;
};

const UpdateStageTitleModal = ({ open, close, column }: Props) => {
    const [form] = useForm();
    const editPipelineStage = useSelector(
        (state: any) => state?.editPipelineStage
    );
    const dispatch = useDispatch();
    const onFinish = (value: any) => {
        const body = {
            ...value,
        }
        // editPipelineStageApi(dispatch, body, column?.id, onSuccess)
    };
    const onSuccess = () => {
        close()
    }
    useEffect(() => {
        form.setFields([
            {
                name: "title",
                value: column?.title,
            }
        ]);
    }, [column])

    return (
        <Modal
            title={
                <span className="text-[#475467] text-[1rem] font-medium">
                    Update Stage
                </span>
            }
            centered
            width={500}
            open={open}
            onCancel={close}
            footer={false}
        >
            <Form autoComplete="off" form={form} onFinish={onFinish} name="editCampaignName">
                <Row gutter={16} className="py-1">
                    <Col sm={24} className="mt-5">
                        <label
                            htmlFor="title"
                            className="text-[.8125rem] font-medium text-[#667085]"
                        >
                            Title
                        </label>
                        <Form.Item name="title">
                            <TextInput
                                name="title"
                                id="title"
                                className="h-[48px] mt-2"
                                placeholder="Enter Title"
                                rules={[
                                    { required: true, message: "Please Enter Title" },
                                ]}
                            />
                        </Form.Item>

                    </Col>
                </Row>
                <div className="flex justify-end w-[100%] ">
                    <Button
                        htmlType="submit"
                        type="primary"
                        loading={editPipelineStage.loading}
                        className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
                    >
                        Update
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};
export default UpdateStageTitleModal;
