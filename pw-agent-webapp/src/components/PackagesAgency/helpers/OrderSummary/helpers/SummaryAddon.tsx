import React from 'react'

const SummaryAddon = ({ count, price, label }: any) => {
  return (
    <div className='packages-main-order-summary-addon'>
      <div className='packages-main-order-summary-addon-count-label'>
        {count && <span className='packages-main-order-summary-addon-count'>{count}X</span>}
        <h3 className='packages-main-order-summary-addon-label'>{label}</h3>
      </div>
      <h4 className='packages-main-order-summary-addon-price'>{price}</h4>
    </div>
  )
}

export default SummaryAddon