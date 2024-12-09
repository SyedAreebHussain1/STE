import React from 'react'

const UserInfoField = ({ title, value, img }) => {
  return img ? (
    <div className="flex gap-2">
      <div className="border border-[#C2C6CE] w-[50px] h-[42px] overflow-hidden flex justify-center items-center">
        <img src={img} alt="" className="max-w-full object-contain" />
      </div>
      <UserInfoField title={title} value={value} />
    </div>
  ) : (
    <div>
      <span className="text-[#667085] text-xs font-medium">{title}</span>
      <h4 className="text-[#1F2228]">{value}</h4>
    </div>
  )
}

export default UserInfoField
