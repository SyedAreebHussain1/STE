import React, { useState } from 'react'
import { Radio } from 'antd'
const FilterListingStatus = ({ title }) => {
  const [value, setValue] = useState(1)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="mt-[15px] mb-[35px]">
      <div className="text-[18px] text-[#060606] font-medium">{title}</div>
      <div className="mt-[10px]">
        <Radio.Group
          onChange={onChange}
          className="justify-between flex"
          value={value}
        >
          <Radio className="text-[#667085] font-normal text-[1rem]" value={1}>
            Active
          </Radio>
          <Radio className="text-[#667085] font-normal text-[1rem]" value={2}>
            {' '}
            Pending
          </Radio>
          <Radio className="text-[#667085] font-normal text-[1rem]" value={3}>
            Sold
          </Radio>
        </Radio.Group>
      </div>
    </div>
  )
}

export default FilterListingStatus
