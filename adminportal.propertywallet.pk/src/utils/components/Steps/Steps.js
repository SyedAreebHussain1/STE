import React, { useEffect, useState, Fragment } from 'react'
import { isFunction } from '../../utils'

const Steps = ({ items, current, prevCurrent }) => {
  const [steps, setSteps] = useState(items)

  useEffect(() => {
    const changeActiveStep = steps.map((step, i) => {
      if (i === current) {
        return {
          ...step,
          status: 'active',
        }
      } else if (i > current) {
        return {
          ...step,
          status: 'pending',
        }
      } else if (i < current) {
        return {
          ...step,
          status: 'completed',
        }
      }
      return step
    })
    setSteps(changeActiveStep)
  }, [current])

  return (
    <>
      <div className="flex items-center gap-[12px] border border-[#E0E2E7] p-[18px] !rounded-full w-fit">
        {steps.map((item, i) => (
          <Fragment key={`${item.label}${i}`}>
            {i !== 0 ? <div className="w-[80px] h-[1px] bg-[#667085] " /> : ''}
            <div className="flex items-center gap-[8px] flex-shrink-0">
              {item.status === 'active' ? (
                <div className="bg-[#fff] border-2 border-[#79C7C7] w-[16px] h-[16px] rounded-full relative">
                  <div className="w-[9px] h-[9px] bg-[#27A3A3] rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
                </div>
              ) : item.status === 'pending' ? (
                <div className="bg-transparent border-2 border-[#A3A9B6] w-[16px] h-[16px] rounded-full relative" />
              ) : (
                <div className="bg-[#27A3A3] border-2 border-[#27A3A3] w-[16px] h-[16px] rounded-full relative" />
              )}

              <span
                style={{
                  color:
                    item.status === 'active'
                      ? '#667085'
                      : item.status === 'pending'
                      ? '#A3A9B6'
                      : '#3D4350',
                }}
                className="text-[12px]"
              >
                {item.label}
              </span>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="py-[35px]">
        {steps.map((step, i) => (
          <div key={i} style={{ display: current === i ? 'block' : 'none' }}>
            {isFunction(step.component)
              ? step.component(current, prevCurrent)
              : step.component}
          </div>
        ))}
      </div>
    </>
  )
}

export default Steps
