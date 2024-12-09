import { Button } from 'antd'
import React from 'react'

type Props = {}

const BookDemo = (props: Props) => {
  return (
    <div className='bg-white rounded-[.5rem] shadow-sm p-6'>
        <h2 className='text-[1.75rem] font-bold mb-[.625rem]'>Book a demo</h2>
        <p className='text-sm mb-[1rem]'>Need help? Let our Jibble expert show you around.</p>
        <Button className='text-sm font-bold bg-primary text-white h-[42px]'>Book an online session</Button>
    </div>
  )
}

export default BookDemo