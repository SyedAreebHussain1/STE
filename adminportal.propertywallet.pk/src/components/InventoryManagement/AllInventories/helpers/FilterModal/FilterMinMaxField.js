import React from 'react'
import { Select } from 'antd'

const FilterMinMaxField = ({ title }) => {
  return (
    <div>
      <div className="mt-[15px] mb-[35px]">
        <div className="text-[18px] text-[#060606] font-medium">{title}</div>
        <div className="flex justify-between ">
          <Select
            placeholder={'Minimum'}
            style={{ borderRadius: '15px' }}
            className="rounded-[31px] text-[12px] h-[44px] w-full flex items-center  mt-[10px]"
          >
            <Select.Option>-</Select.Option>
          </Select>
          &nbsp; &nbsp;
          <Select
            placeholder={'Maximam'}
            className="rounded-[31px] text-[12px] h-[44px] w-full flex items-center  mt-[10px]"
          >
            <Select.Option>-</Select.Option>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default FilterMinMaxField
