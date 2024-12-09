import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import React, { useEffect } from 'react'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import NumberField from '../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import {
  addSubscriptionApi,
  getSubscriptionByTitleApi,
} from '../../../redux/api/ManageSubscription'
import CheckboxField from '../../../utils/components/InputFields/CheckboxField'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { useSelector } from 'react-redux'
import { cleargetSubscriptionByTitle } from '../../../redux/slices/ManageSubscriptions/getSubscriptionByTitleSlice'
import { useUpload } from '../../../utils/hooks/useUpload'
import { clearUploadBackgroundImage } from '../../../redux/slices/ManageSubscriptions/uploadBackgroundImageSlice'
import { clearUploadIconImage } from '../../../redux/slices/ManageSubscriptions/uploadIconSlice'
import { uploadBackgroundImageApi, uploadIconApi } from '../../../redux/api/HR'
import Upload from '../../../utils/components/Upload/Upload'
import SingleFilePreviewer from '../../../utils/components/Upload/SingleFilePreviewer'

const EditSubscriptionModal = ({ visible, toggle, editData }) => {
  const [
    backgroundImage,
    setBackgroundImage,
    backgroundImagePreview,
    deleteBackgroundImage,
  ] = useUpload()
  const [iconImage, setIconImage, iconPreview, deleteIconImage] = useUpload()
  const uploadBackgroundImage = useSelector(
    (state) => state.uploadBackgroundImage
  )
  const uploadIcon = useSelector((state) => state.uploadIcon)
  const dispatch = useDispatch()
  const getSubscriptionByTitle = useSelector(
    (state) => state.getSubscriptionByTitle
  )
  const addSubscription = useSelector((state) => state.addSubscription)

  const [form] = useForm()
  function onCancel() {
    dispatch(clearUploadBackgroundImage())
    dispatch(clearUploadIconImage())
    dispatch(cleargetSubscriptionByTitle())
    toggle()
  }

  const noOfMonths = {
    Monthly: 1,
    Quarterly: 3,
    Yearly: 12,
    'Half Yearly': 6,
    'Yearly but deducted monthly': 1,
  }
  function onSuccess() {
    dispatch(clearUploadBackgroundImage())
    dispatch(clearUploadIconImage())
    dispatch(cleargetSubscriptionByTitle())
    toggle()
  }

  function onFinish(values) {
    const body = {
      title: values.packageNmae,
      subtitle: values.plan,
      numberOfMonth: noOfMonths[values.plan],
      noListing: values.noOfListings,
      noOfUserLimit: values.userLimits,
      hotListing: values.hotListings,
      digitalCatlog: values?.digitalCatlog.length > 0 ? true : false,
      charges: values.charges,
      isPublic: values?.isPublic?.length > 0,
      rentalCommission: values.rentalCommission,
      regCommission: values.regCommission,
      noCommissionCount: values.noCommissionCount,
      fixCommission: Number(values.fixCommission),
      iconUrl: uploadIcon.data?.data || editData?.pwPackage?.iconUrl,
      backgroundUrl:
        uploadBackgroundImage.data?.data || editData?.pwPackage?.backgroundUrl,
      noOfRefresh: values.noOfRefresh,
      BdRegCommission: values.BdRegCommission,
      BdRentalCommission: values.BdRentalCommission,
      BdFixCommission: values.BdFixCommission,
      BdNoCommissionCount: values.BdNoCommissionCount,
      noOfAppt: values.AppointmentCount,
    }
    addSubscriptionApi(dispatch, body, onSuccess)
  }

  useEffect(() => {
    if (editData) {
      form.setFieldsValue({
        packageNmae: editData?.pwPackage?.title,
        // noOfListings: editData?.noListing,
        // userLimits: editData?.noOfUserLimit,
        // charges: editData?.charges,
        plan: editData?.title,
        // hotListings: editData?.hotListing,
        // rental: editData?.rental ? "yes" : "no",
        // isPublic: editData?.isPublic ? ["isPublic"] : [],
        // rentalCommission: editData.rentalCommission,
        // regCommission: editData.regCommission,
        // noCommissionCount: editData.noCommissionCount
      })
    }
  }, [editData])
  useEffect(() => {
    if (getSubscriptionByTitle?.data) {
      form.setFieldsValue({
        // packageNmae: getSubscriptionByTitle?.data?.data?.pwPackage?.title,
        noOfListings: getSubscriptionByTitle?.data?.data?.noListing,
        userLimits: getSubscriptionByTitle?.data?.data?.noOfUserLimit,
        charges: getSubscriptionByTitle?.data?.data?.charges,
        // plan: getSubscriptionByTitle?.data?.data?.title,
        hotListings: getSubscriptionByTitle?.data?.data?.hotListing,
        // rental: getSubscriptionByTitle?.data?.data?.rental ? "yes" : "no",
        isPublic: getSubscriptionByTitle?.data?.data?.isPublic
          ? ['isPublic']
          : [],
        digitalCatlog: getSubscriptionByTitle?.data?.data?.digitalCatlog
          ? ['digitalCatlog']
          : [],
        rentalCommission: getSubscriptionByTitle?.data?.data?.rentalCommission,
        regCommission: getSubscriptionByTitle?.data?.data?.regCommission,
        noCommissionCount:
          getSubscriptionByTitle?.data?.data?.noCommissionCount,
        noOfRefresh: getSubscriptionByTitle?.data?.data?.noOfRefresh,
        fixCommission: getSubscriptionByTitle?.data?.data?.fixCommission,
        BdRegCommission: getSubscriptionByTitle?.data?.data?.BdRegCommission,
        BdRentalCommission:
          getSubscriptionByTitle?.data?.data?.BdRentalCommission,
        BdFixCommission: getSubscriptionByTitle?.data?.data?.BdFixCommission,
        BdNoCommissionCount:
          getSubscriptionByTitle?.data?.data?.BdNoCommissionCount,
        AppointmentCount: getSubscriptionByTitle?.data?.data?.noOfAppt,
      })
    }
  }, [getSubscriptionByTitle?.data])

  useEffect(() => {
    if (backgroundImage.length > 0) {
      const formData = new FormData()
      formData.append('advertisement', backgroundImage[0])
      uploadBackgroundImageApi(dispatch, formData)
    }
  }, [backgroundImage])
  useEffect(() => {
    if (iconImage.length > 0) {
      const formData = new FormData()
      formData.append('advertisement', iconImage[0])
      uploadIconApi(dispatch, formData)
    }
  }, [iconImage])

  useEffect(() => {
    getSubscriptionByTitleApi(
      dispatch,
      editData?.title,
      editData?.pwPackage?.id
    )
  }, [])
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Edit Subscription</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={719}
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
                <InputLabel>Package Name</InputLabel>
                <TextField name="packageNmae" />
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={12} sm={24}>
              <div>
                <InputLabel>No of Listings</InputLabel>
                <NumberField name="noOfListings" />
              </div>
              <div>
                <InputLabel>User Limits</InputLabel>
                <NumberField name="userLimits" />
              </div>
              <div>
                <InputLabel>Charges</InputLabel>
                <NumberField name="charges" prefix={'PKR'} />
              </div>
              <div>
                <InputLabel>Recurring Commission (%)</InputLabel>
                <NumberField name="rentalCommission" />
              </div>
              <div>
                <InputLabel>No of Refreshes</InputLabel>
                <NumberField name="noOfRefresh" />
              </div>
              <div>
                <InputLabel>BD Fix Commission (Amount)</InputLabel>
                <NumberField
                  name="BdFixCommission"
                  onChange={(e) => {
                    if (
                      Number(e.target.value) >
                      Number(form.getFieldValue('charges'))
                    ) {
                      form.setFieldValue(
                        'BdFixCommission',
                        form.getFieldValue('charges')
                      )
                    }
                  }}
                />
              </div>
              <div>
                <InputLabel>BD No of Commission Count</InputLabel>
                <NumberField name="BdNoCommissionCount" />
              </div>
              <div>
                <InputLabel>Appointment Count</InputLabel>
                <NumberField name="AppointmentCount" />
              </div>
              <div>
                <CheckboxField
                  name="isPublic"
                  options={[{ label: 'Public', value: 'isPublic' }]}
                  className="mt-[10px]"
                />
              </div>
            </Col>
            <Col lg={12} sm={24}>
              <div>
                <InputLabel>Plan</InputLabel>
                <SelectField
                  name="plan"
                  onChange={(e) => {
                    getSubscriptionByTitleApi(
                      dispatch,
                      e,
                      editData?.pwPackage?.id
                    )
                  }}
                  options={Object.keys(noOfMonths).map((month) => {
                    return {
                      label: month,
                      value: month,
                    }
                  })}
                />
              </div>
              <div>
                <InputLabel>Hot Listings</InputLabel>
                <NumberField name="hotListings" />
              </div>
              <div>
                <InputLabel>First month Commission (%)</InputLabel>
                <NumberField name="regCommission" />
              </div>

              <div>
                <InputLabel>No of months for RC</InputLabel>
                <NumberField name="noCommissionCount" />
              </div>

              <div>
                <InputLabel>Fix Commission (Amount)</InputLabel>
                <NumberField
                  name="fixCommission"
                  onChange={(e) => {
                    if (
                      Number(e.target.value) >
                      Number(form.getFieldValue('charges'))
                    ) {
                      form.setFieldValue(
                        'fixCommission',
                        form.getFieldValue('charges')
                      )
                    }
                  }}
                />
              </div>
              <div>
                <InputLabel>BD Registration Commission (%)</InputLabel>
                <NumberField name="BdRegCommission" />
              </div>
              <div>
                <InputLabel>BD Rental Commission (%)</InputLabel>
                <NumberField name="BdRentalCommission" />
              </div>
              <div>
                <CheckboxField
                  name="digitalCatlog"
                  options={[
                    { label: 'Digital Catlogue', value: 'digitalCatlog' },
                  ]}
                  className="mt-[10px]"
                />
              </div>
            </Col>
          </Row>
          {/* <CheckboxField
            name="isPublic"
            options={[{ label: 'Public', value: 'isPublic' }]}
            className="mt-[10px]"
          /> */}
          <Row gutter={16}>
            <Col lg={12} sm={24}>
              <div className="flex flex-col gap-3 mb-4">
                <InputLabel>Background Image</InputLabel>
                <Upload
                  name="backgroundImage"
                  files={backgroundImage}
                  setFiles={setBackgroundImage}
                  supportedFileTypes={['png', 'jpg', 'jpeg']}
                  supportedText={'Files Supported  JPG,JPEG,PNG'}
                  //   fileLimit={1}
                  fileName="BACKGROUNDIMAGE"
                  disabled={backgroundImage.length > 0}
                />
              </div>
              {(getSubscriptionByTitle?.data?.data?.pwPackage?.backgroundUrl ||
                editData?.pwPackage?.backgroundUrl) &&
              backgroundImagePreview.length === 0 ? (
                <div className="relative w-fit">
                  <img
                    src={
                      getSubscriptionByTitle?.data?.data?.pwPackage
                        ?.backgroundUrl || editData?.pwPackage?.backgroundUrl
                    }
                    alt=""
                    className="h-[185px] object-contain"
                  />
                </div>
              ) : (
                backgroundImagePreview.length > 0 && (
                  <div className="relative">
                    <SingleFilePreviewer
                      imagePreviews={backgroundImagePreview}
                      uploadAdvertisement={uploadBackgroundImage?.data?.data}
                      width={241}
                      height={197}
                      deleteMasterFile={deleteBackgroundImage}
                    />
                  </div>
                )
              )}
            </Col>
            <Col lg={12} sm={24}>
              <div className="flex flex-col gap-3 mb-4">
                <InputLabel>Icon</InputLabel>
                <Upload
                  name="iconImage"
                  files={iconImage}
                  setFiles={setIconImage}
                  supportedFileTypes={['png', 'jpg', 'jpeg']}
                  supportedText={'Files Supported  JPG,JPEG,PNG'}
                  //   fileLimit={1}
                  fileName="ICONIMAGE"
                  disabled={iconImage.length > 0}
                />
              </div>
              {(getSubscriptionByTitle?.data?.data?.pwPackage?.iconUrl ||
                editData?.pwPackage?.iconUrl) &&
              iconPreview.length === 0 ? (
                <div className="relative w-fit">
                  <img
                    src={
                      getSubscriptionByTitle?.data?.data?.pwPackage?.iconUrl ||
                      editData?.pwPackage?.iconUrl
                    }
                    alt=""
                    className="h-[185px] object-contain"
                  />
                  {/* <span
                    className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                    onClick={() => {
                      deletePhotos(null, "MASTERPLAN");
                    }}
                  >
                    <CloseOutlined />
                  </span> */}
                </div>
              ) : (
                iconPreview.length > 0 && (
                  <div className="relative">
                    <SingleFilePreviewer
                      imagePreviews={iconPreview}
                      uploadAdvertisement={uploadIcon?.data?.data}
                      width={241}
                      height={197}
                      deleteMasterFile={deleteIconImage}
                    />
                  </div>
                )
              )}
            </Col>
          </Row>
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              // type="primary"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={addSubscription.loading}
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

export default EditSubscriptionModal
