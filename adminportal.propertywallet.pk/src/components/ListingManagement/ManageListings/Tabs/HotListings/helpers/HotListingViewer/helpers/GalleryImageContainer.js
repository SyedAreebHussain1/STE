import React from 'react'
import ListingImage from '../../../../../../../assest/img/listing-image.png'

const GalleryImageContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full overflow-hidden h-[230px] rounded-[9px]">
        <img src={ListingImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="w-[79.23px] h-[79.23px] overflow-hidden rounded-[9px]">
          <img
            src={ListingImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[79.23px] h-[79.23px] overflow-hidden rounded-[9px]">
          <img
            src={ListingImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[79.23px] h-[79.23px] overflow-hidden rounded-[9px]">
          <img
            src={ListingImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[79.23px] h-[79.23px] overflow-hidden rounded-[9px]">
          <img
            src={ListingImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default GalleryImageContainer
