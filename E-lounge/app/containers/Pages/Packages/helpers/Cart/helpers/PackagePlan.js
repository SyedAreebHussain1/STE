import React from 'react'

const PackagePlan = ({ duration, price, savings, isActive, onClick, index, discountPercentage, noOfMonth, fixCommision, data }) => {
  const plans = {
    "MONTHLY": "Monthly",
    "QUARTERLY": "Quaterly",
    "YEARLY": "Yearly",
    "HALFYEARLY": "Half Yearly",
    "Monthly": "Monthly",
    "Quarterly": "Quaterly",
    "Yearly": "Yearly",
    "Half Yearly": "Half Yearly"
  }
  return (
    <div className={`package-main-plans-plan ${isActive ? 'package-main-plans-plan-active' : ''}`} onClick={() => onClick(index, discountPercentage, noOfMonth, fixCommision, duration)}>
        {savings > 0 && <span className='savings'>{savings}% Saving</span>}
        <h4 className='duration'>{plans[duration]}</h4>
        <h3 className='price'>PKR {price}</h3>
    </div>
  )
}

export default PackagePlan