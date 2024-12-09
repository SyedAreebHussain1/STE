import { Col, Spin } from 'antd'
import React from 'react'

import questionmark from '../../../components/assest/icon/user-tranfer/questionmark.png'
import UpSaleIcon from '../../../components/assest/icon/upsale.png'
import { findPercentage, internationSystem } from '../../../utils/utils'

const AnalysisBox = ({ val, lg }) => {
  return (
    <Col xl={lg} lg={12} xs={24}>
      {/* <Spin spinning={loading} delay={500}> */}
      <div className="border">
        <div className="column " style={{ backgroundColor: '' }}>
          <div className="">
            <img src={val.img} alt="" />
          </div>
          <div>
            <div className="font-medium text-[15px] p_c">{val.text}</div>
            <div className="flex-block">
              <div
                className="font-semibold text-[20px]"
                style={{ color: '#104141' }}
              >
                {val.rev
                  ? val.num
                    ? 'PKR ' + internationSystem(val.num)
                    : 'PKR 0'
                  : val.num
                  ? val.num
                  : 0}
              </div>
              <div
                className="mintext"
                style={{
                  backgroundColor:
                    val.type === 'sale' ? '#6435c90d' : '#176fea0d',
                }}
              >
                {val.type === 'new' ? (
                  <div className="font-medium text-[12px] b_p">
                    {val.new ? val.new : 0}+ new added
                  </div>
                ) : (
                  <div className="font-medium text-[12px] flex items-center gap-1">
                    <span>
                      <img src={UpSaleIcon} alt="" />
                    </span>
                    <span className="text-[#6435C9]">
                      {findPercentage(val.num, val.sale)
                        ? findPercentage(val.num, val.sale)
                        : 0}
                      %
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-block"
          style={{
            justifyContent: 'space-between',
            background: 'rgba(224, 226, 231, 0.18)',
            padding: '10px 20px',
          }}
        >
          {val?.cardBottom?.map((item, key) => (
            <div key={item.name + key}>
              {' '}
              <div className="font-medium text-[10px] text-[#858D9D] flex">
                {item.name}{' '}
                <div className="mt-[2%] ml-[2px]">
                  <img src={questionmark} alt="" />
                </div>{' '}
              </div>
              <div className="font-medium text-[15px] text-[#3D4350]">
                {item.value}
              </div>{' '}
            </div>
          ))}
        </div>
      </div>
      {/* </Spin> */}
    </Col>
  )
}

export default AnalysisBox
