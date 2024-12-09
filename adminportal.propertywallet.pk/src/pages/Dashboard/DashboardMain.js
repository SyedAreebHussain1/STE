import React, { useEffect } from 'react'

import { Layout } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

// screen
import Navbar from '../../components/Navbars/Navbar'
import { getRoutesApi } from '../../redux/api/GetRoutesApi'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../components/Sidebar/Sidebar'

const { Content } = Layout

const DashboardMain = () => {
  const navigate = useNavigate()
  const getRoutes = useSelector((state) => state.getRoutes)
  const getMenuEvent = (route) => {
    for (let i = 0; i < getRoutes?.data?.routes?.length; i++) {
      if (route.key === getRoutes?.data?.routes[i]?.key) {
        navigate(getRoutes?.data?.routes[i]?.value)
      }
    }
  }
  const dispatch = useDispatch()
  useEffect(() => {
    getRoutesApi(dispatch)
  }, [dispatch])

  return (
    <Layout
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
      }}
    >
      <Sidebar getMenuEvent={getMenuEvent} getRoutes={getRoutes} />
      <Layout
        style={{
          background: '#ffffff',
          border: '1px solid rgba(102, 112, 133, 0.09)',
        }}
        className="site-layout"
      >
        <div style={{ border: '1px solid rgba(102, 112, 133, 0.09)' }}>
          <Navbar />
        </div>
        <Content>
          <Routes>
            {getRoutes?.data?.routes?.map((route, i) => (
              <Route
                key={`${route.value}i`}
                path={route.value}
                element={route.component}
              />
            ))}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}
export default DashboardMain
