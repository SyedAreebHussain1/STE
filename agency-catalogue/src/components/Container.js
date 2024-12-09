import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[1100px] w-full m-auto h-full px-4'>{children}</div>
  )
}

export default Container