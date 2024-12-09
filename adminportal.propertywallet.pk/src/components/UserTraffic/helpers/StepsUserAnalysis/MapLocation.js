import React from 'react'
import mapImg from '../../../assest/img/map-img.png'
import ProgressRating from './ProgressRating'
import Map from './Map'

const MapLocation = () => {
  return (
    <>
      <div className="flex justify-between">
        {/* <div className="w-[70%] md:w-[100%] sm:w-[100%]">
          <img src={mapImg} alt="" />
        </div> */}
        <Map />
        <div>
          <ProgressRating />
        </div>
      </div>
    </>
  )
}

export default MapLocation
