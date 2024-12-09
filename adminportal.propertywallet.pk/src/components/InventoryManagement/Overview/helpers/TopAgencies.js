import React from 'react'
import TopAgency from './TopAgency'

const TopAgencies = ({ array }) => {
  return (
    <div className="row-5">
      <div style={{ padding: '20px' }}>
        <div className="h_c f_w_600">Top Agency</div>
        {array.map((v, i) => {
          return <TopAgency v={v} />
        })}
      </div>
    </div>
  )
}

export default TopAgencies
