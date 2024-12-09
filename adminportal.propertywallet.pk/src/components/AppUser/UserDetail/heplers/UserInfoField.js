import { CheckCircleOutlined } from '@ant-design/icons'
import React from 'react'

const UserInfoField = ({
  title,
  value,
  img,
  handleCopy,
  textCopyIcon,
  copied,
  width,
}) => {
  return img ? (
    <div className="flex gap-2 w-[100%]">
      <div
        className="border border-[#C2C6CE] w-[50px] h-[42px] overflow-hidden flex justify-center items-center"
        style={{ width: '20%' }}
      >
        <img src={img} alt="" className="max-w-full object-contain" />
      </div>
      <UserInfoField title={title} value={value} width={'80%'} />
    </div>
  ) : (
    <div style={{ width: width || '100%' }}>
      <span className="text-[#667085] text-xs font-medium">{title}</span>
      <div className="flex gap-1 w-[100%] break-words">
        <h4 className="text-[#1F2228] w-[100%] ">{value}</h4>

        {textCopyIcon ? (
          <span className="cursor-pointer" onClick={() => handleCopy(value)}>
            {' '}
            {copied ? (
              <div className="mt-[]">
                {' '}
                <CheckCircleOutlined />
              </div>
            ) : (
              <img src={textCopyIcon} alt="" className="mt-[]" />
            )}
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default UserInfoField
