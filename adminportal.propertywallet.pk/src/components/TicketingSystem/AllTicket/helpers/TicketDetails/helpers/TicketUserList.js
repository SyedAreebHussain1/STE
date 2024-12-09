import React from 'react'
import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import UserShowCase from './UserShowCase'
import { nanoid } from 'nanoid'

const TicketUserList = ({ dataGet }) => {
  function generateUsersArray(element) {
    const arr = []
    arr.push({
      children: (
        <UserShowCase
          name={element?.assignUser?.fullName}
          phone={element?.assignUser?.phone}
          department={element?.assignUser?.department?.title}
        />
      ),
    })
    arr.push({
      children: (
        <UserShowCase
          name={element?.customerSupportUser?.fullName}
          phone={element?.customerSupportUser?.phone}
          department={element?.customerSupportUser?.department?.title}
        />
      ),
      // dot: <ClockCircleOutlined className="timeline-clock-icon" />,
      // color: 'red',
    })
    return arr
  }
  return (
    <div style={{ backgroundColor: 'white', padding: '15px' }}>
      <h2 className="mb-10">Ticket logs</h2>
      {dataGet?.map((item, i) => {
        return <Timeline key={nanoid()} items={generateUsersArray(item)} />
      })}
    </div>
  )
}

export default TicketUserList
