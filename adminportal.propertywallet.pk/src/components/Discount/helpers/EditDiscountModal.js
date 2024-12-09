import { Button, Col, DatePicker, Divider, Form, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import NumberField from '../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import { useUpload } from '../../../utils/hooks/useUpload'
import moment from 'moment'
import SingleFilePreviewer from '../../../utils/components/Upload/SingleFilePreviewer'
import { EditOutlined } from '@ant-design/icons'
import Upload from '../../../utils/components/Upload/Upload'
import { addDiscountApi, updateDiscountApi } from '../../../redux/api/Discount'
import { useDispatch } from 'react-redux'
import { uploadAdvertisementApi } from '../../../redux/api/Advertisement/Promotion'
import { useSelector } from 'react-redux'
import { clearUploadAdvertisement } from '../../../redux/slices/Advertisement/Promotion/UploadAdvertisementSlice'
import { useForm } from 'antd/es/form/Form'
import dayjs from 'dayjs'

const EditDiscountModal = ({ visible, toggle, editData }) => {
  const [
    backgroundImage,
    setBackgroundImage,
    backgroundImagePreview,
    deleteBackgroundImage,
  ] = useUpload()
  const [form] = useForm()
  const [range, setRange] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const uploadAdvertisement = useSelector((state) => state.uploadAdvertisement)
  function onCancel() {
    clearUploadAdvertisement()
    toggle()
  }
  const dispatch = useDispatch()

  function onSuccess() {
    dispatch(clearUploadAdvertisement())
    toggle()
  }
  function onFinish(values) {
    const body = {
      discountCode: values?.discountCode,
      discountPercentage: values?.discountPer,
      noOfUsage: values?.noOfUsage,
      startDate: dayjs(values.date[0]).format('YYYY-MM-DD'),
      expireOn: dayjs(values.date[1]).format('YYYY-MM-DD'),
      discountType: values?.discountType,
      backgroundImage:
        uploadAdvertisement?.data?.data || editData?.backgroundImage,
    }
    updateDiscountApi(dispatch, body, editData?.id, onSuccess)
  }
  const updateDiscount = useSelector((state) => state.updateDiscount)
  const { RangePicker } = DatePicker

  useEffect(() => {
    if (backgroundImage.length > 0) {
      const formData = new FormData()
      formData.append('advertisement', backgroundImage[0])
      uploadAdvertisementApi(dispatch, formData)
    }
  }, [backgroundImage])

  useEffect(() => {
    if (editData) {
      form.setFieldsValue({
        discountCode: editData?.discountCode,
        discountPer: editData?.discountPercentage,
        noOfUsage: editData?.noOfUsage,
        discountType: editData?.type,
        date: [
          dayjs(editData?.startDate?.split('T')?.[0]),
          dayjs(editData?.expiresOn?.split('T')?.[0]),
        ],
      })
    }
  }, [])
  const dateFormat = 'YYYY-MM-DD'

  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Edit Discount Code</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={600}
    >
      <Divider />

      <Form
        name="new-form"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <div>
          <Row gutter={16}>
            <Col lg={24} sm={24}>
              <div>
                <InputLabel>Discount Code</InputLabel>
                <TextField name="discountCode" />
              </div>
              <div>
                <InputLabel>Discount Percentage</InputLabel>
                <NumberField
                  name="discountPer"
                  onChange={(e) => {
                    if (e.target.value > 100) {
                      form.setFieldValue('discountPer', 100)
                    }
                  }}
                />
              </div>
              <div>
                <InputLabel>No Of Usage</InputLabel>
                <NumberField name="noOfUsage" />
              </div>
              <div>
                <InputLabel>Date</InputLabel>
                <Form.Item
                  name="date"
                  rules={[{ required: true, message: 'Date is required' }]}
                  //   className='mb-0'
                >
                  <RangePicker
                    className="w-full h-[45px]"
                    // style={{ width: "",height:"100px" }}
                    separator={false}
                    onChange={(value, dateString) => {
                      if (value === null) {
                        setStartDate(null)
                      }
                      setRange(dateString)
                    }}
                    disabledDate={(current) => {
                      let customDate = moment().format('YYYY-MM-DD')
                      return (
                        current && current < moment(customDate, 'YYYY-MM-DD')
                      )
                    }}
                    onCalendarChange={(value, dateString) => {
                      if (value && value[0] === null && value[1] === null) {
                        return
                      }
                      setStartDate(value && value[0])
                    }}
                  />
                </Form.Item>
              </div>
              <div>
                <InputLabel>Discount Type</InputLabel>
                <SelectField
                  name="discountType"
                  options={[
                    { label: 'Regular', value: 'Regular' },
                    {
                      label: 'Cancel Subscription',
                      value: 'CancelSubscription',
                    },
                  ]}
                />
              </div>
              <div>
                <Row gutter={10}>
                  <Col lg={12} xs={24}>
                    <Upload
                      name="backgroundImage"
                      files={backgroundImage}
                      setFiles={setBackgroundImage}
                      supportedFileTypes={['png', 'jpg', 'jpeg', 'mp4']}
                      supportedText={'Files Supported  JPG,JPEG,MP4'}
                    />
                  </Col>
                  <Col lg={12} xs={24}>
                    <div className="" style={{ alignItems: '' }}>
                      {editData?.backgroundImage &&
                      backgroundImagePreview.length === 0 ? (
                        <div className="relative w-fit">
                          <img
                            src={editData?.backgroundImage}
                            alt=""
                            className="h-[185px] object-contain"
                          />
                        </div>
                      ) : (
                        backgroundImagePreview.length > 0 && (
                          <div className="relative">
                            <SingleFilePreviewer
                              imagePreviews={backgroundImagePreview}
                              uploadAdvertisement={
                                uploadAdvertisement?.data?.data
                              }
                              width={241}
                              height={197}
                              deleteMasterFile={deleteBackgroundImage}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              // type="primary"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              //   loading={addSubscription.loading}
              htmlType="submit"
              loading={updateDiscount?.loading}
            >
              Update Now
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}

export default EditDiscountModal
