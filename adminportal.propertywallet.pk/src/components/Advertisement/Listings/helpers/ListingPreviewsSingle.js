import React from 'react'
import FireImg from '../../../assest/icon/fire-icon.png'
import LocationIcon from '../../../assest/icon/location-1.png'

const ListingPreviewsSingle = ({ style, item }) => {
  return (
    <div
      style={{
        backgroundImage:
          item?.propertyWalletProjectPhoto?.length > 0
            ? `url(${item?.propertyWalletProjectPhoto[0]?.photo})`
            : item?.propertyWalletProductPhoto?.length > 0
            ? `url(${item?.propertyWalletProductPhoto[0]?.photo})`
            : '',
        position: 'relative',
        backgroundSize: 'cover',
        ...style,
      }}
    >
      <div
        style={{
          background:
            'linear-gradient(180.07deg, rgba(0, 0, 0, 0) 28.39%, #000000 99.94%)',
        }}
        className="w-full h-full absolute"
      />
      <div className="p-2  rounded-[2px] relative">
        {/* <img
          src={item?.propertyWalletProjectPhoto[0]?.photo}
          alt=""
          className="absolute h-full w-full left-0 top-0"
        /> */}
        <div className="flex justify-between items-center pb-[70px]">
          <div className="p-1 bg-[#4D5DEB] rounded-[14px] h-[12px] text-[4px] text-white">
            {/* {item?.commisson}K Commission */}
            20K Commission
          </div>
          <div>
            <img src={FireImg} alt="" />
          </div>
        </div>
        <div className="mb-[7px] flex flex-col">
          {/* <span className="text-white font-bold text-[10px]">
            PKR {item?.pkr}
            PKR 80M
          </span> */}
          <span className="text-[6px] text-[#fff] leading-[8px]">
            {item?.projectName || item?.title}
            {/* Stunning 3BR/2BA condo Apartment */}
          </span>
        </div>
        <div className="leading-[8px]">
          <span className="text-[6px] text-white">{item?.feature}</span>
          <div className="text-[6px] flex items-center gap-[1px]">
            <div>
              <img src={LocationIcon} alt="" />
            </div>
            <span className="text-[4px] text-[#444B54] font-light">
              {item?.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingPreviewsSingle
