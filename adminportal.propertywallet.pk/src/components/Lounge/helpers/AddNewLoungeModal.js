import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row, Divider } from 'antd'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import NumberField from '../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import en from 'world_countries_lists/data/countries/en/world.json'
import { useUpload } from '../../../utils/hooks/useUpload'
import SingleFilePreviewer from '../../../utils/components/Upload/SingleFilePreviewer'
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input'
import Upload from '../../../utils/components/Upload/Upload'
import addIcon from '../../assest/icon/addicon.png'
import { clearUploadAdvertisement } from '../../../redux/slices/Advertisement/Promotion/UploadAdvertisementSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import TextAreaField from '../../../utils/components/InputFields/TextAreaField'
import exitIcon from '../../../components/assest/icon/exitIcon.png'
import {
  getLoungeOwnerApi,
  createLoungeApi,
  uploadAdvertisementApi,
  getLoungeApi,
} from '../../../redux/api/Lounge'

const AddNewLoungeModal = ({ visible, toggle }) => {
  const dispatch = useDispatch()
  const [newOwnerShow, setNewOwnerShow] = useState(false)
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [state, setState] = useState({
    phone: {
      code: '+92',
      short: 'PK',
      phone: '',
    },
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
  const createLounge = useSelector((state) => state?.createLounge)

  function onCancel() {
    dispatch(clearUploadAdvertisement())
    toggle()
  }

  useEffect(() => {
    getLoungeOwnerApi(dispatch)
  }, [dispatch])
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  function onFinish(values) {
    if (!newOwnerShow) {
      const body = {
        name: values?.name,
        logo: uploadAdvertisement?.data?.data,
        shortDescription: values?.shortDescription,
        loungeUserId: values?.loungeOwnerId,
      }
      createLoungeApi(dispatch, body, onSuccess)
    } else {
      const body = {
        name: values?.name,
        logo: uploadAdvertisement?.data?.data,
        shortDescription: values?.shortDescription,
        loungeUserName: values?.loungeOwnerName,
        loungeUserEmail: values?.loungeOwnerEmail,
        loungeUserPhone: state.phone.code.toString().includes('+')
          ? `${state.phone.code}${state.phone.phone}`
          : `+${state.phone.code}${state.phone.phone}`,
      }
      createLoungeApi(dispatch, body, onSuccess)
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
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Add Lounge Details</h3>}
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
                <Row gutter={10}>
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

                    <div className="mt-[14px]">
                      <Button
                        onClick={() => [
                          setNewOwnerShow(true),
                          form.setFieldValue('loungeOwnerId', null),
                        ]}
                        className=" py-[10px] px-[40px] flex items-center justify-center border-none text-[#27A3A3] text-[15px] font-medium gap-2 bg-inherit"
                      >
                        <img src={addIcon} alt="" />
                        <span>Add New Owner</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              {newOwnerShow && (
                <div>
                  <div>
                    <Row gutter={10}>
                      <Col lg={12} xs={24}>
                        <InputLabel>Name</InputLabel>
                        <TextField name="loungeOwnerName" />
                      </Col>
                      <Col lg={12} xs={24}>
                        <InputLabel>Email</InputLabel>
                        <div className="flex">
                          <div>
                            <TextField name="loungeOwnerEmail" />
                          </div>
                          <span
                            onClick={() => [
                              setNewOwnerShow(!true),
                              form.setFieldValue('loungeOwnerName', null),
                              form.setFieldValue('loungeOwnerEmail', null),
                              form.setFieldValue('loungeOwnerPhone', null),
                            ]}
                            className="cursor-pointer text-[#3D4350] font-medium text-[14px] p-[15px]"
                          >
                            <img src={exitIcon} alt="" />
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row gutter={10}>
                      <Col lg={12} xs={24}>
                        <InputLabel>Phone No</InputLabel>
                        {/* <NumberField name="loungeOwnerPhone" /> */}
                        <Form.Item
                          name="loungeOwnerPhone"
                          rules={[
                            {
                              validator: () => {
                                if (state?.phone?.phone?.trim().length > 0) {
                                  return Promise.resolve()
                                } else {
                                  return Promise.reject(
                                    <span
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                      }}
                                    >
                                      phone is required
                                    </span>
                                  )
                                }
                              },
                            },
                          ]}
                        >
                          <ConfigProvider locale={en}>
                            <CountryPhoneInput
                              inline
                              onKeyPress={(event) => {
                                if (!/[0-9,.]/.test(event.key)) {
                                  event.preventDefault()
                                }
                              }}
                              maxLength={20}
                              value={state.phone}
                              onChange={(e) => onChange(e, 'phone')}
                              defaultValue={{
                                short: 'PK',
                              }}
                            />
                          </ConfigProvider>
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </Col>
          </Row>
          <div className="flex justify-end mt-[55px]">
            <Button
              size="middle"
              key="1"
              className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
              loading={createLounge.loading}
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

export default AddNewLoungeModal
