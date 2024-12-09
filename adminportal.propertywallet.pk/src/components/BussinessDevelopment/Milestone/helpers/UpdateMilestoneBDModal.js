import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../utils/components/InputFields/TextField'
import NumberField from '../../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../../utils/components/InputFields/SelectField'
import TextArea from 'antd/es/input/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { clearUploadAdvertisement } from '../../../../redux/slices/Advertisement/Promotion/UploadAdvertisementSlice'
import {
  getAllBDMilestonesForAdminApi,
  updateBDMilestoneApi,
} from '../../../../redux/api/BdMilestones'
import { urltoFile } from '../../../../utils/utils'
import { uploadAdvertisementApi } from '../../../../redux/api/Milestones'

const UpdateMilestoneBDModal = ({ visible, toggle, updateData }) => {
  const dispatch = useDispatch()
  const [selectedValue, setSelectedValue] = useState('')
  const [selectedLogo, setSelectedLogo] = useState(null)

  const [imgUrl, setImgUrl] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const certificateArray = [
    { certificateValue: 'Sales Pro', certificateLable: 'Sales Pro' },
    { certificateValue: 'Sales Expert', certificateLable: 'Sales Expert' },
    { certificateValue: 'Sales Star', certificateLable: 'Sales Star' },
    { certificateValue: 'Sales Champion', certificateLable: 'Sales Champion' },
  ]
  const imageMap = {
    'Sales Champion': 'saleschampion.jpg',
    'Sales Expert': 'salesexpert.jpg',
    'Sales Pro': 'salespro.jpg',
    'Sales Star': 'salesstar.jpg',
  }
  const logoMap = {
    'Sales Champion': 'saleschampion.png',
    'Sales Expert': 'salesexpert.png',
    'Sales Pro': 'salespro.png',
    'Sales Star': 'salesstar.png',
  }
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [form] = useForm()
  const uploadAdvertisement = useSelector((state) => state?.uploadAdvertisement)
  const updateBDMilestone = useSelector((state) => state?.updateBDMilestone)

  function onCancel() {
    dispatch(clearUploadAdvertisement())
    toggle()
    setSelectedImage(null)
    setImgUrl(null)
  }
  function onSuccess() {
    setSelectedImage(null)
    dispatch(clearUploadAdvertisement())
    setImgUrl(null)
    getAllBDMilestonesForAdminApi(dispatch, pageLimit)
    toggle()
  }
  function onFinish(values) {
    const body = {
      milestoneComission: values?.milestoneComission,
      salesRevenue: values?.salesRevenue,
      name: values?.name,
      certificate: values?.certificate,
      certificateDescription: values?.certificateDescription,
      primaryColor:
        values?.certificate === 'Sales Pro'
          ? '#03BF97'
          : values?.certificate === 'Sales Expert'
          ? '#01385E'
          : values?.certificate === 'Sales Star'
          ? '#27A2A2'
          : '#B69650',
      secondaryColor:
        values?.certificate === 'Sales Pro'
          ? '#30454B'
          : values?.certificate === 'Sales Expert'
          ? '#FEB500'
          : values?.certificate === 'Sales Star'
          ? '#A5A7AA'
          : '#151515',
    }

    if (selectedImage) {
      let formData = new FormData()
      formData.append('advertisement', selectedImage)
      uploadAdvertisementApi(dispatch, formData, onSuccessUploadImg, body)
    } else if (updateData?.designUrl) {
      onSuccessUploadImg(updateData?.designUrl, body)
    }
  }
  function onSuccessUploadImg(res, data) {
    if (data && selectedLogo) {
      let formDataLogo = new FormData()
      formDataLogo.append('advertisement', selectedLogo)
      uploadAdvertisementApi(dispatch, formDataLogo, onSuccessUploadLogo, {
        body: data,
        res: res,
      })
    } else {
      updateBDMilestoneApi(dispatch, data, onSuccess, updateData?.id)
    }
  }
  function onSuccessUploadLogo(res, data) {
    const body = {
      milestoneComission: data?.body?.milestoneComission,
      salesRevenue: data?.body?.salesRevenue,
      name: data?.body?.name,
      designUrl: data?.res?.data,
      iconUrl: res.data,
      primaryColor: data?.body?.primaryColor,
      secondaryColor: data?.body?.secondaryColor,
      certificate: data?.body?.certificate,
      certificateDescription: data?.body?.certificateDescription,
    }
    if (body && res) {
      updateBDMilestoneApi(dispatch, body, onSuccess, updateData?.id)
    }
  }
  const handleDropdownChange = (e) => {
    if (imageMap[e]) {
      const imageName = imageMap[e]
      import(`../../../assest/img/certificates/${imageName}`)
        .then((imageData) => {
          const getBase64FromUrl = async (url) => {
            setImgUrl(url)
            const data = await fetch(url)
            const blob = await data.blob()
            new Promise((resolve) => {
              const reader = new FileReader()
              reader.readAsDataURL(blob)
              reader.onloadend = async () => {
                const base64data = reader.result
                const fileObj = await urltoFile(
                  base64data,
                  'img.jpg',
                  'image/jpeg'
                )
                setSelectedImage(fileObj)
              }
            })
          }
          getBase64FromUrl(imageData.default)
        })
        .catch((error) => {
          console.error('Error loading image:', error)
        })
    }
    if (logoMap[e]) {
      const logoName = logoMap[e]
      import(`../../../assest/img/certificates/logo/${logoName}`)
        .then((logoData) => {
          const getBase64FromUrl = async (url) => {
            // setImgUrl(url)
            const data = await fetch(url)
            const blob = await data.blob()
            new Promise((resolve) => {
              const reader = new FileReader()
              reader.readAsDataURL(blob)
              reader.onloadend = async () => {
                const base64data = reader.result
                const fileObj = await urltoFile(
                  base64data,
                  'img.png',
                  'image/png'
                )
                setSelectedLogo(fileObj)
              }
            })
          }
          getBase64FromUrl(logoData.default)
        })
        .catch((error) => {
          console.error('Error loading logo:', error)
        })
    }
  }

  useEffect(() => {
    if (updateData) {
      form.setFieldsValue({
        milestoneComission: updateData?.milestoneComission,
        salesRevenue: updateData?.salesRevenue,
        name: updateData?.name,
        designUrl: updateData?.designUrl,
        certificate: updateData?.certificate,
        certificateDescription: updateData?.certificateDescription,
      })
    }
  }, [updateData])

  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Edit Milestone</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={719}
    >
      <Divider />
      <div>
        <div>
          <Form
            name="normal_login"
            form={form}
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Row gutter={20}>
              <Col sm={24} lg={12}>
                <div>
                  <InputLabel>Name</InputLabel>
                  <TextField disabled name="name" />
                </div>
                <div>
                  <InputLabel>Milestone Commission</InputLabel>
                  <NumberField disabled name="milestoneComission" />
                </div>
              </Col>
              <Col sm={24} lg={12}>
                <div>
                  <InputLabel>Sales Revenue</InputLabel>
                  <NumberField disabled name="salesRevenue" />
                </div>
                <div>
                  <InputLabel>Certificate</InputLabel>
                  <SelectField
                    name="certificate"
                    allowClear
                    onChange={handleDropdownChange}
                    value={selectedValue}
                    options={certificateArray.map((val) => ({
                      label: val?.certificateLable,
                      value: val?.certificateValue,
                    }))}
                  />
                </div>
              </Col>
              <Col lg={24} xs={24}>
                <span className="text-[#292D35] font-medium text-[15px]">
                  Certificate Description
                </span>

                <Form.Item
                  name="certificateDescription"
                  className="mt-[10px]"
                  rules={[
                    {
                      required: true,
                      message: 'Description is required',
                    },
                  ]}
                >
                  <TextArea
                    className="rounded-[8px]  "
                    placeholder="Description"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    style={{ padding: '10px, 14px, 10px, 14px' }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <div>
              {imgUrl ? (
                <img src={imgUrl} />
              ) : (
                <img src={updateData?.designUrl} />
              )}
            </div>

            <div className="flex justify-end mt-[55px]">
              <Button
                size="middle"
                key="1"
                loading={updateBDMilestone?.loading}
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
              >
                Edit Now
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default UpdateMilestoneBDModal
