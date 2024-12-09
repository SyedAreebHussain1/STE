import React, { useEffect } from 'react'

import DashboardHead from './helpers/DashboardHead'
import DashboardEnd from './helpers/DashboardEnd'
// import './dashboard.css'
import '../../components/assest/css/dashboard.css'
import { useDispatch } from 'react-redux'
import { clearisAgencyWithinRadius } from '../../redux/slices/Dashboard/isAgencyWithinRadiusSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(clearisAgencyWithinRadius())
    }
  }, [])
  return (
    <>
      <div style={{ marginTop: '' }} className="pl-0 md:pl-5 pt-5">
        <DashboardHead />
        <DashboardEnd />
      </div>
    </>
  )
}
export default Dashboard
