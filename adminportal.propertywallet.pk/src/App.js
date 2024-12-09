import { Route, Routes, Navigate } from 'react-router-dom'
import DashboardMain from './pages/Dashboard/DashboardMain'
import Login from './pages/Login/Login'
import axios from 'axios'
import React, { useLayoutEffect } from 'react'
import { getFromStorage } from './utils/storage'
import { loginFailure, loginSuccess } from './redux/slices/Auth/LoginSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)

  axios.defaults.baseURL = process.env.REACT_APP_API_URL
  // axios.defaults.baseURL = 'http://192.168.18.139:3000/v1/'
  // axios.defaults.baseURL = 'http://192.168.18.22:3000/v1/'
  // axios.defaults.baseURL = 'http://192.168.18.253:3000/v1/'
  // axios.defaults.baseURL = 'https://stagingbackend.propertywallet.pk/V1/'



  // env
//   REACT_APP_FIREBASE_API_KEY=AIzaSyBF7ydd_p24Xdrz3IdPFIEBxaMilgDAzSM
// REACT_APP_FIREBASE_AUTH_DOMAIN=property-wallet-c9d8e.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=property-wallet-c9d8e
// REACT_APP_FIREBASE_STORAGE_BUCKET=property-wallet-c9d8e.appspot.com
// REACT_APP_FIREBASE_SENDER_ID=455326560114
// REACT_APP_FIREBASE_APP_ID=1:455326560114:web:563705826a2f484de8f7eb
// REACT_APP_FIREBASE_MESSENGER_ID=G-SZGBRREKX7
// REACT_APP_GOOGLE_MAP_API_KEY=AIzaSyCDopm4vX7TGZNSSNb3wvfABABZRcjkS3M
// REACT_APP_API_URL=https://developmentbackend.propertywallet.pk/v1/
  useLayoutEffect(() => {
    if (getFromStorage('userObject')) {
      dispatch(loginSuccess())
    } else {
      dispatch(loginFailure())
    }
  }, [dispatch])

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={!isAuth ? <Login /> : <Navigate to={'/dashboard'} />}
        />
        <Route
          path="/*"
          element={isAuth ? <DashboardMain /> : <Navigate to={'/'} />}
        />
      </Routes>
    </div>
  )
}
export default App
