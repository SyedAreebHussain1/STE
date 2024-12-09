import { Button, Form } from 'antd'
import React, { useEffect, useState } from 'react'
import ArrowRight from '../../../../assest/icon/arrow-right.png'
import PremiumFeaturesSection from './helpers/PremiumFeaturesSection'
import BusinessCommunicationSection from './helpers/BusinessCommunicationSection'
import OtherFacilitiesSection from './helpers/OtherFacilitiesSection'
import OtherNearbyLocationSection from './helpers/OtherNearbyLocationSection'
import RoomsSection from './helpers/RoomsSection'
import { useSelector } from 'react-redux'
import HealthCareSection from './helpers/HealthCareSection'
import PlotFeaturesSection from './helpers/PlotFeaturesSection'
import { useDispatch } from 'react-redux'
import UtilitiesSection from './helpers/UtilitiesSection'
import {
  createPropertyWalletProductStepTwoApi,
  updatePropertyWalletProductStepTwoApi,
} from '../../../../../redux/api/SingleProperty'
import {
  getSectionFromCategory,
  getSubCategoryByName,
} from '../../../../../utils/utils'
import FacingSection from './helpers/FacingSection'

const FeaturesStep = ({ next, prev, current, prevCurrent }) => {
  const [subTypeId, setSubTypeId] = useState(null)
  const dispatch = useDispatch()
  function onSuccess() {
    next()
  }

  const createPropertyWalletProductStepTwo = useSelector(
    (state) => state.createPropertyWalletProductStepTwo
  )
  const updatePropertyWalletProductStepTwo = useSelector(
    (state) => state.updatePropertyWalletProductStepTwo
  )
  const premiumFeaturesSection = getSectionFromCategory(
    'createPropertyWalletProductFeatureDto',
    subTypeId
  )
  const businessCommunicationSection = getSectionFromCategory(
    'createPropertyWalletProductBusinessAndCommunicationDto',
    subTypeId
  )
  const otherSection = getSectionFromCategory(
    'createPropertyWalletProductOtherFacilityDto',
    subTypeId
  )
  const otherNearbyLocationSection = getSectionFromCategory(
    'createPropertyWalletProductOtherNearByLocationDto',
    subTypeId
  )
  const roomsSection = getSectionFromCategory(
    'createPropertyWalletProductRoomDto',
    subTypeId
  )
  const healthCareSection = getSectionFromCategory(
    'createPropertyWalletProductHealthCareRecreationalDto',
    subTypeId
  )

  const plotFeaturesSection = getSectionFromCategory(
    'createPropertyWalletProductPlotFeatureDto',
    subTypeId
  )
  function onFinish(values) {
    const body = {
      createPropertyWalletProductFeatureDto: {},
      createPropertyWalletProductBusinessAndCommunicationDto: {},
      createPropertyWalletProductOtherFacilityDto: {},
      createPropertyWalletProductHealthCareRecreationalDto: {},
      createPropertyWalletProductOtherNearByLocationDto: {},
      createPropertyWalletProductRoomDto: {},
      createPropertyWalletProductPlotFeatureDto: {},
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
    body.propertyWalletProductId =
      createPropertyWalletProductStepOne?.data?.data?.id

    if (createPropertyWalletProductStepTwo?.data === null) {
      createPropertyWalletProductStepTwoApi(dispatch, body, onSuccess)
    } else {
      updatePropertyWalletProductStepTwoApi(dispatch, body, onSuccess)
    }
  }
  const createPropertyWalletProductStepOne = useSelector(
    (state) => state.createPropertyWalletProductStepOne
  )
  const updatePropertyWalletProductStepOne = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )

  useEffect(() => {
    if (current === 2) {
      let getSubCategory
      if (updatePropertyWalletProductStepOne?.data) {
        getSubCategory =
          updatePropertyWalletProductStepOne?.data?.data?.projectSubType.title
      } else {
        getSubCategory =
          createPropertyWalletProductStepOne?.data?.data?.projectSubType?.title
      }
      setSubTypeId(getSubCategoryByName(getSubCategory))
    }
  }, [
    current,
    createPropertyWalletProductStepOne?.data,
    updatePropertyWalletProductStepOne?.data,
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
      //   form={form}
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

          <FacingSection current={current} />
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
          loading={
            createPropertyWalletProductStepTwo.loading ||
            updatePropertyWalletProductStepTwo.loading
          }
        >
          <span>Next</span>
          <img src={ArrowRight} alt="" style={{ filter: 'brightness(10)' }} />
        </Button>
      </div>
    </Form>
  )
}

export default FeaturesStep
