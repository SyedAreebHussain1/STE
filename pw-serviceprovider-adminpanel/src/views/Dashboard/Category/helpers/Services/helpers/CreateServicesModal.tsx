import { useEffect, useState } from 'react'
import { Button, Divider, Form, Modal, Row, Col, Select } from 'antd'
import { useSelector } from 'react-redux'
import { InputLabel } from '../../../../../../components'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { AppDispatch } from '../../../../../../store/store'
import TextInput from '../../../../../../components/inputs/TextInput';
import { createServiceWithCategoryIdApi, getCategoriesApi } from '../../../../../../services/api/Dashboard/Services'
const { Option } = Select;

const CreateServicesModal = ({ visible, toggle }: { visible: boolean, toggle: any }) => {
    const [form] = useForm()
    const dispatch: AppDispatch = useDispatch()
    const [serviceLength, setServiceLength] = useState<number>(0)
    const [dataSource, setDataSource] = useState<number[]>([1])
    const createServiceWithCategoryId = useSelector((state: any) => state?.createServiceWithCategoryId)
    const getCategories = useSelector((state: any) => state?.getCategories)

    function onFinish(values: any) {
        const { categoryId, ...val } = values
        let title = []
        for (let key in val) {
            if (val[key] !== "") {
                title.push(val[key])
            }
        }
        const body = {
            categoryId,
            title,
        }
        createServiceWithCategoryIdApi(dispatch, body, onSuccess)
    }
    useEffect(() => {
        getCategoriesApi(dispatch)
    }, [visible])
    function onSuccess() {
        onCancel()
        form.resetFields()
    }
    function onCancel() {
        toggle()
    }
    function addService() {
        setServiceLength(serviceLength + 1)
        const arr = Array.from({ length: serviceLength })
        setDataSource((pre: any) => [...pre, arr.length])
    }
    function removeService(index: any) {
        if (index > -1) {
            const newNumbers = [...dataSource];
            newNumbers.splice(index, 1);
            setDataSource(newNumbers);
        }
    }
    return (
        <Modal
            width={'600px'}
            title={<h3 className="text-[18px] font-semibold">Add Services</h3>}
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
                                <InputLabel>Category</InputLabel>
                                <Form.Item
                                    name="categoryId"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please select Category!",
                                        },
                                    ]}
                                >
                                    <Select
                                        className="w-full min-h-[48px]"
                                        placeholder="Select Category"
                                    >
                                        {getCategories?.data?.data?.map(
                                            (item: any, i: number) => {
                                                return (
                                                    <Option key={i} value={item?.id}>
                                                        {item?.title}
                                                    </Option>
                                                );
                                            }
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={24} lg={24} xl={24}>
                                <div className='flex justify-between items-center mt-2 mb-2'>
                                    <InputLabel>Title</InputLabel>
                                    <Button className='min-h-[40px]' onClick={() => addService()}>
                                        Add Title
                                    </Button>
                                </div>
                                {dataSource.map((val: any, i: any) => {
                                    return <div key={i} className='flex gap-2'>
                                        <TextInput name={'title' + i} rules={[
                                            {
                                                required: true,
                                                message: "Please inter Title!",
                                            },
                                        ]} className="w-full min-h-[40px] dark-input" />
                                        {dataSource.length !== 1 && <Button className='min-h-[40px]' onClick={() => removeService(i)}>
                                            X
                                        </Button>}
                                    </div>
                                })
                                }
                            </Col>
                        </Row>
                        <div className="flex justify-end mt-[30px] gap-2">
                            <Button
                                size="middle"
                                key="1"
                                loading={createServiceWithCategoryId.loading}
                                type="primary"
                                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                                htmlType="submit"
                            >
                                Add
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}

export default CreateServicesModal
