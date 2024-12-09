import React from 'react'
import MatrixFunnelChart from '../StepsUserAnalysis/MatrixFunnelChart'
import InventoryAnalysisBox from './InventoryAnalysisBox'

const StepInventoryAnalysis = () => {
  const obj = {
    text1: 'Inventories Matrix Funnel',
    text2: 'Cities',
  }
  return (
    <div>
      <InventoryAnalysisBox />
      <MatrixFunnelChart obj={obj} />
    </div>
  )
}

export default StepInventoryAnalysis
