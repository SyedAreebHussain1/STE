import React, { useEffect, useState } from 'react'
import { useForm } from 'antd/es/form/Form'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button, Col, DatePicker, Divider, Form, Modal, Row } from 'antd'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import TextAreaField from '../../../utils/components/InputFields/TextAreaField'
import MapsLocation from './MapsLocation'
import { errorMessage } from '../../../utils/message'
import { createSurveyApi, editSurveyApi } from '../../../redux/api/Survey'

const EditModal = ({ visible, toggle, updateData }) => {
  const [form] = useForm()
  const dispatch = useDispatch()
  function onCancel() {
    toggle()
  }
  function onSuccess() {
    toggle()
  }
  const [markers, setMarkers] = useState([
    {
      lat: Number(updateData.let),
      lng: Number(updateData.long),
    },
  ])
  const [selectedPlace, setSelectedPlace] = useState({
    address: updateData.location,
  })
  const EditSurvey = useSelector((state) => state.EditSurvey)

  useEffect(() => {
    form.setFieldsValue({
      projectTitle: updateData.projectTitle,
      nearestLandMark: updateData.nearestLandMark,
      projectCategory: updateData.projectCategory,
      projectSize: updateData.projectSize,
      producttCategory: updateData.producttCategory,
      plotAndBuiltUpUnitSizes: updateData.plotAndBuiltUpUnitSizes,
      constructionAndDevelopmentRating:
        updateData.constructionAndDevelopmentRating,
      buildersAndDeveloperProfile: updateData.buildersAndDeveloperProfile,
      projectCompleteTime: updateData.projectCompleteTime,
      paymentSchedule: updateData.paymentSchedule,
      projectDescription: updateData.projectDescription,
    })
  }, [updateData])

  function onFinish(values) {
    if (!markers?.[0]?.lat && !markers?.[0]?.lng) {
      errorMessage('Please select location form Map')
      return
    }
    const body = {
      projectTitle: values.projectTitle,
      location: selectedPlace.address,
      let: markers[0].lat,
      long: markers[0].lng,
      nearestLandMark: values.nearestLandMark,
      projectCategory: values.projectCategory,
      projectSize: values.projectSize,
      producttCategory: values.producttCategory,
      plotAndBuiltUpUnitSizes: values.plotAndBuiltUpUnitSizes,
      constructionAndDevelopmentRating: values.constructionAndDevelopmentRating,
      buildersAndDeveloperProfile: values.buildersAndDeveloperProfile,
      projectCompleteTime: values.projectCompleteTime,
      paymentSchedule: values.paymentSchedule,
      projectDescription: values.projectDescription,
    }
    editSurveyApi(dispatch, body, updateData.id, onSuccess)
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
    <Modal
      title={<h3 className="text-[18px] font-semibold">Edit Survey Details</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={1200}
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
              <Col sm={24} lg={6}>
                <span className="text-[#292D35] font-medium text-[15px]">
                  Project Info
                </span>
                <p className="text-[#667085] font-medium text-[12px]  mt-[]">
                  Provide the basic details of project
                </p>
              </Col>
              <Col sm={24} lg={18}>
                <Row gutter={20}>
                  <Col sm={24} lg={8}>
                    <InputLabel>Project Title</InputLabel>
                    <TextField name="projectTitle" />
                  </Col>
                  <Col sm={24} lg={8}>
                    <InputLabel>Project Size</InputLabel>
                    <TextField name="projectSize" />
                  </Col>
                  <Col sm={24} lg={8}>
                    <InputLabel>Project Category</InputLabel>
                    <TextField name="projectCategory" />
                  </Col>

                  <Col sm={24} lg={8}>
                    <InputLabel>Plot And Built Up Unit Sizes</InputLabel>
                    <TextField name="plotAndBuiltUpUnitSizes" />
                  </Col>
                  <Col sm={24} lg={8}>
                    <InputLabel>Project Complete Time</InputLabel>
                    <TextField name="projectCompleteTime" />
                  </Col>
                  <Col sm={24} lg={8}>
                    <InputLabel>Nearest Land Mark</InputLabel>
                    <TextField name="nearestLandMark" />
                  </Col>
                  <Col sm={24} lg={8}>
                    <InputLabel>Product Category</InputLabel>
                    <TextField name="producttCategory" />
                  </Col>
                  <Col sm={24} lg={8}>
                    <InputLabel>Construction And Development Rating</InputLabel>
                    <TextField name="constructionAndDevelopmentRating" />
                  </Col>
                  <Col sm={24} lg={8}>
                    <InputLabel>Payment Schedule</InputLabel>
                    <TextField name="paymentSchedule" />
                  </Col>

                  <Col sm={24} lg={8}>
                    <InputLabel>Builders And Developer Profile</InputLabel>
                    <TextField name="buildersAndDeveloperProfile" />
                  </Col>
                  <Col sm={24} lg={24}>
                    <InputLabel>Project Description</InputLabel>
                    <TextAreaField name="projectDescription" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider />

            <Row gutter={20}>
              <Col sm={24} lg={6}>
                <span className="text-[#292D35] leading-[] font-medium text-[15px]">
                  Location Details
                </span>
                <p className="text-[#667085] font-medium text-[12px]  mt-[]">
                  Provide the location with address
                </p>
              </Col>
              <Col sm={24} lg={18}>
                <Row gutter={20}>
                  <Col sm={24} lg={8}>
                    <InputLabel>Location</InputLabel>
                    <TextField name="location" />
                  </Col>

                  <Col sm={24} lg={8}>
                    <MapsLocation
                      markers={markers}
                      setMarkers={setMarkers}
                      setSelectedPlace={setSelectedPlace}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <div className="flex justify-end mt-[55px]">
              <Button
                size="middle"
                key="1"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
                loading={EditSurvey?.loading}
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

export default EditModal
