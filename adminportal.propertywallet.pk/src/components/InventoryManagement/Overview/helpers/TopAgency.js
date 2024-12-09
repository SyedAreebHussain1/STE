import React from 'react'
import star from '../../../components/assest/icon/star.png'

const TopAgency = ({ v }) => {
  return (
    <div className="column-5 border" style={{ backgroundColor: '' }}>
      <div className=" flex-block" style={{ padding: '' }}>
        <div className="border" style={{ width: '20%' }}>
          <img src={v.img_} style={{ width: '100%' }} />
        </div>
        <div
          style={{
            border: '',
            width: '100%',
            padding: '2px',
            margin: '1px',
          }}
        >
          <div className="h_c" style={{ fontWeight: '500', margin: '1px' }}>
            {v.heading}
          </div>
          <div className="p_c " style={{ margin: '1px' }}>
            {' '}
            <img src={star} /> {v.rate}{' '}
          </div>
          {/* <div className="p_c " style={{ margin: "1px" }}> 50 no of staff </div> */}
          <div
            className="flex-block"
            style={{
              display: '',
              justifyContent: 'space-between',
              marginTop: '3px',
            }}
          >
            {' '}
            <div style={{ color: 'rgba(102, 112, 133, 0.62)' }}>
              {' '}
              <img src="" /> Nanakwara road, North Nazimabad
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopAgency
