import React from 'react'
import { Input } from 'antd'

const FilterAreaField = ({ title }) => {
  return (
    <>
      <div className="mt-[15px] mb-[35px]">
        <div className="text-[18px] text-[#060606] font-medium ">{title}</div>
        <div className="flex-block mt-[10px]">
          <Input suffix="sq ft" defaultValue="Min" />
          &nbsp;
          <Input suffix="sq ft" defaultValue="Max" />
        </div>
      </div>
    </>
  )
}

export default FilterAreaField
