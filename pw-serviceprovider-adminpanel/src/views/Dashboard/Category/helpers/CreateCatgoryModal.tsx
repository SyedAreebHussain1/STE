import { useState } from 'react'
import { Button, Divider, Form, Modal, Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import { InputLabel } from '../../../../components'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { AppDispatch } from '../../../../store/store'
import TextInput from '../../../../components/inputs/TextInput';
import { categoryAndServicesApi } from '../../../../services/api/Dashboard/Category'

const CreateCatgoryModal = ({ visible, toggle }: { visible: boolean, toggle: any }) => {
    const [form] = useForm()
    const dispatch: AppDispatch = useDispatch()
    const [serviceLength, setServiceLength] = useState<number>(0)
    const [dataSource, setDataSource] = useState<number[]>([])
    const categoryAndServices = useSelector((state: any) => state?.categoryAndServices)

    function onFinish(values: any) {
        const { categoryTitle, ...val } = values
        let serviceTitle = []
        for (let key in val) {
            if (val[key] !== "") {
                serviceTitle.push(val[key])
            }
        }
        const body = {
            categoryTitle,
            serviceTitle,
        }
        categoryAndServicesApi(dispatch, body, onSuccess)
    }
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
            title={<h3 className="text-[18px] font-semibold">Add Category</h3>}
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
                                <TextInput name='categoryTitle' className="w-full min-h-[48px] dark-input" rules={[
                                    { required: true, message: 'Title is required' },
                                ]} />
                            </Col>
                            <Col sm={24} md={24} lg={24} xl={24}>
                                <div className='flex justify-between items-center mt-2 mb-2'>
                                    <InputLabel>Service</InputLabel>
                                    <Button className='min-h-[40px]' onClick={() => addService()}>
                                        Add service
                                    </Button>
                                </div>
                                {dataSource.map((val: any, i: any) => {
                                    return <div key={i} className='flex gap-2'>
                                        <TextInput name={'serviceTitle' + i} className="w-full min-h-[40px] dark-input" />
                                        <Button className='min-h-[40px]' onClick={() => removeService(i)}>
                                            X
                                        </Button>
                                    </div>
                                })
                                }
                            </Col>
                        </Row>
                        <div className="flex justify-end mt-[30px] gap-2">
                            <Button
                                size="middle"
                                key="1"
                                loading={categoryAndServices.loading}
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

export default CreateCatgoryModal
