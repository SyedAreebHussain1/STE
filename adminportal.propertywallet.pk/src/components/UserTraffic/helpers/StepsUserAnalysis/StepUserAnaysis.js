import React from 'react'
import UserAnalysisBox from './UserAnalysisBox'
import MatrixFunnelChart from './MatrixFunnelChart'
const StepUserAnaysis = () => {
  const obj = {
    text1: 'Users Matrix Funnel',
    text2: 'Active Users Right Now',
  }
  return (
    <div>
      <UserAnalysisBox />
      <MatrixFunnelChart obj={obj} />
    </div>
  )
}

export default StepUserAnaysis
