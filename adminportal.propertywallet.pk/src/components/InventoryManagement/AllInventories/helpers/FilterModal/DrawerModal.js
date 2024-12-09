import React from 'react'
import { Select } from 'antd'
import SilderRange from './SilderRange'
import FilterMinMaxField from './FilterMinMaxField'
import FilterCheckboxesField from './FilterCheckboxesField'
import FilterAreaField from './FilterAreaField'
import FilterListingStatus from './FilterListingStatus'

const DrawerModal = () => {
  const arr = [
    { valueName: 'All Types' },
    { valueName: 'Home' },
    { valueName: 'Plot' },
    { valueName: 'Commerical' },
  ]
  const arr2 = [
    { valueName: 'Road facing' },
    { valueName: 'Park facing' },
    { valueName: 'Normal' },
  ]

  return (
    <>
      <FilterCheckboxesField title={'Property Type'} arr={arr} />
      <div className="mb-[35px]">
        <div className="text-[18px] text-[#060606] font-medium">Location</div>
        <Select
          placeholder={'Location'}
          className="rounded-[31px] text-[12px] h-[44px] w-full flex items-center  mt-[10px]"
        >
          <Select.Option>-</Select.Option>
        </Select>
      </div>
      <SilderRange />
      <FilterMinMaxField title={'Bedrooms'} />
      <FilterMinMaxField title={'Bathrooms'} />
      <FilterAreaField title={'Area'} />
      <FilterCheckboxesField title={'Features'} arr={arr2} />
      <FilterListingStatus title={'Listing Status'} />
      <div className="mt-[15px]" style={{ border: '' }}>
        <button
          style={{ borderRadius: ' 25px' }}
          className="rounded-full w-full btn-signin text-[#FFFFFF] text-[18px]"
        >
          Apply filter
        </button>
      </div>
    </>
  )
}

export default DrawerModal
