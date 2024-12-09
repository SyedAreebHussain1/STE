import { Button, Divider, Form, Modal, Row, Col, Select } from 'antd'
import { useSelector } from 'react-redux'
import { InputLabel } from '../../../../components'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { AppDispatch } from '../../../../store/store'
import TextInput from '../../../../components/inputs/TextInput';
import { useUpload } from '../../../../hooks/useUpload'
import Upload from '../../../../utils/helpers/Upload/Upload'
import { CgClose } from 'react-icons/cg'
import { errorMessage } from '../../../../utils/message'
import { approveRejectSPApi } from '../../../../services/api/Dashboard/ServiceProviders'
const { Option } = Select;

const UpdateStatusModal = ({ visible, toggle }: { visible: any, toggle: any }) => {
    const [form] = useForm()
    const dispatch: AppDispatch = useDispatch()
    const [iconUrl, setIconUrl, iconUrlPreview, deleteFile] = useUpload();
    const approveRejectSP = useSelector((state: any) => state?.approveRejectSP)
    function onFinish(values: any) {
        const formData: any = new FormData()
        if (iconUrl[0]) {
            formData.append("status", values.status);
            formData.append("file", iconUrl[0]);
            formData.append("registrationFee", values.registrationFee);
            formData.append("experience", values.experience);
            approveRejectSPApi(dispatch, formData, Number(visible?.id), onSuccess)
        } else {
            errorMessage("Select Profile Picture")
        }
    }
    function onSuccess() {
        onCancel()
        form.resetFields()
    }
    function onCancel() {
        toggle()
        form.resetFields()
        deleteFile(iconUrlPreview?.[0]?.name)
    }

    return (
        <Modal
            width={'600px'}
            title={<h3 className="text-[18px] font-semibold">Update Status</h3>}
            open={visible}
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
                                <InputLabel>Status</InputLabel>
                                <Form.Item
                                    name="status"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your Status!",
                                        },
                                    ]}
                                >
                                    <Select
                                        className="w-full min-h-[48px]"
                                        placeholder="Select Status"
                                        allowClear
                                    >
                                        {["Hold", "Register", "Suspended"]?.map(
                                            (item: string, i: number) => {
                                                return (
                                                    <Option key={i} value={item}>
                                                        {item}
                                                    </Option>
                                                );
                                            }
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={24} lg={24} xl={24}>
                                <InputLabel>Registration Fee </InputLabel>
                                <TextInput rules={[
                                    {
                                        required: true,
                                        message: "Please input your Registration Fee !",
                                    },
                                ]} isNumber name='registrationFee' className="w-full min-h-[48px] dark-input" />
                            </Col>
                            <Col sm={24} md={24} lg={24} xl={24}>
                                <InputLabel>Experience</InputLabel>
                                <TextInput rules={[
                                    {
                                        required: true,
                                        message: "Please input your Experience!",
                                    },
                                ]} name='experience' className="w-full min-h-[48px] dark-input" />
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col lg={10} xs={24}>
                                <span className="font-medium text-[.975rem] text-[#344054] mb-2 mt-2">
                                    Profile Picture
                                    <span className="text-[red]">*</span>
                                </span>
                                <div className="mb-[20px]">
                                    <Upload
                                        name="Choise icon"
                                        files={iconUrl}
                                        setFiles={setIconUrl}
                                        supportedFileTypes={["png", "jpg", "jpeg"]}
                                        fileUploadLimit={1}
                                    />
                                </div>
                            </Col>
                            <Col lg={14} xs={24}>
                                <div className="h-[159px]">
                                    {iconUrl.length > 0 && (
                                        <div className="relative w-fit h-[100%]">
                                            <img
                                                src={iconUrlPreview?.[0]?.url}
                                                alt=""
                                                className="h-[100%] object-contain"
                                            />
                                            <span
                                                className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                                                onClick={() => deleteFile(iconUrlPreview?.[0]?.name)}
                                            >
                                                <CgClose />
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Col>

                        </Row>
                        <div className="flex justify-end mt-[30px] gap-2">
                            <Button
                                size="middle"
                                key="1"
                                loading={approveRejectSP?.loading}
                                type="primary"
                                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                                htmlType="submit"
                            >
                                Update status
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}

export default UpdateStatusModal
