import { Row } from 'antd'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import boxOneIcon from '../../../../components/assest/icon/user-tranfer/box5.png'
import boxTwoIcon from '../../../../components/assest/icon/user-tranfer/box6.png'
// import boxThreeIcon from '../../../../components/assest/icon/user-tranfer/box3.png'
import boxFourIcon from '../../../../components/assest/icon/user-tranfer/box7.png'
import AnalysisBox from '../AnalysisBox'
import { allAgenciesCountApi } from '../../../../redux/api/Dashboard'
import { getNoOfRegisteredStaffApi } from '../../../../redux/api/Traffic'

const AgencyAnalysis = () => {
  const dispatch = useDispatch()
  const agenciesCount = useSelector((state) => state.agenciesCount)
  const getNoOfRegisteredStaff = useSelector(
    (state) => state.getNoOfRegisteredStaff
  )

  useEffect(() => {
    // CALL API
    allAgenciesCountApi(dispatch)
    getNoOfRegisteredStaffApi(dispatch)
  }, [dispatch])

  const arr = [
    {
      img: boxFourIcon,
      text: 'Agency On-Boarding',
      num: agenciesCount?.data?.data?.AllAgency,
      type: 'new',
      new: agenciesCount?.data?.data?.last24hours?.data?.AllAgency,
      cardBottom: [
        { name: 'Karachi', value: '455' },
        {
          name: 'Other Cities',
          value: '746',
        },
      ],
    },
    {
      img: boxTwoIcon,
      text: 'No of Staff',
      num: getNoOfRegisteredStaff?.data?.data?.userCount,
      dc: 'Usage time  ',
      dtc: 'Average Interactions',
      dtnum: '10m 5 5s',
      type: 'new',
      new: getNoOfRegisteredStaff?.data?.data?.last24hourCount,
      cardBottom: [
        { name: 'Managers', value: '10m 5 5s' },
        {
          name: 'Staff',
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
      img: boxOneIcon,
      text: 'No of Agency Inventories',
      num: '2500',
      dc: 'Android',
      dtc: 'Iphone (IOS)',
      dtnum: '455',
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
          return (
            <AnalysisBox
              loading={
                getNoOfRegisteredStaff.loading && getNoOfRegisteredStaff.loading
              }
              val={val}
              lg={8}
              key={i}
            />
          )
        })}
      </Row>
    </div>
  )
}

export default AgencyAnalysis
