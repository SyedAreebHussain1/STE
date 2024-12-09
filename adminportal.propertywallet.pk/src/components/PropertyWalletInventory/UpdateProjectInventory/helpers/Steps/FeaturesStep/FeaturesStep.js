import { Button, Checkbox, Col, Form, Row, Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import ArrowRight from '../../../../../assest/icon/arrow-right.png'
import PremiumFeaturesSection from './helpers/PremiumFeaturesSection'
import BusinessCommunicationSection from './helpers/BusinessCommunicationSection'
import OtherFacilitiesSection from './helpers/OtherFacilitiesSection'
import OtherNearbyLocationSection from './helpers/OtherNearbyLocationSection'
import RoomsSection from './helpers/RoomsSection'
import { useSelector } from 'react-redux'
import {
  areAllPropertiesNull,
  getSectionFromCategory,
  getSubCategoryByName,
} from '../../../../../../utils/utils'
import HealthCareSection from './helpers/HealthCareSection'
import PlotFeaturesSection from './helpers/PlotFeaturesSection'
import {
  createProjectInventoryStepTwoApi,
  updateProjectInventoryStepTwoApi,
} from '../../../../../../redux/api/Project/ProjectInventory'
import { getInventoryDetailStepTwoApi } from '../../../../../../redux/api/Project'
import { useDispatch } from 'react-redux'
import UtilitiesSection from './helpers/UtilitiesSection'
import FacingSection from './helpers/FacingSection'
import { useParams } from 'react-router-dom'
import { useForm } from 'antd/es/form/Form'

const FeaturesStep = ({ next, prev, current, prevCurrent }) => {
  const [subTypeId, setSubTypeId] = useState(null)
  const [featuresDataExists, setFeaturesDataExists] = useState(false)
  const dispatch = useDispatch()
  const [form] = useForm()
  const params = useParams()
  const getInventoryDetailStepTwo = useSelector(
    (state) => state?.getInventoryDetailStepTwo
  )
  function onSuccess() {
    next()
  }

  useEffect(() => {
    if (current === 1) {
      getInventoryDetailStepTwoApi(dispatch, +params.id)
    }
  }, [current])

  useEffect(() => {
    if (getInventoryDetailStepTwo?.data && current === 1) {
      const obj = {}
      function getValuesFromObject(obj2, name) {
        for (const key in obj2) {
          if (
            key === 'id' ||
            key === 'propertyWalletInventoryId' ||
            obj2[key] === null
          ) {
            continue
          }
          if (typeof obj2[key] === 'boolean' && !obj2[key]) {
            continue
          }
          if (typeof obj2[key] === 'boolean' && obj2[key]) {
            obj[`${key}_${name}`] = key
            continue
          }
          obj[`${key}_${name}`] = obj2[key]
        }
      }
      const data = { ...getInventoryDetailStepTwo?.data?.data }
      const keysArr = [
        'buisnessAndCommunication',
        'otherFacilities',
        'otherNearByLocations',
        'premiumFeatures',
        'rooms',
        'propertyWalletHealthCareRecreationalData',
        'propertyWalletPlotFeatureData',
      ]
      const keysObj = {
        buisnessAndCommunication:
          'createPropertyWalletBusinessAndCommunicationDto',
        otherFacilities: 'createPropertyWalletOtherFacilityDto',
        otherNearByLocations: 'createOtherNearByLocationDto',
        premiumFeatures: 'createPropertyWalletFeatureDto',
        rooms: 'createPropertyWalletRoomDto',
        propertyWalletHealthCareRecreationalData:
          'createPropertyWalletHealthCareRecreationalDto',
        propertyWalletPlotFeatureData: 'createPropertyWalletPlotFeatureDto',
      }

      for (const key in data) {
        if (key === 'projectTypeId' || key === 'utilities') {
          delete data[key]
          continue
        }
      }
      if (areAllPropertiesNull(data)) {
        setFeaturesDataExists(false)
        return
      }
      setFeaturesDataExists(true)
      for (const key in data) {
        if (keysArr.includes(key)) {
          getValuesFromObject(data[key], keysObj[key])
        }
      }
      // for (const key in getInventoryDetailStepTwo?.data?.data) {
      //   if (key === "buisnessAndCommunication") {
      //     getValuesFromObject(
      //       getInventoryDetailStepTwo?.data?.data[key],
      //       "createPropertyWalletBusinessAndCommunicationDto"
      //     );
      //   }
      //   if (key === "otherFacilities") {
      //     getValuesFromObject(
      //       getInventoryDetailStepTwo?.data?.data[key],
      //       "createPropertyWalletOtherFacilityDto"
      //     );
      //   }
      //   if (key === "otherNearByLocations") {
      //     getValuesFromObject(
      //       getInventoryDetailStepTwo?.data?.data[key],
      //       "createOtherNearByLocationDto"
      //     );
      //   }
      //   if (key === "premiumFeatures") {
      //     getValuesFromObject(
      //       getInventoryDetailStepTwo?.data?.data[key],
      //       "createPropertyWalletFeatureDto"
      //     );
      //   }
      //   if (key === "rooms") {
      //     getValuesFromObject(
      //       getInventoryDetailStepTwo?.data?.data[key],
      //       "createPropertyWalletRoomDto"
      //     );
      //   }
      //   if (key === "propertyWalletHealthCareRecreationalData") {
      //     getValuesFromObject(
      //       getInventoryDetailStepTwo?.data?.data[key],
      //       "createPropertyWalletHealthCareRecreationalDto"
      //     );
      //   }
      //   if (key === "propertyWalletPlotFeatureData") {
      //     getValuesFromObject(
      //       getInventoryDetailStepTwo?.data?.data[key],
      //       "createPropertyWalletPlotFeatureDto"
      //     );
      //   }
      //   // if (key === 'utilities') {
      //   //   obj.utitlities = [getInventoryDetailStepTwo?.data?.data[key].filter(item => item.isMatching)]
      //   // }
      // }
      form.setFieldsValue({
        ...obj,
      })
    }
  }, [getInventoryDetailStepTwo?.data, form, current])

  const createProjectInventoryStepTwo = useSelector(
    (state) => state.createProjectInventoryStepTwo
  )
  const createProjectInventoryStepOne = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const updateProjectInventoryStepOne = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )

  const premiumFeaturesSection = getSectionFromCategory(
    'createPropertyWalletFeatureDto',
    subTypeId
  )
  const businessCommunicationSection = getSectionFromCategory(
    'createPropertyWalletBusinessAndCommunicationDto',
    subTypeId
  )
  const otherSection = getSectionFromCategory(
    'createPropertyWalletOtherFacilityDto',
    subTypeId
  )
  const otherNearbyLocationSection = getSectionFromCategory(
    'createOtherNearByLocationDto',
    subTypeId
  )
  const roomsSection = getSectionFromCategory(
    'createPropertyWalletRoomDto',
    subTypeId
  )
  const healthCareSection = getSectionFromCategory(
    'createPropertyWalletHealthCareRecreationalDto',
    subTypeId
  )

  const plotFeaturesSection = getSectionFromCategory(
    'createPropertyWalletPlotFeatureDto',
    subTypeId
  )
  function onFinish(values) {
    const body = {
      createPropertyWalletFeatureDto: {},
      createPropertyWalletBusinessAndCommunicationDto: {},
      createPropertyWalletOtherFacilityDto: {},
      createPropertyWalletHealthCareRecreationalDto: {},
      createOtherNearByLocationDto: {},
      createPropertyWalletRoomDto: {},
      createPropertyWalletPlotFeatureDto: {},
    }
    const parentObject = []
    const boolFields = [
      ...premiumFeaturesSection,
      ...businessCommunicationSection,
      ...otherSection,
      ...otherNearbyLocationSection,
      ...roomsSection,
      ...healthCareSection,
      ...plotFeaturesSection,
    ]
      .filter((f) => f.type === 'bool')
      .map((f) => {
        if (
          values.hasOwnProperty(f.name) &&
          values[f.name] !== undefined &&
          values[f.name].length !== 0
        ) {
          return { [f.name]: true }
        } else {
          return { [f.name]: false }
        }
      })

    for (const key in values) {
      if (values[key] === undefined) {
        continue
      }
      // if (Array.isArray(values[key])) {
      //     continue
      // }
      if (parentObject.includes(key.split('_')[1])) {
        continue
      }
      body[key.split('_')[1]] = {}
    }
    for (const key in values) {
      if (values[key] === undefined) {
        continue
      }
      if (body.hasOwnProperty(key.split('_')[1])) {
        if (isNaN(Number(values[key]))) {
          body[key.split('_')[1]][key.split('_')[0]] = values[key]
        } else {
          if (Number(values[key]) === 0) {
            continue
          }
          body[key.split('_')[1]][key.split('_')[0]] = Number(values[key])
        }
      }
    }
    for (let i = 0; i < boolFields.length; i++) {
      for (const key in boolFields[i]) {
        if (body.hasOwnProperty(key.split('_')[1])) {
          body[key.split('_')[1]][key.split('_')[0]] = boolFields[i][key]
        }
      }
    }
    body.propertyWalletInventoryId =
      updateProjectInventoryStepOne?.data?.data?.id
    if (featuresDataExists) {
      updateProjectInventoryStepTwoApi(dispatch, body, onSuccess)
      return
    }
    createProjectInventoryStepTwoApi(dispatch, body, onSuccess)
  }

  useEffect(() => {
    if (current === 1) {
      let getSubCategory
      if (updateProjectInventoryStepOne?.data) {
        getSubCategory =
          updateProjectInventoryStepOne?.data?.data?.projectSubType.title
      } else {
        getSubCategory =
          createProjectInventoryStepOne?.data?.data?.projectSubType?.title
      }
      setSubTypeId(getSubCategoryByName(getSubCategory))
    }
  }, [
    current,
    createProjectInventoryStepOne?.data,
    updateProjectInventoryStepOne?.data,
  ])

  //   const allFields = [
  //     ...premiumFeaturesSection,
  //     ...businessCommunicationSection,
  //     ...otherSection,
  //     ...otherNearbyLocationSection,
  //     ...roomsSection,
  //     ...healthCareSection,
  //     ...plotFeaturesSection,
  //   ];
  //   useEffect(() => {
  //     if (current === 1) {
  //       if (allFields.length === 0) {
  //         if (prevCurrent === 0) {
  //           next();
  //         } else if (prevCurrent === 2) {
  //           prev();
  //         }
  //       }
  //     }
  //   }, [subTypeId]);

  return (
    <Form
      name="add-single-property-step-two"
      className="projects-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
    >
      {subTypeId && (
        <>
          <PremiumFeaturesSection fields={premiumFeaturesSection} />
          {/* <Divider /> */}
          <BusinessCommunicationSection fields={businessCommunicationSection} />
          {/* <Divider /> */}
          <OtherFacilitiesSection fields={otherSection} />
          {/* <Divider /> */}
          <OtherNearbyLocationSection fields={otherNearbyLocationSection} />
          {/* <Divider /> */}
          <RoomsSection fields={roomsSection} />
          {/* <Divider /> */}
          <HealthCareSection fields={healthCareSection} />
          {/* <Divider /> */}
          <PlotFeaturesSection fields={plotFeaturesSection} />
        </>
      )}

      <UtilitiesSection current={current} />
      {/* <FacingSection current={current} /> */}
      <div className="flex gap-[20px] justify-end pt-[35px]">
        <Button
          className="py-[10px] px-[50px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          //   disabled={current === 0}
          onClick={prev}
        >
          <span>Back</span>
        </Button>
        <Button
          className="btn-primary py-[10px] px-[50px] flex items-center justify-center bg-[#27A3A3] border-[#27A3A3] text-[#fff] text-[12px] font-medium gap-2  w-[189px] h-[43px]"
          // disabled={current === steps.length - 1}
          // onClick={next}
          htmlType="submit"
        >
          <span>Next</span>
          <img src={ArrowRight} alt="" style={{ filter: 'brightness(10)' }} />
        </Button>
      </div>
    </Form>
  )
}

export default FeaturesStep
