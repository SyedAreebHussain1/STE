import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots'
import { Col, Row } from 'antd'
import MapLocation from './MapLocation'
import { DatePicker } from 'antd'

const MatrixFunnelChart = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    asyncFetch()
  }, [])

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  }
  const [placement, SetPlacement] = useState('bottomLeft')
  const placementChange = (e) => {
    SetPlacement(e.target.value)
  }

  return (
    <>
      <Row className="" style={{ marginTop: '2%' }} gutter={16}>
        <Col lg={12} xs={24}>
          <div className="border hg p-[10px]">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold text-[18.75px] text-textcolor2">
                  {props?.obj?.text1}
                </div>
                <div className="font-medium text-[15px]  text-textColor">
                  {' '}
                  Check overview of all your property details.
                </div>
              </div>
              <div className="mt-[3%]">
                <DatePicker placement={placement} />
              </div>
            </div>
            <br />
            <div>
              <Line {...config} />
            </div>
          </div>
        </Col>
        <Col lg={12} xs={24}>
          <div className=" hg border p-[10px]">
            <div className="flex justify-between  mb-[20px]">
              <div>
                <div
                  className="font-semibold text-[18.75px] text-textcolor2"
                  style={{ marginTop: '' }}
                >
                  {props.obj.text2}
                </div>
                <div className="font-medium text-[15px]  text-textColor">
                  {' '}
                  Check overview of all your property details.
                </div>
              </div>
              <div className="mt-[3%]">
                <DatePicker placement={placement} />
              </div>
            </div>
            <br />
            <MapLocation />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default MatrixFunnelChart
