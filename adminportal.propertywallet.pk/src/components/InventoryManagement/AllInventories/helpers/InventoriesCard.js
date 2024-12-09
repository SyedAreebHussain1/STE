import React, { useState } from 'react'

import { Col, Row } from 'antd'
// import demo1 from "../../../assest/img/demoimg.png";
import demo2 from '../../../assest/img/demoimg2.png'
import img1 from '../../../assest/icon/all-inventories/0.1.png'
import img2 from '../../../assest/icon/all-inventories/0.2.png'
import img3 from '../../../assest/icon/all-inventories/0.3.png'
import mapview from '../../../assest/icon/all-inventories/mapview.png'
import listview from '../../../assest/icon/all-inventories/listview.png'
import star from '../../../assest/icon/star.png'
import DashboardMap from '../../../Dashboard/helpers/DashboardMap'

const InventoriesCard = () => {
  const [switches, setSwitches] = useState({
    sell: true,
    rent: false,
    show: false,
  })

  const arr = [
    {
      img: demo2,
      text: 'Palm Dreams Project',
      num: '12,000,00',
      naem: 'Agency Name',
      dtc: 'Non-Active',
      dtnum: '455',
    },
    {
      img: demo2,
      text: 'Palm Dreams Project',
      num: '12,000,00',
      naem: 'Agency Name',
      dtc: 'Average Interactions',
      dtnum: '10m 5 5s',
    },
    {
      img: demo2,
      text: 'Palm Dreams Project',
      num: '12,000,00',
      naem: 'Agency Name',
      dtc: 'Usage time ',
      dtnum: '155',
    },
    {
      img: demo2,
      text: 'Palm Dreams Project',
      num: '12,000,00',
      naem: 'Agency Name',
      dtc: 'Iphone (IOS)',
      dtnum: '455',
    },
    {
      img: demo2,
      text: 'Palm Dreams Project',
      num: '12,000,00',
      naem: 'Agency Name',
      dtc: 'Iphone (IOS)',
      dtnum: '455',
    },
    {
      img: demo2,
      text: 'Palm Dreams Project',
      num: '12,000,00',
      naem: 'Agency Name',
      dtc: 'Iphone (IOS)',
      dtnum: '455',
    },
    {
      img: demo2,
      text: 'Palm Dreams Project',
      num: '12,000,00',
      naem: 'Agency Name',
      dtc: 'Iphone (IOS)',
      dtnum: '455',
    },
    {
      img: demo2,
      text: 'Palm Dreams Project',
      num: '12,000,00',
      naem: 'Agency Name',
      dtc: 'Iphone (IOS)',
      dtnum: '455',
    },
  ]

  return (
    <>
      <div className={switches.show ? 'flex-block' : ''}>
        <Row style={{ marginTop: '1%', width: '100%' }}>
          {arr.map((val, i) => {
            return (
              <Col
                xl={switches.show ? 12 : 6}
                lg={8}
                md={12}
                xs={24}
                className="p-[6px]"
              >
                <div className="border p-[6px]" style={{ border: '' }}>
                  <div>
                    <img src={val.img} width="100%" alt="" />
                    <div
                      className="absolute left-[70%] top-[6%] text-[#000000] bg-[#ffffff] "
                      style={{
                        padding: '5px 10px 0px 10px',
                        border: 'none',
                        borderRadius: '5px',
                        // textAlign: 'center',
                        display: 'flex',
                        justifyContent: '',
                      }}
                    >
                      {' '}
                      <div className="mt-[2%] ">
                        {' '}
                        <img src={star} alt="" />
                      </div>{' '}
                      &nbsp;&nbsp;{' '}
                      <div className="ml-[%] mt-[-9%] font-medium text-[15px] ">
                        4.1
                      </div>
                    </div>
                  </div>
                  <div className="mt-[2%]">
                    <div className="flex-block justify-between mt-[2%]">
                      {' '}
                      <div className="font-medium text-[#000000] text-base 2xl:text-[18px]">
                        {val.text}
                      </div>{' '}
                      <div className="font-bold text-[#27A3A3] text-[14px] 2xl:text-base">
                        {val.num}
                      </div>{' '}
                    </div>
                    <div className="font-medium text-[14px] text-[#000000]">
                      {val.naem}
                    </div>
                    <div className="flex justify-between mt-[2%] ">
                      {' '}
                      <div className="font-medium text-[14px] text-[#797979]">
                        Karachi Gulzar e Hijri
                      </div>{' '}
                      <div
                        style={{ padding: '5px 10px 5px 10px' }}
                        className=" rounded-[15px] bg-[#1EA2E4] text-[#FFFFFF] p-[] mb-[2%] mt-[-3%] cursor-pointer"
                      >
                        {' '}
                        <>Sold</>{' '}
                      </div>{' '}
                    </div>
                  </div>
                  <hr />
                  <div
                    className="flex justify-between mt-[10px] mb-[5px]"
                    style={{ background: '', padding: ' ' }}
                  >
                    <div className="flex items-center">
                      {' '}
                      <div
                        style={{
                          background: 'rgba(39, 163, 163, 0.1)',
                          borderRadius: '32px',
                          textAlign: 'center',
                        }}
                      >
                        <img src={img3} style={{ padding: '4px' }} alt="" />{' '}
                      </div>
                      &nbsp;{' '}
                      <div className="text-[#797979] text-[9px] lg:text-[11px] 2xl:text-[12px] font-medium">
                        2 Bedrooms
                      </div>{' '}
                    </div>
                    <div className="flex items-center">
                      {' '}
                      <div
                        style={{
                          background: 'rgba(39, 163, 163, 0.1)',
                          borderRadius: '32px',
                          textAlign: 'center',
                        }}
                      >
                        <img src={img1} style={{ padding: '4px' }} alt="" />{' '}
                      </div>{' '}
                      &nbsp;
                      <div className="text-[#797979] text-[9px] lg:text-[11px]  2xl:text-[12px] font-medium">
                        2 Bedrooms
                      </div>{' '}
                    </div>
                    <div className="flex items-center">
                      {' '}
                      <div
                        style={{
                          background: 'rgba(39, 163, 163, 0.1)',
                          borderRadius: '32px',
                          textAlign: 'center',
                        }}
                      >
                        {' '}
                        <img src={img2} style={{ padding: '4px' }} alt="" />
                      </div>{' '}
                      &nbsp;
                      <div className="text-[#797979] text-[9px] lg:text-[11px]  2xl:text-[12px] font-medium">
                        120 Sq Ft
                      </div>{' '}
                    </div>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>

        <div
          style={
            switches.show
              ? { display: 'block', width: '100%' }
              : { display: 'none' }
          }
        >
          <div className="map-animation" style={{ borderRadius: '15px' }}>
            <DashboardMap />
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          border: '',
          width: 'max-content',
          position: 'fixed',
          right: '2%',
          bottom: '5%',
        }}
      >
        <div
          className=" flex border-2 items-center rounded-[76px] p-[6px]"
          style={{ background: '#fff' }}
        >
          <div className={`relative flex before:content-[''] `}>
            <div
              style={{ [switches.rent ? 'right' : 'left']: 0 }}
              className={`bg-[#2B2B2B] absolute w-[50%] h-[100%] rounded-[76px] z-0 top-0`}
            ></div>
            <span
              className="flex relative py-[8px] px-[28px] text-[15px] z-10 font-medium font-['Poppins'] cursor-pointer"
              onClick={() =>
                setSwitches({ sell: true, rent: false, show: false })
              }
              style={{
                color: switches.sell ? '#F9FAFB' : '#667085',
              }}
            >
              <div>
                <img
                  src={listview}
                  style={switches.sell ? { filter: 'brightness(4)' } : {}}
                  alt=""
                />
              </div>
              &nbsp;
              <div className="font-medium">List View</div>
            </span>
            <span
              className="flex relative py-[8px] px-[28px] text-[15px] z-10 font-medium font-['Poppins'] cursor-pointer text-center"
              onClick={() =>
                setSwitches({ sell: false, rent: true, show: true })
              }
              style={{
                color: switches.rent ? '#F9FAFB' : '#667085',
              }}
            >
              <div>
                <img
                  src={mapview}
                  style={
                    switches.rent
                      ? { filter: 'brightness(4)' }
                      : { filter: 'brightness(0)' }
                  }
                  alt=""
                />
              </div>
              &nbsp;
              <div className="font-medium">Map View</div>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default InventoriesCard
