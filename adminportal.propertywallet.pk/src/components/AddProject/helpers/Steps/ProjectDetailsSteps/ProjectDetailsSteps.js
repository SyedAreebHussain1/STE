import React, { useEffect, useState } from 'react'
import { Form, Input, Col, Row, Select, Divider, Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import SelectLatLongMap from './helpers/SelectLatLongMap'
import ArrowRight from '../../../../assest/icon/arrow-right.png'
import RGB_IMAGE from '../../../../assest/img/icons8-color-wheel-48.png'
import { getError } from '../../../../../utils/baseApi'

import {
  createProjectStepOneApi,
  updateProjectStepOneApi,
} from '../../../../../redux/api/Project'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
const colors = [
  { color: '#844387' },
  { color: '#AF425C' },
  { color: '#FF3B3B' },
  { color: '#0E5B8A' },
  { color: '#0A4E77' },
  { color: '#22255A' },
  { color: '#844387' },
  { color: '#1E1AEE' },
  { color: '#FF8B28' },
  { color: '#9747FF' },
  { color: '#AF425C' },
  { color: '#FF3B3B' },
  { color: '#0E5B8A' },
  { color: '#0A4E77' },
  { color: '#22255A' },
  { color: '#844387' },
  { color: '#1E1AEE' },
  { color: '#FF8B28' },
  { color: '#9747FF' },
  { color: '#AF425C' },
  { color: '#FF3B3B' },
  { color: '#0E5B8A' },
  { color: '#0A4E77' },
  { color: '#22255A' },
  { color: '#844387' },
  { color: '#1E1AEE' },
  { color: '#FF8B28' },
  { color: '#9747FF' },
]
const ProjectDetailsSteps = ({ current, next, handleStateChange, state }) => {
  const [markers, setMarkers] = React.useState([])
  const [selectedPlace, setSelectedPlace] = useState({})
  const [pickedColor, setPickedColor] = useState({
    color: '#844387',
    id: null,
  })
  const [form] = useForm()
  const createProjectStepOne = useSelector(
    (state) => state.createProjectStepOne
  )
  const updateProjectStepOne = useSelector(
    (state) => state.updateProjectStepOne
  )
  const dispatch = useDispatch()
  function onFinish(values) {
    if (markers.length === 0) {
      getError('Select Long and Lat from map')
      return
    }
    const body = {
      ...values,
      NOC: values.NOC === 'yes',
      latitude: markers[0].lat,
      longitude: markers[0].lng,
      colorCode1: pickedColor.color,
      colorCode2: `${pickedColor.color}6e`,
      projectVideo: values?.projectVideo,
    }
    delete body.location

    if (createProjectStepOne?.data === null) {
      createProjectStepOneApi(dispatch, body, onSuccess)
    } else {
      updateProjectStepOneApi(
        dispatch,
        body,
        onSuccess,
        createProjectStepOne?.data?.data?.id
      )
    }
  }
  function onSuccess() {
    next()
  }

  useEffect(() => {
    if (selectedPlace.address !== '' && selectedPlace.city !== '') {
      form.setFieldsValue({
        location: selectedPlace.address,
        city: selectedPlace.city,
        address: selectedPlace.address,
      })
    }
  }, [selectedPlace])
  return (
    <>
      <Form
        name="project-step-one"
        className="projects-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <Row gutter={24}>
          <Col lg={6} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px]">
              Project Info
            </span>
            <p className="text-[#667085] font-medium text-[12px]  mt-[]">
              Provide the basic details of project
            </p>
          </Col>
          <Col lg={18} xs={24}>
            <Row gutter={24}>
              <Col lg={8} xs={24}>
                <span className="text-[#292D35] font-medium text-[15px] gap-[]">
                  Project Name
                </span>
                <Form.Item
                  className="mt-[10px]"
                  name="projectName"
                  rules={[
                    {
                      required: true,
                      message: 'Project Name is required',
                    },
                  ]}
                >
                  <Input
                    placeholder=""
                    className="w-full lg:w-[] h-[] rounded-[8px]"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col lg={6} xs={24}>
                <span className="text-[#292D35] font-medium text-[15px]">
                  NOC Approved
                </span>
                <Form.Item
                  className="mt-[10px]"
                  name="NOC"
                  rules={[
                    {
                      required: true,
                      message: 'NOC is required',
                    },
                  ]}
                >
                  <Select className="rounded-[8px]  " size="large">
                    <Select.Option value="yes">Yes</Select.Option>
                    <Select.Option value="no">No</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={8} xs={24}>
                <span className="text-[#292D35] font-medium text-[15px] gap-[]">
                  Project Video Link
                </span>
                <Form.Item className="mt-[10px]" name="projectVideo">
                  <Input
                    // placeholder="Video Url"
                    className="w-full lg:w-[] h-[] rounded-[8px]"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col lg={8} xs={24}>
                <span className="text-[#292D35] font-medium text-[15px]">
                  Description
                </span>

                <Form.Item
                  name="description"
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
                    placeholder=""
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    style={{ padding: '10px, 14px, 10px, 14px' }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <Divider />
        <Row gutter={16}>
          <Col lg={6} xs={24} style={{ border: '' }}>
            <span className="text-[#292D35] leading-[] font-medium text-[15px]">
              Location Details
            </span>
            <p className="text-[#667085] font-medium text-[12px]  mt-[]">
              Provide the location with address
            </p>
          </Col>
          <Col lg={9} xs={24}>
            <span className="text-[#292D35] font-medium text-[15px] gap-[]">
              Address
            </span>
            <Form.Item
              className="mt-[10px]"
              name="address"
              rules={[
                {
                  required: true,
                  message: 'Address is required',
                },
              ]}
            >
              <Input
                placeholder=""
                className="w-full lg:w-[] h-[] rounded-[8px]"
                size="large"
              />
            </Form.Item>
            <span className="text-[#292D35] font-medium text-[15px] leading-[21px] gap-[]">
              Location
            </span>
            <Form.Item
              className="mt-[10px]  "
              name="location"
              // rules={[
              //   {
              //     required: true,
              //     message: "Location is required",
              //   },
              // ]}
            >
              <Input
                placeholder=""
                className="w-full lg:w-[] h-[] rounded-[8px]"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] leading-[21px] font-medium text-[15px]">
              City
            </span>
            <Form.Item
              className="mt-[10px]"
              name="city"
              rules={[
                {
                  required: true,
                  message: 'City is required',
                },
              ]}
            >
              <Input
                placeholder=""
                className="w-full lg:w-[] h-[] rounded-[8px]"
                size="large"
              />
            </Form.Item>
            <div style={{ height: '', border: '' }}>
              <SelectLatLongMap
                markers={markers}
                setMarkers={setMarkers}
                setSelectedPlace={setSelectedPlace}
              />
            </div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col lg={6} xs={24} style={{ border: '' }}>
            <span className="text-[#292D35] leading-[] font-medium text-[15px]">
              Project Theme
            </span>
            <p className="text-[#667085] font-medium text-[12px]  mt-[]">
              Select your project theme
            </p>
          </Col>
          <Col lg={9} xs={24}>
            <Row>
              <Col lg={24} md={24} sm={24} xs={24}>
                <h4>1. Choose From Color Palette</h4>
              </Col>
            </Row>
            <Row style={{ marginTop: '4%' }}>
              {colors.map((item, index) => {
                if (pickedColor.id === index) {
                  return (
                    <Col lg={3} md={4} sm={6} xs={6}>
                      <div
                        style={{
                          width: '31px',
                          height: '31px',
                          borderRadius: '50px',
                          backgroundColor: `${item.color}`,
                          cursor: 'pointer',
                          marginBottom: '7px',
                          boxShadow: ' rgba(0, 0, 0, 0.55) 0px 5px 15px',
                        }}
                        onClick={() =>
                          setPickedColor({ color: item.color, id: index })
                        }
                      ></div>
                    </Col>
                  )
                } else {
                  return (
                    <Col lg={3} md={3} sm={3} xs={3}>
                      <div
                        style={{
                          width: '31px',
                          height: '31px',
                          borderRadius: '50px',
                          backgroundColor: `${item.color}`,
                          cursor: 'pointer',
                          marginBottom: '7px',
                        }}
                        onClick={() =>
                          setPickedColor({ color: item.color, id: index })
                        }
                      ></div>
                    </Col>
                  )
                }
              })}
            </Row>
            <Row>
              <Col lg={24} md={24} sm={24} xs={24}>
                <div
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    height: '50px',
                    marginTop: '20px',
                  }}
                >
                  <Button
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: '100%',
                      padding: '0%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: `1px solid #053B5C`,
                    }}
                  >
                    <img
                      src={RGB_IMAGE}
                      width={24}
                      style={{ marginRight: '5px', marginTop: '-5px' }}
                      alt="rgb_img"
                    />
                    <h4>Browse From Color Picker</h4>
                  </Button>
                  <input
                    type="color"
                    value={pickedColor.color}
                    style={{
                      opacity: '0',
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer',
                    }}
                    onChange={(e) =>
                      setPickedColor({ color: e.target.value, id: null })
                    }
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xs={24}>
            <Row>
              <Col lg={24} md={24} sm={24} xs={24}>
                <h4>Preview</h4>
              </Col>
            </Row>

            <Row style={{ marginTop: '4%' }}>
              <Col lg={3} md={4} sm={6} xs={6}>
                <div
                  style={{
                    marginTop: '2%',
                    width: '285px',
                    height: '225px',
                    border: `1px solid ${pickedColor.color}`,
                    borderRadius: '5px',
                    padding: '7px 10px',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '50px',
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: '5px',
                      textAlign: 'center',
                      marginBottom: '20px',
                      backgroundColor: `${pickedColor.color}14`,
                      overflow: 'hidden',
                    }}
                  >
                    {/* <img
                      src={projectDetails?.projectLogo}
                      alt=" logo"
                      style={{ width: "20%", marginTop: "2%" }}
                    /> */}
                  </div>
                  {/*  */}
                  <div
                    style={{
                      width: '100%',
                      height: '15px',
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: '5px',
                      marginBottom: '5px',
                      backgroundColor: `${pickedColor.color}`,
                    }}
                  ></div>
                  {/*  */}
                  <div
                    style={{
                      width: '90%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                    }}
                  >
                    <div
                      style={{
                        width: '45px',
                        height: '5px',
                        borderRadius: '5px',
                        backgroundColor: '#EDEDED',
                      }}
                    ></div>
                    <div
                      style={{
                        width: '77px',
                        height: '10px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        backgroundColor: `${pickedColor.color}14`,
                      }}
                    ></div>
                    <div
                      style={{
                        width: '77px',
                        height: '10px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        backgroundColor: `${pickedColor.color}14`,
                      }}
                    ></div>
                  </div>
                  {/*  */}
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                    }}
                  >
                    <div
                      style={{
                        width: '45px',
                        height: '5px',
                        borderRadius: '5px',
                        backgroundColor: '#CACACA',
                      }}
                    ></div>
                    <div
                      style={{
                        width: '87px',
                        height: '10px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        backgroundColor: `${pickedColor.color}14`,
                      }}
                    ></div>
                    <div
                      style={{
                        width: '67px',
                        height: '10px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        backgroundColor: `${pickedColor.color}14`,
                      }}
                    ></div>
                  </div>
                  {/*  */}
                  <div
                    style={{
                      width: '100%',
                      height: '15px',
                      border: `1px solid ${pickedColor.color}`,
                      borderRadius: '5px',
                      marginBottom: '5px',
                      backgroundColor: `${pickedColor.color}`,
                    }}
                  ></div>
                  {/*  */}
                  <div
                    style={{
                      width: '90%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                    }}
                  >
                    <div
                      style={{
                        width: '45px',
                        height: '5px',
                        borderRadius: '5px',
                        backgroundColor: '#EDEDED',
                      }}
                    ></div>
                    <div
                      style={{
                        width: '77px',
                        height: '10px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        backgroundColor: `${pickedColor.color}14`,
                      }}
                    ></div>
                    <div
                      style={{
                        width: '77px',
                        height: '10px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        backgroundColor: `${pickedColor.color}14`,
                      }}
                    ></div>
                  </div>
                  {/*  */}
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                    }}
                  >
                    <div
                      style={{
                        width: '45px',
                        height: '5px',
                        borderRadius: '5px',
                        backgroundColor: '#CACACA',
                      }}
                    ></div>
                    <div
                      style={{
                        width: '87px',
                        height: '10px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        backgroundColor: `${pickedColor.color}14`,
                      }}
                    ></div>
                    <div
                      style={{
                        width: '67px',
                        height: '10px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        backgroundColor: `${pickedColor.color}14`,
                      }}
                    ></div>
                  </div>
                  {/*  */}
                  <div style={{ width: '100%' }}>
                    <div
                      style={{
                        width: '70%',
                        height: '15px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        marginBottom: '5px',
                        float: 'right',
                        backgroundColor: `${pickedColor.color}`,
                      }}
                    ></div>
                    <div
                      style={{
                        width: '70%',
                        height: '15px',
                        border: `1px solid ${pickedColor.color}`,
                        borderRadius: '5px',
                        marginBottom: '5px',
                        float: 'right',
                        backgroundColor: `${pickedColor.color}14`,
                      }}
                    ></div>
                  </div>
                  {/*  */}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="flex gap-[20px] justify-end pt-[35px]">
          <Button
            className="py-[10px] px-[50px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2 w-[189px] h-[43px]"
            disabled={current === 0}
          >
            <span>Back</span>
          </Button>
          <Button
            className="btn-primary py-[10px] px-[50px] flex items-center justify-center bg-[#27A3A3] border-[#27A3A3] text-[#fff] text-[12px] font-medium gap-2 w-[189px] h-[43px]"
            // disabled={current === steps.length - 1}
            //   onClick={onFinish}
            htmlType="submit"
            loading={
              createProjectStepOne.loading || updateProjectStepOne.loading
            }
          >
            <span>Next</span>
            <img src={ArrowRight} alt="" style={{ filter: 'brightness(10)' }} />
          </Button>
        </div>
      </Form>
    </>
  )
}

export default ProjectDetailsSteps
