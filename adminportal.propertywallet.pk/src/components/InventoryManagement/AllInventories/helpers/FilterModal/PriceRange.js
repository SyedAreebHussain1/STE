import { Col, Row } from 'antd'
import React from 'react'

const PriceRange = () => {
  return (
    <Row gutter={16} className="mt-5">
      <Col span={24}>
        <h3 className="text-base">Price Range</h3>
        <Row gutter={16}>
          <Col span={12}>
            <div className="flex flex-col rounded-[10px] border border-[#D0D5DD] px-[18px] py-[10px]  mt-[10px]">
              <span className="text-textColor text-sm font-normal">
                Min Price
              </span>
              <input
                type={'text'}
                className="border-none focus:outline-none"
                value={'Rs0'}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="flex flex-col rounded-[10px] border border-[#D0D5DD] px-[18px] py-[10px] mt-[10px]">
              <span className="text-textColor text-sm font-normal">
                Max Price
              </span>
              <input
                type={'text'}
                className="border-none focus:outline-none"
                value={'Rs2000000'}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default PriceRange
