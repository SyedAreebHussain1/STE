import React from 'react'

const UserShowCase = ({ name, phone, department }) => {
  return (
    <div className="flex items-center gap-2 relative top-[-12px]">
      <div
        className="border !rounded-[50%] border-white w-[35px] h-[35px] flex justify-center items-center"
        style={{
          position: 'relative',
        }}
      >
        <span className="">
          {name?.split(' ')?.length > 1
            ? `${name?.split(' ')[0][0]?.toUpperCase()} ${
                name?.split(' ')[1][0]
                  ? name?.split(' ')[1][0]?.toUpperCase()
                  : ''
              }`
            : name?.split(' ')[0][0]?.toUpperCase()}
        </span>
      </div>
      <div className="flex flex-col">
        <span>{name}</span>
        <span>
          {phone} ({department})
        </span>
      </div>
    </div>
  )
}

export default UserShowCase
