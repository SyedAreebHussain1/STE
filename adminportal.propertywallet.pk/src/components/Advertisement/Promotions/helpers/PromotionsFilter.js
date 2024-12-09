import React from 'react'

const PromotionsFilter = (props) => {
  return (
    <div>
      {props.filterTitle.map((val, i) => {
        return (
          <div key={i} className="mt-[10px] mb-[10px] flex items-center gap-2">
            {' '}
            <input
              style={{ border: '1px solid #D0D5DD' }}
              type="checkbox"
              id=""
              className="input bg-[##FFFFFF] h-[18px] w-[18px] cursor-pointer"
              name="vehicle1"
              value=""
            />
            <label for="" className="font-normal text-[16px] text-[#667085]">
              {val.title}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default PromotionsFilter
