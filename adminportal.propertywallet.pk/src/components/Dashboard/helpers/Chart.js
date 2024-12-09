import React, { useState, useEffect } from 'react'
import { Column } from '@ant-design/plots'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersInfoMonthlyApi } from '../../../redux/api/Dashboard'
import { getMonthName } from '../../../utils/utils'

export const Chart = ({ yearCustomerAppCount }) => {
  const [body, setBody] = useState({
    verified: true,
  })
  const [tempState, setTempState] = useState([])

  const dispatch = useDispatch()
  const usersInfoMonthly = useSelector((state) => state.usersInfoMonthly)

  useEffect(() => {
    getUsersInfoMonthlyApi(dispatch, body)
  }, [dispatch])

  useEffect(() => {
    let tempArr = []
    let i = 0
    let yearCheck
    let monthCheck
    let arr = [
      {
        year: yearCustomerAppCount,
        monthName: 'Jan',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Feb',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Mar',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Apr',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'May',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Jun',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Jul',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Aug',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Sept',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Oct',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Nov',
        count: 0,
        value: 0,
        type: 'Verified',
      },
      {
        year: yearCustomerAppCount,
        monthName: 'Dec',
        count: 0,
        value: 0,
        type: 'Verified',
      },
    ]
    while (i < usersInfoMonthly?.data?.arr?.length) {
      yearCheck = usersInfoMonthly?.data?.arr[i]?.m1?.split('-')[0]
      monthCheck = usersInfoMonthly?.data?.arr[i]?.m1?.split('-')[1]
      if (yearCheck == yearCustomerAppCount) {
        arr.splice(
          monthCheck - 1,
          1,
          {
            year: yearCheck.toString(),
            // month: +monthCheck,
            monthName: getMonthName(+monthCheck),
            count: +usersInfoMonthly?.data?.arr[i]?.verified,
            value: +usersInfoMonthly?.data?.arr[i]?.verified,
            type: 'Verified',
          },
          {
            year: yearCheck.toString(),
            // month: +monthCheck,
            monthName: getMonthName(+monthCheck),
            count: +usersInfoMonthly?.data?.arr[i]?.unVerified,
            value: +usersInfoMonthly?.data?.arr[i]?.unVerified,
            type: 'UnVerified',
          }
        )
        i++
      } else {
        i++
      }
    }
    arr.map((item) => {
      tempArr.push(item)
    })
    setTempState(tempArr)
  }, [usersInfoMonthly, yearCustomerAppCount])
  const config = {
    data: tempState,
    isStack: true,
    xField: 'monthName',
    yField: 'value',
    seriesField: 'type',
    color: ['#27a3a373', '#27A3A3'],
    columnStyle: ({ type }) => {
      if (type === 'Verified') {
        return {
          radius: [20, 20, 0, 0],
        }
      }
    },
  }
  return <Column {...config} />
}
