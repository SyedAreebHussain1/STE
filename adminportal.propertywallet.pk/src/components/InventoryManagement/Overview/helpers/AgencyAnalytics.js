import React from 'react'
import AgencyAnalyticsBox from './AgencyAnalyticsBox'

const AgencyAnalytics = ({ arr }) => {
  return (
    <div className="r-o-main" style={{ border: '', width: '100%' }}>
      <div className="border" style={{ padding: '15px', border: '' }}>
        <div className="h_c f_w_600">Agency Analytics</div>
        <div className="row">
          {arr.map((val, i) => {
            return <AgencyAnalyticsBox val={val} />
          })}
        </div>
      </div>
    </div>
  )
}

export default AgencyAnalytics
