import React, { useEffect, useState } from 'react'
import img1 from '../../components/assest/img/Dashboard1.png'
import { useNavigate } from 'react-router-dom'
import icon_lock from '../../components/assest/icon/lock.png'
import icon_mail from '../../components/assest/icon/mail.png'
import { useDispatch, useSelector } from 'react-redux'
import '../../components/assest/css/login.css'
import { loginApi } from '../../redux/api/Auth'

import { getDeviceToken } from '../../config/firebaseConfig'
import { Button } from 'antd'
import { validatingAuthFields } from '../../utils/utils'

const Login = () => {
  const navigate = useNavigate()

  const auth = useSelector((state) => state.auth)

  const [body, setBody] = useState({
    email: '',
    password: '',
    deviceToken: '',
  })
  const [error, setError] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    getDeviceToken()
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          setBody((prev) => {
            return {
              ...prev,
              deviceToken: currentToken,
            }
          })
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
      })
  }, [])

  const onFinish = (e) => {
    e.preventDefault()
    // const errorsFound = validatingAuthFields(body, setError);
    // if (errorsFound) return;
    const newBody = {
      email: body.email,
      password: body.password,
    }
    if (body.deviceToken !== '') {
      newBody.deviceToken = body.deviceToken
    }
    loginApi(dispatch, newBody, navigate)
  }
  return (
    <div
      className="flex-block"
      style={{
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // ,border:"2px solid red"
      }}
    >
      <div className="login-colum-one ">
        <form
          style={{
            maxWidth: '500px',
            margin: 'auto',
            marginTop: '8%',
            padding: '10px',
          }}
          // onSubmit={onFinish}
        >
          <div>
            <div style={{}} className=" font-semibold text-[1.8rem] ">
              Effortlessly Management Your Properties with Our Real Estate
              Management System Portal.
            </div>
          </div>
          <div style={{ marginTop: '7%' }}>
            <div className=" font-medium text-[24px]">Let's Get Started</div>
            <div className="font-medium text-[1rem] text-[#3D4350]">
              Welcome back please enter your credentials.
            </div>
          </div>
          <div style={{ marginTop: '7%' }}>
            <div className="mb-4">
              <div className="font-normal text-[14px] text-[#3D4350]">
                Email address
              </div>
              <div
                className="input-container relative"
                // style={
                //   failure
                //     ? { border: "1px solid red" }
                //     : { border: "1px solid #D0D5DD" }
                // }
              >
                <div className="icon" style={{ marginTop: '' }}>
                  {/* <BiEnvelope color="black" size={23} /> */}
                  <img src={icon_lock} alt="" />
                </div>
                <input
                  value={body.email}
                  onChange={(e) =>
                    setBody({
                      ...body,
                      email: e.target.value,
                    })
                  }
                  style={{ border: '' }}
                  className="input-field"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="off"
                  required
                />
              </div>
              {error.email ? (
                <small className="text-red-600">{error.email}</small>
              ) : (
                ''
              )}
            </div>
            <div className="mb-4">
              <div className="font-normal text-[14px] text-[#3D4350]">
                Password
              </div>
              <div
                className="input-container"
                // style={
                //   failure
                //     ? { border: "1px solid red" }
                //     : { border: "1px solid #D0D5DD" }
                // }
              >
                <div className="icon" style={{ marginTop: '' }}>
                  {/* <AiOutlineLock color="black" size={23} /> */}
                  <img src={icon_mail} alt="" />
                </div>

                <input
                  value={body.password}
                  onChange={(e) =>
                    setBody({
                      ...body,
                      password: e.target.value,
                    })
                  }
                  className="input-field"
                  type="password"
                  placeholder="Password"
                  name="psw"
                  autoComplete="off"
                  required
                />
              </div>
              {error.password ? (
                <small className="text-red-600">{error.password}</small>
              ) : (
                ''
              )}
            </div>
          </div>
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            // value={body.remember}
          />
          <label
            className="font-normal text-[14px] text-[#000000]"
            htmlFor="vehicle1"
          >
            &nbsp; Remember me
          </label>
          <div className="btn-signin-div" style={{ width: '100%' }}>
            {/* <div style={{ fontWeight: "800", color: "green" }}>{body.email !== '' && body.password !== '' && body.remember !== '' ? failure : success}</div> */}
            {/* <div style={{ fontWeight: "bold", color: "green" }}>{success}</div>
            <div style={{ fontWeight: "bold", color: "red" }}>{failure}</div> */}
            <Button
              onClick={onFinish}
              loading={auth.loading && auth.loading}
              //  disabled={body.email !== '' && body.password !== '' ? false : true}
              className="width-80 btn-primary btn-signin font-semibold text-[#FFFFFF] text-[18px] h-[60px]"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
      <div
        className="login-colum-two"
        style={{ display: 'flex', justifyContent: 'end' }}
      >
        <img src={img1} style={{ width: '100%', border: '' }} alt="" />
      </div>
    </div>
  )
}
export default Login
