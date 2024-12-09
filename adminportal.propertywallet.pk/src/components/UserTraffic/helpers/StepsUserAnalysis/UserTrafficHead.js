import React from 'react'
import { CloudDownloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
// import cloud from '../../../../components/assest/icon/cloud.png'

const UserTrafficHead = () => {
  return (
    <div className="flex-block" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="font-semibold text-[18.75px] text-[#292D35]">
          Summary
        </div>
        <div className="font-medium text-[15px] text-[#667085]">
          Results for all User Traffic for each Matrix
        </div>
      </div>
      <div className="mt-[3%]">
        <Button icon={<CloudDownloadOutlined />} className=" text-[#3D4350]">
          Export
        </Button>
      </div>
    </div>
  )
}

export default UserTrafficHead
