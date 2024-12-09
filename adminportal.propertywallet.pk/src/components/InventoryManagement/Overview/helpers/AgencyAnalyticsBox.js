import React from 'react'

const AgencyAnalyticsBox = ({ val }) => {
  return (
    <div className="column border" style={{ backgroundColor: '' }}>
      <div className="">
        <img src={val.img} />
      </div>
      <div>
        <div className="  f_w_500 f_s_1rem p_c">{val.text}</div>
        <div className="flex-block">
          <div
            className="number_ suce f_w_600 f_s_1_8rem"
            //  {color:"#176262"}
          >
            {val.num}
          </div>
          <div className="mintext">
            {' '}
            <div className="mintexttex b_p">20+ new added</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgencyAnalyticsBox
