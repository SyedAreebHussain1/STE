import React from 'react'

const FilterCheckboxesField = ({ title, arr }) => {
  return (
    <div className="mt-[15px] mb-[35px]">
      <div className="text-[18px] text-[#060606] font-medium">{title}</div>
      <div>
        {arr.map((val) => {
          return (
            <div className="mt-[10px] mb-[10px] flex items-center gap-2">
              {' '}
              {/* <Checkbox
                className="font-normal text-[16px] text-[#667085]"
                onChange={onChange}
              >
                {val.valueName}
              </Checkbox> */}
              <input
                style={{ border: '1px solid #D0D5DD' }}
                type="checkbox"
                id=""
                className="input bg-[##FFFFFF] h-[18px] w-[18px] cursor-pointer"
                name="vehicle1"
                value=""
              />
              <label for="" className="font-normal text-[16px] text-[#667085]">
                {val.valueName}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterCheckboxesField
