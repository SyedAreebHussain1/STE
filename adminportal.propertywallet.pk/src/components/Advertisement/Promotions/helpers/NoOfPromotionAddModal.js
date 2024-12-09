import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Progress,
  Row,
  Select,
} from 'antd'
import dayjs from 'dayjs'
import { useForm } from 'antd/es/form/Form'
import Upload from '../../../../utils/components/Upload/Upload'
import { useUpload } from '../../../../utils/hooks/useUpload'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import SingleFilePreviewer from '../../../../utils/components/Upload/SingleFilePreviewer'
import { uploadAdvertisementApi } from '../../../../redux/api/Advertisement/Promotion'
import { createAdvertisementApi } from '../../../../redux/api/Advertisement/Promotion'
import { moduleListApi } from '../../../../redux/api/Advertisement/Promotion'
import { errorMessage } from '../../../../utils/message'
import moment from 'moment'
import 'cropperjs/dist/cropper.css'
import { useModal } from '../../../../utils/hooks/useModal'
import PromotionCropImage from './PromotionCropImageModal'
import PromotionCropImageModal from './PromotionCropImageModal'
import { EditOutlined } from '@ant-design/icons'

dayjs.extend(customParseFormat)
const { RangePicker } = DatePicker
const dateFormat = 'YYYY/MM/DD'

const NoOfPromotionAddModal = ({ visible, toggleAdd }) => {
  const [titleRole, setTitleRole] = useState('')
  const [form] = useForm()
  const dispatch = useDispatch()
  const [isCropModalVisible, toggleCropModal] = useModal()
  const [mediaImage, setMediaImage, imagePreviews, deleteMasterFile, progress] =
    useUpload()

  const [range, setRange] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [body, setBody] = useState({
    redirectLink: null,
    startDate: null,
    endDate: null,
    type: null,
    placement: null,
    url: null,
  })
  const uploadAdvertisement = useSelector((state) => state?.uploadAdvertisement)
  const createAdvertisement = useSelector((state) => state?.createAdvertisement)
  const moduleList = useSelector((state) => state?.moduleList)

  const onFinish = (e) => {
    if (mediaImage.length === 0) {
      errorMessage('Media is required')
      return
    }
    const obj = {
      redirectLink: e.refLink,
      startDate: range[0],
      endDate: range[1],
      url: uploadAdvertisement.data?.data,
      type: imagePreviews?.[0]?.type === 'video/mp4' ? 'VIDEO' : 'IMAGE',
      placement: e.selectPromotion,
    }
    createAdvertisementApi(dispatch, obj, onSuccess)
  }

  useEffect(() => {
    if (visible) {
      moduleListApi(dispatch)
    }
  }, [dispatch, visible])
  useEffect(() => {
    if (mediaImage.length > 0) {
      const formData = new FormData()
      formData.append('advertisement', mediaImage[0])
      uploadAdvertisementApi(dispatch, formData)
    }
  }, [mediaImage])

  function onSuccess() {
    toggleAdd()
    form.resetFields()
    deleteMasterFile(imagePreviews[0].name)
  }
  function onCancel() {
    toggleAdd()
    progress.resetProgress()
    form.resetFields()
  }

  return (
    <>
      {isCropModalVisible && (
        <PromotionCropImageModal
          visible={isCropModalVisible}
          toggle={toggleCropModal}
          img={imagePreviews}
        />
      )}
      <Modal
        width={'541px'}
        title={<h3 className="text-[18px] font-semibold">Add Promotion</h3>}
        open={visible}
        onCancel={onCancel}
        footer={null}
        centered={true}
      >
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%' }} bordered={false}>
            <Form
              name="normal_login"
              form={form}
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <h4
                style={{ textAlign: 'start', marginTop: '' }}
                className="text-[14px] text-[#3D4350] font-medium mb-[6px]"
              >
                Redirect Link
                <span className="text-[#858D9D] text-[14px] ">(url)</span>
              </h4>
              <Form.Item
                name="refLink"
                rules={[{ required: true, message: 'Title is required' }]}
              >
                <Input
                  className="py-2"
                  onChange={(e) => setTitleRole(e.target.value)}
                />
              </Form.Item>

              <h4
                style={{ textAlign: 'start', marginTop: '' }}
                className="text-[14px]  text-[#3D4350] font-medium  mb-[6px]"
              >
                Time Period
                <span className="text-[#858D9D] text-[14px] ">
                  (Select Range)
                </span>
              </h4>
              <Form.Item
                name="date"
                rules={[{ required: true, message: 'Title is required' }]}
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
                    return current && current < moment(customDate, 'YYYY-MM-DD')
                  }}
                  onCalendarChange={(value, dateString) => {
                    if (value && value[0] === null && value[1] === null) {
                      return
                    }
                    setStartDate(value && value[0])
                  }}
                />
              </Form.Item>

              <h4
                style={{ textAlign: 'start', marginTop: '' }}
                className="text-[14px] font-medium text-[#3D4350]  mb-[6px]"
              >
                Placement
              </h4>
              <Form.Item
                name="selectPromotion"
                rules={[{ required: true, message: 'Title is required' }]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  options={moduleList?.data?.data?.map((val) => ({
                    label: val?.title,
                    value: val?.id,
                  }))}
                  // { label: moduleList?.data?.data?.[0]?.title, value: moduleList?.data?.data[0]?.id, },
                  className="h-[43px]"
                />
              </Form.Item>
              <h4
                style={{ textAlign: 'start', marginTop: '' }}
                className="text-[14px] font-medium text-[#3D4350]  mb-[6px]"
              >
                Media
              </h4>
              <Row gutter={10}>
                <Col lg={12} xs={24}>
                  <Upload
                    name="mediaImage"
                    files={mediaImage}
                    setFiles={setMediaImage}
                    supportedFileTypes={['png', 'jpg', 'jpeg', 'mp4']}
                    supportedText={'Files Supported  JPG,JPEG,MP4'}
                    compressImages={false}
                    // fileLimit={10}
                  />
                </Col>
                <Col lg={12} xs={24}>
                  <div className="" style={{ alignItems: '' }}>
                    {imagePreviews.length > 0 && (
                      <div className="relative">
                        <SingleFilePreviewer
                          imagePreviews={imagePreviews}
                          uploadAdvertisement={uploadAdvertisement?.data?.data}
                          width={241}
                          height={197}
                          deleteMasterFile={deleteMasterFile}
                        />
                        {imagePreviews[0].type !== 'video/mp4' && (
                          <EditOutlined
                            className="cursor-pointer absolute top-2 left-2"
                            onClick={toggleCropModal}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </Col>
              </Row>

              {progress.progress > 0 && (
                <Progress percent={progress.progress} />
              )}
              <div className="flex justify-end mt-[55px]">
                <Button
                  size="middle"
                  key="1"
                  // type="primary"
                  className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                  loading={uploadAdvertisement.loading}
                  htmlType="submit"
                >
                  Add Now
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default NoOfPromotionAddModal
