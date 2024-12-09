import { useEffect, useState } from 'react'
import { Button, Divider, Form, Modal, Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import { InputLabel } from '../../../../components'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { AppDispatch } from '../../../../store/store'
import TextInput from '../../../../components/inputs/TextInput';
import { categoryAndServicesApi, updateCategoryApi } from '../../../../services/api/Dashboard/Category'

const UpdateCatgoryModal = ({ visible, toggle, data }: { visible: any, toggle: any, data: any }) => {
    const [form] = useForm()
    const dispatch: AppDispatch = useDispatch()
    const updateCategory = useSelector((state: any) => state?.updateCategory)

    function onFinish(values: any) {
        updateCategoryApi(dispatch, values, data?.id, onSuccess)
    }
    function onSuccess() {
        onCancel()
        form.resetFields()
    }
    function onCancel() {
        toggle()
    }
    useEffect(() => {
        form.setFieldsValue({
            categoryTitle: data?.title
        })
    }, [data])
    return (
        <Modal
            width={'600px'}
            title={<h3 className="text-[18px] font-semibold">Update Category</h3>}
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
                        </Row>
                        <div className="flex justify-end mt-[30px] gap-2">
                            <Button
                                size="middle"
                                key="1"
                                loading={updateCategory.loading}
                                type="primary"
                                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                                htmlType="submit"
                            >
                                Update
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}

export default UpdateCatgoryModal
