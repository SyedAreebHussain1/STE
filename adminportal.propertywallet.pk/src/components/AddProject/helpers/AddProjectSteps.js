import React, { useState } from 'react'
import Steps from '../../../utils/components/Steps/Steps'
import { Button, Form } from 'antd'
import ArrowRight from '../../assest/icon/arrow-right.png'
import ProjectDetailsSteps from './Steps/ProjectDetailsSteps/ProjectDetailsSteps'
import ImagesAndAttachmentsStep from './Steps/ImagesAndAttachmentsStep/ImagesAndAttachmentsStep'
import BuilderInfoStep from './Steps/BuilderInfoStep/BuilderInfoStep'
import InventorySuccessSteps from './Steps/InventorySuccessSteps/InventorySuccessSteps'
import { useForm } from 'antd/es/form/Form'

const AddProjectSteps = () => {
  const [current, setCurrent] = useState(0)
  function prev() {
    setCurrent((prev) => prev - 1)
  }
  function next() {
    setCurrent((prev) => prev + 1)
  }
  const [state, setState] = useState({
    stepOne: {
      projectName: '',
      NOC: null,
      description: '',
      address: '',
      location: '',
      city: '',
      latitude: null,
      longitude: null,
    },
    stepTwo: {},
    stepThree: {},
    stepFour: {},
  })
  const handleStateChange = (name, value) => {
    setState((prev) => ({
      ...prev,
      stepOne: {
        ...prev.stepOne,
        [name]: value,
      },
    }))
  }

  const items = [
    {
      label: 'Project Details',
      component: (
        <ProjectDetailsSteps
          current={current}
          next={next}
          handleStateChange={handleStateChange}
          state={state}
        />
      ),
    },
    {
      label: 'Images and Attachments',
      component: (currentStep, prevCurrent) => (
        <ImagesAndAttachmentsStep
          current={currentStep}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      label: 'Builder Info',
      component: <BuilderInfoStep current={current} next={next} prev={prev} />,
    },
    {
      label: 'Finish',
      component: (
        <InventorySuccessSteps current={current} next={next} prev={prev} />
      ),
    },
  ]
  return (
    <>
      <Steps items={items} current={current} />
    </>
  )
}

export default AddProjectSteps
