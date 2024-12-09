import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row, Divider } from 'antd'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import NumberField from '../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import { useUpload } from '../../../utils/hooks/useUpload'
import SingleFilePreviewer from '../../../utils/components/Upload/SingleFilePreviewer'
import Upload from '../../../utils/components/Upload/Upload'
import { clearUploadAdvertisement } from '../../../redux/slices/Advertisement/Promotion/UploadAdvertisementSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import TextAreaField from '../../../utils/components/InputFields/TextAreaField'
import exitIcon from '../../../components/assest/icon/exitIcon.png'
import {
  getLoungeOwnerApi,
  updateLoungeApi,
  uploadAdvertisementApi,
  getLoungeApi,
} from '../../../redux/api/Lounge'

const UpdateLoungeModal = ({ visible, toggle, updateData }) => {
  const dispatch = useDispatch()
  const [newOwnerShow, setNewOwnerShow] = useState(false)
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [
    backgroundImage,
    setBackgroundImage,
    backgroundImagePreview,
    deleteBackgroundImage,
  ] = useUpload()
  const [form] = useForm()
  const getLoungeOwner = useSelector((state) => state?.getLoungeOwner)
  const uploadAdvertisement = useSelector((state) => state?.uploadAdvertisement)
  const updateLounge = useSelector((state) => state?.updateLounge)

  function onCancel() {
    dispatch(clearUploadAdvertisement())
    toggle()
  }
  console.log(updateData)
  useEffect(() => {
    getLoungeOwnerApi(dispatch)
  }, [dispatch])

  function onFinish(values) {
    if (values) {
      const body = {
        name: values?.name,
        logo: uploadAdvertisement?.data?.data || updateData?.logo,
        shortDescription: values?.shortDescription,
        // loungeUserId: updateData?.id,
      }
      updateLoungeApi(dispatch, body, onSuccess, updateData?.id)
    }
  }

  function onSuccess() {
    dispatch(clearUploadAdvertisement())
    getLoungeApi(dispatch, pageLimit)
    toggle()
  }
  useEffect(() => {
    if (backgroundImage.length > 0) {
      const formData = new FormData()
      formData.append('advertisement', backgroundImage[0])
      uploadAdvertisementApi(dispatch, formData)
    }
  }, [backgroundImage])
  useEffect(() => {
    if (updateData) {
      form.setFieldsValue({
        name: updateData?.name,
        shortDescription: updateData?.shortDescription,
        logo: updateData?.logo,
        loungeUserId: updateData?.loungeOwnerId,
      })
    }
  }, [])
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Edit Lounge</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={713}
    >
      <Divider />

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <div>
          <Row gutter={16}>
            <Col lg={24} sm={24}>
              <div>
                <div className="mt-[10px] mb-[10px]">
                  <InputLabel>Edit Logo</InputLabel>
                </div>
                <Row gutter={10}>
                  <Col lg={14} xs={24}>
                    <Upload
                      name="backgroundImage"
                      files={backgroundImage}
                      setFiles={setBackgroundImage}
                      supportedFileTypes={['png', 'jpg', 'jpeg', 'mp4']}
                      supportedText={'Files Supported  JPG,JPEG,MP4'}
                    />
                  </Col>
                  <Col lg={10} xs={24}>
                    <div>
                      {updateData?.logo &&
                      backgroundImagePreview.length === 0 ? (
                        <div className="relative w-fit">
                          <img
                            src={updateData?.logo}
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
              <div>
                <div className="mt-[20px] mb-[]">
                  <InputLabel>Lounge Name</InputLabel>
                </div>
                <TextField name="name" />
              </div>
              <div>
                <InputLabel>Description</InputLabel>
                <TextAreaField
                  name={'shortDescription'}
                  placeholder={'Enter your Description'}
                />
              </div>

              <div>
                {/* <Row gutter={10}>
                  <Col lg={14} xs={24}>
                    <InputLabel>Select Existing Owner</InputLabel>
                    <SelectField
                      name="loungeOwnerId"
                      required={!newOwnerShow}
                      allowClear
                      disabled={newOwnerShow}
                      options={getLoungeOwner?.data?.data?.map((val) => ({
                        label: val?.fullName,
                        value: val?.id,
                      }))}
                    />
                  </Col>
                  <Col lg={8} xs={24}>
                    <span style={{ visibility: 'hidden' }}>
                      <InputLabel>hidden</InputLabel>
                    </span>
                  </Col>
                </Row> */}
              </div>
            </Col>
          </Row>
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="2"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={updateLounge?.loading}
              htmlType="submit"
            >
              Edit Now
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}

export default UpdateLoungeModal
