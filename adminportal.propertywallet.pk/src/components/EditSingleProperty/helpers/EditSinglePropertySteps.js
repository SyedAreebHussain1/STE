import React, { useState } from 'react'
import Steps from '../../../utils/components/Steps/Steps'
import InventoryDetailsStep from './Steps/InventoryDetailsStep/InventoryDetailsStep'
import FeaturesStep from './Steps/FeaturesStep/FeaturesStep'
import PaymentPlanStep from './Steps/PaymentPlanStep/PaymentPlanStep'
import AvailableInventoryStep from './Steps/AvailableInventoryStep/AvailableInventoryStep'
import FinishStep from './Steps/FinishStep/FinishStep'
import ImagesAndAttachmentsStep from './Steps/ImagesAndAttachmentsStep/ImagesAndAttachmentsStep'

const EditSinglePropertySteps = () => {
  const [prevCurrent, setPrevCurrent] = useState(0)
  const [current, setCurrent] = useState(0)
  const [subCategorySelected, setSubCategorySelected] = useState('')
  function prev() {
    setCurrent((prev) => {
      setPrevCurrent(prev)
      return prev - 1
    })
  }
  function next() {
    setCurrent((prev) => {
      setPrevCurrent(prev)
      return prev + 1
    })
  }
  function setCurrentToNumber(num) {
    setCurrent(num)
  }

  const items = [
    {
      label: 'Inventory Details',
      component: (currentStep) => (
        <InventoryDetailsStep next={next} prev={prev} current={currentStep} />
      ),
    },
    {
      label: 'Images and Attachments',
      component: (currentStep) => (
        <ImagesAndAttachmentsStep
          next={next}
          current={currentStep}
          prev={prev}
        />
      ),
    },
    {
      label: 'Features',
      component: (currentStep, prevCurrent) => (
        <FeaturesStep
          next={next}
          prev={prev}
          current={currentStep}
          prevCurrent={prevCurrent}
        />
      ),
    },
    {
      label: 'Payment Plan',
      component: (currentStep) => (
        <PaymentPlanStep next={next} prev={prev} current={currentStep} />
      ),
      props: { subCategorySelected },
    },
    // {
    //   label: "Available Inventory",
    //   component: (currentStep) => (
    //     <AvailableInventoryStep next={next} prev={prev} current={currentStep} />
    //   ),
    //   props: { subCategorySelected },
    // },
    {
      label: 'Finish',
      component: (currentStep) => <FinishStep prev={prev} />,
      props: { subCategorySelected },
    },
  ]
  return <Steps items={items} current={current} prevCurrent={prevCurrent} />
}

export default EditSinglePropertySteps
