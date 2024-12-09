import React, { useRef } from 'react'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
import { Carousel } from 'antd'

const ImageSlider = ({ data }) => {
  const sliderRef = useRef()

  function next() {
    sliderRef.current.next()
  }
  function prev() {
    sliderRef.current.prev()
  }
  return (
    <div className="relative">
      <Carousel ref={sliderRef} autoplay slidesToShow={3} infinite>
        {data?.ticketDocs?.map((item, i) => {
          return (
            <div>
              <img
                src={item?.url}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </div>
          )
        })}
      </Carousel>
      <div className="absolute top-[-45px] right-0 flex gap-3">
        <button className="mt-2">
          <LeftCircleFilled className="text-[30px]" onClick={prev} />
        </button>
        <button className="mt-2">
          <RightCircleFilled className="text-[30px]" onClick={next} />
        </button>
      </div>
    </div>
  )
}

export default ImageSlider
