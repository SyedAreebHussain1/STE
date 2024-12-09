import { Button, Col, Form, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { addPipeLineStageApi } from "../../../../../redux/api/Campaigns";
import { useParams } from "react-router-dom";

type Props = {
    open: boolean;
    close: any;
};

const CreateStagModal = ({ open, close }: Props) => {
    const [form] = useForm();
    const params = useParams();
    const addPipeLineStage = useSelector(
        (state: any) => state?.addPipeLineStage
    );
    const dispatch = useDispatch();

    const onFinish = (value: any) => {
        const body = {
            ...value,
            "campaignId": Number(params?.id)
        }
        addPipeLineStageApi(dispatch, body, onSuccess)
    };
    const onSuccess = () => {
        close()
    }
    return (
        <Modal
            title={
                <span className="text-[#475467] text-[1rem] font-medium">
                    Create New Stage
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
                        <TextInput
                            name="title"
                            id="title"
                            className="h-[48px] mt-2"
                            placeholder="Enter Title"
                            rules={[
                                { required: true, message: "Please Enter Title" },
                            ]}
                        />

                    </Col>
                </Row>
                <div className="flex justify-end w-[100%] ">
                    <Button
                        htmlType="submit"
                        type="primary"
                        loading={addPipeLineStage.loading}
                        className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
                    >
                        Create
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};
export default CreateStagModal;
