import { useState } from 'react'
import { Button, Divider, Form, Modal, Row, Col, Checkbox, Select } from 'antd'
import { useSelector } from 'react-redux'
import { InputLabel } from '../../../../components'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import type { CheckboxProps } from 'antd';
import { AppDispatch } from '../../../../store/store'
import TextInput from '../../../../components/inputs/TextInput';
import { categoryAndServicesApi } from '../../../../services/api/Dashboard/Category'
import { useUpload } from '../../../../hooks/useUpload'
import Upload from '../../../../utils/helpers/Upload/Upload'
import SingleFilePreviewer from '../../../../utils/helpers/Upload/SingleFilePreviewer'
import { CgClose } from 'react-icons/cg'
import { createPackageApi } from '../../../../services/api/Dashboard/Packages'
const { Option } = Select;

const CraetePackageModal = ({ visible, toggle }: { visible: boolean, toggle: any }) => {
    const [form] = useForm()
    const dispatch: AppDispatch = useDispatch()
    const [iconUrl, setIconUrl, iconUrlPreview, deleteFile] = useUpload();

    const categoryAndServices = useSelector((state: any) => state?.categoryAndServices)

    function onFinish(values: any) {
        const formData: any = new FormData()
        console.log(values);
        
        formData.append("title", values?.title);
        formData.append("file", iconUrl[0]);
        formData.append("packagePlan", values?.packagePlan);
        formData.append("charges", values.charges !== "undefined" ? values.charges : "");
        formData.append("isRec", values.isRec !== "undefined" ? values.isRec : "");
        formData.append("numberOfMonth", values.numberOfMonth !== "undefined" ? values.numberOfMonth : "");
        formData.append("comissionPercentage", values.comissionPercentage !== "undefined" ? values.comissionPercentage : "");
        formData.append("isFree", values.isFree !== "undefined" ? values.isFree : false);
        formData.append("isCommission", values.isCommission !== "undefined" ? values.isCommission : false);
        formData.append("isSponsered", values.isSponsered !== "undefined" ? values.isSponsered : false);


        // infutrueUseCommentPleaseIgnore
        // formData.append("isFreeTrial", values.isFreeTrial !== "undefined" ? values.isFreeTrial : false);
        // formData.append("isCompany", values.isCompany !== "undefined" ? values.isCompany : false);
        createPackageApi(dispatch, formData, onSuccess)
    }
    function onSuccess() {
        onCancel()
        form.resetFields()
    }
    function onCancel() {
        toggle()
    }
    return (
        <Modal
            width={'600px'}
            title={<h3 className="text-[18px] font-semibold">Create Package</h3>}
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
                                <InputLabel>Title</InputLabel>

                                <Form.Item
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Title is required",
                                        },
                                    ]}
                                >
                                    <Select
                                        className="w-full min-h-[48px]"
                                        placeholder="Select Title"
                                    >
                                        {['BASIC',
                                            'PREMIUM',
                                            'GOLD'].map(
                                                (item: any, i: number) => {
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
                                <InputLabel>Charges</InputLabel>
                                <TextInput isNumber name='charges' className="w-full min-h-[48px] dark-input" />
                            </Col>
                            <Col sm={24} md={24} lg={24} xl={24}>
                                <InputLabel>Is Rec</InputLabel>
                                <TextInput isNumber name='isRec' className="w-full min-h-[48px] dark-input" />
                            </Col>
                            <Col sm={24} md={24} lg={24} xl={24}>
                                <InputLabel>No of Month</InputLabel>
                                <TextInput isNumber name='numberOfMonth' className="w-full min-h-[48px] dark-input" />
                            </Col>
                            <Col sm={24} md={24} lg={24} xl={24}>
                                <InputLabel>Comission Percentage</InputLabel>
                                <TextInput name='comissionPercentage' className="w-full min-h-[48px] dark-input" />
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col sm={24} md={24} lg={24} xl={24}>
                                <InputLabel>Plan</InputLabel>
                                <Form.Item
                                    name="packagePlan"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your Plan!",
                                        },
                                    ]}
                                >
                                    <Select
                                        className="w-full min-h-[48px]"
                                        placeholder="Select Plan"
                                    >
                                        {['MONTHLY',
                                            'QUARTERLY',
                                            'YEARLY',
                                            'HALFYEARLY'].map(
                                                (item: any, i: number) => {
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
                        </Row>
                        <Row gutter={16}>
                            <Col sm={24} md={8} lg={8} xl={8}>
                                <Form.Item name="isFree" valuePropName="checked">
                                    <Checkbox name="isFree">Free</Checkbox>
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={8} lg={8} xl={8}>
                                <Form.Item name="isCommission" valuePropName="checked">
                                    <Checkbox name="isCommission">Commision</Checkbox>
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={8} lg={8} xl={8}>
                                <Form.Item name="isSponsered" valuePropName="checked">
                                    <Checkbox name="isSponsered">Sponsored</Checkbox>
                                </Form.Item>
                            </Col>
                            {/* infutrueUseCommentPleaseIgnore */}
                            {/* <Col sm={24} md={8} lg={8} xl={8}>
                                <Form.Item name="isFreeTrial" valuePropName="checked">
                                    <Checkbox name="isFreeTrial">Free Trial</Checkbox>
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={8} lg={8} xl={8}>
                                <Form.Item name="isCompany" valuePropName="checked">
                                    <Checkbox name="isCompany" >Company</Checkbox>
                                </Form.Item>
                            </Col> */}
                        </Row>
                        <Row gutter={16}>
                            <Col lg={10} xs={24}>
                                <span className="font-medium text-[.975rem] text-[#344054] mb-2 mt-2">
                                    Choose Logo
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
                                loading={categoryAndServices?.loading}
                                type="primary"
                                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                                htmlType="submit"
                            >
                                Create
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}

export default CraetePackageModal
