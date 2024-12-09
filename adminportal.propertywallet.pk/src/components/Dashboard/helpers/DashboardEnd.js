import React, { useState } from 'react'
import DashboardMap from './DashboardMap'

import star from '../../../components/assest/icon/star.png'
import location from '../../../components/assest/icon/location.png'
import call from '../../../components/assest/icon/call.png'
import arrow from '../../../components/assest/icon/arrow.png'
import '../../../components/assest/css/dashboard.css'
import { useSelector } from 'react-redux'

const DashboardEnd = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const isAgencyWithinRadius = useSelector(
    (state) => state.isAgencyWithinRadius
  )

  function onMapFullScreenClick(isLoaded, googleMapRef) {
    if (isLoaded) {
      const { mapRef } = googleMapRef?.current
      if (isFullScreen) {
        mapRef?.requestFullscreen()
        setIsFullScreen((prev) => !prev)
      }
    }
  }
  return (
    <>
      <div style={{ marginTop: '2%' }}>
        <div className="r_e">
          <div className="c_e">
            <div>
              <div
                className="flex-block"
                style={{ border: '', justifyContent: 'space-between' }}
              >
                <div>
                  <div className="font-semibold text-[18px] text-textcolor2">
                    Agency Overview
                  </div>
                  <div className="font-medium text-[14px]  text-textColor">
                    {' '}
                    Check overview of all your property details.
                  </div>
                </div>
                <div className="font-medium text-[16px] text-textColorGreen flex">
                  {' '}
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsFullScreen((prev) => !prev)}
                  >
                    View Full Screen
                  </div>{' '}
                  <div>
                    <img
                      src={arrow}
                      style={{ width: '', marginLeft: '5px', marginTop: '2px' }}
                      className=""
                      alt=""
                    />
                  </div>{' '}
                </div>
              </div>
              <div>
                <DashboardMap
                  isFullScreen={isFullScreen}
                  onMapFullScreenClick={onMapFullScreenClick}
                />
              </div>
            </div>
          </div>
          <div
            className="c_e h-[600px] overflow-y-auto"
            style={{ backgroundColor: '' }}
          >
            <div className="row-5">
              {isAgencyWithinRadius?.data?.map((v, i) => {
                return (
                  <div className="column-5 border" key={i}>
                    <div className="">
                      <div
                        className="flex-block gap-3"
                        style={{ width: '100%', border: '', padding: '0px' }}
                      >
                        <div
                          className="border"
                          style={{
                            width: '20%',
                            height: '95px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src={
                              v?.agencyLogo ||
                              'https://placehold.co/93x93?font=roboto'
                            }
                            style={{ height: '100%' }}
                            alt=""
                          />
                        </div>
                        <div style={{ width: '100%', padding: '4px' }}>
                          <div>
                            <div className="text-textcolor2 font-medium text-[15px]">
                              {v.agencyName}
                            </div>
                          </div>
                          <div
                            className="flex-block"
                            style={{ marginTop: '1%' }}
                          >
                            <div>
                              <img src={star} alt="" />
                            </div>
                            <div
                              className="p_c font-medium text-[12px]"
                              style={{ marginLeft: '5px', marginTop: '-3px' }}
                            >
                              {v?.rate}
                            </div>
                          </div>
                          <div className="" style={{ marginTop: '1%' }}>
                            <div className=" text-textColor font-medium text-[12px]">
                              {v?.agencyNoOfStaff} no of staff
                            </div>
                          </div>
                          <div
                            className="flex-block "
                            style={{
                              justifyContent: 'space-between',
                              marginTop: '1%',
                            }}
                          >
                            <div className="flex p_c">
                              {' '}
                              <div>
                                <img src={location} alt="" />
                              </div>{' '}
                              <div
                                className="font-normal text-[12px] text-[#A3A9B6]"
                                style={{ marginLeft: '5px' }}
                              >
                                {v?.agencyAddress}
                              </div>{' '}
                            </div>
                            <div className="p_c flex-block ">
                              {' '}
                              <div>
                                {' '}
                                <img src={call} alt="" />
                              </div>{' '}
                              <div
                                className="font-normal text-[14px] text-textColorGreen"
                                style={{
                                  textDecorationLine: 'underline',
                                }}
                              >
                                {' '}
                                {v?.phone}
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
    </>
  )
}
export default DashboardEnd
