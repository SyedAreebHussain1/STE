import React from 'react'
import MatrixFunnelChart from '../StepsUserAnalysis/MatrixFunnelChart'
import AgencyAnalysis from './AgencyAnalysis'

const StepAgencyAnalysis = () => {
  const obj = {
    text1: 'Agency Matrix Funnel',
    text2: 'Active Agencies Right Now',
  }
  return (
    <div>
      <AgencyAnalysis />
      <MatrixFunnelChart obj={obj} />
    </div>
  )
}

export default StepAgencyAnalysis
