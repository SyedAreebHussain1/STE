import React from 'react'

const SliderItem = ({ children, width, className, height }) => {
  return (
    <div className={`flex-shrink-0 cursor-grab ${className}`} style={{ width: width || '25%', height: height || 'auto' }}>
        {children}
    </div>
  )
}

export default SliderItem