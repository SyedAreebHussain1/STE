import { Button, Col, Divider, Input, Row, Select } from 'antd'
import React from 'react'
import FilterSize from './FilterSize'
import PriceRange from './PriceRange'

const FilterModalContent = () => {
  return (
    <>
      <Divider />
      <Row>
        <Col span={12}>
          <h3 className="text-base">Location</h3>
          <Select
            placeholder={'Location'}
            className="rounded-[31px] text-[12px] h-[44px] w-full flex items-center  mt-[10px]"
          >
            <Select.Option>-</Select.Option>
          </Select>
        </Col>
      </Row>
      <PriceRange />
      <FilterSize />
      <div gutter={16} className="mt-5 flex justify-between items-center">
        <Button className="text-sm rounded-[25px]">Clear All</Button>
        <Button className="text-sm rounded-[25px] bg-textColorGreen text-white">
          Show Results
        </Button>
      </div>
    </>
  )
}

export default FilterModalContent
