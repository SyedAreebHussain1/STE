import React from 'react'
import UserTraffic from '../../components/UserTraffic/UserTraffic'
import UserTrafficHead from '../../components/UserTraffic/helpers/StepsUserAnalysis/UserTrafficHead'

const UserTrafficPage = () => {
  return (
    <>
      <div className="pt-5 pl-6  p-[16px]">
        <UserTrafficHead />
        <UserTraffic />
      </div>
    </>
  )
}

export default UserTrafficPage
