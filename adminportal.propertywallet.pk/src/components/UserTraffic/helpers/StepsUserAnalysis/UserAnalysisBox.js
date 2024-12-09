import { Row } from 'antd'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import boxOneIcon from '../../../../components/assest/icon/user-tranfer/box1.png'
import boxTwoIcon from '../../../../components/assest/icon/user-tranfer/box2.png'
// import boxThreeIcon from '../../../../components/assest/icon/user-tranfer/box3.png'
import boxFourIcon from '../../../../components/assest/icon/user-tranfer/box4.png'
import AnalysisBox from '../AnalysisBox'
import {
  getNoOfDownloadsApi,
  getRegisteredUsersApi,
} from '../../../../redux/api/Traffic'

const UserAnalysisBox = () => {
  const dispatch = useDispatch()
  const getRegisteredUsers = useSelector((state) => state.getRegisteredUsers)
  const getNoOfDownloads = useSelector((state) => state.GetNoOfDownloads)

  useEffect(() => {
    // CALL API
    getRegisteredUsersApi(dispatch)
    getNoOfDownloadsApi(dispatch)
  }, [dispatch])
  const arr = [
    {
      img: boxOneIcon,
      text: 'No of Downloads',
      num: getNoOfDownloads?.data
        ? getNoOfDownloads?.data['Install events']
        : 0,
      type: 'new',
      new: '20',
      cardBottom: [
        { name: 'Active Users', value: '455' },
        {
          name: 'Non-Active Users',
          value: '786',
        },
      ],
    },
    {
      img: boxTwoIcon,
      text: 'No of Registered User',
      num: getRegisteredUsers?.data?.data?.data,
      type: 'new',
      new: getRegisteredUsers?.data?.data?.newUsers,
      cardBottom: [
        { name: 'Usage time', value: '10m 5 5s' },
        {
          name: 'Average Interactions',
          value: '746',
        },
      ],
    },
    // {
    //     img: boxThreeIcon,
    //     text: "No of Inventories",
    //     num: "1125",
    //     dc: "Activities",
    //     dtc: "Usage time ",
    //     dtnum: "155"
    // },
    {
      img: boxFourIcon,
      text: 'Downloads by Device',
      num: '2500',
      type: 'new',
      new: '20',
      cardBottom: [
        { name: 'Android', value: '455' },
        {
          name: 'Iphone (IOS)',
          value: '746',
        },
      ],
    },
  ]

  return (
    <div>
      <Row style={{ marginTop: '1%' }} gutter={16}>
        {arr.map((val, i) => {
          return <AnalysisBox val={val} lg={8} key={i} />
        })}
      </Row>
    </div>
  )
}

export default UserAnalysisBox
