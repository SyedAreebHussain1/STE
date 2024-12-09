import React from 'react'
import Overview_tabel from './tabel'

const LatestInventorySales = () => {
  return (
    <div style={{ border: '', marginTop: '1%' }}>
      <div className="border" style={{ padding: '15px' }}>
        <div className="h_c f_w_600">Latest Inventory Sales</div>
        <div style={{ marginTop: '2%' }}>
          <Overview_tabel />
        </div>
      </div>
    </div>
  )
}

export default LatestInventorySales
