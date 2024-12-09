import { Col, Row } from 'antd'
import React from 'react'

const FilterSize = () => {
  return (
    <Row gutter={16} className="mt-5">
      <Col span={24}>
        <h3 className="text-base">Size</h3>
        <Row gutter={16}>
          <Col span={12}>
            <div className="flex flex-col rounded-[10px] border border-[#D0D5DD] px-[18px] py-[10px]  mt-[10px]">
              <span className="text-textColor text-sm font-normal">Min</span>
              <input
                type={'text'}
                className="border-none focus:outline-none"
                value={'0Sqft'}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="flex flex-col rounded-[10px] border border-[#D0D5DD] px-[18px] py-[10px] mt-[10px]">
              <span className="text-textColor text-sm font-normal">Max</span>
              <input
                type={'text'}
                className="border-none focus:outline-none"
                value={'1000Sqft'}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default FilterSize
