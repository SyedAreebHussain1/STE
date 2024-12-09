import React, { useState } from 'react'
import { Slider } from 'antd'

const SilderRange = () => {
  const [counter, setCounter] = useState([0, 2000000])
  return (
    <>
      <div className="mb-[35px]">
        <div className="mt-[15px] mb-[10px] text-[18px] text-[#060606] font-medium">
          Price Range
        </div>
        <Slider
          onChange={(e) => setCounter(e)}
          range
          // defaultValue={[0, 100]}
          trackStyle={{ background: '#27A3A3' }}
          railStyle={{}}
          handleStyle={{}}
          value={counter}
          max={200000}
          min={0}
        />
        <div className=" flex justify-between text-[#000000] font-medium text-[1rem]">
          <div>
            Rs{' '}
            {String(counter[0]).replace(
              /(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,
              '$1,'
            )}
          </div>
          <div>
            Rs{' '}
            {String(counter[1]).replace(
              /(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,
              '$1,'
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SilderRange
