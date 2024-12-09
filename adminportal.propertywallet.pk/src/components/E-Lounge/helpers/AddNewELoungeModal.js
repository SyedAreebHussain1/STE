import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row, Divider, Input } from 'antd'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import { useUpload } from '../../../utils/hooks/useUpload'
import SingleFilePreviewer from '../../../utils/components/Upload/SingleFilePreviewer'
import Upload from '../../../utils/components/Upload/Upload'
import { clearUploadAdvertisement } from '../../../redux/slices/Advertisement/Promotion/UploadAdvertisementSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import TextAreaField from '../../../utils/components/InputFields/TextAreaField'

import {
  createELoungeApi,
  eLUploadAdvertisementApi,
  getELoungeApi,
} from '../../../redux/api/ELounge'
import NumberField from '../../../utils/components/InputFields/NumberField'

const AddNewELoungeModal = ({ visible, toggle }) => {
  const [commissionStructure, setCommissionStructure] = useState([
    { id: 1, label: 'Owner', roleType: 'owner', divisionPer: 0, salesPer: 0 },
    {
      id: 2,
      label: 'Management',
      roleType: 'management',
      divisionPer: 0,
      salesPer: 0,
    },
    {
      id: 3,
      label: 'Lead User',
      roleType: 'leaduser',
      divisionPer: 0,
      salesPer: 0,
    },

    { id: 4, label: 'Other', roleType: 'other', divisionPer: 0, salesPer: 0 },
  ])

  const dispatch = useDispatch()
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

  const uploadAdvertisement = useSelector((state) => state?.uploadAdvertisement)
  const createELounge = useSelector((state) => state?.createELounge)

  function onCancel() {
    dispatch(clearUploadAdvertisement())
    toggle()
  }

  function onFinish(values) {
    const body = {
      name: values?.name,
      logo: uploadAdvertisement?.data?.data,
      shortDescription: values?.shortDescription,
      earnPercentage: 0,
    }
    let arr = []
    commissionStructure.forEach((item, i) => {
      arr.push({
        divisionPer: item.divisionPer,
        salesPer: item.salesPer,
        roleType: item.roleType,
      })
    })
    body.addCommissionStructureDto = arr
    createELoungeApi(dispatch, body, onSuccess)
  }

  function onSuccess() {
    dispatch(clearUploadAdvertisement())
    getELoungeApi(dispatch, pageLimit)
    toggle()
  }
  useEffect(() => {
    if (backgroundImage.length > 0) {
      const formData = new FormData()
      formData.append('advertisement', backgroundImage[0])
      eLUploadAdvertisementApi(dispatch, formData)
    }
  }, [backgroundImage])

  return (
    <Modal
      title={
        <h3 className="text-[18px] font-semibold">Add E-Lounge Details</h3>
      }
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
                  <InputLabel>Add Logo</InputLabel>
                </div>
                <Row gutter={10}>
                  <Col lg={14} xs={24}>
                    <Upload
                      name="backgroundImage"
                      files={backgroundImage}
                      setFiles={setBackgroundImage}
                      supportedFileTypes={['png', 'jpg', 'jpeg']}
                      supportedText={'Files Supported  JPG,JPEG,PNG'}
                    />
                  </Col>
                  <Col lg={10} xs={24}>
                    <div>
                      {backgroundImagePreview.length > 0 && (
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
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <div className="mt-[20px] mb-[]">
                  <InputLabel>E-Lounge Name</InputLabel>
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

              {/* <div>
                <Row gutter={10}>
                  <Col lg={24} xs={24}>
                    <InputLabel>Earn Percentage</InputLabel>
                    <NumberField
                      name="earnPercentage"
                      addonAfter="%"
                      maxLength="3"
                      placeholder={''}
                      onChange={(e) => {
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue('earnPercentage', e.target.value)
                        }
                      }}
                    />
                  </Col>
                </Row>
              </div> */}
            </Col>
          </Row>

          {commissionStructure.map((obj, index) => (
            <Row style={{ marginTop: '2%' }} gutter={16} key={obj.id}>
              <Col span={4}>
                <h2>{obj.label}</h2>
              </Col>
              <Col span={10}>
                <div style={{ float: 'right' }}>
                  <Form.Item
                    rules={[
                      { required: true, message: 'Percentage is required' },
                    ]}
                    name={`${obj.id * index + 1}`}
                  >
                    <Input
                      onKeyPress={(event) => {
                        if (!/[0-9,.]/.test(event.key)) {
                          event.preventDefault()
                        }
                      }}
                      placeholder={`${obj.label} subscription percentage `}
                      className="py-2"
                      value={obj.divisionPer}
                      onChange={(e) => {
                        const newValue = e.target.value
                        setCommissionStructure((prevState) => {
                          const updatedStructure = [...prevState]
                          updatedStructure[index].divisionPer =
                            parseInt(newValue)
                          return updatedStructure
                        })
                      }}
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div style={{ float: 'right' }}>
                  <Form.Item
                    rules={[
                      { required: true, message: 'Percentage is required' },
                    ]}
                    name={`${obj.id * index + 2}`}
                  >
                    <Input
                      onKeyPress={(event) => {
                        if (!/[0-9,.]/.test(event.key)) {
                          event.preventDefault()
                        }
                      }}
                      placeholder={`${obj.label} sale percentage`}
                      className="py-2"
                      value={obj.salesPer}
                      onChange={(e) => {
                        const newValue = e.target.value
                        setCommissionStructure((prevState) => {
                          const updatedStructure = [...prevState]
                          updatedStructure[index].salesPer = parseInt(newValue)
                          return updatedStructure
                        })
                      }}
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          ))}
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={createELounge.loading}
              htmlType="submit"
            >
              Add Now
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  )
}

export default AddNewELoungeModal
