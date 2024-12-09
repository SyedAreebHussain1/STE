import React from 'react'

import hellocheck from '../../../components/assest/img/hello.png'

import star from '../../../components/assest/icon/star.png'
//
import on_board from '../../../components/assest/icon/overview/0.1.png'
import of_staff from '../../../components/assest/icon/overview/0.2.png'
import of_inventories from '../../../components/assest/icon/overview/0.3.png'
//
// import star from "../../../components/assest/icon/star.png"
import location from '../../../components/assest/icon/location.png'

// import "../../../components/assest/css/inventory-man/overview.css"
import '../../../components/assest/css/dashboard.css'
import OverviewTable from '../../../components/InventoryManagement/Overview/helpers/OverviewTable'

const Overview = () => {
  const arr = [
    {
      img: on_board,
      text: 'Agencies On-Board',
      num: '1500',
    },
    {
      img: of_staff,
      text: 'No of Staff',
      num: '1125',
    },
    {
      img: of_inventories,
      text: 'No of Inventories',
      num: '1125',
    },
  ]

  const array = [
    {
      img_: hellocheck,
      heading: 'Agencies Overview ',
      paragraf: '',
      rate: '4.0 | 125 Properties',
    },
    {
      img_: hellocheck,
      heading: 'Deutshre Real Estate Properties ',
      rate: '4.0 | 125 Properties',
    },
    {
      img_: hellocheck,
      heading: 'Agencies Overview  ',
      rate: '4.0 | 125 Properties',
    },
    {
      img_: hellocheck,
      heading: 'Deutshre Real Estate Properties ',
      rate: '4.0 | 125 Properties',
    },
    {
      img_: hellocheck,
      heading: 'Agencies Overview  ',
      rate: '4.0 | 125 Properties',
    },
    {
      img_: hellocheck,
      heading: 'Agencies Overview  ',
      rate: '4.0 | 125 Properties',
    },
    {
      img_: hellocheck,
      heading: 'Agencies Overview  ',
      rate: '4.0 | 125 Properties',
    },
    {
      img_: hellocheck,
      heading: 'Agencies Overview  ',
      rate: '4.0 | 125 Properties',
    },
    {
      img_: hellocheck,
      heading: 'Agencies Overview  ',
      rate: '4.0 | 125 Properties',
    },
  ]
  return (
    <div className="m-l-m-r pt-5 pl-5" style={{ marginTop: '2%' }}>
      <div className="flex-block">
        <div style={{ border: '', width: '100%' }}>
          <div className="r-o-main" style={{ border: '', width: '100%' }}>
            <div className="border" style={{ padding: '15px' }}>
              <div className="font-semibold text-[18.75px]">
                Agency Analytics
              </div>
              <div className="row">
                {arr.map((val, i) => {
                  return (
                    <div
                      className="column border"
                      style={{ backgroundColor: '' }}
                    >
                      <div className="">
                        <img src={val.img} alt="" />
                      </div>
                      <div>
                        <div className="font-medium text-[15px] p_c">
                          {val.text}
                        </div>
                        <div className="flex-block">
                          <div
                            className="font-semibold text-[28px]"
                            style={{ color: '#104141' }}
                          >
                            {val.num}
                          </div>
                          <div className="mintext">
                            {' '}
                            <div className="font-medium text-[12px] b_p">
                              20+ new added
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div style={{ border: '', marginTop: '1%' }}>
            <div className="border" style={{ padding: '15px' }}>
              <div className="font-medium text-[15px]">
                Latest Inventory Sales
              </div>
              <div style={{ marginTop: '2%' }}>
                <OverviewTable />
              </div>
            </div>
          </div>
        </div>
        <div className="border m-l-m-r" style={{ border: '' }}>
          <div className="row-5">
            <div style={{ padding: '20px' }}>
              <div className="h_c font-semibold text-[18.75px]">Top Agency</div>
              {array.map((v, i) => {
                return (
                  <div className="column-5 border">
                    <div>
                      <div
                        className="flex-block"
                        style={{ width: '100%', padding: '0px' }}
                      >
                        <div className="border" style={{ width: '30%' }}>
                          <img src={v.img_} style={{ width: '' }} alt="" />
                        </div>
                        <div style={{ width: '100%', padding: '4px' }}>
                          <div>
                            <div className="text-textcolor2 font-medium text-[15px]">
                              {v.heading}
                            </div>
                          </div>
                          <div
                            className="flex-block"
                            style={{ marginTop: '2%' }}
                          >
                            <div>
                              <img src={star} alt="" />
                            </div>
                            <div
                              className="p_c font-medium text-[12px]"
                              style={{ marginLeft: '5px', marginTop: '-2px' }}
                            >
                              {v.rate}
                            </div>
                          </div>

                          <div
                            className="flex-block "
                            style={{
                              justifyContent: 'space-between',
                              marginTop: '2%',
                            }}
                          >
                            <div className="flex p_c">
                              {' '}
                              <div>
                                <img src={location} alt="" />
                              </div>{' '}
                              <div
                                className="font-normal text-[12px] text-[#A3A9B6]"
                                style={{ marginLeft: '5px', marginTop: '' }}
                              >
                                Nanakwara road, North Nazimabad
                              </div>{' '}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
