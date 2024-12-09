import React, { useEffect, useState } from 'react'
import Steps from '../../../../utils/components/Steps/Steps'
import InventoryDetailsStep from './Steps/InventoryDetailsStep/InventoryDetailsStep'
import FeaturesStep from './Steps/FeaturesStep/FeaturesStep'
import PaymentPlanStep from './Steps/PaymentPlanStep/PaymentPlanStep'
import AvailableInventoryStep from './Steps/AvailableInventoryStep/AvailableInventoryStep'
import FinishStep from './Steps/FinishStep/FinishStep'

const AddProjectInventorySteps = () => {
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
        <InventoryDetailsStep current={currentStep} next={next} prev={prev} />
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
    },
    {
      label: 'Available Inventory',
      component: (currentStep, prevCurrent) => (
        <AvailableInventoryStep next={next} prev={prev} current={currentStep} />
      ),
    },
    {
      label: 'Finish',
      component: (currentStep) => <FinishStep prev={prev} />,
    },
  ]
  return <Steps items={items} current={current} prevCurrent={prevCurrent} />
}

export default AddProjectInventorySteps
